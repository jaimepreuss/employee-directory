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
  //l2sort
  componentDidMount() {
    API.getRandomEmployee()
      .then(res => {
        const data = res.data.results.sort((a, b) => {
          if (a.name.last > b.name.last) {
            return 1;
          }
          if (a.name.last < b.name.last) {
            return -1;
          }
          return 0;
        })
        this.setState({ employeeResults: data });
        this.setState({ employeeData: data });
      })
      .catch(err => { console.log(err) });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let filtered = null;
    if (this.state.search) {
      if(Number.isInteger(parseInt(this.state.search))) {
        filtered = this.state.employeeData.filter(employee => employee.dob.age === parseInt(this.state.search));
      }
      else {
        filtered = this.state.employeeData.filter((data) => (data.name.first.includes(this.state.search) || data.name.last.includes(this.state.search)));
      }
      this.setState({employeeData: filtered});
    } else {
      this.setState({employeeData: this.state.employeeResults})
    }
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  }

  //How should I pass results into employee container
  render() {
    return (
      <div>
        <SearchContainer
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeContainer results={this.state.employeeData} />
      </div>
    )
  }
}

export default App;
