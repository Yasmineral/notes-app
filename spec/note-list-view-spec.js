
(function(exports) {

  function testNotesAreConvertedToHTML() {
   var list = new List();
   list.addNote("lalalalallamorethan20characters");
   list.addNote("note 2");
   var view = new View(list);

   assert.isTrue(view.toHTML()) === "<ul><li><div>note 1</div></li><li><div>note 2</div></li></ul>"

  }

 testNotesAreConvertedToHTML();

})(this);