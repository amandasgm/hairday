// * ADICIONAREMOS O EVENTO DE CLICK PARA OS HORARIOS DISPONIVEIS
export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available") // pega todos as horas disponiveis em hours-load.js

  // ? Para cada hora DISPONIVEL 
  hours.forEach(available => {
    // Adiciona o evento de clique
    available.addEventListener("click", (selected) => {
      
      // Remove a classe de selecionado (hour-selected) de todas as li nao selecionadas
      hours.forEach(hour => {
        hour.classList.remove("hour-selected")
      })

      // Adiciono a classe na li clicada (target)
      selected.target.classList.add("hour-selected")
    })
  })
}