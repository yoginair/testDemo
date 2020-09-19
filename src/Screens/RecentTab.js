import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import ListItemRecipes from '../Component/ListItemImages';
import {connect} from 'react-redux';

class RecentTab extends Component {
  render() {
    const {imageListData, navigation} = this.props;
    return (
      <View style={{backgroundColor: '#f3f3f3'}}>
        <FlatList
          data={imageListData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <ListItemRecipes navigation={navigation} data={item} />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const {imageListData} = state.imageReducer;
  return {imageListData};
};

export default connect(mapStateToProps, {})(RecentTab);
