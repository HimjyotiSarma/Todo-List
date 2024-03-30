import { allProjects } from "../features/projects"
import SingleProjectCard from "./SingleProjectCard"
// Change the active Project to Today Later;
const Project = new allProjects()

function AllProjectList(activeProject = "Grocery") {
  const allTasksInProject = Project.getAllTasksinProject(activeProject)

  const Parent = document.createElement("div")
  Parent.className = "list_all_projects"
  const h3 = document.createElement("h3")
  h3.className = "Project_Title"
  h3.innerHTML = activeProject
  const ProjectListDiv = document.createElement("div")
  ProjectListDiv.className = "project_list_section"
  for (let task of allTasksInProject) {
    const { id, title, description, dueDate, priority, project, status } = task
    ProjectListDiv.appendChild(
      SingleProjectCard({
        id,
        title,
        description,
        dueDate,
        priority,
        project,
        status,
      }),
    )
  }
  Parent.append(h3, ProjectListDiv)
  return Parent
}
export default AllProjectList
