<?php
/**
 * File: inc/tcore-paths.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package ThemeCore
 * @version 0.0.1a
 */

namespace RLTechs\ThemeCore;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
};

/**
 * Directory path and URI path shortcuts for ThemeCore.
 * Both set are in the exact same order below for DIR and URI.
 * 
 * @since 1.0.0 
 */

/** Directory Paths */
if (!defined('TCORE_TDIR'))		        define('TCORE_TDIR', get_template_directory());                             // The main theme wp directory.
if (!defined('TCORE_SDIR'))		        define('TCORE_SDIR', get_stylesheet_directory());                           // The main theme wp stylesheet directory.
if (!defined('TCORE_ADIR'))		        define('TCORE_ADIR', get_template_directory() . '/assets');                 // The main theme wp assets directory.
if (!defined('TCORE_ADMN_DIR'))		    define('TCORE_ADMN_DIR', get_template_directory() . '/admin');              // The theme admin directory.
if (!defined('TCORE_CLSS_DIR'))		    define('TCORE_CLSS_DIR', get_template_directory() . '/class');              // The theme classes directory.
if (!defined('TCORE_FUNC_DIR'))		    define('TCORE_FUNC_DIR', get_template_directory() . '/func');               // The theme functions directory.
if (!defined('TCORE_INC_DIR'))		    define('TCORE_INC_DIR', get_template_directory() . '/inc');                 // The theme includes directory.
if (!defined('TCORE_TEMPS_DIR'))		define('TCORE_TEMPS_DIR', get_template_directory() . '/templates');         // The theme templates directory.
if (!defined('TCORE_WIDGS_DIR'))		define('TCORE_WIDGS_DIR', get_template_directory() . '/widgets');           // The theme built in widgets directory.

/** URI Paths */
if (!defined('TCORE_TURI'))		        define('TCORE_TURI', get_template_directory_uri());                         // The main theme wp uri.
if (!defined('TCORE_SURI'))		        define('TCORE_SURI', get_stylesheet_directory_uri());                       // The main theme wp stylesheet uri.
if (!defined('TCORE_AURI'))		        define('TCORE_AURI', get_template_directory_uri() . '/assets');             // The main theme wp assets uri.
if (!defined('TCORE_ADMN_URI'))		    define('TCORE_ADMN_URI', get_template_directory_uri() . '/admin');          // The theme admin uri.
if (!defined('TCORE_CLSS_URI'))		    define('TCORE_CLSS_URI', get_template_directory_uri() . '/class');          // The theme classes uri.
if (!defined('TCORE_FUNC_URI'))		    define('TCORE_FUNC_URI', get_template_directory_uri() . '/func');           // The theme functions uri.
if (!defined('TCORE_INC_URI'))		    define('TCORE_INC_URI', get_template_directory_uri() . '/inc');             // The theme includes uri.
if (!defined('TCORE_TEMPS_URI'))		define('TCORE_TEMPS_URI', get_template_directory_uri() . '/templates');     // The theme templates uri.
if (!defined('TCORE_WIDGS_URI'))		define('TCORE_WIDGS_URI', get_template_directory_uri() . '/widgets');       // The theme built in widgets uri.

/** EOF */