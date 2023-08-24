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
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);

      const oldItem = data[index];
      const newItem = { ...oldItem, increase: !oldItem.increase };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return { data: newArr };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);

      const oldItem = data[index];
      const newItem = { ...oldItem, rise: !oldItem.rise };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return { data: newArr };
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

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
