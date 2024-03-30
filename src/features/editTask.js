class editTask {
  constructor(id, allTasks) {
    this.id = id
    this.allTasks = allTasks
  }
  setTitle(id, newTitle) {
    const newTaskList = this.allTasks.map((task) => {
      if (task.id == id) {
        return { ...task, title: newTitle }
      }
      return task
    })
    this.allTasks = newTaskList
    // Add the localhost functionality
  }
  setDescription(id, newDescription) {
    const newTaskList = this.allTasks.map((task) => {
      if (task.id == id) {
        return { ...task, description: newDescription }
      }
      return task
    })
    this.allTasks = newTaskList
  }
  setDueDate(id, newDate) {
    const newTaskList = this.allTasks.map((task) => {
      if (task.id == id) {
        return { ...task, dueDate: newDate }
      }
      return task
    })
    this.allTasks = newTaskList
  }
  setPriority(id, newPriority) {
    if (
      newPriority != "High" ||
      newPriority != "Medium" ||
      newPriority != "Low"
    ) {
      throw new Error("The Priority Specified is incorrect. Please Check Again")
    }
    const newTaskList = this.allTasks.map((task) => {
      if (task.id == id) {
        return { ...task, priority: newPriority }
      }
      return task
    })
    this.allTasks = newTaskList
  }
}

export { editTask }
