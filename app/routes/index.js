import Ember from 'ember';

export default Ember.Route.extend({
  isQ1showing: true,
  isQ2showing: false,
  isQ3showing: false,
  isDeleteShowing: false,
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    questionShow: function() {
      this.set('isQ1showing', false);
      this.set('isQ2showing', true);
    },
    question2Show: function() {
      this.set('isQ2showing', false);
      this.set('isQ3showing', true);
    },
    question3Show: function() {
      this.set('isQ3showing', false);
      this.set('isDeleteShowing', true);
    },
  }
});
