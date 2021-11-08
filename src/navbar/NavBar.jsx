import './navbar.css';

export default function NavBar() {
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-facebook"></i>
                <i className="navIcon fab fa-instagram"></i>
                <i className="navIcon fab fa-linkedin"></i>
            </div>
            <div className="navCenter">
                <div className="navList">
                    <li className="navItem">HOME</li>
                    <li className="navItem">ABOUT</li>
                    <li className="navItem">CONTACT</li>
                    <li className="navItem">CATALOG</li>
                    <li className="navItem">LOGIN</li>
                    <li className="navItem">REGISTER</li>
                    <li className="navItem">LOGOUT</li>
                </div>
            </div>
            <div className="navRight">
                <img className="navImage"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                />
                <i className="navIcon fas fa-search"></i>
            </div>
        </div>
    )
}