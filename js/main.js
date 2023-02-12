const formSubmit = document.querySelector(".main__form-submit");
const modal = document.querySelector(".modal");
const modalWrapper = modal.querySelectorAll(".modal__wrapper");

formSubmit.addEventListener("click", form);

function form(event) {
    event.preventDefault();
    const inputName = document.querySelector("#name").value;
    const inputEmail = document.querySelector("#email").value;

    if(inputName && inputEmail) {
        showModal(0, 'sucess');
    } else {
        showModal(1, 'error');
    }
}

function showModal(indice, status) {
    modal.classList.add("active");
    modalWrapper[indice].classList.add(status);
    
    modalWrapper[indice].addEventListener("click", (event) => {
        const {target} = event
        
        if(target.nodeName === "BUTTON") {
            closeModal(indice, status);
        }
    })
}

function closeModal(indice, status) {
    modalWrapper[indice].classList.remove(status);
    modal.classList.remove("active");
}