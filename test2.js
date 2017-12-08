// THE VUE INSTANCE
// Reactive system:
var data = { a: 1 }

var vm = new Vue({
  el: '#app2',
  data: data,
  // Lifecycle hooks:
  created: function() {
    console.log('a is: ' + this.a);
  },
  updated: function() {
    console.log('Change updated');
  }
});

data.a = "10";
vm.a = "100";

// Instance properties and methods:
console.log(vm.$data);
console.log(vm.$el);

vm.$watch('a', function(newValue, oldValue) {
  console.log("Property 'a' (" + oldValue + ") changed to " + newValue)
});
