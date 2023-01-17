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
 * @version 1.0.0
 * 
 */

/**
 * Get header file
 * @since 1.0.0
 */
// TODO add multiple types of Header files for selection in options ex: get_header(type)
//get_header($header-type); 
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

<body <?php body_class("text-bg-dark"); ?>>

  <?php wp_body_open(); ?>

  
  <div id="page" class="site text-bg-primary">

    <header id="masthead" class="site-header">

    <div class="fixed-top bg-light">

    <nav id="nav-main" class="navbar navbar-expand-lg">

    AAA

    <div class="container">



    </div>



    </nav>



    </div>



    </header>

    <div id="content" class="site-content container py-5 mt-4">
    
      <div id="primary" class="content-area">

        <!-- Hook to add something nice -->
        <?php //bs_after_primary(); ?>

        <div class="row">
          <!-- TODO need theme option for single or dual left sidebar -->
          <?php get_sidebar(); ?>
          <div class="col">

            <main id="main" class="site-main">

                <!-- Header -->
            <div class="py-3 py-md-5 text-center">
              <h1 class="display-1"><?php bloginfo('name'); ?></h1>
              <p class="lead"><?php bloginfo('description'); ?></p>
            </div>

            <!-- Sticky Post -->
              <!-- Featured Image-->
                <!-- Featured -->
              <!-- Title -->
              <!-- Meta -->
              <!-- Excerpt & Read more -->
              <!-- Tags -->





            
            </main>





          </div><!-- #col -->

          <!-- TODO need theme option for single or dual right sidebar -->
          <?php get_sidebar(); ?>


        </div><!-- #row -->




      </div>



    </div>

    <?php //get_footer(); ?>

    <footer>

      <div id="copyright" class="bg-light text-muted border-top py-2 text-center">
        <div class="container">
          <small>&copy;&nbsp;<?php echo Date('Y'); ?> - <?php bloginfo('name'); ?></small>

          <div id="cpVend" class="cpyv text-start"></div>
          <div id="verText" class="vtxt text-end"></div> 
          
        </div>
      </div>

    </footer><!-- #footer -->
    <!-- To top button -->
    <a href="#" class="btn btn-primary shadow top-button position-fixed zi-1020"><i class="fa-solid fa-chevron-up"></i>
    <span class="visually-hidden-focusable">To top</span></a>
  </div><!-- #page -->

  <?php wp_footer(); ?>

</body>

</html>