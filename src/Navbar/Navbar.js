import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Navbar(){
    return(
        <div className="header">
        <div role="navigation" className="navbar navbar-default navbar-fixed-top">
          <div class="container">
            <div className="navbar-header"><a href="#all" className="navbar-brand scroll-to">
            <a src="img/logo.png" alt="logo" className="hidden-xs hidden-sm">
                <img src="img/logo-small.png" alt="logo" className="visible-xs visible-sm"/>
                    <span className="sr-only">Go to homepage</span></a>
              <div className="navbar-buttons">
                <button type="button" data-toggle="collapse" data-target=".navbar-collapse"
                 className="navbar-toggle navbar-btn">Menu<i class="pe-7s-menu"></i></button>
              </div>
            </a>
            <div id="navigation" class="collapse navbar-collapse navbar-right">
              <ul class="nav navbar-nav">
                <li><a href="#features" class="scroll-to">Features</a></li>
                <li><a href="#text" class="scroll-to">Text </a></li>
                <li><a href="#integrations" class="scroll-to">Integrations</a></li>
                <li><a href="#testimonials" class="scroll-to">Testimonials</a></li>
                <li><a href="#contact" class="scroll-to">Contact</a></li>
              </ul><a href="#" data-toggle="modal" data-target="#get-started" class="btn navbar-btn btn-ghost">Get started</a>
            </div>
          </div>
        </div>
      </div>
      </div>
        
    )
}

export default Navbar;
