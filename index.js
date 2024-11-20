const holder = document.getElementById('holder');
const ctx = document.getElementById('ctx');

function collatz() {
  chart.destroy();
  let value = document.getElementById('inputBox').value;
  let steps = [];
  let a = [];
  let i = 0;
  holder.innerHTML = "a = [";
  try {
    while (value > 1) {
      if ((value % 2) == 0) {
        value *= 0.5;
        i++;
        steps.push(i);
        holder.innerHTML += value;
        if (value != 1) {
          holder.innerHTML += ",";
        }
        a.push(value);
      } else {
        value = (value * 3) + 1;
        i++;
        steps.push(i);
        holder.innerHTML += value;
        if (value != 1) {
          holder.innerHTML += ",";
        }
        a.push(value);
      }
    }
    holder.innerHTML += "] <br> b = [0..." + i + "]";

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: steps,
        datasets: [{
          label: 'Sequence Integers',
          data: a,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: "Numbers",
              align: 'center',
            },
            beginAtZero: true,
            suggestedMin: 0,
            suggestedMax: value + 10
          },
          x: {
            title: {
              display: true,
              text: 'Steps',
              align: 'center',
            }
          }
        }
      }
    });
  } catch (err) {
    holder.innerHTML = err;
  }
}

