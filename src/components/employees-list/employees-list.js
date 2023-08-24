import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const uiElements = data.map((item) => {
    const { id, ...otherProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...otherProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => {
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"));
        }}
      />
    );
  });

  return <ul className="app-list list-group">{uiElements}</ul>;
};

export default EmployeesList;
