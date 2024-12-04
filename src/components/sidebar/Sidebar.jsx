import style from "./Sidebar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ setSideBarVisibility }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={style.sidebar}>
      <h1 onClick={() => setSideBarVisibility(false)}>X</h1>
      <div className={style.option}>
        <label htmlFor="analytics">Analytics</label>
        <input
          type="radio"
          name="options"
          id="analytics"
          checked={location.pathname === '/'}
          onChange={() => navigate('/')}
        />
      </div>
      <div className={style.option}>
        <label htmlFor="task">Tasks</label>
        <input
          type="radio"
          name="options"
          id="task"
          checked={location.pathname === '/tasks'}
          onChange={() => navigate('/tasks')}
        />
      </div>
    </div>
  );
};

export default Sidebar;
