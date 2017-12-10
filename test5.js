// CLASS AND STYLE BINDINGS
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
});

var vm = new Vue({
  el: '#app5',
  data: {
    // Object Syntax:
    isActive: true,
    hasError: true,
    error: null,
    // Object Syntax not inline in the HTML:
    classObject: {
      active: true,
      'text-danger': false
    },
    activeClass: 'active',
    errorClass: 'text-danger',

    activeColor: 'green',
    fontSize: 30,
    styleObject: {
      color: 'red',
      fontSize: '13px'
    },
    baseStyles: {
      color: 'black',
      border: '1px solid red',
    },
    overridingStyles: {
      color: 'green'
    }
  },
  // Computed property:
  computed: {
    classObjectComputed: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})
