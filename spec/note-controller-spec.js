



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
    noteListView.addNote('Test');
    var controller = new NoteController(noteListView);

    console.log('Note controller HTML test')
    assert.isTrue(controller.noteListHTML(documentDouble) === '<ul><li><div>Test</div></li></ul>')

  }
  testNoteControllerHTML();
})(this);