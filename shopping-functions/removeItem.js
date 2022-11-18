const removeBtn = document.getElementsByClassName('remove-btn');
for (let i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (e) {
  btnClicked = e.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}