

(function(exports) {
  class View {
      constructor(list) {
        this.noteList = list;
      }
      toHTML() {
        var notes = (this.noteList.getAllNotes()).map(note => note.text)
        var notes = notes.join('</div></li><li><div>')
        return "<ul><li><div>" + notes + "</div></li></ul>"
      }
    }
  ;
    exports.View = View;
})(this);
