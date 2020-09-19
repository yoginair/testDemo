import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {API_BASE_ADDRESS, metrics} from '../utils/constants';

class ListItemImages extends Component {
  saveDataToNavigate = async (data) => {
    const {navigation} = this.props;
    navigation.navigate('ImageList', {listItemData: data});
  };

  render() {
    const {data} = this.props;

    return (
      <TouchableOpacity
        onPress={() => this.saveDataToNavigate(data)}
        style={stylesListItem.mainContainer}>
        <ImageBackground
          imageStyle={{borderRadius: 10}}
          source={{
            uri: `${API_BASE_ADDRESS}/400/600?image=${data.id}`,
          }}
          style={[stylesListItem.imageContainer]}>
          <View>
            <Text style={stylesListItem.textName}>
              {data.author.toUpperCase()}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default ListItemImages;

const stylesListItem = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    width: metrics.screenWidth * 0.9,
    height: 150,
    borderRadius: 30,
    padding: 15,
    justifyContent: 'space-between',
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
  },
  textName: {
    color: 'white',
    fontSize: 20,
  },
  textContent: {
    color: 'white',
    fontSize: 16,
  },
});
