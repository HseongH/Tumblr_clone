import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:d02afe22-f859-40bb-aedb-0c5dead2f8d1',
  }),
});

// ACTION
const UPLOAD_IMAGE = 'IMAGE';
const SET_PREVIEW = 'SET_PREVIEW';
const DEL_PREVIEW = 'DEL_PREVIEW';
const SET_FILE = 'SET_FILE';
const DEL_FILE = 'DEL_FILE';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

// ACTION CREATER
const uploadImage = (imgUrl) => ({ type: UPLOAD_IMAGE, imgUrl });
const setPreview = (preview) => ({ type: SET_PREVIEW, preview });
const delPreview = (index) => ({ type: DEL_PREVIEW, index });
const setFile = (file) => ({ type: SET_FILE, file });
const delFile = (index) => ({ type: DEL_FILE, index });
const setInitialState = () => ({ type: SET_INITIAL_STATE });

// INITIAL STATE
const initialState = {
  imageUrl: [],
  preview: [],
  file: [],
};

// MIDDLEWARE
const uploadImageDB = (callNext) => {
  return async function (dispatch, getState) {
    const imgList = getState().image.file;
    const promiseArr = imgList.map((img) => {
      if (typeof img !== 'object') return img;

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'tumblr-image',
          Key: img.name,
          Body: img,
        },
      });

      return upload.promise();
    });

    for (let promise of promiseArr) {
      if (typeof promise !== 'object') {
        dispatch(uploadImage(promise));
        continue;
      }

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

// REDUCER
function image(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, imageUrl: [...state.imageUrl, action.imgUrl] };

    case SET_PREVIEW:
      return { ...state, preview: [...state.preview, ...action.preview] };

    case DEL_PREVIEW:
      const previewList = state.preview.filter((img, idx) => action.index !== idx);

      return { ...state, preview: previewList };

    case SET_FILE:
      return { ...state, file: [...state.file, ...action.file] };

    case DEL_FILE:
      const fileList = state.file.filter((img, idx) => action.index !== idx);

      return { ...state, file: fileList };

    case SET_INITIAL_STATE:
      return { imageUrl: [], preview: [], file: [] };

    default:
      return state;
  }
}

export default image;

export const imgActions = {
  uploadImage,
  setPreview,
  delPreview,
  setFile,
  delFile,
  uploadImageDB,
  setInitialState,
};
