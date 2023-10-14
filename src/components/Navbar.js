import "./Navbar.css";

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-headings">
                <span className="logo">Logo</span>
                <span className="title">Filmcave</span>
            </div>
            <div className="nav-items">
                <span className="about">About</span>
            </div>
        </div>
    )
}