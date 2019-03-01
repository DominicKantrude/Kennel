import React, { Component } from 'react';

class EmployeeList extends Component {
    render() {
        return (


            <article>
            <h1>Employee List</h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button onClick={() => this.props.deleteEmployee(employee.id)}>Button</button>
                    </div>
                )
            }
        </article>
        );
    }
}
export default EmployeeList