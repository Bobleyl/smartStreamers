import React, { Component } from 'react';
import Data from '../data.json';
import {List, ListItemContent, ListItemAction, Checkbox} from 'react-mdl';

class Selection extends Component {
    
    createList = () => {
        let list = []
        for(var i = 0; i < Data.length; i++){
            let children = []
            children.push(<ListItemContent><h4>{Data[i].title}</h4><img style={{width: '180px', height: '95px'}} src={Data[i].img} alt="Title Banner"></img><ListItemAction><Checkbox/></ListItemAction></ListItemContent>)
            list.push(<tr>{children}</tr>)
        }
        return list
    }

    render(){
            return(
                <List className="landing" style={{padding:'50px'}}>
                    {this.createList()}
                </List>
            )}
}

export default Selection;