import { allProjects } from "../features/projects"
import ProjectSidebarMenu from "./ProjectSideMenu"
function ProjectListMenu() {
  let Projects = new allProjects()
  let ProjectNames = Projects.getCategoryNames()
  let ProjectSection = document.querySelector(".project-section")
  let h5 = document.createElement("h5")
  h5.innerText = "My List"
  let allProjectList = document.createElement("div")
  allProjectList.className = "all_Projects_List"
  ProjectNames.forEach((menuItem) => {
    allProjectList.appendChild(ProjectSidebarMenu(menuItem))
  })

  ProjectSection.append(h5, allProjectList)
  return ProjectSection
}
export default ProjectListMenu
