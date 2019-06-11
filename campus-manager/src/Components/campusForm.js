import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Campus from './Campus';

class CampusForm extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      address: this.props.address,
      isHidden: true 
    };

    this.baseState = this.state
  }
  addNewStudent = () => {
    this.setState({isHidden: false});
  }
  cancelForm = () => {
    this.setState(this.baseState);
  }

  saveForm = () => {
    this.setState({name: this.state.tempName});
    this.setState({address: this.state.tempAddress});
  }
  
  
  handleNameChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  toggleHidden () {
    this.setState({isHidden: !this.state.isHidden})
    this.baseState = this.state;
  }

  render(){ 
    if(this.state.isHidden){
      return (
        <form>
        <div>
          <button onClick={this.toggleHidden.bind(this)}>Add campus!</button>
        </div>
        </form>);
    } else {
      return(
        <div>
          <label> Name: </label>
          <input type ="text" value = {this.state.tempName} onChange ={this.handleNameChange}/>
          <label> Address: </label>
          <input type ="text" value = {this.state.tempAddress} onChange ={this.handleNameChange}/>
          <button onClick = {this.saveForm}>Submit </button> 
          <button onClick = {this.cancelForm}>Cancel</button>
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



