// vars
const introForm = document.querySelector(".intro-form")
const introInput = introForm.querySelector("#intro-input")
const introLabel = introForm.querySelector("label p")
const sectionForm = document.querySelector(".section-form")
const sectionInput = sectionForm.querySelector("#section-input")
const sectionLabel = sectionForm.querySelector("label p")
// email valid format var
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

introForm.addEventListener("submit", (e) =>
  handleSubmit(e, introInput, introLabel)
)
sectionForm.addEventListener("submit", (e) =>
  handleSubmit(e, sectionInput, sectionLabel)
)
// document.body.style.outlineColor
const handleSubmit = (e, input, label) => {
  e.preventDefault()
  const value = input.value
  console.log(value)
  if (!value) {
    label.textContent = "Please enter your email address"
    input.style.borderColor = "red"
  } else if (!value.match(mailformat)) {
    label.textContent = "Please check your email"
    input.style.borderColor = "red"
  } else {
    input.textContent = ""
    label.textContent = ""
    input.style.borderColor = "black"
  }
}
