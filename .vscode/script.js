function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("Profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./16908257703.png.jfif")
  } else {
    img.setAttribute("src", "./16908257703.png.jfif")
  }

  // if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  // } else {
  // html.classList.add("light")
  // }
}
