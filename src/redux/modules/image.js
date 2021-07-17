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

// ACTION CREATER
const uploadImage = (imgUrl) => ({ type: UPLOAD_IMAGE, imgUrl });
const setPreview = (preview) => ({ type: SET_PREVIEW, preview });

// INITIAL STATE
const initialState = {
  imageUrl: [],
  preview: [],
};

// MIDDLEWARE
const uploadImageDB = (image, callNext) => {
  return function (dispatch) {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'tumblr-image',
        Key: image.name,
        Body: image,
      },
    });

    const promise = upload.promise();

    promise
      .then((data) => {
        dispatch(uploadImage(data.Location));
      })
      .then((res) => {
        callNext();
      })
      .catch((error) => {
        console.error(error);
        return alert('오류가 발생했습니다: ', error.message);
      });
  };
};

// REDUCER
function image(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return { ...state, imageUrl: action.imgUrl };

    case SET_PREVIEW:
      return { ...state, preview: [...state.preview, action.preview] };

    default:
      return state;
  }
}

export default image;

export const imgActions = {
  uploadImage,
  setPreview,
  uploadImageDB,
};
