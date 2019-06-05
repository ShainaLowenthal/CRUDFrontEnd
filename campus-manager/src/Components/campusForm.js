import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import './App.css';

// import Campus from '../src/Components/Campus.js';-->ASKKK-i dont know why it wont let me include this


class CampusForm extends Component{ 
    constructor(props){
        super(props);
        this.state =
            {Name: 'name',
            Address: 'address',
            isHidden: true};
 
    }
    toggleHidden()
    {
        this.setState({isHidden: !this.state.isHidden})
        this.baseState = this.state;
    }
    handleNameChange= event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
    handleAdd()
    {
        //Add the new campus to the list of campuses without needing to refresh the page
    }
     
    
    render(){ 
    if(this.state.isHidden){
        return <div>
            <button onClick={this.toggleHidden.bind(this)}>Add campus!</button>
            </div>;
        
        
    }  
    else
    {
        return<form>
        <div>
            Name:
            <input name ="name" type ="text" value = {this.state.name} onChange ={this.handleNameChange}/>
            Address:
            <input name ="address" type ="text" value = {this.state.address} onChange ={this.handleNameChange}/>
        

        <button>Submit </button> 
       
       </div></form>;
    }
        
        
        
        
        
    }

}
 CampusForm.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
}
export default CampusForm;



