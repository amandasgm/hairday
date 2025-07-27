// TODO: ENVIAR O NOVO AGENDAMENTO PARA REGISTRAR NA API
// ASYNC: Você vai esperar alguma coisa que demora, mas não quer travar o resto do programa.

// ! IMPORTAÇÕES
import { apiConfig } from "./api-config.js"; 



// * ENVIANDO (POST) O AGENDAMENTO PARA A API
// cada agendamento vai conter 3 propriedades: id, name e when (desestruturado ja)
export async function schedulesNew({ id, name, when }){

  try {
    // Fazendo requisição para enviar dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, when })
    })

    // Exibe mensagem de agendamento realizado
    alert("Agendamento realizado com sucesso")

  } catch (error) {
    alert(error + "Não foi possivel agenda. Tente novamente mais tarde")
  }
}
