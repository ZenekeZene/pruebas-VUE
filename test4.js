// COMPUTED PROPERTIES AND WATCHERS

var vm = new Vue({
  el: '#app4',
  data: {
    message: 'Hello',
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar',

    question: '',
    answer: 'I cannot give you an answer until you ask a question!',
  },
  // Computed properties:
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('');
    },
    // (*)
    fullName: function() {
      return this.firstName + this.lastName;
    },
    fullName2: {
      // getter:
      get: function() {
        return this.firstName + this.lastName;
      },
      set: function(newValue) {
        var names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }

  },
  // Computed Caching vs Methods
  // Differences between Methods and Computed properties:
  // https://stackoverflow.com/questions/44350862/method-vs-computed-in-vue
  methods: {
    reverse: function(string) {
      return string.split('').reverse().join('');
    },
    getAnswer: _.debounce( // (**)
      function() {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)';
            return;
          }
          this.answer = 'Thinking...';
          var vm = this;
          axios.get('https://yesno.wtf/api')
               .then(function(response) {
                 vm.answer = _.capitalize(response.data.answer);
               })
               .catch(function(error) {
                 vm.answer = 'Error! Could not reach the API. ' + error;
               })
      },
      500 // (***)
    )
    // (**) (_.debounce) => Lodash function to limit how often call
    // a expensive operation can be run
    // (***) This is the number of milliseconds we wait for the
    // user to stop typing.
  },
  // Computed vs Watched Property:
  // Bad example: (repetitive and imperative). See Good example (*)
  watch: {
    firstName: function(val) {
      console.log("firstName Watcher");
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function(val) {
      console.log("lastName Watcher");
      this.fullName = this.firstName + ' ' + val;
    },

    question: function(newQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.getAnswer();
    }
  }
});
