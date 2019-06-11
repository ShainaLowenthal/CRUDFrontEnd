import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CampusForm extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      name: 'name',
      address: 'address',
      isHidden: true
    };
  }

  toggleHidden () {
    this.setState({isHidden: !this.state.isHidden})
    this.baseState = this.state;
  }
  
  handleNameChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){ 
    if(this.state.isHidden){
      return (
        <div>
          <button onClick={this.toggleHidden.bind(this)}>Add campus!</button>
        </div>);
    } else {
      return(
        <div>
          <label> Name: </label>
          <input type ="text" value = {this.state.name} onChange ={this.handleNameChange}/>
          <label> Address: </label>
          <input type ="text" value = {this.state.address} onChange ={this.handleNameChange}/>
          <button>Submit </button> 
        </div>);
    }  
  }
};

CampusForm.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  isHidden: PropTypes.bool
};
export default CampusForm;



