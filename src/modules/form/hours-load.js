// ! IMPORTAÇÕES
import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js" // importa as horas disponiveis
import { hoursClick } from "./hours-click.js"

// ! VARIAVEIS CAPTADAS DO HTML
const hours = document.getElementById("hours") // ul das horas



// * RESPONSAVEL PELAS HORAS DISPONIVEIS PARA AGENDAMENTO
export function hoursLoad({ date, dailySchedules }){
  // Limpa a lista de horarios
    hours.innerHTML = ""
     
    // Obtem a lista de horarios ocupados
    const unavailableHours = dailySchedules.map((schedule) => 
      dayjs(schedule.when).format("HH:mm")
    )

    console.log(unavailableHours)


  // ? Percorre cada hora disponivel dentro de opening-hours.js
  const opening = openingHours.map((hour) => {
     
    // recupera somente a hora
    const [schedulesHour] = hour.split(":")

    // add a hora na data e verifica se está no passado
    const isHoursPast = dayjs(date).add(schedulesHour, "hour").isBefore(dayjs())
    
    const available = !unavailableHours.includes(hour) && !isHoursPast

    return {
      hour, 
      available,
    }
    
  })

  // ? Renderiza os horarios
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")

    li.classList.add(available ? "hour-available" : "hour-unavailable" )

    li.textContent = hour

    // Adiciona o texto do periodo "Manhã", "Tarde" e "Noite" 
    if(hour === "9:00"){
      hourHeaderAdd("Manhã")
    } else if(hour === "13:00"){
      hourHeaderAdd("Tarde")
    } else if(hour === "18:00"){
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  // Adiciona o evento de clique nos horarios disponiveis
    hoursClick()
}


// * SEPARANDO OS HORARIOS PELO PERÍODO
function hourHeaderAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}