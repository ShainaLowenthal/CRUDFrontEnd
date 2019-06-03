import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';  because not necc
import './App.css';

// class Campus extends Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             name: props.name
//             image: props.image
//             address: props.address
//             description: props.descrition



//         }
//     }


// }
class Campus extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return<h1>
            Name: {this.props.name}
            Image: {this.props.image}
            Address: {this.props.address}
            Description: {this.props.description}
        </h1>;
    }
}
Campus.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
export default Campus;