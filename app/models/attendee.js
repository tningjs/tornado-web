import Model, { attr, belongsTo } from '@ember-data/model';

export default class AttendeeModel extends Model {
  @attr('string') userName;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') profilePicture;
  @belongsTo('room') room;
  /**
   * NOTICE: the following fields shouldn't live inside this record
   * Neither it should live in the room record.
   * Because it changes frently. Likely need to build a realtime service.
   */
  @attr('boolean') isModerator;
  @attr('boolean') isMicrophoneOn;
  @attr('boolean') isOnStage;
  @attr('boolean') isSpeaking;
  @attr('boolean') showAvatar;
}
