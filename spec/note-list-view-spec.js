
(function(exports) {

  function testNotesAreConvertedToHTML() {
   var list = new List();
   list.addNote("note 1");
   list.addNote("note 2");
   var view = new View(list);

   assert.isTrue(view.toHTML()) === '<ul><li><div>Note 1</div></li><li><div>Note 2</div></li></ul>'

  }

 testNotesAreConvertedToHTML();

})(this);