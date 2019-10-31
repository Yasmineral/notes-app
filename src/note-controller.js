// function sayHowdy() {
//   document.getElementById("app").innerHTML = "Howdy"
//   //innerHTML gets or sets the HTML ontained within the element.
// }

// //window.onload = sayHowdy;



(function(exports) {
  class NoteController {
    constructor(noteList = new List()) {
      this.noteList = noteList;
      this.noteListView = new View(noteList);
    }

    noteListHTML(doc = document) {
    var element = doc.getElementById('app')
    return element.innerHTML = this.noteListView.toHTML()
    }
  }
;
  exports.NoteController = NoteController;
})(this)
