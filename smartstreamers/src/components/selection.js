import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Data from '../data.json';
import {GridList, GridTile} from 'material-ui/GridList';
import Button from '@material-ui/core/Button';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
var shuffle = require('shuffle-array')
var newData = [];
var networkRank = [];
var tag = false;
  
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
    }
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
            titles:'',
            netflix: 0,
            hulu: 0,
            amazon: 0,
            passVal:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
   handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
   handleSubmit(networks) {
     //tag = true
      if(Array.isArray(networks) === true){
        for(var i = 0; i < networks.length; i++){
          if(networks[i] === "Netflix"){
            this.setState({ netflix:this.state.netflix + 1  })
          } else if(networks[i] === "Hulu"){
            this.setState({ hulu:this.state.hulu + 1  })
          } else if(networks[i] === "Amazon Prime"){
            this.setState({ amazon:this.state.amazon + 1  })
          } else{
            console.log("Bad Network")
          }
        }
      }else{
        if(networks === "Netflix"){
           this.setState({ netflix:this.state.netflix + 1  })
        }else if(networks === "Hulu"){
            this.setState({ hulu:this.state.hulu + 1  })
        } else if(networks === "Amazon Prime"){
            this.setState({ amazon:this.state.amazon + 1  })        
        } else{
            console.log("Bad Network")
        }
      }
      newData = [
        {title:'Netflix', total:this.state.netflix},{ title:'Hulu', total:this.state.hulu},{title:'Amazon Prime', total:this.state.amazon}
        ]
      
      newData.sort(function(a, b){
          if(a.total < b.total) { return 1; }
          if(a.total > b.total) { return -1; }
          return 0;
      })
      networkRank = [newData[0].title, newData[1].title, newData[2].title]
    }
    
    addNetworks(){ //Add Networks to Array based on selected show title: item = title
      console.log("NETWORKRANK::::" + networkRank)
      console.log("Netflix: " + this.state.netflix)
      console.log("Hulu: " + this.state.hulu)
      console.log("Amazon: " + this.state.amazon)
    }
    
    changeColor(){
      if(tag === true){
        return "gold"
      }else{
        return "white"
      }
    }
    
   render(){
        return(
            <div id="needpad">
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
                      actionIcon={<IconButton><StarBorder color={this.changeColor()} onClick={() => this.handleSubmit(tile.networks)}/></IconButton>}
                    >
                      <img src={tile.img} id="tile-img" alt="Img not found" />
                    </GridTile>
                  ))}
                </GridList>
              </div>
              <Link to={{pathname: '/budget', query:{data: networkRank}}} onClick={() => this.addNetworks()}><Button id="button-id" variant="contained" color="primary">
                Next
              </Button></Link>
            </div>
          )}
}


  
  

export default Selection;