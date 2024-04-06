import { isToday } from "date-fns"

class allProjects {
  // constructor(Projects) {
  //   // Get all the tasks from Local Storage and store it in this.Projects
  //   // Do this in root directory =>  const localProjects = JSON.parse(localStorage.getItem("projects"))
  //   this.Projects = Projects || localStorage.getItem("projects") || "{}"
  // }
  getAllTasks() {
    // const localProjectsData = JSON.parse(localStorage.getItem("projects")) || {}
    const localProjectsData = localStorage.getItem("projects") || "{}"
    const parsedProjects = JSON.parse(localProjectsData)
    console.log(parsedProjects)
    const MappedProjects = new Map(Object.entries(parsedProjects))
    return MappedProjects
  }
  getAllTasksinProject(projectName) {
    // const localProjectsData = JSON.parse(localStorage.getItem("projects")) || {}
    let filteredProject
    const localProjectsData = localStorage.getItem("projects") || "{}"
    const parsedProjects = JSON.parse(localProjectsData)
    console.log(parsedProjects)
    const MappedProjects = new Map(Object.entries(parsedProjects))
    if (
      MappedProjects.has(projectName) &&
      MappedProjects.get(projectName).length != 0
    ) {
      filteredProject = MappedProjects.get(projectName)
    } else {
      filteredProject = null
    }
    if (!filteredProject) {
      console.log("No Such Project is Found")
    }
    return filteredProject
  }
  getCategoryNames() {
    const MappedProjects = this.getAllTasks()
    const CategoryIterator = MappedProjects.keys()
    const allProjectsKey = Array.from(CategoryIterator)
    console.log(allProjectsKey)
    return allProjectsKey
  }
  storeInLocal(MapProjects) {
    const sortedMapItems = this.sortByDate(MapProjects)
    const JsonProjects = JSON.stringify(Object.fromEntries(sortedMapItems))
    console.log(MapProjects)
    localStorage.setItem("projects", JsonProjects)
    console.log(JsonProjects)
  }
  sortByDate(MapProjects) {
    let dataArrayProjects = Array.from(MapProjects)
    dataArrayProjects.forEach(([project, entries]) =>
      entries.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)),
    )
    let sortedDueDate = new Map(dataArrayProjects)
    return sortedDueDate
  }

  appendTasks(newTask) {
    const MappedProjects = this.getAllTasks()
    console.log(newTask.project)
    if (MappedProjects.has(newTask.project)) {
      // If the project exists, push the task to its array of tasks
      MappedProjects.get(newTask.project).push(newTask)
    } else {
      // If the project doesn't exist, add the project along with its task
      MappedProjects.set(newTask.project, [newTask])
    }
    this.storeInLocal(MappedProjects)
    // if (isToday(newTask.dueDate)) {
    //   this.storeTodayList(newTask)
    // }
  }

  deleteTask(id) {
    const MappedTasks = this.getAllTasks()
    const ArrTasks = Array.from(MappedTasks)
    console.log(ArrTasks)
    // ArrTasks.forEach(([key, items]) => {
    //   items = items.filter((item) => item.id != id)
    // })
    for (const [project, tasks] of MappedTasks) {
      let newTasks = tasks.filter((item) => item.id != id)
      console.log(newTasks)

      if (!newTasks.length) {
        MappedTasks.delete(project)
        localStorage.setItem("currentMenu", "all_tasks")
      } else {
        MappedTasks.set(project, newTasks)
      }
    }
    // const deletedItemMap = new Map(ArrTasks)
    this.storeInLocal(MappedTasks)
  }

  deleteAllTasks(project) {
    const MappedTasks = this.getAllTasks()
    MappedTasks.delete(project)
    this.storeInLocal(MappedTasks)
  }
  getProjectName(id) {
    const MappedTasks = this.getAllTasks()
    for (const [project, items] of MappedTasks) {
      if (items.find((item) => item.id == id)) {
        console.log(project)
        return project
      }
    }
  }
  getTask(id) {
    const MappedTasks = this.getAllTasks()
    let taskData = []
    for (const [project, tasks] of MappedTasks) {
      tasks.forEach((task) => {
        if (task.id == id) {
          taskData = task
        }
      })
    }
    console.log("No Such Task Found")
    return taskData
  }
  updateTask(id, newUpdatedTask) {
    // Write a Proper Edit Later
    // this.deleteTask(id)
    // this.appendTasks(newUpdatedTask);
    const MappedTasks = this.getAllTasks()
    for (const [key, tasks] of MappedTasks) {
      tasks.forEach((task) => {
        if (task.id == id) {
          if (newUpdatedTask.title !== undefined) {
            task.title = newUpdatedTask.title
          }
          if (newUpdatedTask.description !== undefined) {
            task.description = newUpdatedTask.description
          }
          if (newUpdatedTask.dueDate !== undefined) {
            task.dueDate = newUpdatedTask.dueDate
          }
          if (newUpdatedTask.priority !== undefined) {
            task.priority = newUpdatedTask.priority
          }
          if (newUpdatedTask.project !== undefined) {
            task.project = newUpdatedTask.project
          }
          if (newUpdatedTask.status !== undefined) {
            task.status = newUpdatedTask.status
          }
        }
      })
      MappedTasks.set(key, tasks)
    }
    this.storeInLocal(MappedTasks)
  }
  changeTaskStatus(id) {
    const MappedTask = this.getAllTasks()
    for (const [project, tasks] of MappedTask) {
      tasks.forEach((task) => {
        if (task.id == id) {
          task.complete = !task.complete
        }
      })
      MappedTask.set(project, tasks)
    }
    this.storeInLocal(MappedTask)
    console.log(MappedTask)
  }
  // storeTodayList(newTask) {
  //   // let todatDate = new Date().getDate();

  //   const MappedProjects = this.getAllTasks()
  //   if (MappedProjects.has("today")) {
  //     MappedProjects.get("today").push(newTask)
  //   } else {
  //     MappedProjects.set("today", [newTask])
  //   }
  //   this.storeInLocal(MappedProjects)
  //   console.log("Stored in Today List")
  // }
  // storeWeekList(newTask) {
  //   // let todayDate = new Date().getDate();

  //   const MappedProjects = this.getAllTasks()
  //   if (MappedProjects.has("inThisWeek")) {
  //     MappedProjects.get("today").push(newTask)
  //   } else {
  //     MappedProjects.set("today", [newTask])
  //   }
  //   this.storeInLocal(MappedProjects)
  //   console.log("Stored in Today List")
  // }
}

export { allProjects }
