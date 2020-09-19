import {
  IMAGE_LIST,
  IMAGE_LIST_LOADING,
  IMAGE_LIST_ITEM,
} from '../utils/constants';

const initialState = {
  imageListData: '',
  loading: false,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_LIST:
      return {
        ...state,
        imageListData: action.payload,
      };
    case IMAGE_LIST_ITEM:
      return {
        ...state,
        imageListData: action.payload,
      };
    case IMAGE_LIST_LOADING:
      return {
        ...state,
        imageListData: [],
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
