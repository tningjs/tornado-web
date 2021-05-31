import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  showAvatar: true,

  userName: () => faker.internet.userName(),
  firstName: () => faker.name.firstName(),
  lastName: () => faker.name.lastName(),
  profilePicture: () => faker.image.avatar(),
  isModerator: () => faker.datatype.boolean(),
  isMicrophoneOn: () => faker.datatype.boolean(),
  isSpeaking: () => faker.datatype.boolean(),
  isOnStage: () => faker.datatype.boolean(),
});
