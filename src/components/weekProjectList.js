import { isThisWeek } from "date-fns"
import { allProjects } from "../features/projects"
import SingleProjectCard from "./SingleProjectCard"
// Change the active Project to Today Later;
const Project = new allProjects()

function weekProjectList() {
  const allTasksInProject = Project.getAllTasks()
  const Parent = document.createElement("div")
  Parent.className = "list_all_projects"
  const h3 = document.createElement("h3")
  h3.className = "Project_Title"
  h3.innerHTML = "Week's Task(s)"
  const ProjectListDiv = document.createElement("div")
  ProjectListDiv.className = "project_list_section"

  for (let [ProjectName, taskList] of allTasksInProject) {
    for (let task of taskList) {
      const { id, title, description, dueDate, priority, project, status } =
        task
      if (isThisWeek(dueDate)) {
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
    }
  }
  if (!ProjectListDiv.hasChildNodes()) {
    const emptyContent = document.createElement("div")
    emptyContent.className = "empty_Content"
    emptyContent.innerText = "There is no Tasks assigned in this Week"
    ProjectListDiv.appendChild(emptyContent)
  }
  Parent.append(h3, ProjectListDiv)
  return Parent
}
export default weekProjectList
