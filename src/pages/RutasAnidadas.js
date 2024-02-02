import { Link, Outlet, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function RutasAnidadas() {
    return ( 
        <div className="text-center my-5 ">
            <div className="d-flex justify-content-center">
                <div className="col">
                    <NavLink to={"alicia"} className="btn btn-outline-secondary btn-lg" activeClassName="active">Alicia</NavLink>
                </div>
                <div className="col">
                    <NavLink to={"adrian"} className="btn btn-outline-secondary btn-lg" activeClassName="active">Adrián</NavLink>
                </div>
                <div className="col">
                    <NavLink to={"carmen"} className="btn btn-outline-secondary btn-lg" activeClassName="active">Carmen</NavLink>
                </div>
                <div className="col">
                    <NavLink to={"joseantonio"} className="btn btn-outline-secondary btn-lg" activeClassName="active">José Antonio</NavLink>
                </div>
                <div className="col">
                    <NavLink to={"pablo"} className="btn btn-outline-secondary btn-lg" activeClassName="active">Pablo</NavLink>
                </div>
                <div className="col">
                    <NavLink to={"tibu"} className="btn btn-outline-secondary btn-lg" activeClassName="active">Tibu</NavLink>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-center">
                <Outlet/>
            </div>
        </div>
     );
}

export default RutasAnidadas;
