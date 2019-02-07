import React from 'react';
import Data from '../data.json';
import FavoriteData from '../favorites.json';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
var shuffle = require('shuffle-array')

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

function addToFavorites(title){
  console.log("Added: " + title + " to favorites")
  console.log(FavoriteData);
}

const Selection = () => (
  <div style={styles.root}>
    <GridList
      cols={3}
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Pick a few of your favorites:</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.networks}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" onClick={() =>
        addToFavorites(tile.title)
      }/></IconButton>}
        >
          <img src={tile.img} alt="Img not found" />
        </GridTile>
      ))}
    </GridList>
    <a href ="/budget"><button style={buttonBar.buttons}>Testing</button></a>
  </div>
  
);

export default Selection;