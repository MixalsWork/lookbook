(() => {
  const selectors = {
    lookBookItem: '.lookbook__contentItem',
    bodyOverlay: '.bodyOverlay',

    bodyOverlayActiveClass: 'bodyOverlay--active',
    lookBookItemActiveClass: 'lookbook__contentItem--active',
  }

  const lookBookItemArray = document.querySelectorAll(selectors.lookBookItem);
  const bodyOverlay = document.querySelector(selectors.bodyOverlay);

  function showPopup(item) {
    item.classList.add(selectors.lookBookItemActiveClass);
    bodyOverlay.classList.add(selectors.bodyOverlayActiveClass);
  };

  function hideAllPopup() {
    lookBookItemArray.forEach(item => {
      item.classList.remove(selectors.lookBookItemActiveClass);
    });
    bodyOverlay.classList.remove(selectors.bodyOverlayActiveClass);
  }

  bodyOverlay.addEventListener('click', hideAllPopup)

  lookBookItemArray.forEach(item => {
    item.addEventListener('click', (event) => {
      showPopup(event.currentTarget);
    })
  });
})();
