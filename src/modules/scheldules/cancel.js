import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")){

      // Obtem a li pai do elemento clicado.
      const item = event.target.closest("li")

      // Pega o id para remover
      const { id } = item.dataset

      // Confirma que o ID foi selecionado
      if(id){
        // Confirma se o usuario quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?"
        )

        if(isConfirm){
          // Faz a requisicao na api para cancelar
          await scheduleCancel({ id })
          // Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })
})