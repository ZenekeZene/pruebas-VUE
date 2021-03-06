// TEMPLATE SYNTAX

// Interpolations:
var vm = new Vue({
    el: '#app3',
    data: {
      // Text:
      message: 'Hello Template Syntax',
      // Raw HTML:
      rawHTML: '<strong>Fuerte</strong>',
      // Attributes:
      dynamicId: 'my-id',
      isButtonDisabled: true,
// Directives:
      ok: true,
      url: 'http://google.es',
      doSomething: function(event) {
        console.log(event);
      },
    }
});
