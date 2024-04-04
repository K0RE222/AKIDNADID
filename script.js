// Function
function decrement() {
    let input = document.getElementById('quantity');
  //Counter
  let value = parseInt(input.value, 10);
    if (value > 1) {
        input.value = value - 1;
    }
}