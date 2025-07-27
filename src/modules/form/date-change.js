// TODO: ATUALIZA A LISTA DE HORARIOS QUANDO ALGUMA DATA FUTURA É SELECIONADA 

// ! IMPORTAÇÕES
import {schedulesDay} from "../scheldules/load.js"

// ! VARIAVEIS CAPTADAS DO HTML
const selectedDate = document.getElementById("date")

// * RECARREGA A LISTA DE HORARIOS QUANDO O INPUT MUDAR 
selectedDate.onchange = () => {
  schedulesDay()
}