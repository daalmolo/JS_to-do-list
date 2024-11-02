"use strict";

let tasks = ["fyodor", "nietzche"];

const taskContainer = document.getElementsByClassName("card__saved-notes")[0];
const entryInput = document.getElementsByClassName("entry__input")[0];

const storageKey = "item";

function checkList() {
  removeIcon.addEventListener("click", function (e) {});
}

function entryStyle(task, indx) {
  const entryContainer = document.createElement("div");
  entryContainer.style.display = "flex";
  entryContainer.style.justifyContent = "space-between";
  entryContainer.style.alignItems = "center";
  entryContainer.style.marginBottom = "10px";
  entryContainer.style.marginTop = "10px";

  const statusIcon = document.createElement("img");
  statusIcon.src = "images/unchecked.png";
  statusIcon.style.cursor = "pointer";
  statusIcon.style.width = "20px";
  statusIcon.style.marginRight = "5px";

  const entry = document.createElement("p");
  entry.innerHTML = task;
  entry.style.flexGrow = "2";

  const removeIcon = document.createElement("button");
  removeIcon.innerHTML = "x";
  removeIcon.style.marginRight = "20px";
  removeIcon.style.background = "#fff";
  removeIcon.onclick = () => removeTask(indx);

  entryContainer.appendChild(statusIcon);
  entryContainer.appendChild(entry);
  entryContainer.appendChild(removeIcon);

  taskContainer.appendChild(entryContainer);
}

function renderTasks() {
  taskContainer.innerHTML = null;

  for (const [indx, task] of Object.entries(tasks)) {
    entryStyle(task, indx);

    checkList();
  }
}

function saveTask() {
  const JSONsave = JSON.stringify(tasks);

  localStorage.setItem(storageKey, JSONsave);
}

function loadTasks() {
  const localFetch = localStorage.getItem(storageKey);

  if (localFetch) tasks = JSON.parse(localFetch);

  renderTasks();
}

function addTask() {
  if (!entryInput) exit;

  tasks.push(entryInput.value);

  renderTasks();
  entryInput.value = "";

  saveTask();
}

function removeTask(index) {
  tasks.splice(index, 1);

  renderTasks();

  saveTask();
}

renderTasks();

document.addEventListener("DOMContentLoaded", loadTasks);
