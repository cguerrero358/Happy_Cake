import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
    <nav>
      
      <Link to='/'> 🏡 Home </Link>
      <Link to='/Contact'> 📒 Contacto </Link>
      
    </nav>
    <div>
        <h1> Happy Cake 🍰 </h1>
    </div>

    </header>
    
  )
}
