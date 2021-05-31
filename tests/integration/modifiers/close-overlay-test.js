import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | close-overlay', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);

    await render(
      hbs`
        <div id="tw-start-room" open>
          <button data-test-close-btn type="button" {{close-overlay}}>
            close
          </button>
        </div>
      `
    );

    await click('[data-test-close-btn]');
    assert.dom('#tw-start-room').doesNotHaveAttribute('open');
  });
});
