"use strict";

function inicial() {
  window.location.href = "/app/Pages/inicial/inicial.component.html";
}

function chat() {
  window.location.href = "/app/Pages/chat/chat.component.html";
}

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_atividade")) ?? [];
const setLocalStorage = (dbAtividade) =>
  localStorage.setItem("db_atividade", JSON.stringify(dbAtividade));

const readtAtividade = () => getLocalStorage();

const createAtividade = (atividade) => {
  const dbAtividade = getLocalStorage();
  dbAtividade.push(atividade);
  setLocalStorage(dbAtividade);
};

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};
const updateAtividade = (index, client) => {
  const dbAtividade = readtAtividade();
  dbAtividade[index] = atividade;
  setLocalStorage(dbAtividade);
};
//Interação com o layout

const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => (field.value = ""));
};
const saveAtividade = () => {
  if (isValidFields()) {
    var input = document.getElementById("#imagem");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function (event) {
      var img = document.getElementById("yourImgTag");
      img.src = event.target.result;
    };
    const atividade = {
      imagem: document.getElementById("#imagem").files[0].name,
      nome: document.getElementById("#nome").value,
      status: document.getElementById("#status").value,
    };

    const index = document.getElementById("#nome").dataset.index;
    if (index == "new") {
      createAtividade(atividade);
      updateTable();
      closeModal();
      document.location.reload(true);
    } else {
      updateAtividade(index, atividade);
      updateTable();
      closeModal();
      document.location.reload(true);
    }
  }
};
const createRow = (atividade, index) => {
  const newRow = document.createElement("div");
  newRow.innerHTML = `
        <p><img src="${atividade.imagem}" id="imagem"//></p>
        <p id="nome" >${atividade.nome}</p>
        <p id="status" >${atividade.status}</p>
    `;
  document.querySelector("div>p").appendChild(newRow);
};

const clearTable = () => {
  const rows = document.querySelectorAll("#atividade>div p");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const updateTable = () => {
  const dbAtividade = readtAtividade();
  clearTable();
  dbAtividade.forEach(createRow);
};

const fillFields = (atividade) => {
  document.getElementById("#imagem").files[0].name = atividade.imagem;
  document.getElementById("#nome").value = atividade.nome;
  document.getElementById("#status").value = atividade.status;
};

updateTable();

// Eventos
document.getElementById("criarAtividade").addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveAtividade);
