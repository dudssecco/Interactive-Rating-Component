const start = document.querySelector('.start')
const end = document.querySelector('.end')
const submit = document.querySelector('.enviar')
const valor = document.querySelector('#valor')
const valores = document.querySelectorAll('.btn')

submit.addEventListener("click", () =>{
    end.classList.remove('hidden')
    start.style.display = 'none'
})

valores.forEach((rate) => {
    rate.addEventListener("click", () => {
        valor.innerHTML = rate.innerHTML
    })
})