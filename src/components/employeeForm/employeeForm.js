import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Popup from "reactjs-popup";

import "react-datepicker/dist/react-datepicker.css";
import "./employeeForm.css";

class EmployeeForm extends React.Component {
    Data = {};
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          id: null,
          department: 'Frontend',
          mail: '',
          date: new Date(),
        };
        this.baseState = this.state; 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleDate = date => {
        this.setState({
          date: date
        });
    };
  
    handleSubmit(event) {
      event.preventDefault();
      const data = {
          'name' : this.state.name,
          'id': this.state.id,
          'department': this.state.department,
          'mail': this.state.mail,
          'date': this.state.date,
      }
      this.props.parentCallback(data);
      this.setState({
        name: '',
        id: null,
        department: 'Frontend',
        mail: '',
        date: new Date(),
      })
     event.target.reset();
    }

    resetHandler(){
        document.getElementById("create-employee-form").reset();
    }
    
    render() {
      return (
        <div>
        <form onSubmit= {this.handleSubmit} id="create-employee-form" >
          <label className="label">
            Name:
            <input className="input" type="text" name="name" onChange={this.handleChange} required />
          </label>
          <br></br>
          <label className="label">
              Employee ID:
              <input className="input" type="number" name="id" onChange={this.handleChange} required />
          </label>
          <br></br>
          <label className="label">
            Department:
            <select name="department" className="input" value={this.state.department} onChange={this.handleChange}>
              <option value="Backend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Design">Design</option>
              <option value="Architect">Architect</option>
              <option value="Support">Support</option>
            </select>
          </label>
          <br></br>
          <label className="label">
              Email:
              <input type="email" className="input" name="mail" onChange={this.handleChange} required />
          </label>
          <br></br>
          <label className="label">
                Date of Joining:
                <br></br>
                <DatePicker name="date" className="input" selected={this.state.date} onChange={this.handleDate} />
          </label>
          <br></br>
          <input className="button" type="submit" disabled={!this.state.mail || !this.state.name || !this.state.id || !this.state.department || !this.state.date} value="Submit" />
          <br></br>
        </form>
            <button className="button" onClick={this.resetHandler}>Clear</button>
        </div>
      );
    }
  }

export default EmployeeForm;