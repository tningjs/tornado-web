import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | start-room', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(13);

    await render(hbs`<StartRoom />`);

    assert.dom('[data-test-start-room]').exists({ count: 1 });
    assert.dom('[data-test-start-room]').hasAttribute('id', 'tw-start-room');
    assert.dom('[data-test-start-room]').hasClass('tw-start-room');
    assert
      .dom('[data-test-start-room-trigger-btn]')
      .includesText('+ Start a room');

    // modal closed
    assert.dom('[data-test-start-room-content]').isNotVisible();

    // modal opened
    await click('[data-test-start-room-trigger-btn]');
    assert.dom('[data-test-start-room-content]').isVisible();
    assert.dom('[data-test-start-room-close-btn]').exists({ count: 1 });
    assert
      .dom('[data-test-start-room-content]')
      .includesText(
        'Labore repellendus quia doloremque iure. Sed reprehenderit molestiae in. Vero dignissimos accusantium illo nulla voluptatem reiciendis rerum odio.'
      );
    assert.dom('[data-test-start-room-type="open"]').exists({ count: 1 });
    assert.dom('[data-test-start-room-type="social"]').exists({ count: 1 });
    assert.dom('[data-test-start-room-type="closed"]').exists({ count: 1 });

    assert.dom('[data-test-start-room-footer] button').includesText("🎉 Let's go");

    // close modal
    await click('[data-test-start-room-close-btn]');
    assert.dom('[data-test-start-room-content]').isNotVisible();
  });

  test('toggle room type', async function (assert) {
    assert.expect(12);

    await render(hbs`<StartRoom />`);

    await click('[data-test-start-room-trigger-btn]');
    assert.dom('[data-test-start-room-type="open"]').isNotChecked();
    assert.dom('[data-test-start-room-type="social"]').isNotChecked();
    assert.dom('[data-test-start-room-type="closed"]').isNotChecked();

    await click('[data-test-start-room-type="open"]');
    assert.dom('[data-test-start-room-type="open"]').isChecked();
    assert.dom('[data-test-start-room-type="social"]').isNotChecked();
    assert.dom('[data-test-start-room-type="closed"]').isNotChecked();

    await click('[data-test-start-room-type="social"]');
    assert.dom('[data-test-start-room-type="open"]').isNotChecked();
    assert.dom('[data-test-start-room-type="social"]').isChecked();
    assert.dom('[data-test-start-room-type="closed"]').isNotChecked();

    await click('[data-test-start-room-type="closed"]');
    assert.dom('[data-test-start-room-type="open"]').isNotChecked();
    assert.dom('[data-test-start-room-type="social"]').isNotChecked();
    assert.dom('[data-test-start-room-type="closed"]').isChecked();

  });
});
