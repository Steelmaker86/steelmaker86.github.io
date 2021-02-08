function appendInputs() {
  $(
    '<input type="text" placeholder="Card Front" class="front"/> ' +
      '<input type="text" placeholder="Card Back" class="back" /> <br>'
  ).insertBefore($(".front").first());
}
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function createCard(cardFront, cardBack) {
  var deckName = $(".fName").val();
  var i;
  var flashDeck = [];
  for (i = 0; i < cardFront.length; i++) {
    flashDeck.push(`${cardFront[i]}; ${cardBack[i]}`);
  }
  var merged = flashDeck.join("\n");
  download(deckName, merged);
}
function takeValues() {
  var fronts = [];
  var backs = [];
  $(".front").each(function(index) {
    fronts.push($(this).val());
  });
  $(".back").each(function(index) {
    backs.push($(this).val());
  });
  createCard(fronts, backs);
}
