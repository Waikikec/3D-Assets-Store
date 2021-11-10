import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    className="sidebarImg"
                    src="https://st.depositphotos.com/1032577/4274/i/950/depositphotos_42748913-stock-photo-about-me.jpg"
                    alt="sidebarImage"
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque ipsum est! Consectetur ad ipsa, eos eligendi nemo autem culpa mollitia, delectus nostrum debitis voluptas nobis, animi fugit corrupti quam?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Movies</li>
                    <li className="sidebarListItem">Games</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                    <li className="sidebarListItem">Sport</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}