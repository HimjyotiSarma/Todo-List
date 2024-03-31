import { allProjects } from "../features/projects"
import { CreateTask } from "../features/createTask"
import AllProjectList from "../components/AllProjectList"
import ProjectListMenu from "../components/ProjectListMenu"
import MainContent from "../components/mainContent"

const task1 = new CreateTask(
  "Some Title",
  "Best Description",
  new Date("2024-07-10"),
  "High",
  "Work",
)
const task3 = new CreateTask(
  "Recent Title",
  "Best Description",
  new Date("2024-03-29"),
  "Medium",
  "Work",
)
const task2 = new CreateTask(
  "Second Title",
  "Best Second Description",
  new Date("2024-08-12"),
  "Low",
  "Grocery",
)
const task5 = new CreateTask(
  "Second Title",
  "Best Second Description",
  new Date("2024-08-12"),
  "High",
  "Grocery",
)
const task4 = new CreateTask(
  "Some New Title 31",
  "Best Description",
  new Date("2024-03-31"),
  "Low",
  "Work",
)
// const localStorageProjects = localStorage.getItem("projects")
// let MappedProjects
// if (localStorageProjects) {
//   MappedProjects = new Map(Object.entries(localStorageProjects))
// }
const Projects = new allProjects()
// Projects.appendTasks(task2)
// Projects.appendTasks(task5)
Projects.appendTasks(task4)
// Projects.getCategoryNames()
// Projects.deleteTask("Nf_ScZB7vv4xkNGTV3cyw")
// Projects.deleteAllTasks("Work")
// Projects.getProjectName("SDHV8UTDNXnWkNY7o9Qae")
// Projects.changeTaskStatus("jr0ENztlQebUxlt-BoX67")
// Projects.updateTask("jr0ENztlQebUxlt-BoX67", {
//   title: "Updated Best Title",
//   status: true,
// })

console.log(Projects.getAllTasks())
console.log(Projects.getAllTasksinProject("Work"))

// Append the AllProjects Here:
const main = document.getElementsByClassName("main")[0]
console.log(main)
main.append(AllProjectList("Work"))

document.addEventListener("load", ProjectListMenu())
let sideMenus = document.querySelectorAll(".side_menu")
sideMenus.forEach((sideMenu) => {
  let project_name = sideMenu.getAttribute("data-project-name")
  sideMenu.addEventListener("click", () => {
    main.innerHTML = ""
    main.appendChild(MainContent(project_name))
  })
})
const allProjectMenu = Projects.getCategoryNames()
// const
// for()
