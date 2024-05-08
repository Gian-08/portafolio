
import React from 'react'
import '../styles/profile.css'
import ImgPerfil from '../../assets/developer.png'
import { faBootstrap, faCss3, faFacebook, faGitAlt, faGithub, faHtml5, faJs,  faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const ProfilePage = () => {

    
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                
                <div className='animation'>
                    <div className='rotating' >
                        <p>Hola a todos, Soy Gianmarco Espinoza Chavez</p>
                        
                        <p >Desarrollador Jr. Front-end</p>
                        <p> Apasionado por el desarrollo de sistemas web, cumpliendo los requerimientos
                            de cada diseño solicitado.</p>
                    </div> 
                    <div className="Redes_sociales">
                        <h2 className='text-redes'>Redes sociales</h2>
                    <div class="row align-items-center">
                        <div class="col">
                        <FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'#0B0C0E'}}  />
                        <a href="https://www.facebook.com/gianmarco.espinozachavez" target='_blank' >Facebook</a>
                        </div>
                        <div class="col">
                        <FontAwesomeIcon icon={faGithub} size='2x' style={{color:'#0B0C0E'}} />
                        <a href="https://github.com/Gian-08" target='_blank' >GitHub</a>
                        </div>
                        <div class="col">
                        <FontAwesomeIcon icon={faWhatsapp} size='2x' style={{color:'#0B0C0E'}}/>
                        <a href="https://wa.me/51995903598" target='_blank'   >WhatsApp</a>
                        </div>
                    </div> 
                    </div>
                    
                    
                </div>
            </div>{/**fin col1 */}
             
            <div className="col-sm-6 d-flex justify-content-center align-items-center">
                <div className="row ">
                <div className="image-perfil "> 
                    <img src={ImgPerfil} className="img" height="260"  alt="perfil"/>
                </div>
            <div className="tecnology">
                        <h2 className='text-tecnology '>Tecnologías</h2>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <FontAwesomeIcon icon={faHtml5} size='4x' style={{color:'#0B0C0E', fontWeight:'150px'}}  />
                        </div>
                        <div className="col">
                        <FontAwesomeIcon icon={faCss3} size='4x' style={{color:'#0B0C0E'}} />
                        </div>
                        <div className="col">
                        <FontAwesomeIcon icon={faBootstrap} size='4x' style={{color:'#0B0C0E'}}/>
                        </div>
                    </div> 

                    <div className="row align-items-center mt-4">
                        <div className="col">
                        <FontAwesomeIcon icon={faJs} size='4x' style={{color:'#0B0C0E', fontWeight:'150px'}}  />
                        </div>
                        <div className="col">
                        <FontAwesomeIcon icon={faReact} size='4x' style={{color:'#0B0C0E'}} />
                        </div>
                        <div className="col">
                       {/**Buscar JQUERY icono */}
                       <FontAwesomeIcon icon={faGitAlt} size='4x' style={{color:'#0B0C0E'}} />
                        </div>
                    </div>
                    </div>
                </div>
            
            </div>{/**Fin col2 */}
        </div>
    </div>
  
  )
}
