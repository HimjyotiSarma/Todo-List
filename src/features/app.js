import { allProjects } from "../features/projects"
import { CreateTask } from "../features/createTask"
import AllProjectList from "../components/AllProjectList"
import ProjectListMenu from "../components/ProjectListMenu"
import MainContent from "../components/mainContent"
import todayProjectList from "../components/todayProjectList"
import toggleCreateTaskModal from "../components/toggleCreateTaskModal"
import { addYears, format } from "date-fns"
import createProjectForm from "../components/CreateProjectForm"
import "./CreateTaskFunctionality"
import "../components/toggleSideMenu"
import createDefaultSidebar from "../components/defaultListMenu"

let todoApp = document.querySelector(".todoApp")

// const task1 = new CreateTask(
//   "Some Title",
//   "Best Description",
//   new Date("2024-07-10"),
//   "High",
//   "Work",
// )
// const task3 = new CreateTask(
//   "Recent Title",
//   "Best Description",
//   new Date("2024-03-29"),
//   "Medium",
//   "Work",
// )
// const task2 = new CreateTask(
//   "Second Title",
//   "Best Second Description",
//   new Date("2024-08-12"),
//   "Low",
//   "Grocery",
// )
// const task5 = new CreateTask(
//   "Second Title",
//   "Best Second Description",
//   new Date("2024-08-12"),
//   "High",
//   "Grocery",
// )
// const task4 = new CreateTask(
//   "Some New Title 31",
//   "Best Description",
//   new Date("2024-03-31"),
//   "Low",
//   "Work",
// )
// const localStorageProjects = localStorage.getItem("projects")
// let MappedProjects
// if (localStorageProjects) {
//   MappedProjects = new Map(Object.entries(localStorageProjects))
// }
const Projects = new allProjects()
// Projects.appendTasks(task2)
// Projects.appendTasks(task5)
// Projects.appendTasks(task4)
// Projects.getCategoryNames()
// Projects.deleteTask("Nf_ScZB7vv4xkNGTV3cyw")
// Projects.deleteAllTasks("Work")
// Projects.getProjectName("SDHV8UTDNXnWkNY7o9Qae")
// Projects.changeTaskStatus("jr0ENztlQebUxlt-BoX67")
// Projects.updateTask("jr0ENztlQebUxlt-BoX67", {
//   title: "Updated Best Title",
//   status: true,
// })

// console.log(Projects.getAllTasks())
// console.log(Projects.getAllTasksinProject("Work"))

const getCertainData = Projects.getTask("uv1XPT3l9f5dZTtws0mLt")
console.log(getCertainData)

// Append the AllProjects Here:
const main = document.getElementsByClassName("main")[0]
console.log(main)
// main.append(AllProjectList("Work"))

window.addEventListener("load", () => {
  createDefaultSidebar()
  let currentActiveMenu = localStorage.getItem("currentMenu") || "today"
  let allSideMenu = document.querySelectorAll(".side_menu")
  allSideMenu.forEach((sideMenu) => {
    sideMenu.className = "side_menu"
    if (
      sideMenu.getAttribute("data-project-name") ==
      localStorage.getItem("currentMenu")
    ) {
      sideMenu.className = "side_menu active"
    }
  })
  main.appendChild(MainContent(currentActiveMenu))
})
