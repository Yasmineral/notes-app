(function(exports) {
  function List() {
    this.allNotes = [];
  };

  List.prototype.addNote = function(note) {
    this.allNotes.push(new Note(note))
  };

  List.prototype.getAllNotes = function() {
    return this.allNotes;
  };

  List.prototype.getNoteByID = function(id) {
    for (let i = 0; i < this.allNotes.length; ++i) {
      let note = this.allNotes[i];
      if (parseInt(id) === note.id) {
        return note;
      }
    }
  }

  exports.List = List;
})(this);

