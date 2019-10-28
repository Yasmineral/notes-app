
(function(exports) {

  function testNotesInitializeWithText() {
    var text = "My favourite language is JavaScript";
    var note = new Note(text);

    assert.isTrue(note.text === text);
  };

  testNotesInitializeWithText();
})(this);