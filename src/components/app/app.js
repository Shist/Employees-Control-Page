import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

const serverData = [
  { name: "Susan", salary: 700 },
  { name: "Mike", salary: 1500 },
  { name: "Daniel", salary: 2100 },
];

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={serverData} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
