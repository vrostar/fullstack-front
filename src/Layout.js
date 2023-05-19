import {Link, Outlet} from "react-router-dom";

export function Layout() {
    return <div>
        <header>
            <h1>FILM EMPORIUM</h1>
        </header>
        <nav>
                <h2><Link to="/">Films</Link></h2>
                <h2><Link to="create">Add Film</Link></h2>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
}