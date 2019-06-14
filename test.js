
$('document').ready(function() {

	$("#gepo").on("click", function(){
		var katet1, katet2, kvadr_1k, kvadr_2k ;
		katet1 = jQuery("#k1").val();
		katet2 = jQuery("#k2").val();
		kvadr_1k = katet1 * katet1;
		kvadr_2k = katet2 * katet2;
		katet1 = parseInt(katet1);
		katet2 = parseInt(katet2);
		alert((Math.sqrt(kvadr_1k + kvadr_2k)));
	});
	
	$("#katet").on("click", function(){
		var gipo, kt, kvadr_gipo, kvadr_kt ;
		gipo = jQuery("#gipo").val();
		kt = jQuery("#kt").val();
		kvadr_gipo = gipo * gipo;
		kvadr_kt = kt * kt;
		gipo = parseInt(gipo);
		kt = parseInt(kt);
		alert((Math.sqrt(kvadr_gipo - kvadr_kt)));
	});
});