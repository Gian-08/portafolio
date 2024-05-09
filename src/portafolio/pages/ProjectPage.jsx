import React from 'react'
import imgcolegio1 from '../../assets/sistema-colegio/Screenshot_1.png'
import imgcolegio2 from '../../assets/sistema-colegio/Screenshot_2.png'
import imgcolegio3 from '../../assets/sistema-colegio/Screenshot_3.png'
import imgcolegio4 from '../../assets/sistema-colegio/Screenshot_4.png'
import imgcall1 from '../../assets/sistema-call-center/Screenshot_1.png'
import imgcall2 from '../../assets/sistema-call-center/Screenshot_2.png'
import imgcall3 from '../../assets/sistema-call-center/Screenshot_3.png'
import imgcall4 from '../../assets/sistema-call-center/Screenshot_4.png'
import imgcall5 from '../../assets/sistema-call-center/Screenshot_5.png'
import imgconecta1 from '../../assets/Conecta-peru/Screenshot_1.png'
import imgdigimedia1 from '../../assets/landing-digimedia/Screenshot_1.png'
import imgdigimedia2 from '../../assets/landing-digimedia/Screenshot_2.png'
import imgdigimedia3 from '../../assets/landing-digimedia/Screenshot_3.png'
import imgcertificados1 from '../../assets/Certificados/Screenshot_1.png'
import imgcertificados2 from '../../assets/Certificados/Screenshot_2.png'
import imgcertificados3 from '../../assets/Certificados/Screenshot_3.png'
export const ProjectPage = () => {
  return (

    <div className='container mt-3'>

      <div className=" row">
{/*proyecto colegio*/}
        <div className="col-sm-12 mb-3">
              <div class="card">
              
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={imgcolegio1}class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcolegio2} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcolegio3} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcolegio4} class="d-block w-100" alt="..."/>
                  </div>
                  
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            <div class="card-body">
              <h5 class="card-title">Intranet Colegio</h5>
              <p class="card-text">Tecnologias usadas: HTML, CSS, Bootstrap, PHP nativo, MySQL
              </p>
              
            </div>
        </div>

        </div>

{/*proyecto call center*/}
        <div className="col-sm-12 mb-3">
              <div class="card">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={imgcall1} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcall2}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcall3}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcall4}  class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src={imgcall5}  class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            <div class="card-body">
              <h5 class="card-title">Intranet atenciones Call Center</h5>
              <p class="card-text">Tecnologias usadas: HTML, CSS, Bootstrap, PHP(Framework Laravel 9), MySQL
              </p>
              
            </div>
        </div>

        </div>

{/*proyecto Conecta-Peru*/}
        <div className="col-sm-12 mb-3">
              <div class="card">
            <img src={imgconecta1} class="card-img-top" alt="proyectos"/>
            <div class="card-body">
              <h5 class="card-title">Sistema web de tiendas</h5>
              <p class="card-text">Tecnologias usadas: HTML, CSS, Bootstrap, PHP nativo, MySQL
              </p>
            </div>
          </div>

        </div>

{/*proyecto Digimedia*/}
        <div className="col-sm-12 mb-3">
              <div class="card">

              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/src/assets/landing-digimedia/Screenshot_1.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="/src/assets/landing-digimedia/Screenshot_2.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="/src/assets/landing-digimedia/Screenshot_3.png" class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

            <div class="card-body">
              <h5 class="card-title">Pagina web landing</h5>
              <p class="card-text">Tecnologias usadas: HTML, CSS, PHP nativo
              </p>
            </div>
          </div>

        </div>

{/*proyecto Chessman-certificados*/}
        <div className="col-sm-12">
              <div class="card">
            
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/src/assets/certificados/Screenshot_1.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="/src/assets/certificados/Screenshot_2.png" class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="/src/assets/certificados/Screenshot_3.png" class="d-block w-100" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

            <div class="card-body">
              <h5 class="card-title">Sistema de certificados</h5>
              <p class="card-text">Tecnologias usadas: HTML, CSS, Bootstrap, PHP nativo, MySQL </p>
            </div>
          </div>

        </div>
      





  

      </div> {/*fin row*/ }
         
         

    </div>
    
   

  
  )
}
