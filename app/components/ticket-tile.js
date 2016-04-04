import Ember from 'ember';

export default Ember.Component.extend({
  isDescriptionShowing: false,
  actions: {
    descriptionShow: function() {
      this.set('isDescriptionShowing', true);
    },
    descriptionHide: function() {
      this.set('isDescriptionShowing', false);
    },
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




// model() {
//   return this.store.findAll('ticket');
// },
// actions: {
//   questionShow: function() {
//     this.set('isQ1showing', false);
//     this.set('isQ2showing', true);
//   },
//   question2Show: function() {
//     this.set('isQ2showing', false);
//     this.set('isQ3showing', true);
//   },
//   question3Show: function() {
//     this.set('isQ3showing', false);
//     this.set('isDeleteShowing', true);
//   },
// }
// });
