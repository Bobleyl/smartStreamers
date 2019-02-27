import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import data3 from '../data3.json';
var shuffle = require('shuffle-array');
var dataList = [];

function mixit(){
      dataList = data3
      shuffle(dataList)
      return dataList
    }

const styles = {
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
};

const tilesData = mixit()

class Results extends Component {
    constructor(props) {
    super(props);
        this.state = {
            chosen: {
              data: this.chosenNetworks
            },
            img: ''
      };
    }
    
    componentDidMount(){
      console.log("DATA:::" + this.state.chosen)
    }
    
    render(){
        return(
              <div style={styles.root}>
                <GridList
                  cols={3}
                  cellHeight={240}
                  style={styles.gridList}
                >
                  <Subheader>You should purchase:</Subheader>
                  {tilesData.map((tile) => (
                    <GridTile
                      key={tile.img}
                      title={tile.title}
                    >
                      <img src={tile.img} alt="Img not found" />
                    </GridTile>
                  ))}
                </GridList>
              </div>
            )}
}

export default Results;


    
