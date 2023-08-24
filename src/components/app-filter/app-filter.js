import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
    this.buttonsData = [
      { name: "all", label: "Все сотрудники" },
      { name: "with-increase", label: "На повышение" },
      { name: "with-salary-more-1000", label: "З/П больше 1000$" },
    ];
  }

  onUpdateFilter = (filter) => {
    this.setState({ filter });
    this.props.onUpdateFilter(filter);
  };

  render() {
    return (
      <div className="btn-group">
        {this.buttonsData.map(({ name, label }) => {
          return (
            <button
              type="button"
              className={`btn ${
                this.state.filter === name ? "btn-light" : "btn-outline-light"
              }`}
              key={name}
              onClick={() => this.onUpdateFilter(name)}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }
}

export default AppFilter;
