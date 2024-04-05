import todayIcon from "../assets/images/icons8-today-96.png"
import weekIcon from "../assets/images/icons8-plus-1-week-96.png"
import allTaskIcon from "../assets/images/icons8-calendar-96.png"
import ButtonImg from "../assets/images/add-tasks.png"
import ProjectListMenu from "./ProjectListMenu"
import MainContent from "./mainContent"
function createDefaultSidebar() {
  // Main Menu
  let main = document.querySelector(".main")
  // Get the Container
  let sideBar = document.querySelector(".sideBar")

  // Create the default_sidebar div
  let defaultSidebar = document.querySelector(".default_sidebar")

  // Define the sidebar items
  let sidebarItems = [
    {
      projectName: "today",
      icon: todayIcon,
      text: "Today",
    },
    {
      projectName: "seven_days",
      icon: weekIcon,
      text: "Next 7 days",
    },
    {
      projectName: "all_tasks",
      icon: allTaskIcon,
      text: "All my Tasks",
    },
  ]

  // Create the sidebar items
  for (let item of sidebarItems) {
    let div = document.createElement("div")
    div.className = "side_menu"
    div.setAttribute("data-project-name", item.projectName)

    let img = document.createElement("img")
    img.src = item.icon

    div.appendChild(img)
    div.appendChild(document.createTextNode(item.text))
    div.addEventListener("click", () => {
      main.innerHTML = ""
      localStorage.setItem("currentMenu", item.projectName)
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
      main.appendChild(MainContent(item.projectName))
    })

    defaultSidebar.appendChild(div)
  }

  // Create the project section
  ProjectListMenu()

  // Create the add task button
  // let button = document.createElement("button")
  // button.className = "add_Task_btn default_unstyle_btn"
  // button.type = "button"

  // let buttonImg = document.createElement("img")
  // buttonImg.src = ButtonImg
  // buttonImg.alt = "Add tasks button"

  // button.appendChild(buttonImg)
  // button.appendChild(document.createTextNode("Add Task"))

  // sideBar.append(defaultSidebar, ProjectArea, button)

  // Return the created sidebar
  return sideBar
}

export default createDefaultSidebar
