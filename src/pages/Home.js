import React, { Component } from 'react';

import imgProfile from './../img/profile.png'
import './Home.css';

export default class Home extends Component {
  render() {
    return (
        <div>
            <section className="section is-full">
            
            </section>
            <div className="columns is-mobile">
                <div className="column"></div>
                <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop box-info">
                    <div className="columns is-full info has-background-white">
                        <div className="column is-narrow">
                        <figure className="image is-128x128">
                            <img src={imgProfile}/>
                        </figure>
                    </div>
                    <div className="column">
                        <div className="speech-bubble">
                            <p className="has-text-centered has-text-white">Wellcome</p>
                        </div>
                        <p className="title">
                            <span className="text-ligth">
                                I'm 
                            </span>
                            Amanda Gomes
                        </p>
                        <p className="subtitle">
                            Student Analysis and Development System
                        </p>
    
                        <hr/>
    
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="has-text-weight-semibold">AGE</td>
                                    <td className="has-text-grey">22</td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold">E-MAIL</td>
                                    <td className="has-text-grey">amandagomes2010@gmail.com</td>
                                </tr>
                                <tr>
                                    <td className="has-text-weight-semibold">COUNTRY</td>
                                    <td className="has-text-grey">Brazil</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    <div className="links has-background-info has-text-centered">
                        <a className="icon is-large has-text-white" href="https://github.com/amdagomes" target="_blank">
                            <i className="fa-lg fab fa-github"></i>
                        </a>
                        <a className="icon is-large has-text-white" href="https://www.instagram.com/amdagomes/" target="_blank">
                            <i className="fa-lg fab fa-instagram"></i>
                        </a>     
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </div>
    );
  }
}
