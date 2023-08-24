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
        { id: 1, name: "Susan", salary: 700, increase: false, rise: true },
        { id: 2, name: "Mike", salary: 1500, increase: true, rise: false },
        { id: 3, name: "Daniel", salary: 2100, increase: false, rise: false },
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
    if (name.trim() && salary.trim()) {
      this.setState(({ data }) => {
        const dataCopy = [...data];
        dataCopy.push({
          id: data[data.length - 1].id + 1,
          name: name,
          salary: salary,
          increase: false,
          rise: false,
        });
        return { data: dataCopy };
      });
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  render() {
    return (
      <div className="app">
        <AppInfo
          empAmount={this.state.data.length}
          increaseEmpAmount={
            this.state.data.filter((item) => item.increase).length
          }
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
