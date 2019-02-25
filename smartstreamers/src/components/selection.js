import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Data from '../data.json';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
var shuffle = require('shuffle-array')

var dataStorage = [];

  const buttonBar = {
    buttons: {
      width: 200,
      height: 40,
      padding: 75,
    },
  };
  
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
  
  function mixit(){
    var dataList = Data
    shuffle(dataList)
    return dataList
  }
  
  const tilesData = mixit()

class Selection extends Component {
    constructor(props){
        super(props);
        this.state = {
            titles:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
   handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
   handleSubmit(e) {
      dataStorage.push(e);
      console.log("Titles::  " + dataStorage);
    }
    
   render(){
        return(
              <div style={styles.root}>
                <GridList
                  cols={3}
                  cellHeight={180}
                  style={styles.gridList}
                >
                  <Subheader>Pick a few of your favorites:</Subheader>
                  {tilesData.map((tile) => (
                    <GridTile
                      onChange={this.handleChange}
                      value={this.state.title}
                      key={tile.img}
                      title={tile.title}
                      subtitle={<span>by <b>{tile.networks}</b></span>}
                      actionIcon={<IconButton><StarBorder color="white" onClick={() => this.handleSubmit(tile.networks)}/></IconButton>}
                    >
                      <img src={tile.img} alt="Img not found" />
                    </GridTile>
                  ))}
                </GridList>
                <Link to={{pathname: '/budget', query:{data: dataStorage}}}><button style={buttonBar.buttons}>Testing</button></Link>
              </div>
          )}
}


  
  

export default Selection;