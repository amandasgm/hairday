// CARREGAMENTO DOS AGENDAMENTOS DE HOURS-LOAD.JS

// ! IMPORTAÇÕES
import { hoursLoad } from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js" 
import { schedulesShow } from "../scheldules/show.js"
import dayjs from "dayjs"

// ! VARIAVEIS CAPTADAS DO HTML
const selectedDate = document.getElementById("date") // input de data


// * RESPONSAVEL PELOS AGENDAMENTOS
export async function schedulesDay(){
  // Obtendo a data do input
  const date = selectedDate.value

  // Buscando na API os agendamentos para carregar do lado direito da tela. 
  const dailySchedules = await scheduleFetchByDay({ date })

  // Mostrando os agendamentos 
  schedulesShow({ dailySchedules })

  // Renderizando as horas disponiveis.
  hoursLoad({ date, dailySchedules })
}

