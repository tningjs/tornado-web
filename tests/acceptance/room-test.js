import { module, test } from 'qunit';
import { visit, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | room', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /room', async function (assert) {
    assert.expect(2);

    this.server.create('room', { id: 1 });

    await visit('/room/1');

    assert.equal(currentRouteName(), 'room');
    assert.dom('[data-test-room-main-content]').exists({ count: 1 });
  });
});
