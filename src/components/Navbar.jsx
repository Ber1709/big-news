
import React, { Component} from "react"

 const Navbar = ({props, category}) => {

    return (
        <nav class="navbar navbar-light navbar-expand-lg" style={{backgroundColor: '#ffff00'}}>
            <div class="container-fluid">
                <a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" onClick={() => document.location.reload()} href="#"><h3><i class="fas fa-newspaper bi me-2"></i></h3></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style={{marginLeft: '1%'}} id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" style={{marginLeft:'250px'}}>
                    <a className="nav-link" aria-current="page" onClick={() => document.location.reload()} href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('business')} name="business" value="business" type="submit" aria-disabled="false">Business</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('entertainment')} aria-disabled="false">Entretenimiento</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('general')} aria-disabled="false">General</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('health')} aria-disabled="false">Salud</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('science')} aria-disabled="false">Ciencias</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('sports')} aria-disabled="false">Deportes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => category('technology')} aria-disabled="false">Tecnologia</a>
                    </li>
                </ul>
                
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;