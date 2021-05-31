import Model, { attr, hasMany } from '@ember-data/model';

export default class RoomModel extends Model {
  @attr('string') type;
  @attr('string') club;
  @attr('string') title;
  @attr('string') topic;
  @hasMany('attendee') attendees;

  get numOfModerator() {
    return this.attendees.filter((attendee) => attendee.isModerator).length;
  }

  get avatars() {
    return this.attendees.filter((attendee) => attendee.showAvatar).slice(0, 2);
  }
}
