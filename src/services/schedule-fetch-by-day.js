// ! IMPORTAÇÕES
import dayjs from "dayjs"
import { apiConfig } from "./api-config"


// * BUSCANDO AGENDAMENTOS POR DIA
export async function scheduleFetchByDay({ date }){
  try {
    // Buscando dados na API (fazendo requisição)
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // Convertendo para JSON
    const data = await response.json()

    // Filtrando agendamentos por dia selecionado
    const dailyScheduless = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    )
      
    return dailyScheduless
    
  } catch (error) {
    alert(error + "Erro ao buscar os agendamentos do dia")
  }
}