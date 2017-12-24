import React, { Component } from 'react';
import { UIManager, LayoutAnimation, Text, View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../components';
import * as actions from '../actions';

class ListItem extends Component{

  componentWillMount(){
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate(){
    LayoutAnimation.spring();
  }
  //item is the single library
  renderBio(){
    if(this.props.expanded){
      return(
        <CardSection>
          <Text style={{flex:1}}>{this.props.item.description}</Text>
        </CardSection>
      );
    }
  }

  render(){

    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.item.id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle} >{this.props.item.title}</Text>
          </CardSection>
          {this.renderBio()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  //ownProps are the same props that listitem receive
  const expanded = state.selectedLibraryId === ownProps.item.id;  //if equals is true
  return { expanded };
}


export default connect(mapStateToProps, actions)(ListItem);
//actions trasforma selectLibrary in un creatore di actione inoltre passa a listitem actions come props
//expanded viene passata come props a listitem
