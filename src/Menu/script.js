const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const teaBaby = "16 dec 2023";
/* Função do  Countdown(contagem regressiva)*/
function countdown() {
  const teaBabyDate = new Date(teaBaby);
  const currentDate = new Date();

  const totalSeconds = (teaBabyDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);

  if (totalSeconds <= 0) {
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
  }
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
//modal
//Pegue o modal
const modal = document.getElementById("my-modal");
//Obtém o botão que abre o modal
const btn = document.getElementById("open-modal");
// Obtém o elemento <span> que fecha o modal
const span = document.getElementsByClassName("close")[0];

//Quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
  modal.style.display = "flex";
};

// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function () {
  modal.style.display = "none";
};
//Quando o usuário clicar em qualquer lugar fora do modal, feche-o
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

async function enviar() {
  const nome = document.getElementById("name").value;
  const data = {
    values: [[nome]],
  };
  console.log(data);
  try {
    const response = await fetch("/addRow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Linha adicionada com sucesso!");
    } else {
      console.error("Falha ao adicionar linha:", response.statusText);
    }
  } catch (error) {
    console.error("Erro:", error.message);
  }
}

document.getElementById("my-btn").onclick = enviar;
