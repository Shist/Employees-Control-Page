import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Susan", salary: 700, increase: false },
        { id: 2, name: "Mike", salary: 1500, increase: false },
        { id: 3, name: "Daniel", salary: 2100, increase: false },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (e, name, salary) => {
    e.preventDefault();
    this.setState(({ data }) => {
      const dataCopy = [...data];
      dataCopy.push({
        id: data[data.length - 1].id + 1,
        name: name,
        salary: salary,
        increase: false,
      });
      return { data: dataCopy };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
