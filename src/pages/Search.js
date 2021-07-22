// LIBRARY
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import { searchActions } from '../redux/modules/search';

// FUNCTION
import InfinityScroll from '../common/infinityScroll';

// ELEMENTS
import { Text, Grid } from '../elements/index';

// COMPONENTS
import Post from '../components/Post';
import NoInfo from '../components/NoInfo';

const Search = (props) => {
  const keyword = window.location.search.slice(1).split('=')[1];

  const dispatch = useDispatch();

  const postList = useSelector((state) => state.search.list);

  const getMoreSearchResult = () => {
    dispatch(searchActions.searchPostDB(keyword));
  };

  useEffect(() => {
    dispatch(searchActions.searchPostDB(keyword));

    return () => {
      dispatch(searchActions.searchPost([], 0));
    };
  }, []);

  if (!postList.length) {
    return (
      <Grid padding="15px 20px">
        <Text fontSize="23px" color="white">
          {decodeURI(keyword)}에 대한 검색 결과가 없습니다.
        </Text>
      </Grid>
    );
  }

  return (
    <Grid>
      {postList.map((post, idx) => (
        <InfinityScroll
          next={getMoreSearchResult}
          index={idx}
          length={postList.length}
          key={(post.postId + Date.now() + Math.random()).toString(36)}
        >
          <Post post={post} />
        </InfinityScroll>
      ))}
    </Grid>
  );
};

export default Search;
