import Ember from 'ember';
// import moment from 'moment';

export function timeDuration(params/*, hash*/) {
  var ticket = params[0]
  var timestamp = ticket.get('timestamp');
  // debugger;
  // function update() {
  var timeSince = moment(timestamp).toNow(Date.now());
  return timeSince;
  //   setInterval(update, 1000);
  // }

}

export default Ember.Helper.helper(timeDuration);
