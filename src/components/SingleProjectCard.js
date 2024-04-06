import limitWords from "../utils/limitWord"
import { format } from "date-fns"
import EditImg from "../assets/images/edit-svgrepo-com.svg"
import DeleteImg from "../assets/images/trash.svg"
import { allProjects } from "../features/projects"
import UpdateTaskDetailsOpen from "../features/OpenUpdateTaskFunctionality"
import createDetailModal from "./DetailComponent"

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
  let PriorityClass
  if (priority != "Not Defined") {
    PriorityClass = priority.toLowerCase()
  } else {
    PriorityClass = "noPriority"
  }
  console.log(priority)
  const Parent = document.createElement("div")
  Parent.classList.add("single_project", PriorityClass)
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
  if (status) {
    input.checked = true
  } else {
    input.checked = false
  }
  const span = document.createElement("span")
  span.className = "checkbox"
  input.addEventListener("click", () => {
    Project.updateTask(id, { status: !status })
  })
  ParentCheckBox.append(input, span)

  //Text Area

  const titleArea = document.createElement("div")
  titleArea.className = "title_area"
  const h5 = document.createElement("h5")
  h5.className = "title"
  h5.innerHTML = limitWords(title, 6)
  const para = document.createElement("p")
  para.innerHTML = limitWords(description, 10)
  titleArea.append(h5, para)

  // Right Section Items
  // Button
  const detailBtn = document.createElement("button")
  detailBtn.type = "button"
  detailBtn.className = "detail_btn"
  detailBtn.textContent = "DETAILS"
  detailBtn.addEventListener("click", () => {
    let detailModal = createDetailModal(id)
    let footer = document.getElementsByTagName("footer")[0]
    footer.appendChild(detailModal)
  })

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
  editDiv.addEventListener("click", () => {
    UpdateTaskDetailsOpen(id)
  })

  // Delete Section
  const deleteDiv = document.createElement("div")
  deleteDiv.className = "delete_task"
  const deleteImg = document.createElement("img")
  deleteImg.src = DeleteImg
  deleteDiv.appendChild(deleteImg)
  deleteDiv.addEventListener("click", () => {
    Project.deleteTask(id)
    window.location.reload()
    console.log(id)
  })

  leftSection.append(ParentCheckBox, titleArea)
  rightSection.append(detailBtn, DueDate, editDiv, deleteDiv)
  Parent.appendChild(leftSection)
  Parent.appendChild(rightSection)
  return Parent
}

export default SingleProjectCard
