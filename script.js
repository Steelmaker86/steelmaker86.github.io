function appendInputs() {
  var newItem = document.createElement("LI");
  newItem.innerHTML = '<input type="text" placeholder="Card Front" class="front" /> <input type="text" placeholder="Card Back" class="back" />';
  newItem.appendChild();

  var list = document.getElementById("cardList");
  list.insertBefore(newItem, list.childNodes[0]);
}
