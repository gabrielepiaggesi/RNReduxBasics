import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListView, View } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <ListItem item={library} />;
  }

  render() {
    return (
      <ListView dataSource={this.dataSource} renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
//grazie a connect passo il return di mapStat... come props a LibraryList
//lo state è settato in index caricando il json come mapStateToProps
//in app importando reducers importo lo state e lo carico nello store del provider
