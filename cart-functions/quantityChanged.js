import { updateCartTotal } from './updateCartTotal.js'
export const quantityChanged = (e) => {
    const input = e.target
    
    // check to only allow numbers greater than zero to be in input.
    // forces use of remove button if less than 1
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()


}