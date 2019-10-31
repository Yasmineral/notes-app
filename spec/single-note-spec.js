
(function(exports) {
  function testSingleNoteViewReturnsStringOfHTML() {
    var singleNote = new SingleNote(new Note('Test'));

    console.log('Single note view returns string of HTML')
    assert.isTrue(singleNote.toHTML() === "<div>Test</div>")

  }
  testSingleNoteViewReturnsStringOfHTML();

})(this);