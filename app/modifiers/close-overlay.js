import { modifier } from 'ember-modifier';

export default modifier(function closeOverlay(element) {
  const handleCloseOverlay = () => {
    const startRoomElem = document.getElementById('tw-start-room');
    startRoomElem.removeAttribute('open');
  };
  element.addEventListener('click', handleCloseOverlay);

  return () => element.removeEventListener('click', handleCloseOverlay);
});
