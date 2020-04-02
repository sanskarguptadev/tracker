import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class EmployeeTable extends Component{
    
    render(){
        return(
            <div className="wrapper">
                <div>New Hiring Details</div>
                <Table responsive className="professional">
                    <thead>
                        <tr className="head">
                        <th>Name</th>
                        <th>Employee Id</th>
                        <th>Department</th>
                        <th>Date of Joining</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((d) => {
                                return (<tr key={d.id}>
                                    <td>{d.name}</td>
                                    <td>{d.id}</td>
                                    <td>{d.department}</td>
                                    <td>{d.date.toDateString()}</td>
                                    <td>{d.mail}</td>
                                    <td><button onClick={() => { this.props.deleteCallback(d.id)}}>Delete</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default EmployeeTable;