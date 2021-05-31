import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | reset-state', function(hooks) {
  setupRenderingTest(hooks);

  test('toggle room type', async function (assert) {
    assert.expect(2);

    await render(hbs`<StartRoom />`);

    await click('[data-test-start-room-trigger-btn]');
    await click('[data-test-start-room-type="open"]');
    assert.dom('[data-test-start-room-type="open"]').isChecked();

    await click('[data-test-start-room-close-btn]');
    await click('[data-test-start-room-trigger-btn]');
    assert.dom('[data-test-start-room-type="open"]').isNotChecked();
  });
});
