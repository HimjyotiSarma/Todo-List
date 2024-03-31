import { allProjects } from "../features/projects"
import allAvailableList from "./AllAvailableTasks"
import AllProjectList from "./AllProjectList"
import todayProjectList from "./todayProjectList"
import weekProjectList from "./weekProjectList"

function MainContent(dataName = "today") {
  if (dataName == "today") {
    return todayProjectList()
  } else if (dataName == "seven_days") {
    return weekProjectList()
  } else if (dataName == "all_tasks") {
    return allAvailableList()
  } else {
    return AllProjectList(dataName)
  }
}

export default MainContent
