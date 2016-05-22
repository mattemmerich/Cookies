$(document).ready(function(){
	var ci = parseInt(Cookies.get('choc'));
	var oi = parseInt(Cookies.get('oreo'));
	var pb = parseInt(Cookies.get('pb'));

	$('#choc_bag').text(Cookies.get('choc'))

	$('#choc').click(chocCounter);

 function chocCounter(){
 			ci = ci+1
 			Cookies.set('choc', parseInt(ci));
 			$('#choc_bag').text(Cookies.get('choc'))

 	}

 	$('#chocClear').click(chocClear)

 	function chocClear(){
 		ci = 0
 		Cookies.set('choc', 0)
 		$('#choc_bag').text(Cookies.get('choc'))

	}

	$('#oreo_bag').text(Cookies.get('oreo'))

	$('#oreo').click(oreoCounter);

	function oreoCounter(){
 			oi = oi+1
 			Cookies.set('oreo', parseInt(oi));
 			$('#oreo_bag').text(Cookies.get('oreo'))

 	}

 	$('#oreoClear').click(oreoClear)

 	function oreoClear(){
 		oi = 0
 		Cookies.set('oreo', 0)
 		$('#oreo_bag').text(Cookies.get('oreo'))

	}


	$('#pb_bag').text(Cookies.get('pb'))

	$('#pb').click(pbCounter);

	function pbCounter(){
 			pb = pb+1
 			Cookies.set('pb', parseInt(pb));
 			$('#pb_bag').text(Cookies.get('pb'))

 	}

 	$('#pbClear').click(pbClear)

 	function pbClear(){
 		pb = 0
 		Cookies.set('pb', 0)
 		$('#pb_bag').text(Cookies.get('pb'))

	}


	$('#chocClear').click(function(){
		ci = ci - 1
		Cookies.set('choc', 0)
		$('#choc_bag').text(Cookies.get('choc', 0))
	})


	$('#oiClear').click(function(){
		oi = -1
		Cookies.set('oreo', 0)
		$('#oreo_bag').text(Cookies.get('oreo'))
	})

	$('#pbClear').click(function(){
		pb = pb - 1 
		Cookies.set('pb', 0)
		$('#pb_bag').text(Cookies.get('pb'))
	})
#('#clearAll').click(function(){
		pb = pb - 1, ci = ci -1, oi= -1
		Cookies.set('pb', 0; 'choc', 0; 'oi', 0;)
		$('#pb_bag', '#choc_bag','#oreo_bag').text(Cookies.get('pb', 'choc', 'oi'))
	})

});