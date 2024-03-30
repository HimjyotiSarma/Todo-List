import limitWords from "../utils/limitWord"
import { format } from "date-fns"
import EditImg from "../assets/images/edit-svgrepo-com.svg"
import DeleteImg from "../assets/images/trash.svg"
import { allProjects } from "../features/projects"

const Project = new allProjects()

function SingleProjectCard({
  id,
  title,
  description,
  dueDate,
  priority,
  project,
  status,
}) {
  const Parent = document.createElement("div")
  Parent.classList.add("single_project", priority)
  const leftSection = document.createElement("div")
  leftSection.classList.add("left_project-area")
  const rightSection = document.createElement("div")
  rightSection.classList.add("right_project_area")

  const ParentCheckBox = document.createElement("div")
  ParentCheckBox.classList.add("task_checkbox")
  const label = document.createElement("label")
  ParentCheckBox.appendChild(label)
  const input = document.createElement("input")
  input.type = "checkbox"
  const span = document.createElement("span")
  span.className = "checkbox"
  input.addEventListener("click", () => {
    Project.updateTask(id, { priority: !priority })
  })
  ParentCheckBox.append(input, span)

  //Text Area

  const titleArea = document.createElement("div")
  titleArea.className = "title_area"
  const h5 = document.createElement("h5")
  h5.className = "title"
  h5.innerHTML = limitWords(title, 10)
  const para = document.createElement("p")
  para.innerHTML = limitWords(description, 15)
  titleArea.append(h5, para)

  // Right Section Items
  // Button
  const detailBtn = document.createElement("button")
  detailBtn.type = "button"
  detailBtn.className = "detail_btn"
  detailBtn.textContent = "DETAILS"

  // Task Due Date
  const DueDate = document.createElement("div")
  DueDate.className = "task_due_date"
  DueDate.innerHTML = format(dueDate, "do MMM, yy")

  // Edit Section
  const editDiv = document.createElement("div")
  editDiv.className = "edit_task"
  const editImg = document.createElement("img")
  editImg.src = EditImg
  editDiv.appendChild(editImg)

  // Delete Section
  const deleteDiv = document.createElement("div")
  deleteDiv.className = "delete_task"
  const deleteImg = document.createElement("img")
  deleteImg.src = DeleteImg
  deleteDiv.appendChild(deleteImg)
  deleteDiv.addEventListener("click", () => {
    Project.deleteTask(id)
  })

  leftSection.append(ParentCheckBox, titleArea)
  rightSection.append(detailBtn, DueDate, editDiv, deleteDiv)
  Parent.appendChild(leftSection)
  Parent.appendChild(rightSection)
  return Parent
}

export default SingleProjectCard
