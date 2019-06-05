import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import Student from '../src/Components/Student';

class Campus extends Component{

    constructor(props){
        super(props);
        this.state =
        {Name: 'name',
        Image: 'image',
        Address: 'address',
        Description: 'description',
        Students: 'students',
        mess: true
    };

    }
    render(){
    if(this.state.mess)
    {
        return<body>
            <h1>CAMPUS INFO</h1>
            <div>  Name: {this.props.name}</div>
           <div>Image: {this.props.image}</div>
            <div>Address: {this.props.address}</div>
            <div> Description: {this.props.description}</div>
            <div>  Students on campus: {this.props.students} onChange = {this.toggleHidden.bind(this)}</div></body>;
    }
    else 
    {
        return<body>
            <h1>CAMPUS INFO</h1>
            <div>  Name: {this.props.name}</div>
           <div>Image: {this.state.image}</div>
            <div>Address: {this.props.address}</div>
            <div> Description: {this.props.description}</div>
            <div>There are no students currently registered to this campus.</div></body>;
    }
    
    }
}
Campus.propTypes = {
    Name: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    Sescription: PropTypes.string.isRequired,
    Students: PropTypes.objectOf(PropTypes.students),
    mess: PropTypes.bool
}
export default Campus;

