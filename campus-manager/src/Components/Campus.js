import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Campus extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <h1>
        Name: {this.props.name}
        Image: {this.props.image}
        Address: {this.props.address}
        Description: {this.props.description}
      </h1>
    );
  }
};

Campus.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string
};

export default Campus;

