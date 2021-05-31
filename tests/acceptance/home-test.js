import { module, test } from 'qunit';
import { visit, click, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | home', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting home page - no rooms from API', async function (assert) {
    assert.expect(2);

    await visit('/home');

    assert.dom('[data-test-empty-state]').exists({ count: 1 });
    assert.dom('[data-test-room]').doesNotExist();
  });

  test('visiting home page - display rooms', async function (assert) {
    assert.expect(4);

    this.server.createList('room', 2);

    await visit('/home');

    assert.equal(currentRouteName(), 'home');
    assert.dom('[data-test-empty-state]').doesNotExist();
    assert.dom('[data-test-room]').exists({ count: 2 });

    await click('[data-test-room]:first-of-type');

    assert.equal(currentRouteName(), 'room', 'click room with navigate to the room route');
  });
});
