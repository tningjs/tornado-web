import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Component | room', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function (assert) {
    assert.expect(6);

    const mirageRoom = this.server.create('room');
    const store = this.owner.lookup('service:store');
    const room = await store.findRecord('room', mirageRoom.id);

    this.set('room', room);

    await render(hbs`<Room @room={{this.room}}/>`);

    assert.dom('[data-test-room]').exists({ count: 1 });
    assert.dom('[data-test-room-club-name]').exists({ count: 1 });
    assert.dom('[data-test-room-room-title]').exists({ count: 1 });
    assert.dom('[data-test-room-avatar]').exists({ count: 2 });
    assert.dom('[data-test-room-attendee-name]').exists({ count: 10 });
    assert.dom('[data-test-number-count]').includesText('10 /');
  });
});
