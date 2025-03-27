import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <footer>
    <h1>UTN | 2025</h1>
    <a href="https://www.linkedin.com/in/jorge-fern%C3%A1ndez-montaner-50115412b/" target="_blank" rel="noopener">
      <p>Este sitio está desarrollado por Jorge A. Fernández M.</p>
    </a>
  </footer>
  `,
  styles: `
 h1{
    color: yellowgreen; /* Un color más suave para el texto */
}
footer {
    padding: 20px;
    background-color: #333; /* Un gris oscuro más suave */
    color: white;
    text-align: center;
    font-size: 16px;
    font-family: Arial, sans-serif;
    border-top: 3px solid #f1f1f1; /* Una línea sutil encima del footer */
    box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.1); /* Sombras suaves para dar profundidad */
    transition: background-color 0.3s ease; /* Transición para un cambio suave de color */
  }
  
  footer:hover {
    background-color: #444; /* Un tono más claro al pasar el mouse */
  }
  
  footer a {
    color: #ff8c00; /* Color llamativo para los enlaces */
    text-decoration: none;
    font-weight: bold;
  }
  
  footer a:hover {
    text-decoration: underline; /* Subraya el enlace cuando se pasa el mouse */
  }
  
  `
})

export class FooterComponent {
}