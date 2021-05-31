import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | empty-state', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(4);

    await render(hbs`<EmptyState />`);

    assert.dom('[data-test-empty-state]').hasClass('tw-empty-state');
    assert.dom('[data-test-empty-state-svg]').exists({ count: 1 });
    assert
      .dom('[data-test-empty-state-title]')
      .includesText('No available room');
    assert
      .dom('[data-test-empty-state-title-content]')
      .includesText('We didn’t find any rooms.');
  });
});
