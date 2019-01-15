import React, { Component } from 'react';
import Data from '../data.json';
import {List, ListItem, ListItemContent, ListItemAction, Checkbox} from 'react-mdl';

class Selection extends Component {
    render(){
        for(var i = 0; i < 10; i++){
            return(
                <List style={{width: '300px'}}>
                  <ListItem>
                    <ListItemContent>
                        <h4>{Data[i].title}</h4><img style={{width: '140px', height: '80px', padding:'10px'}} src={Data[i].img} alt="Title Banner"></img>
                    </ListItemContent>
                    <ListItemAction>
                      <Checkbox />
                    </ListItemAction>
                  </ListItem>
                </List>
            )}
    }
}

export default Selection;