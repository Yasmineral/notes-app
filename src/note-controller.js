



(function(exports) {
  class NoteController {
    constructor(noteList = new List()) {
      this.noteList = noteList
      this.noteListView = new View(noteList);
    };
      
    eventListeners() {
      window.addEventListener("hashchange", this.hashChange.bind(this));
    }

    hashChange() {
      let id = window.location.hash.split("#")[1];
      let note = this.noteList.getNoteByID(id);
      document.getElementById("note").innerHTML = note.text;
    }
    
      noteListHTML(doc = document) {
      doc.getElementById('app').innerHTML = this.noteListView.toHTML()

    };
  
  }
  

  exports.NoteController = NoteController;
  
})(this)


var list = new List();
list.addNote('help me')
list.addNote('hello')
var controller = new NoteController(list);
controller.noteListHTML();
controller.eventListeners();