/**
 * IMPORTANT:
 * This file is deprecate and does not used anymore in the code base.
 * In favor of moving the whole mock logic into ember-mirage. New code exists in the /mirage folder.
 * Keep this file in the codebase as a helper to easily create sample payload.
 */
import faker from 'faker';


/**
 * This function is copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

/**
 * Create N number of element
 */
function createElement(count = 1) {
  const SPACE = ' ';
  return SPACE.repeat(count - 1).split(SPACE);
}

function getRoomType() {
  return ['public', 'social', 'private'][faker.datatype.number() % 3];
}

/**
 * @param {Number} count
 * @returns {Array}
 */
function generateAttendee({
  attendeeCount: count = 2,
  isGetRandomAttendeeCount = true,
}) {
  const attendeeCount = isGetRandomAttendeeCount
    ? getRandomInt(count)
    : count;
  return createElement(attendeeCount).map((ele, index) => ({
    id: faker.datatype.number(),
    type: 'attendee',
    attributes: {
      'user-name': faker.internet.userName(),
      'first-name': faker.name.firstName(),
      'last-name': faker.name.lastName(),
      'profile-picture': faker.image.avatar(),
      'is-moderator': index < 3 ? true : faker.datatype.boolean(),
      'is-microphone-on': index < 3 ? true : faker.datatype.boolean(),
      'is-speaking': index < 10 ? true : faker.datatype.boolean(),
      'is-on-stage': index === 1 ? true : faker.datatype.boolean(),
      'show-avatar': index < 2 ? true : false,
    },
  }));
}

/**
 * Generate mocked room record
 * @param {Object} option
 * @param {Number} option.roomCount - number of rooms to generate
 * @param {Number} option.isGenerateSingleRoom - flag, whether the return data is a single room. Note: according to
 * JSONAPI, the data property is either an object or an array of objects.
 * @param {Number} option.isGetRandomAttendeeCount - flag, if set true, number of attendee will be a random number between 0 and attendeeCount
 * @returns room(s) record satisfy to JSONAPI
 */
export default function generateRooms({
  roomCount = 1,
  attendeeCount = 2,
  isGenerateSingleRoom = false,
  isGetRandomAttendeeCount = true,
} = {}) {
  let included = [];
  const roomList = createElement(roomCount).map(() => {
    const attendeeList = generateAttendee({
      attendeeCount,
      isGetRandomAttendeeCount,
    });
    included = [...included, ...attendeeList];
    return {
      id: faker.datatype.number(),
      type: 'room',
      attributes: {
        type: getRoomType(),
        club: faker.lorem.sentence(),
        title: faker.lorem.sentences(),
        topic: faker.lorem.paragraph(),
      },
      relationships: {
        attendees: {
          data: attendeeList.map((attendeeList) => ({
            id: attendeeList.id,
            type: attendeeList.type,
          })),
        },
      },
    };
  });

  return {
    data: isGenerateSingleRoom ? roomList[0] : roomList,
    included,
  };
}
