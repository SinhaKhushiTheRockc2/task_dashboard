import { logo, themeicon } from "../../assets";
import { useThemeValue } from "../../context/ThemeContext";
import style from "./Navbar.module.css";

const Navbar = ({ setSideBarVisibility }) => {
  const { theme, toggleTheme } = useThemeValue();

  return (
    <header className={style.header} style={theme==='light'?{backgroundColor:'white'}:{backgroundColor:'#021033'}}>
      <nav className={style.navbar}>
        <div className={style.logo} onClick={() => setSideBarVisibility(true)}>
          <img src={logo} alt="logo" height={50} width={50} />
        </div>
        <div className={style.logo} onClick={toggleTheme}>
          <img src={themeicon} alt="theme icon" height={40} width={40} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
