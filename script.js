let liArray = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
]

let userInput = document.querySelector(".userInput")
let resultsUl = document.querySelector(".resultsBox")
let htmlLi
let resultArray

function madeLi(result) {
  htmlLi = `<li class="resultLi">${result}</li>`
  resultsUl.insertAdjacentHTML("beforeend", htmlLi)
}

userInput.addEventListener("keyup", (e) => {
  if (!userInput.value.length) {
    resultsUl.classList.remove("visibility")
  } else {
    resultsUl.classList.add("visibility")
    resultsUl.innerHTML = ""
    resultArray = liArray.filter((item) => {
      return item.toUpperCase().includes(userInput.value.toUpperCase())
      //return item.toUpperCase().startsWith(userInput.value.toUpperCase())
    })
    resultArray.forEach((result) => {
      madeLi(result)
    })

    if (!resultArray.length) {
      madeLi(userInput.value)
    }
  }

  for (let i = 0; i < resultsUl.children.length; i++) {
    resultsUl.children[i].addEventListener("click", () => {
      userInput.value = resultsUl.children[i].innerText
      resultsUl.innerHTML = ""
      madeLi(userInput.value)
    })
  }
})
