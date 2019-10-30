

(function(exports) {

  function testAllNotes() {
    var note1 = new Note("Note 1");  
    var note2 = new Note("Note 2"); 
    var list = new List();
    
    list.addNote(note1)
    list.addNote(note2)

    console.log("Total length of Notes array")
    assert.isTrue(list.allNotes.length === 2);

    console.log("First note in array = Note 1")
    console.log(list.allNotes[0])

    assert.isTrue(list.allNotes[0].text === "Note 1");

    console.log("Second note in array = Note 2")
    assert.isTrue(list.getAllNotes()[1].text === "Note 2");

  };

  testAllNotes();
})(this);