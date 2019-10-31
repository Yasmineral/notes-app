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

  exports.List = List;
})(this);

