
(function(exports) {

  function testNotesInitializeWithText() {
    var testName = "Notes initialize with text"
    var note = new Note("My favourite language is JavaScript");

    console.log(testName)
    assert.isTrue(note.text === "My favourite language is JavaScript");
    
  };

  testNotesInitializeWithText();
})(this);