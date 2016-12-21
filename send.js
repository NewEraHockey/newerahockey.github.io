$(document).ready(function(){ 
	

$("#submit").click(function(){ 
	alert("here");
	/*var f = document.getElementById("field");
	var field = f.options[f.selectedIndex].text;
	var id = $("#id").val();
	var change;
	if (field=='Employee Name' ||field=='Project'||field=='Work Type'){
		var c = document.getElementById("mySelect");
		change = c.options[c.selectedIndex].text;
	}else if (field=='Date'){

		change=$("#date").val();

	}else if(field=='Hours'){
		change=$("#hours").val();

	}else if(field=='Description'){
		change=$("#descript").val();
	}
	
	var type=2;

	if (id==''|| change==''||field=='Choose a Row'){
		alert("Please fill all the Fields");
	}else{
		
	*/
		//var dataString = '&ID1='+ id +'&change1=' + change+'&field1='+ field+ '&Type1='+ type;
		var dataString='&ID1='+ 'test' ;
		$.ajax({
				type: "POST",
				url: "sendit.php",
				data: dataString,
				cache: false,
				success: function(result){

					alert(result);

				}
		});
});	
});	
