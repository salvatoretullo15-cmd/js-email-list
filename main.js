//creiamo la variabile per il link della chiamate api
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail"
//qui richiamiamo l'elemento email list con getelementbyid
const emailListEl = document.getElementById("email_list")
const buttonEl = document.getElementById("btn")
//qui utilizzeremo il metodo con fetch
//creiamo una funzione di generazione delle mail
function generateEmail() {
    //utilizziamo un ciclo for per generare dieci mail
    for (let i = 0; i < 10; i++) {
      //apriamo una funzione fetch
      fetch(endpoint)
        //questo then ci tradurra il il contenuto del link in linguaggio js
        .then(response => response.json())
        //con questo invece lo si lavora
        .then((data) => {
            //destrutturazione dell'object
            const { response } = data
            //creazione della variabile markup con un template litteral con response
            const markup = `<li>${response}<li>`
            //trascriviamo il markup creato dentro ul
            emailListEl.innerHTML += markup
        })
    }
}
generateEmail()
//creazione della funzione inerente al bottone per il refresh delle mail
buttonEl.addEventListener("click", function () {
    emailListEl.innerHTML = ""
    generateEmail()
})