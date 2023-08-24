import "./app-info.css";

const AppInfo = ({ empAmount, increaseEmpAmount }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {empAmount}</h2>
      <h2>Премию получат: {increaseEmpAmount}</h2>
    </div>
  );
};

export default AppInfo;
