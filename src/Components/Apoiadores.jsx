import {} from 'react';
import '../assets/css/App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */ 

function Apoiadores () {
    return(
        <aside id="apoiadores">
      <div id="paragrafo-parc">
        <p>Agradecemos profundamente aos nossos valorosos investidores, IBM, CET, SPRegula e Heinz, por sua confiança e apoio contínuo. Sua parceria é de inestimável importância, pois impulsiona nossos esforços para inovar e atender às necessidades de nossa comunidade e clientes de maneira excepcional.
        <br /> <br />
        A IBM traz sua expertise tecnológica de classe mundial, a CET contribui com sua experiência em mobilidade urbana, a SPRegula fortalece nossa conformidade com regulamentações locais e a Heinz, uma marca globalmente reconhecida, destaca nossa capacidade de oferecer produtos de qualidade. Juntos, estamos moldando um futuro mais brilhante e eficiente. Agradecemos por fazerem parte dessa jornada rumo à excelência e ao sucesso.</p>
      </div>

      <div className="conteudo">
        <h2>Conheça nossos ótimos investidores! </h2>
        <h3>Graças ao apoio de cada um deles todo o nosso trabalho foi para frente!</h3>
        <img src="./src/assets/imagens/img1.png" alt="Img1" />
        <img src="./src/assets/imagens/img2.png" alt="Img2" />
        <img src="./src/assets/imagens/img3.png" alt="Img3" />
        <img src="./src/assets/imagens/img7.png" alt="Img4" />
      </div>
    </aside>
    )
}

export default Apoiadores 