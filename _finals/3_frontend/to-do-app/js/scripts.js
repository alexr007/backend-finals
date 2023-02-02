const deleteTaskButtons = document.querySelectorAll(".task-icons-item");
deleteTaskButtons.forEach(button => button.addEventListener("click", showDeleteModal));

const overlay = document.querySelector(".overlay");
const deleteModal = document.querySelector(".modal");
deleteModal.addEventListener("click", function({target}){
    if(target.classList.contains("modal-close")) {
        this.classList.remove("open");
        overlay.classList.remove("show");
    }

});

function showDeleteModal(){

    overlay.classList.add("show");

    deleteModal.classList.add("open");
}