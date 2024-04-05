import MainContent from "./mainContent"

let sideMenus = document.querySelectorAll(".side_menu")
const main = document.getElementsByClassName("main")[0]
console.log(sideMenus)
sideMenus.forEach((sideMenu) => {
  let project_name = sideMenu.getAttribute("data-project-name")

  sideMenu.addEventListener("click", () => {
    console.log(project_name)
    localStorage.setItem("currentMenu", project_name)
    main.innerHTML = ""
    main.appendChild(MainContent(project_name))
  })
})
