// Form

import { addYears, format } from "date-fns"
import toggleCreateTaskModal from "../components/toggleCreateTaskModal"
import { allProjects } from "./projects"
import createProjectForm from "../components/CreateProjectForm"
import { CreateTask } from "./createTask"
const Projects = new allProjects()
// Get the Form of CreateTask
const createTaskForm = document.getElementById("Create_form")
const createTaskFormSubmit = document.getElementById("createTaskFormSubmit")

createTaskForm.addEventListener("submit", function (e) {
  e.preventDefault()
  let CreateTaskFormData = new FormData(e.currentTarget)
  // let allFormData = [...CreateTaskFormData.entries()]
  // console.log(allFormData)
  if (!CreateTaskFormData.has("priority")) {
    CreateTaskFormData.append("priority", "Not Defined")
  }
  if (
    !CreateTaskFormData.has("project") ||
    CreateTaskFormData.get("project") == ""
  ) {
    CreateTaskFormData.append("project", "Untitled")
  }
  const formObject = Object.fromEntries(CreateTaskFormData.entries())
  console.log(formObject)
  let newTask = new CreateTask(
    formObject.title,
    formObject.description,
    formObject.dueDate,
    formObject.priority,
    formObject.project,
  )
  console.log("New Task Entry: ", newTask)
  Projects.appendTasks(newTask)
  window.location.reload()
  //   e.currentTarget.reset()
})

// Close and Open Create Task Modal
let CreateTaskModal = document.getElementById("createModal")
let ModalContent = CreateTaskModal.getElementsByTagName("form")[0]
const addTaskBtn = document.querySelector(".add_Task_btn")
addTaskBtn.addEventListener("click", () => {
  let CreateTaskModal = document.getElementById("createModal")
  CreateTaskModal.className = "modalArea openItem"
  console.log("Button click")
  toggleCreateTaskModal()
})

// Due Date
let DueDate = document.querySelector('input[type="date"]')
let formatDateStart = format(new Date(), "yyyy-MM-dd")
let formatDateEnd = format(addYears(new Date(), 1), "yyyy-MM-dd")
DueDate.min = formatDateStart
DueDate.max = formatDateEnd
DueDate.value = formatDateStart

// List Available Project
let Select_Project_Div = document.querySelector(".Select_Project")
let ProjectSelect = document.getElementById("project")
let ProjectNames = Projects.getCategoryNames()
let Create_New_Project = document.getElementById("Create_New_Project")
let UntitledProject = document.createElement("option")
UntitledProject.value = "Untitled"
UntitledProject.textContent = "Untitled"
UntitledProject.selected = "true"
UntitledProject.disabled = "true"
ProjectSelect.append(UntitledProject)
ProjectNames.forEach((project) => {
  let option = document.createElement("option")
  option.value = project
  option.textContent = project
  ProjectSelect.append(option)
})

let createNewProject = document.createElement("option")
createNewProject.value = "Create New"
createNewProject.textContent = "CREATE NEW ONE"
createNewProject.style.fontWeight = "bold"
createNewProject.style.fontStyle = "italic"
ProjectSelect.append(createNewProject)

ProjectSelect.addEventListener("change", function () {
  if (this.value == "Create New") {
    Select_Project_Div.remove()
    let CreateNewProject = createProjectForm()
    ModalContent.insertBefore(CreateNewProject, createTaskFormSubmit)
  }
})
