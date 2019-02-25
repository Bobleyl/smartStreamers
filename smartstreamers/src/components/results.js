import React, { Component } from 'react';
//import {GridList, GridTile} from 'material-ui/GridList';
//import Subheader from 'material-ui/Subheader';

/*const styles = {
    root: {
      padding: 50,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 1000,
      height: 3000,
      overflowY: 'auto',
    },
};*/

class Results extends Component {
    constructor(props) {
    super(props);
        this.state = {
            value: '',
            img: ''
    };
  }
    
    render(){
        return(
                <h1>Results Page</h1>
            )}
}

export default Results;

/*
    <div style={styles.root}>
                <GridList
                  cols={3}
                  cellHeight={240}
                  style={styles.gridList}
                >
                  <Subheader>You should purchase:</Subheader>
                  {this.state.value.map((tile) => ( // says this is undefined
                    <GridTile
                      key={tile.img}
                      title={tile}
                    >
                      <img src={tile.img} alt="Img not found" />
                    </GridTile>
                  ))}
                </GridList>
              </div>
*/