
(function(exports) {
  function testNoteControllerCanBeInstantiated() {
    var list = new List();
    var note = new Note('Test');
    list.addNote(note);
    var controller = new NoteController(list);

    console.log('Note controller instantiation test')
    assert.isTrue(controller.noteList.allNotes[0].text === 'Test')

  }
  testNoteControllerCanBeInstantiated();

})(this);




(function(exports) {
  function testNoteControllerHTML() {
    
    var elementDouble = {
      innerHTML: 'old string'
    };
    
    var documentDouble = {
      getElementById: function() {
        return elementDouble
      }
    };

    var noteListView = new List();
    var note = new Note('Test');
    noteListView.addNote(note);
    var controller = new NoteController(noteListView);

    console.log('Note controller HTML test')
    assert.isTrue(controller.noteListHTML(documentDouble) === '<ul><li><div>Test</div></li></ul>')

  }
  testNoteControllerHTML();
})(this);