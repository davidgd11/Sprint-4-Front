import {} from 'react';
import '../assets/css/App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */ 

function Comofunciona() {
    return(
    <aside id="como-funciona">
    <div id="conteudo">
      <h2>Aqui você verá como o nosso Semáforo Inteligente funciona! </h2>
      <h3>Menos tempo parado sem necessidade!</h3>
      <img src="./src/assets/imagens/img8.png" alt="" />
    </div>

    

    <div id="paragrafo-func">
      <p>Os semáforos inteligentes são um avanço significativo na regulação do tráfego urbano. Eles funcionam por meio de sensores de movimento e proximidade, que detectam a presença de veículos e pedestres nas proximidades dos cruzamentos. Quando um veículo se aproxima, o sensor de movimento ativa o semáforo, permitindo uma transição mais eficiente e segura, reduzindo os tempos de espera nos semáforos. Da mesma forma, quando um pedestre se aproxima da faixa de pedestres, o sensor de proximidade desencadeia a mudança do semáforo, interrompendo o tráfego veicular e garantindo uma travessia segura. Essa integração de sensores torna os semáforos inteligentes essenciais para a otimização do tráfego e a segurança nas áreas urbanas.</p>
    </div>
  </aside>
  )
}

export default Comofunciona