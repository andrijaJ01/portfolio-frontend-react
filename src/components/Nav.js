
import {Link} from 'react-router-dom'

function Nav() {

  const navStyle={
    color:'white',
    textDecoration:'none'
  }

  return (
    <ul>
      <Link style={navStyle} to='/'>
      <li>Home</li>
      </Link>
      <Link style={navStyle} to='/about/'>
      <li>About</li>
      </Link>
      <Link style={navStyle} to='/projects/'>
      <li>Projects</li>
      </Link>
      <Link style={navStyle} to='/contact/'>
      <li>Contact</li>
      </Link>
    </ul>


  );
}

export default Nav;
