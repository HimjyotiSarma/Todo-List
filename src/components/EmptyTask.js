import createButton from "./addTaskButton"

function EmptyTask() {
  let Parent = document.createElement("div")
  Parent.className = "empty_Items"
  let h3 = document.createElement("h3")
  let p = document.createElement("p")
  p.innerText = "The List is Empty. Create New Tasks to show the List"
  let addTaskButton = createButton()
  Parent.append(h3, p, addTaskButton)
  return Parent
}
export default EmptyTask
