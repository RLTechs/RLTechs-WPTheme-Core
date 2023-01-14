/** ThemeCore JS */
/**
 *
 */

/** Viewport Size Display Script */
// eslint-disable-next-line spaced-comment
//=require partials/_devtool-vpsize.js


/** Import Vars */
var site_vars = [
    '2020',                                                     // 0
    'RL Technologies, LLC',                                     // 1
    'https://rltechsllc.com',                                   // 2
    'https://themecore.org',                                    // 3
    'This site uses ThemeCore for Wordpress',                   // 4
    'v0.0.1a'                                                   // 5
 ];

// Vendor Copyright
var dt = new Date();
var copyx = '<a class=\"vendCopy \" href=\"' + site_vars[3] + '\" target=\"_new\">' + site_vars[4] + '</a>.&nbsp;&nbsp;' + '<a cclass=\"vendCopy \" href=\"' + site_vars[2] + '\" target=\"_new\">&copy;' + site_vars[0] + ' - ' + dt.getFullYear() + '&nbsp;&nbsp;' + site_vars[1] + '</a>';
document.getElementById("cpVend").innerHTML = copyx;

var ver = site_vars[5];
document.getElementById("verText").innerHTML = ver;
