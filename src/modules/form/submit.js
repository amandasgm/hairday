// ! IMPORTAÇÕES
import dayjs from "dayjs";

import { schedulesNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../scheldules/load.js";

// ! VARIAVEIS CAPTADAS DO HTML
const form = document.querySelector("form") // formulario inteiro
const selectedDate = document.getElementById("date") // input da data
const clientName = document.getElementById("client") // input do nome do cliente

// ! VARIAVEIS CRIADAS
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")



// * DATA ATUAL
selectedDate.value = inputToday // valor
selectedDate.min = inputToday // valor minimo


// * AO CLICAR EM ENVIAR
form.onsubmit = async (e) => {
  e.preventDefault()

  try {
    // ? Name
    // Recuperando o nome do cliente e o torna obrigatorio
    const name = clientName.value.trim() // remove espaços extras
    if(!name){ // se name for false/vazio
      return alert("Informe o nome do cliente")
    }


    // ? Horario
    // Recupera o horario selecionado e o torna obrigatorio
    const hourSelected = document.querySelector(".hour-selected")

    if(!hourSelected){
      return alert("Informe o horario")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":") // result: "08"

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour") 

    // Gera um ID
    const id = new Date().getTime()

    // Faz o agendamento
    await schedulesNew({id, name, when})

    // Recarrega os agendamentos
    await schedulesDay()

    // Limpa o nome do cliente
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento")
  }
}
