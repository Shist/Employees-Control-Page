import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = (props) => {
  const uiElements = props.data.map((item) => {
    return <EmployeesListItem name={item.name} salary={item.salary} />;
  });

  return <ul className="app-list list-group">{uiElements}</ul>;
};

export default EmployeesList;
