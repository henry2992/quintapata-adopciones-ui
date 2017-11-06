import React, { Component } from 'react';
import './../App.css';
import logo2 from './../utils/img/logo2.png';
import find from './../utils/img/find.png';
import look from './../utils/img/look.png';
import visit from './../utils/img/visit.png';
import cardiogram from './../utils/img/cardiogram.png';


import Button from 'react-bootstrap/lib/Button';

import Navbar from 'react-bootstrap/lib/Navbar';

class App extends Component {

  render() {

    return (
      <div>
        


        <Navbar className='navbar-fix'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" className="brand-logo center"><img className='quintapata-logo' src={logo2} /> </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>



        <div className="qp-home-wrapper">  
          <div className="container">
            <div className="qp-home-container">
              <div className="qp-home-info">
                <h1>Encuentra tu mascota ideal.</h1>
                <h2>Adopta a tu siguiente mascota</h2>
                

                <Button bsStyle="primary">Buscar</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="qp-hworks">
          <h1 className="qp-grey home-mtitle">Como Funciona</h1>
          <div className="row">
            <div className="col m4 s12">
              <h2 className="qp-blue">Busca</h2>
              <img src={look} />
              <p>Busca las mejores veterinarias en tu ciudad.</p>
            </div>

            <div className="col m4 s12">
              <h2 className="qp-blue">Encuentra</h2>

              <img src={find} />
              <p>Conoce lo que otros usuarios opinan de tu veterinaria.</p>
            </div>

            <div className="col m4 s12">
              <h2 className="qp-blue" >Visita</h2>
              <img src={visit} />
              <p>Decídete por la mejor veterinaria y visítala.</p>
            </div>
          </div>
        </div>

        <div className="qp-benefits">
          <h1 className="home-mtitle">Beneficios</h1>
          <div className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="">
                  <img className="card-img-fix" src={cardiogram} />
                </div>
                <div className="card-content">
                  <p className="center">Visita a tu Veterinario con más tranquilidad</p>
                </div>
              </div>
            </div>

            <div className="col s12 m3">
              <div className="card">
                <div className="card-image card-holder-fix">
                  <img className="card-img-fix" src="img/question.png" />
                </div>
                <div className="card-content">
                  <p className="center">Encuentra más informacion del veterinario.</p>
                </div>
              </div>
            </div>

            <div className="col s12 m3">
              <div className="card">
                <div className="card-image card-holder-fix">
                  <img className="card-img-fix" src="img/pawprint.png" />
                </div>
                <div className="card-content">
                  <p className="center">Revisa los comentarios de la Comunidad.</p>
                </div>
              </div>
            </div>

            <div className="col s12 m3">
              <div className="card">
                <div className="card-image card-holder-fix">
                  <img className="card-img-fix" src="img/home.png" />
                </div>
                <div className="card-content">
                  <p className="center">Estarás más contento cuando regreses a casa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="qp-clients">
          <h1 className="home-mtitle">Nuestros Clientes</h1>
          <div className="container">
            <div className="row">
              <div className="col m6 s12 col-fix">
                <div className="img1 ">
                  <div className="bg">
                    <img  className="client-bg-img" src="img/1.jpg" />
                     <div className="overlay">
                      <p>Llevar a Lola al veterinario era todo una odisea, lo pasaba fatal y se estresaba en el transportín. Desde que usamos InstaVets no me preocupo, vienen a casa, son encantadoras y Lola no se da cuenta de que es una veterinaria.</p>
                      <p className="text-customer-name">Marcela y Lola</p>
                    </div> 
                  </div> 
                </div>

                <div className="img2">
                  <div className="bg">
                    <img  className="client-bg-img" src="img/2.jpg" />
                     <div className="overlay">
                      <p> Estamos encantados con el servicio de InstaVets. Endor ni se entera de que es una consulta. Lo mejor es que siempre están disponibles para resolver cualquier duda, ya sea por teléfono o por la web, ¡fue todo un descubrimiento! </p>
                      <p className="text-customer-name">Marcela y Lola</p>
                    </div> 
                  </div> 
                </div>
              </div>

              <div className="col m6 s12 col-fix">
                <div className="img3">
                  <div className="bg">
                    <img  className="client-bg-img" src="img/3.jpg" />
                     <div className="overlay">
                      <p>Entre que sabemos exactamente cuánto cuesta el servicio desde el primer momento sin sorpresas después, que vienen en el momento en que necesitamos, y que la consulta incluye todo lo que surja durante el chequeo, ni nos lo pensamos antes de llamarles.</p>
                      <p className="text-customer-name">Marcela y Lola</p>
                    </div> 
                  </div>   
                </div>

                <div className="col m12 s12 col-fix">
                  <div className="img4">
                    <div className="bg">
                      <img  className="client-bg-img" src="img/4.jpg" />
                       <div className="overlay">
                        <p>Desde que era pequeña me apasionan los animales, siempre quise estar cerca de ellos y ayudarlos. La medicina veterinaria me da las herramientas para ofrecerles mayor y mejor calidad de vida. En InstaVets nos esforzamos por que tu mascota se sienta tranquila y relajada en todo momento. Ser atendidos en su propia casa evita que pase un mal esto innecesario. ¡No te compiques la vida! Llámanos, él te lo agradecerá.</p>
                        <p className="text-customer-name">Marcela y Lola</p>
                      </div> 
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="qp-ready">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <img src="img/dogimg.png" />  
              </div>

              <div className="col m6 s12">
                <p>Listo para encontrar tu veterinario</p>
                <p>Con solo un click puedes encontrar los mejores veterinarios en tu zona</p>
                <a className="waves-effect waves-light btn search-btn"><i className="material-icons left">search</i>Buscar</a>
              </div> 
            </div>
          </div>
        </div>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text">Quintapata</h5>
                <div className="community-icons-footer">
                    <a href="#" target="_blank"><i id="social-fb-footer" className="fa fa-facebook-square fa-3x social"></i></a>
                    <a href="#" target="_blank"><i id="social-tw-footer" className="fa fa-twitter-square fa-3x social"></i></a>
                    <a href="#" target="_blank"><i id="social-yt-footer" className="fa fa-youtube-square fa-3x social"></i></a>
                    <a href="#" target="_blank"><i id="social-in-footer" className="fa fa-instagram fa-3x social"></i></a>
                    <a href="#" target="_blank"><i id="social-em-footer" className="fa fa-envelope-square fa-3x social"></i></a>
                </div>
              </div>
              
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Quintapata.com
            </div>
          </div>
        </footer>
      </div>
    )
  }
}


export default (App);
