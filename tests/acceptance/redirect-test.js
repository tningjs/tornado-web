import { module, test } from 'qunit';
import { visit, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | redirect', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting an non-exist will redirect to home page', async function(assert) {
    assert.expect(1);

    this.server.createList('room', 2)

    await visit('/non-exist');

    assert.equal(currentRouteName(), 'home');
  });
});
