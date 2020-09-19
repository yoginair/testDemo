import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {API_BASE_ADDRESS} from '../utils/constants';
import Header from '../Component/Header';

export default class ImageLists extends Component {
  render() {
    const {params} = this.props.navigation.state;
    return (
      <SafeAreaView>
        <View style={stylesRecipeListItem.mainContainer}>
          <Header props={this.props} />
          {!!(params && params.listItemData) && (
            <View>
              <ImageBackground
                imageStyle={{borderRadius: 10}}
                source={{
                  uri: `${API_BASE_ADDRESS}/400/600?image=${params.listItemData.id}`,
                }}
                style={[stylesRecipeListItem.imageContainer]}
              />
              <Text style={stylesRecipeListItem.textName}>
                {params.listItemData.author.toUpperCase()}
              </Text>
              <Text style={stylesRecipeListItem.textTitle}>
                {params.listItemData.filename}
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const stylesRecipeListItem = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '80%',
    height: '60%',
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
  textName: {
    marginVertical: 15,
    fontSize: 30,
    alignSelf: 'center',
  },
});
