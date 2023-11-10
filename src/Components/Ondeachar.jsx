import {} from 'react';
import '../assets/css/App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */ 

function Ondeachar () {
    return(
        <aside id="onde-achar">
          <div className="conteudo">
              <h2>Onde você encontrará o nosso projeto?! </h2>
              <h3>Nosso Semáforo Inteligente estará nas ruas das cidades, em avenidas e em todos os lugares que precise de nós!</h3>

              <div className="image-card">
                 <img src="./src/assets/imagens/img9.png" alt="Img5" />
              </div>

          </div>

          <div id="paragrafo-achar">
            <p>Você pode encontrar semáforos inteligentes em áreas urbanas, onde a gestão de tráfego é mais avançada. Eles são comuns em cruzamentos movimentados e áreas metropolitanas. Para identificá-los, observe semáforos equipados com câmeras, sensores de movimento ou luzes LED adaptativas. <br/> <br/>Logo aqui em baixo é possível confirmar se há ou não um de nossos semáforos em sua rua, é apenas digitar o seu cep. </p>
            </div>
        </aside>
    )
}

export default Ondeachar;