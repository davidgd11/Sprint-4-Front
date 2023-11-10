import {} from 'react';
import '../assets/css/App.css';


/* import 'bootstrap/dist/css/bootstrap.min.css'; */ 

function Header() {
    return(

    <header>
      <div id="logo">
        <img src="./src/assets/imagens/img6.png" alt="Imagem de um faról" className="img-farol" />

        <h1> 
          <span>Semáforo</span> <br/>
          <span>Inteligente</span>
        </h1>
      </div>

      <nav id="navegador">
          <ul>
            <li><a href="#logo">INÍCIO</a></li>
            <li><a href="#como-funciona">COMO FUNCIONA</a></li>
            <li><a href="#apoiadores">APOIADORES </a></li>
            <li><a href="#onde-achar">ONDE ACHAR? </a></li>
            <li> <a href="#estatistica"> PROCURAR </a> </li>
          </ul>

        <div id="botoes">
          <a href="#login"  className='investir'> <button>Login</button> </a> 
          <a href="#contato" className='investir'> <button>Contato</button> </a>
        </div>
      </nav>
    </header>
)
}

export default Header;
