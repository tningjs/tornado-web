import Route from '@ember/routing/route';

export default class RoomRoute extends Route {
  model({ room_id }) {
    return this.store.findRecord('room', room_id);
  }
}
