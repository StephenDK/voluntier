import React, { Component } from 'react';

// import react router dom
import { BrowserRouter, Route } from 'react-router-dom';

// import react-redux to allow both librarys to work together
import { connect } from 'react-redux';

// import all action creators and assign to actions
import * as actions from '../actions';

// import components
import Navbar from './Navbar';
// import Application from './components/Application';
import Post from './Post';
import Dashboard from './Dashboard';
import Landing from './Landing';

// dummie components

// const Dashboard = () => <h2>Dashboard</h2>
// const NewPost = () => <h2>NewPost</h2>
// const Landing = () => <h2>Landing</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className='container'>
                        {/* This header component will display on every page*/}
                        <Navbar />
                        {/* Use the exact key word or exact={true} to keep components from 
                        displaying on the same page */}
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/newpost/" component={Post} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions) (App);





