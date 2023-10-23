import "./Navbar.css";

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="nav-headings">
                <span className="title">Filmcave</span>
            </div>
            <div className="nav-items">
                <span className="about"><a href = "https://fromendtostart.github.io/MyPortfolio" style={{
                                        textDecoration: "inherit",
                                        color: "inherit",
                                        }}
                                        target="_blank"><button>My Portfolio</button></a></span>
            </div>
        </div>
    )
}