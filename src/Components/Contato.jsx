import {} from 'react';
import '../assets/css/App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */ 

function Contato () {
    return(

    <section id="contato">
    <form id="conteudo-contato">
      <div id="all">
      <h1> Entre em contato!</h1>

      <main id="inputs">
        <div>
          <input type="text" id="nomeid"
          placeholder="Nome: " required="required"/>
     
          <input type="email" id="emailid"
          placeholder="E-mail:" required="required"/>

          <input type="text" id="assunto"
          placeholder="Assunto principal:" required="required"/>
        </div>

          <input id="mensagem" className='textarea' placeholder="Mensagem:"/>
      </main>
      
      <button><input type="submit" id="submit" value="Enviar"/> </button>
      </div>
    </form>
        

    </section>

                    

    )
}

export default Contato