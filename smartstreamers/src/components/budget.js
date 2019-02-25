import React, { Component } from 'react';
import {Link} from 'react-router-dom';

var networkRank = [];
var chosenNetworks = [];

var netflix = 0;
var hulu = 0;
var prime = 0;

class Budget extends Component {
    constructor(props) {
    super(props);
    this.state = {value: '',
      data:props.location.query,
      result:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    console.log(this.state);
    this.sortNetwork(this.state.data);
    this.pricing(this.state.value);
    event.preventDefault();
  }
  
  sortNetwork(network){
    for(var i = 0; i < network.length; i++){
        if(network[i] === "Netflix"){
            netflix++;
        }else if(network[i] === "Hulu"){
            hulu++;
        }else if(network[i] === "Amazon Prime"){
            prime++;
        }else{
            network.splice(i, 1);
        }
    }
    if(netflix > hulu){
        if(netflix > prime){
            networkRank[0] = "Netflix";
            if(prime > hulu){
                networkRank[1] = "Amazon Prime";
                networkRank[2] = "Hulu";
            }else{
                networkRank[1] = "Hulu";
                networkRank[2] = "Amazon Prime";
            }
        }else{
            networkRank[0] = "Amazon Prime";
            networkRank[1] = "Netflix";
            networkRank[2] = "Hulu";
        }
    }else{
        if(hulu > prime){
            networkRank[0] = "Hulu";
            if(netflix > prime){
                networkRank[1] = "Netflix";
                networkRank[2] = "Amazon Prime";
            }else{
                networkRank[1] = "Amazon Prime";
                networkRank[2] = "Netflix";
            }
        }else{
            networkRank[0] = "Amazon Prime";
            networkRank[1] = "Hulu";
            networkRank[2] = "Netflix";
        }
    }
    console.log("Netflix: " + netflix);
    console.log("Hulu: " + hulu);
    console.log("Amazon Prime: " + prime);
    console.log(network);
  }
  
  pricing(price){
  	if(price > 26){ //enough money for all networks
  		chosenNetworks = ["Netflix","Hulu","Amazon Prime"];
  	}else if(price < 8){ //too low for any network
  		chosenNetworks = [];
  	}else if(7 < price < 9){ //Select either hulu or Amazon, whichever is higher
          if(networkRank[0] === hulu){
              chosenNetworks = ["Hulu"];
          }else if(networkRank[0] === prime){
              chosenNetworks = ["Amazon Prime"];
          }else if(networkRank[0] === netflix && networkRank[1] === hulu){
              chosenNetworks = ["Hulu"];
          }else{
              chosenNetworks = ["Amazon Prime"];
          }
  	}else if(8 < price < 16){ //Pick which service is the highest
  		chosenNetworks = [networkRank[0]];
  	}else if(15 < price < 17){ //Combine Hulu and Prime:
  		if(hulu + prime  > netflix){ //Get Both Hulu and Prime
  			chosenNetworks = ["Hulu","Amazon Prime"];
  		}else{ //Get Netflix
  			chosenNetworks = ["Netflix"];
  		}
  	}else if(price === 17){
  		if(prime > netflix){
  			if(netflix > hulu){ //get prime and netflix
  				chosenNetworks = ["Amazon Prime","Netflix"];
  			}else{ //get prime and hulu
  				chosenNetworks = ["Amazon Prime","Hulu"];
  			}
  		}else if(prime > hulu){
  			if(hulu > netflix){ //get prime and hulu
  				chosenNetworks = ["Amazon Prime","Hulu"];
  			}else{ //get prime and netflix
  				chosenNetworks = ["Amazon Prime","Netflix"];
  			}
  		}else{ //Get hulu and netflix 
  			chosenNetworks = ["Hulu","Netflix"];
  		}
  	}else if(price > 17){ //return highest to lowest until no more money.
          var total = 0;
          for(var i = 0; i < 3; i++){
              chosenNetworks = networkRank[i];
              if(price > total){
                  break;
              }
              if(networkRank[i] === "Netflix"){
                  total += 9;
              }
              if(networkRank[i] === "Amazon Prime"){
                  total += 8.25;
              }
              if(networkRank[i] === "Hulu"){
                  total += 8;
              }
          }
  	}else{
  		console.log("ERROR: pricing(" + price + ") WENT WRONG!!!");
  	}
  	console.log("ChosenNetworks: " + chosenNetworks);
  }

  render() {
    return (
      <form id="budgetSubmit" onSubmit={this.handleSubmit}>
        <label>
          Budget: $   
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Link to={{pathname: '/results', query:{data: this.state.result}}}><input type="submit" value="Next" /></Link>
      </form>
    );
  }
}

export default Budget;