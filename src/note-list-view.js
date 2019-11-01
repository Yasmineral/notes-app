

(function(exports) {
  class View {
      constructor(list) {
        this.noteList = list;

      }

      toHTML() {
        var listJoin = []
        this.noteList.getAllNotes().forEach(function(note) {
          var noteText20Chars = note.text.substr(0, 20);
          listJoin.push('<li><div><a href="#' + note.id +'">' + noteText20Chars + '</a></div></li>')
        })
        return '<ul>' + listJoin.join('') + '</ul>'
      }
    }
  ;
    exports.View = View;
})(this);

