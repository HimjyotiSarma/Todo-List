import AddTaskImg from "../assets/images/add-tasks.png"

function createButton() {
  // Create the button
  let button = document.createElement("button")
  button.className = "add_Task_btn default_unstyle_btn"
  button.type = "button"

  // Create the image
  let img = document.createElement("img")
  img.src = AddTaskImg // Replace with the actual path to your image
  img.alt = "add tasks button"

  // Add the image and text to the button
  button.appendChild(img)
  button.appendChild(document.createTextNode("Add Task"))

  // Return the created button
  return button
}

export default createButton
