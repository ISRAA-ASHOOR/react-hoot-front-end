import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import Logo from '../../assets/images/logo.svg';

const NavBar = ({ user, handleSignout }) => {
    return (
      <>
        { user ? (
          <nav className={styles.container}>
            <Link to='/'><img src={Logo} alt="A cute owl" /></Link>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to='/hoots'>HOOTS</Link></li>
              <li><Link to="/hoots/new">NEW HOOT</Link></li>
              <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
            </ul>
          </nav>
        ) : (
          <nav className={styles.container}>
            <Link to='/'><img src={Logo} alt="A cute owl" /></Link>
            <ul>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </nav>
        )}
      </>
    )
}  

export default NavBar;