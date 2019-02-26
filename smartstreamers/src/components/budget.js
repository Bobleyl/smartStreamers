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
    this.state = {value: 0,
      data:props.location.query.data,
      result:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit() {
    console.log(this.state);
    this.pricing(this.state.value);
  }
  
  pricing(price){
    var data2 = this.state.data;
  	if(price > 26){ //enough money for all networks
  		chosenNetworks = ["Netflix","Hulu","Amazon Prime"];
  	}else if(price < 8){ //too low for any network
  		chosenNetworks = [];
  	}else if(7 < price < 9){ //Select either hulu or Amazon, whichever is higher
          if(data2[0] === hulu){
              chosenNetworks = ["Hulu"];
          }else if(data2[0] === prime){
              chosenNetworks = ["Amazon Prime"];
          }else if(data2[0] === netflix && data2[1] === hulu){
              chosenNetworks = ["Hulu"];
          }else{
              chosenNetworks = ["Amazon Prime"];
          }
  	}else if(8 < price < 16){ //Pick which service is the highest
  		chosenNetworks = [data2[0]];
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
              chosenNetworks = data2[i];
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
      <div id="budgetForm"><form id="budgetSubmit" onSubmit={this.handleSubmit}>
        <label>
          Budget: $   
          <input id="submissionfield" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Link to={{pathname: '/results', query:{data: this.state.result}}}><input type="submit" value="Next" onClick={this.handleSubmit()}/></Link>
      </form></div>
    );
  }
}

export default Budget;