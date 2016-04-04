import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('teacher');
  this.route('user', {path: '/user/:ticket_id'});
});

export default Router;
