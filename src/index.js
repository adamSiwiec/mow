
require('jquery');
require('./main.css');
require('fullpage.js');

$(document).hide();
$(document).ready(function() {

    $('#fullpage').fullpage({
      sectionsColor: ['#eee', '#eee', '#eee'],
      navigation: true
    });
    $(document).show();
});
