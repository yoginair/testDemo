import {createStore, combineReducers} from 'redux';
import imageReducer from '../Reducers/ImageReducer';

const rootReducer = combineReducers({
  imageReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
