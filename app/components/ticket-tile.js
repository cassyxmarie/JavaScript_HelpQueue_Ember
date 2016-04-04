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
    delete(ticket) {
      this.sendAction('destroyTicket', ticket);
    }
  }
});
