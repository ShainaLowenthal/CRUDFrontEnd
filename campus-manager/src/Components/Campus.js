import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import Student from '../src/Components/Student';

class Campus extends Component{

    constructor(props){
        super(props);
        this.state =
        {
        hasStudent: false
    };

    }
    render(){
   
        return<body>
            <h1>CAMPUS INFO  </h1>
            <div class ="campus"></div>
            <div>Name: {this.props.name}</div>
           {/* <img src={this.props.image}>Image: </img> */}
           <div>Image: {this.props.image}</div>
            <div>Address: {this.props.address}</div>
            <div> Description: {this.props.description}</div>
            <div>  Students on campus: {!this.props.hasStudent ?
            "This campus does not have any students." :this.props.student}</div>
            </body>;
    
   
    
    }
}
Campus.propTypes = {
    Name: PropTypes.string.isRequired,
    Image: PropTypes.string,
    Address: PropTypes.string.isRequired,
    Sescription: PropTypes.string.isRequired,
    Students: PropTypes.objectOf(PropTypes.students),
    hasStudent: PropTypes.bool
}
export default Campus;

