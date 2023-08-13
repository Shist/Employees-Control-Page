import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const uiElements = data.map((item) => {
    return <EmployeesListItem {...item} />;
  });

  return <ul className="app-list list-group">{uiElements}</ul>;
};

export default EmployeesList;
