import { allProjects } from "../features/projects"
import { CreateTask } from "../features/createTask"
import AllProjectList from "../components/AllProjectList"

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
const task4 = new CreateTask(
  "April Titles",
  "Best Description",
  new Date("2024-04-05"),
  "Lows",
  "Work",
)
// const localStorageProjects = localStorage.getItem("projects")
// let MappedProjects
// if (localStorageProjects) {
//   MappedProjects = new Map(Object.entries(localStorageProjects))
// }
const Projects = new allProjects()
// Projects.appendTasks(task2)
// Projects.appendTasks(task1)
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

console.log(Projects.getAllTasks())
console.log(Projects.getAllTasksinProject("Grocery"))

// Append the AllProjects Here:
const main = document.getElementsByClassName("main")[0]
console.log(main)
main.append(AllProjectList())
