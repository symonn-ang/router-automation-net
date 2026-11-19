const status = document.getElementById("status")
const btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click", () => {
    status.textContent = "Connected"
})

