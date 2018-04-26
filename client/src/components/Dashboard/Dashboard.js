import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';
import Postresults from '../PostResults';


class Dashboard extends Component {
    
    state = {
        data:[]
    }
    getData() {
        axios.get('/api/dashboard')
        .then(res => {
            //console.log(res);
            this.setState({
                data: res.data
            });
            console.log(this.state.data);
        }).catch(error => {
            console.log(error);
        })
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return(
            <div>
                <h3>Dashboard</h3>
                <Postresults results = {this.state.data} />
            </div>    
        )
    }
}
export default Dashboard;