const listLi = document.querySelectorAll(".tab");

const content = document.querySelectorAll(".container-content-1");

function selectionItem() {
  removeShow();
  const contentTab = document.querySelector(`#${this.id}-content`);
  contentTab.classList.add("show");
}

function removeShow() {
  content.forEach(item => item.classList.remove("show"));
}
listLi.forEach(item => item.addEventListener("click", selectionItem));
