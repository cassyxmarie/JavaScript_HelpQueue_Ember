import Ember from 'ember';

export default Ember.Component.extend({
  isDeleteShowing: true,
  isClosedShowing: false,
  actions: {
    delete(ticket) {
      this.sendAction('destroyTicket', ticket);
      this.set('isDeleteShowing', false);
      this.set('isClosedShowing', true);
    }
  }
});
