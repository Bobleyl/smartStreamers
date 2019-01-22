import React from 'react';
import Data from '../data.json';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height: 2500,
    overflowY: 'auto',
  },
};

const tilesData = Data

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
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} alt="Img not found" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Selection;