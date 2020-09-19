import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../Component/Header';
import {API_BASE_ADDRESS, metrics} from '../utils/constants';
import Carousel from 'react-native-snap-carousel';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDataRejected, listImages} from '../Actions/getImageListAction';
class HomeTab extends Component {
  componentDidMount = async () => {
    try {
      const imageListPromise = await fetch(`${API_BASE_ADDRESS}/list`);
      const imageData = await imageListPromise.json();
      this.props.listImages(imageData);
    } catch (error) {
      this.props.fetchDataRejected(true);
    }
  };

  saveDataToNavigate = async (item) => {
    const {navigation} = this.props;
    navigation.navigate('ImageList', {listItemData: item});
  };

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => this.saveDataToNavigate(item)}
        style={styles.container}>
        <Image
          resizeMode={'cover'}
          style={{width: '100%', height: '80%'}}
          source={{
            uri: `${API_BASE_ADDRESS}/400/600?image=${item.id}`,
          }}
        />
        <Text style={styles.fontStyle}>{item.author}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {imageListData} = this.props;
    return (
      <View>
        <Header isMain props={this.props} />
        {imageListData && imageListData.length !== 0 ? (
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={imageListData}
            renderItem={this.renderItem}
            sliderWidth={metrics.screenWidth}
            itemWidth={metrics.screenWidth}
          />
        ) : (
          <View>
            <Text style={styles.fontStyle}>{'No Data Found'}</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {imageListData} = state.imageReducer;
  return {imageListData};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      listImages,
      fetchDataRejected,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  fontStyle: {
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
  },
});
