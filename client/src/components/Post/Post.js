// import react
import React, { Component } from 'react';
import axios from 'axios';
import { Input, TextArea, FormBtn } from '../Form';
// import styles
import './post.css';


class Post extends Component {
    state = {
        name: "",
        title: "",
        description: "",
        email: ""
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            // name: value,
            // email:value,
            // title: value,
            // description: value
            [name]: value
        });
        
    };

    handleForumSubmit = event => {
        event.preventDefault();
        axios.post('/api/newpost', {
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            description: this.state.description
        })
        .then(function(response) {
            console.log(response);
            // this.state.bind({
            //     name: "",
            //     title: "",
            //     description: "",
            //     email: ""                
            // });
        })
        .catch(function (error) {
            console.log(error);
        })
        //console.log(this.state);
    };
    
    render() {
        let isEnabled = this.state.name.length > 0 && this.state.title.length > 0 && this.state.description.length >0
        && this.state.email.length > 0
        return (  
            <div className="form-box">
                <h4>New Post:</h4>
                <form className="form">
                    <Input
                        value={this.state.firstName}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <Input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />    
                    <Input
                        value={this.state.title}
                        name="title"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Title"
                    />
                    <TextArea 
                    value={this.state.description} 
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder='Description'
                    />

                    <FormBtn id="SubmitPost"
                        disabled={!isEnabled}
                        onClick={this.handleForumSubmit}>
                    Submit Post
                    </FormBtn>
                </form>
                
            </div>
        )
    }    
};

// export 
export default Post;