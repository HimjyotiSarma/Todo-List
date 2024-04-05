const toggleCreateTaskModal = () => {
  let CreateTaskModal = document.getElementById("createModal")
  let ModalContent = document.getElementsByClassName("modal_Content")[0]
  let ModalClose = document.getElementsByClassName("close")[0]
  console.log(ModalClose)
  ModalClose.addEventListener("click", () => {
    CreateTaskModal.className = "modalArea closeItem"
    ModalClose.classList.remove("animateClose")
  })
  CreateTaskModal.addEventListener("click", (e) => {
    let modalDimension = ModalContent.getBoundingClientRect()

    if (
      e.clientX < modalDimension.left - 1 ||
      e.clientX > modalDimension.right + 1 ||
      e.clientY < modalDimension.top - 1 ||
      e.clientY > modalDimension.bottom + 1
    ) {
      ModalClose.classList.add("animateClose")
      setTimeout(function () {
        ModalClose.classList.remove("animateClose")
      }, 3000)
    }
    ModalClose.addEventListener("mouseover", function () {
      ModalClose.classList.remove("animateClose")
    })
  })
}
export default toggleCreateTaskModal
