import { Link } from "react-router-dom"

function Inicio() {
    return ( 
      <div className="p-5 rounded" style={{backgroundColor:"lightgray"}} >
        <h1>Congresos 2024</h1>
        
        <Link to="/congreso" className="btn btn-lg btn-primary">
            <i className="fa fa-search"></i> Ver Congresos
        </Link>
    </div>
  
  
    )}
  
  export default {Inicio}