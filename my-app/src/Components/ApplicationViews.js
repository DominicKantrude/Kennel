import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animalList'
import LocationList from './locationList'
import EmployeeList from './EmployeeList'
import OwnersList from "./Owners"

class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }


    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
           owners: owners
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
           employees: employees
        })
      )
    }




    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={() => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={() => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={() => {
                    return <EmployeeList employees={this.state.employees}  deleteEmployee={this.deleteEmployee}/>
                }} />
                 <Route path="/owners" render={() => {
                    return <OwnersList owners={this.state.owners}  deleteOwner={this.deleteOwner}/>
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews