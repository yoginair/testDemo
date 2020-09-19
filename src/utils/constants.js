import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const appColor = '#73c700';

export const API_BASE_ADDRESS = 'https://picsum.photos';

/**Action Type..............................*/
export const IMAGE_LIST = 'IMAGE_LIST';
export const IMAGE_LIST_ITEM = 'IMAGE_LIST_ITEM';
export const IMAGE_LIST_LOADING = 'IMAGE_LIST_LOADING';

export const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
