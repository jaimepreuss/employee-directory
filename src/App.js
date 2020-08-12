import React, { Component } from 'react';
import './App.css';
import SearchContainer from "./components/SearchContainer";
import EmployeeContainer from "./components/EmployeeContainer";
import API from "./utils/API";

class App extends Component {

  state = {
    search: "",
    employeeData: [],
    employeeResults: []
  }
  //can we sort on load
  componentDidMount() {
    API.getRandomEmployee()
    .then(res => {
      this.setState({ employeeData: res.data.results })
      .catch(err => { console.log(err)});
    });
  }
  //might need to change filter or delete
  findAge = age => {
    const friends = this.state.employeeData.filter(employee => employee.age === age);
    this.setState({ employeeData: friends });
  }

  handleFormSubmit = event => {
    event.preventdefault();
    let filtered = employeeData.filter(search);
    this.setState({
      search: "",
      employeeResults: filtered
  });
  }
  handleInputChange = event => {
  this.setState({search: event.target.value});
  }
  //How should I pass results into employee container
  render() {
    return (
      <div>
        <SearchContainer
        handleFormSubmit= {this.handleFormSubmit}
        handleInputChange= {this.handleInputChange}
        />
        <EmployeeContainer results={ this.state.employeeResults }/>
      </div>
    )
  }
}

export default App;
