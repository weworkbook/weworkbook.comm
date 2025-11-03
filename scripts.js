document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var menu = document.getElementById('menu');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (menu.classList.contains('d-none')) {
        menu.classList.remove('d-none');
        menu.classList.add('d-block');
      } else {
        menu.classList.remove('d-block');
        menu.classList.add('d-none');
      }
    });
  }
});
function showTimeZone() {
  try {
    var tzInput = document.getElementById('timezone');
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tzInput) tzInput.value = tz;
  } catch (e) {
    var offset = new Date().getTimezoneOffset();
    if (tzInput) tzInput.value = 'UTC offset ' + offset;
  }
  return true;
}
