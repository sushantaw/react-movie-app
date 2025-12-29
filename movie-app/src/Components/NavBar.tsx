import  {Link} from 'react-router-dom'

function NavBar() {
    return <nav className = "navbar">
        <div className = "nav-brand">
            <Link to = "/" className = "nav-logo"> MovieApp </Link>
        </div>
        <div className = "nav-links">
            <Link to = "/favourite" className = "nav-link"> Favourit </Link>
            <Link to = "/" className = "nav-link"> Home </Link>
        </div>
    </nav>
}

export default NavBar;