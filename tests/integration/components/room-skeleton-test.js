import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | room-skeleton', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(5);

    await render(hbs`<RoomSkeleton />`);

    assert.dom('[data-test-loading-room]').exists({ count: 1 });
    assert
      .dom('[data-test-loading-room-club-name]')
      .hasClass('tw-room-skeleton__club');
    assert
      .dom('[data-test-loading-room-title]')
      .hasClass('tw-room-skeleton__title');
    assert.dom('[data-test-loading-room-avatar]').exists({ count: 2 });
    assert.dom('[data-test-loading-room-attendee-name]').exists({ count: 3 });
  });
});
