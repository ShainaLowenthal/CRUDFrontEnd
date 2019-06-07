import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import Student from '../src/Components/Student';

class Campus extends Component{

    constructor(props){
        super(props);
        this.state =
        {
        hasStudent: false,
        url: "http://localhost:3000/Campus"
        
    };
    }
handleRemove = event =>
{
    delete this.state.campus;
}

    render(){
   
        return<body>
            <h1>CAMPUS INFO  </h1>
            <div className ="campus"></div>
            <div>Name: {this.props.name}</div>
           {/* <img src={this.props.image}>Image: </img> */}
           <div>Image: {this.props.image}</div>
            <div>Address: {this.props.address}</div>
            <div> Description: {this.props.description}</div>
            <div>  Students on campus: {!this.props.hasStudent ?
            "This campus does not have any students." :this.props.students}</div>

            <button onClick={this.handleremove}>X</button>
            <button>Edit</button>
            </body>;
            
    
   
    
    }
}
Campus.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    students: PropTypes.objectOf(PropTypes.students),
    hasStudent: PropTypes.bool,
    id: PropTypes.string
}
export default Campus;

