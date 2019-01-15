import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="main-div">
                            <div className="height-padding"><button className="button-start">Get Started!</button></div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )}
}

export default Landing;