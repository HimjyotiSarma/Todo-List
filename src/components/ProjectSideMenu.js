import SideBarIcon from "../assets/images/project-list.png"
import MainContent from "./mainContent"
function ProjectSidebarMenu(MenuName = "Undefined") {
  const main = document.getElementsByClassName("main")[0]
  const ParentMenu = document.createElement("div")
  ParentMenu.addEventListener("click", () => {
    main.innerHTML = ""
    localStorage.setItem("currentMenu", MenuName)
    let allSideMenu = document.querySelectorAll(".side_menu")
    console.log(allSideMenu)
    allSideMenu.forEach((sideMenu) => {
      sideMenu.className = "side_menu"
      console.log("Data Name : ", sideMenu.getAttribute("data-project-name"))
      console.log("localStorage Name : ", localStorage.getItem("currentMenu"))
      if (
        sideMenu.getAttribute("data-project-name") ==
        localStorage.getItem("currentMenu")
      ) {
        sideMenu.className = "side_menu active"
      }
    })
    main.appendChild(MainContent(MenuName))
  })
  ParentMenu.setAttribute("data-project-name", MenuName)
  ParentMenu.className = "side_menu"
  const SideBarImg = document.createElement("img")
  SideBarImg.src = SideBarIcon
  SideBarImg.alt = `Sidebar Menu Icon of ${MenuName}`
  console.log(SideBarImg)
  ParentMenu.append(SideBarImg, MenuName)
  console.log(ParentMenu)
  return ParentMenu
}

export default ProjectSidebarMenu
