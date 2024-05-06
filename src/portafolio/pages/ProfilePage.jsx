
import React from 'react'
import '../styles/profile.css'

export const ProfilePage = () => {

    const espacio=20;
  return (
    <div className="container">
        <div className="row main justify-content-center align-items-center">
            <div className="col-sm-6">
                
                <div className='animation'>
                    <div >
                        <p className='datos' >Hola, Soy Gianmarco Espinoza Chavez</p>
                        
                        <p >Desarrollador Jr. Front-end</p>
                        <p> Apasionado por el desarrollo de sistemas web, cumpliendo los requerimientos
                            de cada diseño solicitado.
                           </p>
                           </div>   
                    
                </div>
            
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
                
            <img src="/src/assets/developer.png" className="img" height="220"  alt="perfil"/>
            
            </div>
        </div>
    </div>
  
  )
}
