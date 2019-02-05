import React, { Component } from 'react';
import {DataTable, TableHeader} from 'react-mdl';
import Data from '../data.json';
class Database extends Component {
    render(){
        return(
                <div><DataTable
                    id="dataTable"
                    shadow={0}
                    rows={Data}
                >
                    <TableHeader name="title">Title</TableHeader>
                    <TableHeader numeric name="networks">Network</TableHeader>
                </DataTable></div>
                            )}
                }
                

export default Database;