import createProjectForm from "../components/CreateProjectForm"
import { allProjects } from "./projects"
let Projects = new allProjects()

function UpdateTaskDetailsOpen(taskId) {
  let updateParentDiv = document.getElementById("updateModal")
  let updateTaskFormSubmit = document.getElementById("updateTaskFormSubmit")
  console.log(updateTaskFormSubmit)
  let ModalContent = document.querySelector("#update_form")
  console.log(ModalContent)
  updateParentDiv.className = "modalArea openItem"
  const getTaskDetails = Projects.getTask(taskId) || {}
  if (!getTaskDetails) {
    console.error("The Task is not Found the Local Database")
  }
  const { id, title, description, dueDate, priority, project, status } =
    getTaskDetails
  let titleForm = document.getElementById("Updatetitle")
  titleForm.value = title
  let descritptionDetails = document.getElementById("Updatedescription")
  descritptionDetails.value = description
  let dueDateArea = document.getElementById("UpdatedueDate")
  dueDateArea.value = dueDate
  let priorityArea = document.getElementById("Updatepriority")
  let allOptions = priorityArea.querySelectorAll("option")
  allOptions.forEach((option) => {
    if (option.value == priority) {
      option.selected = true
    }
  })

  let ProjectNames = Projects.getCategoryNames()
  //   let Create_New_Project = document.getElementById("Create_New_Project")
  let ProjectArea = document.getElementById("Updateproject")
  let Select_Project_Div = document.querySelector(".Update_Project")
  ProjectNames.forEach((project) => {
    let option = document.createElement("option")
    option.value = project
    option.textContent = project
    ProjectArea.append(option)
  })
  let createNewProject = document.createElement("option")
  createNewProject.value = "Create New"
  createNewProject.textContent = "CREATE NEW ONE"
  createNewProject.style.fontWeight = "bold"
  createNewProject.style.fontStyle = "italic"
  ProjectArea.append(createNewProject)

  let allProjectOptions = priorityArea.querySelectorAll("option")
  allProjectOptions.forEach((option) => {
    if (option.value == project) {
      option.selected = true
    }
  })

  ProjectArea.addEventListener("change", function () {
    if (this.value == "Create New") {
      Select_Project_Div.remove()
      let CreateNewProject = createProjectForm("Updateproject")
      ModalContent.insertBefore(CreateNewProject, updateTaskFormSubmit)
    }
  })

  // Close Modal
  let closeBtn = document.querySelector(
    "#updateModal > .modal_Content > .modal_head > .close",
  )
  closeBtn.addEventListener("click", () => {
    updateParentDiv.className = "modalArea closeItem"
  })
  let originalFormData = new FormData(document.getElementById("update_form"))

  // Click Update Functionality
  ModalContent.addEventListener("submit", (e) => {
    e.preventDefault()
    let currentFormData = new FormData(e.currentTarget)
    let updates = {}
    for (let key of originalFormData.keys()) {
      if (originalFormData.get(key) != currentFormData.get(key)) {
        updates[key] = currentFormData.get(key)
      }
    }
    Projects.updateTask(taskId, updates)
    updateParentDiv.className = "modalArea closeItem"
    window.location.reload()
  })
}

export default UpdateTaskDetailsOpen
