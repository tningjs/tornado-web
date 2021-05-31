import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const ROOM_TYPES = {
  open: 'open',
  social: 'social',
  closed: 'closed',
};
export default class StartRoomComponent extends Component {
  @tracked selectedRoom;

  roomTypes = ROOM_TYPES;

  @action
  resetState() {
    this.selectedRoom = '';
  }
}
