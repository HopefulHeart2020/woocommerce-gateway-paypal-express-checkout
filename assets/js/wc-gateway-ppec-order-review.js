;(function ( $, window, document ) {
	'use strict';

	$( 'form.checkout' ).on( 'click', 'input[name="payment_method"]', function() {
		var isPPEC = $( this ).is( '#payment_method_ppec_paypal' );
		$( '#place_order' ).toggle( ! isPPEC );
		$( '#woo_pp_ec_button_checkout' ).toggle( isPPEC );
	} );
})( jQuery, window, document );
