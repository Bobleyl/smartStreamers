import React, { Component } from 'react';
import Data from '../data.json';
import {List, ListItem, ListItemContent, ListItemAction, Checkbox} from 'react-mdl';

class Selection extends Component {
    
    createList = () => {
        let list = []
        for(var i = 0; i < Data.length; i++){
            let children = []
            children.push(<ListItemContent><h4>{Data[i].title}</h4><ListItemAction><Checkbox/></ListItemAction></ListItemContent>)
            list.push(<tr>{children}</tr>)
        }
        return list
    }

    render(){
            return(
                <List style={{width: '300px'}}>
                    {this.createList()}
                </List>
            )}
}

export default Selection;