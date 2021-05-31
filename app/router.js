import EmberRouter from '@ember/routing/router';
import config from 'tornado-web/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('room', { path: '/room/:room_id' });
  this.route('redirect', { path: '/*' });
  this.route('loading');
});
