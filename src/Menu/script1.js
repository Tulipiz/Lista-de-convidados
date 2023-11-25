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
