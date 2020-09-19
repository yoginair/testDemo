import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {appColor} from '../utils/constants';

export default class Header extends React.Component {
  render() {
    const {props, isMain} = this.props;
    const {state} = props.navigation;

    return (
      <View
        style={[
          stylesHeader.mainContainer,
          !isMain && {
            backgroundColor: 'white',
            height: 60,
            justifyContent: 'center',
          },
        ]}>
        <View
          style={[
            stylesHeader.titleContainer,
            isMain && {justifyContent: 'flex-end'},
          ]}>
          {!isMain && (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
              onPress={() => props.navigation.goBack()}>
              <Image
                source={require('../assets/images/arrow/icons-arrow-left.png')}
              />
              <Text>{state && state.routeName}</Text>
            </TouchableOpacity>
          )}
        </View>
        {isMain && (
          <Text style={stylesHeader.text}>{state && state.routeName}</Text>
        )}
      </View>
    );
  }
}

const stylesHeader = StyleSheet.create({
  mainContainer: {
    backgroundColor: appColor,
    justifyContent: 'flex-end',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
  },
});
