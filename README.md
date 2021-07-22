# Tumblr Clone Coding

[사이트 링크 바로가기](http://tumblrclone.shop/) / [시연 영상 보기](https://www.youtube.com/watch?v=HLYTArLgdeY)

## 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [역할 분담](#-역할-분담)
3. [배운점](#-배운점)
4. [아쉬운점](#-아쉬운점)

***

## 프로젝트 개요

텀블러 클론 코딩

***

## 💪 역할 분담

- 홍성훈: 게시글 CRUD, 요런 블로그 어때요, 게시글 반응, 팔로우, 팔로워, 좋아요, 게시글 드롭 다운, 링크 복사, 링크 조회
- 이선민: 로그인, 회원가입, 마이페이지, 유저 프로필 이미지 변경, 검색, 태그만 검색, 팔로워 검색, 알림 메뉴

***

## 🔎 배운점

**홍성훈**

### 중첩된 비동기 처리

- 화면에서 게시글 작성 버튼을 누르면 s3에 이미지를 업로드하고 생성된 이미지 주소와 유저가 작성한 내용을 서버에 보내주는 작업을 하려고 했다.
- 서버에 요청을 보내기 전에 모든 이미지를 다 업로드하는 과정이 선행되어야 하기 때문에 아래와 같이 promise를 이용해 비동기 처리를 하려고 했다. 하지만 비동기 처리 부분이 중첩되어 있어서 그런 건지 내가 생각하는 동작이 수행되지 않고 이미지 업로드 이전에 서버에 게시글 작성 요청을 보내고 이미지를 업로드하는 오류가 발생했다.

```javascript
const uploadImageDB = (callNext) => {
  return function (dispatch, getState) {
    const imgList = getState().image.file;
    
    new Promise((resolve) => {
      imgList.forEach((img) => {
        if (typeof img !== 'object') {
          dispatch(uploadImage(img));
          return;
        }
        
        const upload = new AWS.S3.ManagedUpload({
          params: {
            Bucket: 'tumblr-image',
            Key: img.name,
            Body: img,
          },
        });
        
        const promise = upload.promise();
        
        promise
          .then((data) => {
            dispatch(uploadImage(data.Location));
            console.log('대기');
          })
          .catch((error) => {
            console.error(error);
            return alert('오류가 발생했습니다: ', error.message);
          });
      });
      
      resolve();
    }).then((res) => {
      callNext();
    });
  };
};
```

forEach 문으로 함수를 중첩해 사용하지 않고 for 문을 사용해 아래와 같이 해결했다.

```javascript
const uploadImageDB = (callNext) => {
  return async function (dispatch, getState) {
    const imgList = getState().image.file;

    for (let i = 0; i < imgList.length; i++) {
      const img = imgList[i];

      if (typeof img !== 'object') {
        dispatch(uploadImage(img));
        continue;
      }

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'tumblr-image',
          Key: img.name,
          Body: img,
        },
      });

      const promise = upload.promise();

      await promise
        .then((data) => {
          dispatch(uploadImage(data.Location));
        })
        .catch((error) => {
          console.error(error);
          return alert('오류가 발생했습니다: ', error.message);
        });
    }

    callNext();
  };
};
```

**이선민**

- 리덕스에 대해 이해가 잘 안됐었는데 로그인, 회원가입, 특정 게시물 불러오기 기능을 구현하면서 팀원분께서 자세히 알려주셔서 정말 많은 것을 배웠습니다. 리액트 훅을 사용하면서 어떨 때 써야 하는지 애매했는데 기능 구현을 하면서 전보다는 더 감이 잡힌 것 같습니다.

## 😗 아쉬운점

**홍성훈**

- 한정된 시간안에 결과물을 뽑아내려다 보니 코드가 엉망이다. 더 나은 대안을 찾아 그 방법으로 코드를 작성해야 하는데 그러지 못해 아쉬움이 남는다.
- 프로젝트에 완전히 집중하지 못해 넣지 못한 기능이 너무 많다.

**이선민**

- 리액트를 배운지 얼마 되지 않아 모르는 것이 많은 상태에서 프로젝트를 진행해서 같이 한 팀원분께 피해를 준 것 같아 정말 죄송스러웠습니다. 제가 할 수 있는 선에서 최대한 해보려고 했지만 알고 있는 리액트 지식이 많이 부족한 상태라 팀원분께 도움을 많이 받아서 한 것이 아쉽기도 했지만 덕분에 많이 배울 수 있어서 좋았습니다!
