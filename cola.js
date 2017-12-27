function showSection(button, cls) {
  $('section').hide();
  $('section.' + cls).show();
  $('li').removeClass('selected');
  $(button).addClass('selected');
}

function initialise () {
  $('li.home').click();
}
