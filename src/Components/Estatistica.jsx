import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';


function Estatistica(){
 /*Hook useState */
 const[listaCliente, setListaCliente]= useState([]);
 const [semaforoInfo, setSemaforoInfo] = useState('');

/*biblioteca de validação de campos */
 const scheme = yup.object({
  email:yup.string().email("Digite um email valido").required("O Campo email obrigatório!"),
  cpf:yup.string().min(11, "CPF deve conter pelo menos 11 dígitos!").max(11, "CPF deve conter no máximo 11 dígitos!").required("Campo CPF obrigátório!"),
  cep:yup.string().min(8, "O CEP deve conter pelo menos 8 dígitos!").max(8, "O CEP deve conter no máximo 8 dígitos!").required("O campo CEP é obrigatório!")
})
.required();

/*função que cria os metodos register e handleSubimit para chamar o form e validar */
 const {register,handleSubmit,formState:{errors},setValue, setFocus,} = useForm({
  resolver:yupResolver(scheme)
})


/*função  inserir cliente  */
function inserirCliente(cliente){
  setListaCliente([...listaCliente,cliente]);
}

/*criando a API para ser consumida */

function buscarCep(e){
  const cep = e.target.value.replace(/\D/g,'');
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> res.json())
    .then((dados)=> {
      setValue('rua', dados.logradouro);
      setValue('bairro', dados.bairro);
      setValue('cidade', dados.localidade);
      setSemaforoInfo(dados.cep.charAt(dados.cep.length - 1) % 2 === 0
          ? 'Há um semáforo inteligente nesta rua.'
          : 'Não há um semáforo inteligente nesta rua.');
    });
}



  return(
    <>
    <form id='estatistica' onSubmit={handleSubmit(inserirCliente)}>
      <div>
        <h1>Dados Pessoais:</h1>

        <label>
          <input type="text" {...register('email')} placeholder='E-MAIL:'/>
          <span>{errors.email?.message}</span>
        </label>

        <label>
          <input type="text"{...register('cpf')} placeholder='CPF:'/>
          <span>{errors.cpf?.message}</span>
        </label>

      </div>

      <div id='div-end'>
        <h1>Endereço:</h1>

        <label>
          <input type="text" {...register('cep')} onBlur={buscarCep} placeholder='CEP:'/>
          <span>{errors.cep?.message}</span>
        </label>

         <label>
          <input type="text" {...register('rua')} placeholder='RUA:'/>
         </label>

         <label>
          <input type="text" {...register('bairro')} placeholder='BAIRRO:'/>
         </label>

         <label>
          <input type="text" {...register('cidade')} placeholder='CIDADE:'/>
         </label>

         <label>
          <input type="text" {...register('numero')} placeholder='NÚMERO:'/>
         </label>
                 
         <div id='semaforo-info'>{semaforoInfo}</div>

      <div id='button-estats'>
        <button type="reset">Limpar</button>
      </div>

      </div>
    </form>

    </>
  )
}
export default Estatistica;