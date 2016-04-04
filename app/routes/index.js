import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    saveTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      this.transitionTo('user', newTicket.id);
    },
    destroyTicket(ticket) {
      ticket.destroyRecord();
      this.transitionTo('index');
    }
  }
});
