let quantityInput = document.getElementsByClassName('product-quantity')[0];

for (let i = 0; i < quantityInput; i++) {
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(e) {
  let input = e.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartPrice()
}