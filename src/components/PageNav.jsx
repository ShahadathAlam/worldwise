// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>

    //     <li>
    //       <Link to="/pricing">Pricing</Link>
    //     </li>

    //     <li>
    //       <Link to="/product">Product</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>

        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
