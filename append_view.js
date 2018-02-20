/**
 * Append view Button into page
 */
$('body').append('<a href="#" id="view_image_button_extension" target="_blank" ' +
    'style="display:none;position: fixed;top:10px;left:10px;z-index: 99999999;font-size: 2em;height: 30px;color: #a6a6a6;padding: 0.2em;border: 1px solid #333;box-shadow: 1px 1px 1px #868686;text-decoration: none;background: #3c3c3c;border-radius: 3px;"' +
    '>View Image</a>');
/**
 * Hide on click at close button
 */
$('body').delegate('#irc_cb', 'click touch', hide_vi_btn);
function hide_vi_btn() {
    vibtn = document.getElementById('view_image_button_extension');
    vibtn.href = '#';
    vibtn.style.display = 'none';
}

/**
 * change [button href] on click at full images
 */
$('body').delegate('.rg_bx', 'click touch',
    function () {
        url = decodeURIComponent($(this).find('a')[0].href.replace('https://www.google.com/imgres?imgurl=', '')).split('&imgrefurl')[0];
        show_vi_btn(url)
    }
);
/**
 * change [button href] on click at small images
 */
$('body').delegate('.irc_rimask', 'click touch',
    function () {
        url = decodeURIComponent($(this).find('a')[0].href.replace('https://www.google.com/imgres?imgurl=', '')).split('&imgrefurl')[0];
        show_vi_btn(url)
    }
);
function show_vi_btn(url) {
    vibtn = document.getElementById('view_image_button_extension');
    vibtn.href = url;
    vibtn.style.display = 'block';
}