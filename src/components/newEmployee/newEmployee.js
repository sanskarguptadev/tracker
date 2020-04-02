import React, { Component } from 'react';
import Popup from "reactjs-popup";
import {Button} from 'react-bootstrap';

import EmployeeForm from '../employeeForm/employeeForm';
import EmployeeTable from '../employeeTable/employeeTable';
import './newEmployee.css';

class NewEmployee extends Component {
    
    state = {
        data : [],
        open: false,
    }

    openModal = () => {
        this.setState({ open: true });
    }

    closeModal = () => {
        this.setState({ open: false });
    }
    
    callbackFunction = (childData) => {
        const updatedData = [...this.state.data, childData];
        this.setState({
            data: updatedData,
        })
    }

    deleteCallback = (id) => {
        console.log('delete called');
        const d = this.state.data;
        const items = d.filter(item => item.id !== id);
        this.setState({
            data: items, 
        })
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    render(){
        console.log(this.state.data);
        return(
            <div>
                <Popup modal trigger={<Button variant="primary">New Employee</Button>} >
                    <EmployeeForm parentCallback={this.callbackFunction} />
                </Popup>
                <EmployeeTable deleteCallback={this.deleteCallback} data={this.state.data}/>
            </div>
        );
    }
}

export default NewEmployee;