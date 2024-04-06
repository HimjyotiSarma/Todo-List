import { format } from "date-fns"
import { allProjects } from "../features/projects"

function createDetailModal(taskID) {
  // Get Task Data
  let Projects = new allProjects()
  let TaskData = Projects.getTask(taskID) || {}
  const { id, title, description, dueDate, priority, project, status } =
    TaskData
  console.log(TaskData)
  // Create the main container
  let detailModal = document.createElement("aside")
  detailModal.id = "detailModal"
  detailModal.className = "modalArea openItem"

  // Create the modal content container
  let modalContent = document.createElement("div")
  modalContent.className = "modal_Content"
  detailModal.appendChild(modalContent)

  // Create the modal header
  let modalHead = document.createElement("div")
  modalHead.className = "modal_head"
  modalContent.appendChild(modalHead)

  let h1 = document.createElement("h1")
  h1.textContent = "Task Detail"
  modalHead.appendChild(h1)

  let span = document.createElement("span")
  span.className = "close"
  span.textContent = "\u00D7" // Unicode for '×'
  span.addEventListener("click", () => {
    detailModal.remove()
  })
  modalHead.appendChild(span)

  // Create the content section
  let contentSection = document.createElement("div")
  contentSection.className = "content_Section"
  modalContent.appendChild(contentSection)

  //   TaskData.forEach((task) => {
  //     console.log(task)
  //   })
  for (let key in TaskData) {
    if (key == "id") {
      continue
    }
    let detailArea = document.createElement("div")
    detailArea.className = "detail_area"
    contentSection.appendChild(detailArea)

    let h2 = document.createElement("h2")
    h2.textContent = key
    detailArea.appendChild(h2)

    let p = document.createElement("p")
    if (key == "dueDate") {
      p.textContent = format(dueDate, "do LLLL, yyyy")
    } else if (key == "status") {
      if (TaskData[key]) {
        p.textContent = "Done"
      } else {
        p.textContent = "Not Done"
      }
    } else {
      p.textContent = TaskData[key]
    }

    detailArea.appendChild(p)
  }

  // Return the created component
  return detailModal
}
export default createDetailModal
