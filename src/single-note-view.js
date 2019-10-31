(function(exports) {
  class SingleNote {
    constructor(note) {
      this.singleNote = note;
    }

    toHTML() {
      return "<div>" + this.singleNote.text + "</div>";
    }
  }

  exports.SingleNote = SingleNote;
})(this);