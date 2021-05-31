import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | attendee', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function (assert) {
    assert.expect(5);
    const attendee = this.server.create('attendee', {
      isModerator: false,
      isMicrophoneOn: false,
    });
    this.set('attendee', attendee);

    await render(hbs`<Attendee @attendee={{this.attendee}}/>`);

    assert.dom('[data-test-attendee-avatar]').exists({ count: 1 });
    assert.dom('[data-test-attendee-microphone-emoji]').exists({ count: 1 });
    assert
      .dom('[data-test-attendee-cross-line-on-microphone]')
      .exists({ count: 1 });
    assert.dom('[data-test-attendee-is-moderator]').doesNotExist();
    assert.dom('[data-test-attendee-is-first-name]').exists({ count: 1 });
  });

  test('it renders - when microphone is on', async function (assert) {
    assert.expect(5);
    const attendee = this.server.create('attendee', {
      isModerator: true,
      isMicrophoneOn: true,
    });
    this.set('attendee', attendee);

    await render(hbs`<Attendee @attendee={{this.attendee}}/>`);

    assert.dom('[data-test-attendee-avatar]').exists({ count: 1 });
    assert.dom('[data-test-attendee-microphone-emoji]').exists({ count: 1 });
    assert
      .dom('[data-test-attendee-cross-line-on-microphone]')
      .doesNotExist(
        'if microphone is on, it should not display the cross line'
      );
    assert.dom('[data-test-attendee-is-moderator]').exists({ count: 1 });
    assert.dom('[data-test-attendee-is-first-name]').exists({ count: 1 });
  });

  test('it renders - when attendee is moderator', async function (assert) {
    assert.expect(5);
    const attendee = this.server.create('attendee', {
      isModerator: true,
      isMicrophoneOn: true,
    });
    this.set('attendee', attendee);

    await render(hbs`<Attendee @attendee={{this.attendee}}/>`);

    assert.dom('[data-test-attendee-avatar]').exists({ count: 1 });
    assert.dom('[data-test-attendee-microphone-emoji]').exists({ count: 1 });
    assert
      .dom('[data-test-attendee-cross-line-on-microphone]')
      .doesNotExist(
        'if microphone is on, it should not display the cross line'
      );
    assert.dom('[data-test-attendee-is-moderator]').exists({ count: 1 });
    assert.dom('[data-test-attendee-is-first-name]').exists({ count: 1 });
  });
});
