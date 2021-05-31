import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  type: () => ['public', 'social', 'private'][faker.datatype.number() % 3],
  club: () => faker.lorem.sentence(),
  title: () => faker.lorem.sentences(),
  topic: () => faker.lorem.paragraph(),

  afterCreate(room, server) {
    if (room.attendees.length === 0) {
      room.update({
        attendees: server.createList('attendee', 10),
      });
    }
  },
});
