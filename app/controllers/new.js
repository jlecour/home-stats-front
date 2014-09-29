import Ember from "ember";

export default Ember.ObjectController.extend({

  actions: {
    save: function() {
      var metric = this.get('model');

      function successFn() {
        alert('OK');
      }

      function failureFn() {
        alert('Error');
      }

      metric.save().then(successFn, failureFn);
     }
  }
});