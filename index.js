const holder = document.getElementById('holder');

function collatz() {
  let value = document.getElementById('inputBox').value;
  let a = [];
  let i = 0;
  holder.innerHTML = "a = [";
  try {
    while (value > 1) {
      if ((value % 2) == 0) {
        value *= 0.5;
        i++;
        holder.innerHTML += value;
        if (value != 1) {
          holder.innerHTML += ",";
        }
      } else {
        value = (value * 3) + 1;
        i++;
        holder.innerHTML += value;
        if (value != 1) {
          holder.innerHTML += ",";
        }
      }
    }
    holder.innerHTML += "] <br> b = [0..." + i + "]";
  } catch (err) {
    holder.innerHTML = err;
  }
}