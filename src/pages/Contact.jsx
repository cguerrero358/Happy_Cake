

export default function Contact() {

  return (
    
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"70vh"}}>
      <h1 style={{fontSize: "2rem", marginBottom:"1rem"}}>Cuentanos, ¿En que te podemos ayudar?</h1>
      
      <form>
        <div className="container-input">
        <label>Correo:</label>
        <input type="email" placeholder="name2@mail.com" required />
        </div>
        
        <div className="container-input">
            <label>Descripción:</label>
            <textarea type="email" required> </textarea>
        </div>
        <div className="container-button">
        <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}
