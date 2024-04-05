function createProjectForm() {
  // Create the div element
  let formArea = document.createElement("div")
  formArea.className = "form_Area"
  formArea.id = "Create_New_Project"

  // Create the label element
  let label = document.createElement("label")
  label.setAttribute("for", "project")
  label.textContent = "New Project"

  // Create the input element
  let input = document.createElement("input")
  input.type = "text"
  input.name = "project"
  input.id = "project"
  input.placeholder = "Enter New Project..."
  // input.required = true

  // Append the label and input elements to the div
  formArea.appendChild(label)
  formArea.appendChild(input)

  return formArea
}

export default createProjectForm
