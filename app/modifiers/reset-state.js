import { modifier } from 'ember-modifier';

export default modifier(function resetState(element, [resetState]) {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        !observer._element.hasAttribute('open')
      ) {
        observer._resetState();
      }
    }
  });

  observer._element = element;
  observer._resetState = resetState;
  observer.observe(element, { attributes: true });

  return () => {
    observer.disconnect();
  };
});
