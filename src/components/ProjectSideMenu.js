import SideBarIcon from "../assets/images/project-list.png"
function ProjectSidebarMenu(MenuName = "Undefined") {
  const ParentMenu = document.createElement("div")
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
