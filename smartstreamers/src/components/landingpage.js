import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <div id="text_div">
                        <h3>Find your ideal streaming service!</h3>
                    </div>
                    <Cell col={12}>
                        <div className="main-div">
                            <div className="height-padding">
                                <a href ="/selection"><button className="button-start">Get Started!</button></a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )}
}

export default Landing;