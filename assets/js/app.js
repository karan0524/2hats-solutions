$(document).ready(function () {
    const $menu = $('#navMenu');
    const $btn = $('#hamburger');
  
    // Toggle menu on hamburger click
    $btn.on('click', function (e) {
      e.stopPropagation(); // Prevent click from bubbling to document
      $menu.toggleClass('active'); // or toggleClass('hidden'), or toggle display
    });
  
    // Click outside to close menu
    $(document).on('click', function (e) {
      // Check if click target is NOT inside menu or button
      if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$btn.is(e.target)) {
        $menu.removeClass('active'); // Close the menu by removing class
      }
    });
  });
  