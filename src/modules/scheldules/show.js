// ! IMPORTAÇÕES
import dayjs from "dayjs";

// ! VARIAVEIS CAPTADAS DO HTM - sessões manhã, tarde e noite
const periodMorning = document.getElementById("period-morning") // manhã
const periodAfternoon = document.getElementById("period-afternoon") // tarde
const periodNight = document.getElementById("period-night") // noite

// * MOSTRANDO TODOS OS AGENDAMENTOS
export function schedulesShow({ dailySchedules }) {
  try {
    // Limpando todos os campos 
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""


    // ? Renderizando agendamentos por periodo.
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li") // li
      const time = document.createElement("strong") // strong - horario
      const name = document.createElement("span") // span - nome

      // Adicionando ID do agendamento
      item.setAttribute("data-id", schedule.id)

      // Adicionando o HORARIO do agendamento
      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name

      // Criando icone de cancelar o agendamento
      const cancelIcon = document.createElement("img") // criando elemento
      cancelIcon.classList.add("cancel-icon") // passando o estilo
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg") // colocando o icone

      // Adicionando o tempo, nome e icone no item
      item.append(time, name, cancelIcon)

      // Renderiza o agendamento na sessão (manhã, tarde ou noite)
      const hour = dayjs(schedule.when).hour()
      
      if (hour <= 12){
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else if (hour > 18){
        periodNight.appendChild(item)
      }
    })

  } catch (error) {
    alert(error + "Não foi possivel exibir os agendamentos")
  }
}