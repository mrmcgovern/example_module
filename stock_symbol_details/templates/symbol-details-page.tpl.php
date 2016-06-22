<?php
//drupal_add_js(path_to_theme() . "/js/jquery.cookie.js");
//drupal_add_js(path_to_theme() . "/js/om-landing.js");
//kpr(get_defined_vars());
//http://drupalcontrib.org/api/drupal/drupal--modules--node--node.tpl.php
//node--[CONTENT TYPE].tpl.php
drupal_add_css(drupal_get_path('module', 'stock_symbol_details') . '/css/stock-symbol-details.css', array('group' => CSS_THEME, 'type' => 'file'));
drupal_add_js('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.1/moment.min.js', array('type' => 'external', 'scope' => 'header', 'weight' => 50));
drupal_add_js('https://cdnjs.cloudflare.com/ajax/libs/webshim/1.15.10/minified/polyfiller.js', array('type' => 'external', 'scope' => 'header', 'weight' => 50));
drupal_add_js('https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js', array('type' => 'external', 'scope' => 'header', 'weight' => 50));
drupal_add_js('https://qsstage.morningstar.com/COMPANY/news/lib/asterix-core.js', array('type' => 'external', 'scope' => 'header', 'weight' => 50));
drupal_add_js('https://qsstage.morningstar.com/COMPANY/js/chartlib.0.0.1.js', array('type' => 'external', 'scope' => 'header', 'weight' => 50));

drupal_add_js(drupal_get_path('module', 'stock_symbol_details') . '/js/stock-symbol-details.js', array('type' => 'file', 'scope' => 'footer', 'weight' => 200));
drupal_add_js('System.import("src/stock-symbol-details")', array('type' => 'inline', 'scope' => 'footer', 'weight' => 200));
?>
<article class="main-article">
	<section class="main-section deep-component-page">
		<div class="content-wrapper">
			<article class="article-body left-justified">
				<!-- begin calculator -->
				<div class="calculator">
                                    <stock-symbol-details>
                                    </stock-symbol-details>
                                    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-537f553311e035bb"></script>
                                </div>
                        </article>
                </div>
        </section>
</article>