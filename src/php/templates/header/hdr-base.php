<?php
/**
 * File: templates/header/hdr-base.php
 *
 * @author Erik Roth for RL Technologies LLC <erikroth@rltechs.com>
 * @link https://rltechsllc.com
 * @copyright 2020-2023 RL Technologies LLC. All Rights Reserved.
 * @license
 *
 * @package ThemeCore
 * @version 1.0.0
 * 
 */

 ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta name="application-name" content="<?php bloginfo('name'); ?>" />
    <meta charset="<?php bloginfo( 'charset' ); ?>" />  
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <!-- TODO change author and copyright via settings -->
    <meta name="author" content="Erik Roth / RL Technologies, LLC" />
    <meta name="copyright" content="Copyright 2018-2023 RL Technologies LLC. All Rights Reserved." />
    <!-- TODO keywords and description should be set from theme options -->
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <!-- FavIcons -->
    <!-- TODO make icons and manifests part of a plugin or option so they can be customized -->
    <!-- Main Favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="<?php TCORE_ADIR . '/ico/favs/favicon-16x16.png' ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php TCORE_ADIR . '/ico/favs/favicon-32x32.png' ?>">
    <!-- Apple Icons -->

    <!-- Android Icons -->

    <!-- Microsoft Icons -->

    <!-- Manifests -->
    
    <!-- End Favicons --> 
    
    <?php wp_head(); ?>
</head>
