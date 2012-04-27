$(function() {

    // fix up the mailto links
    var $mailto = $('.mailto');
    var email = $mailto.first().text().split('').reverse().join('');
    $mailto.attr('href', 'mailto:' + email);
    $mailto.html(email);

});
