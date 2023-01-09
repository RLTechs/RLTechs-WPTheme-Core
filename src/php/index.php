<?php
/**
 * File: index.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package ThemeCore
 * @version 0
 * 0.0.1a
 */

namespace RLTechs\ThemeCore;

/**
 * Get header file
 * @since 1.0.0
 */
// TODO add multiple types of Header files for selection in options ex: get_header(type)
//get_header(); 
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />  
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <!-- FavIcons -->

    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

  <?php wp_body_open(); ?>

  
  <div id="page" class="site">

    <header id="masthead" class="site-header">



    </header>

    <div id="content" class="site-content container py-5 mt-4">
    
      <div id="primary" class="content-area">

A


      </div>



    </div>

    <?php //get_footer(); ?>

    <footer>



    </footer>
  </div>

  <?php wp_footer(); ?>

</body>

</html>