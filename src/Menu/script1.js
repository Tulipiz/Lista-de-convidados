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
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("my-btn").onclick = enviar;

async function enviar() {
  const nome = document.getElementById("name").value;
  const data = {
    values: [[nome]],
  };
  if (nome === "") {
    console.log("O campo de nome está em branco.");
  } else {
    try {
      const response = await fetch("/addRow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Inserido com sucesso!");
        showToast();
      } else {
        console.error("Falha ao adicionar linha:", response.statusText);
      }
    } catch (error) {
      console.error("Erro:", error.message);
    }
  }
}

function showToast() {
  var toastContainer = document.getElementById("toast-container");

  // Criar elemento de toast
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Esta é uma mensagem de toast!";

  // Adicionar toast ao container
  toastContainer.appendChild(toast);

  // Animar o toast
  setTimeout(function () {
    toast.style.opacity = 1;
  }, 10);

  // Remover o toast após alguns segundos
  setTimeout(function () {
    toast.style.opacity = 0;
    setTimeout(function () {
      toastContainer.removeChild(toast);
    }, 300);
  }, 6000);
}
