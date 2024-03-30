import { nanoid } from "nanoid"
class CreateTask {
  constructor(
    title,
    description,
    dueDate = new Date(),
    priority = "Not Defined",
    project = "Untitled",
    status = false,
  ) {
    this.id = nanoid()
    this.title = title
    this.description = description
    this.dueDate = dueDate
    if (/^(high|medium|low)$/i.test(priority)) {
      this.priority = priority
    } else {
      this.priority = "Not Defined"
    }
    this.project = project
    this.status = status
  }
}

export { CreateTask }
