/**
 * Thank You MyBB System + MyAlerts + rep xD v 2.5.5
 * Comptibility: MyBB 1.8.x series
 * Contact: neogeoman@gmail.com
 * Website: http://www.mybb.com
 * Author:  Dark Neo
 */
 
$(document).on("ready", function(){
	
    $('a[id^="add_thx"]').on('click', function (e) {
        e.preventDefault();
        var post_id = $(this).attr('id');
        post_id = post_id.substr(7);
		post_body="pid="+post_id;
        var btn = $(this);

		function showSpinner() {
			$('#post_'+post_id).prepend('<div id="thx_spinner"><img src="'+spinner_image+'" alt="spinner" />'+loading_text+'</div>');
			$('#thx_spinner').css({
				"height": $('#post_'+post_id).height()+'px',
				"width": $('#post_'+post_id).width()+'px',
			}).fadeTo(0, 0.1).fadeTo("slow" , 0.6);
		}
		
		function hideSpinner() {
		  $('#thx_spinner').remove();
		}	
		
		$.ajax(
		{
			url: 'xmlhttp.php?action=thankyou&my_post_key='+my_post_key,
			type: 'post',
			data: post_body,
			dataType: 'json',
			beforeSend:function(){
				showSpinner();							
			},			
        	success: function (data)
        	{
				$("#counter"+post_id).html(data.count);
				$("#thxpid_"+post_id).html(data.post);
				$("#sp_"+post_id).html(data.buttons);
				$("#thx_thanked_"+post_id).html(data.thxcount);
				$("#thx"+post_id).html(data.list);
				hideSpinner();						
          	},
			complete: function(request,status){
				var json = $.parseJSON(request.responseText);
				if(json.hasOwnProperty("errors"))
				{
					$.each(json.errors, function(i, error)
					{
						$.jGrowl(error, { position: 'bottom-left', theme: 'thx_window', header: 'Error:', });
					});
					return false;					
				}
				else
				{
					$.jGrowl(thx_msg_add, { position: 'bottom-left', theme: 'thx_window', header: thx_msg_title, live: 3000 });										
					$("#add_thx"+post_id).hide();
					$("#del_thx"+post_id).show();
					$("#counter"+post_id).attr('class','good_thx');
					$("#thx"+post_id).show("slow");	
					$("#thxpid_"+post_id).addClass("thx_thanked_post");									
				}
			}
		});
	});
    $('a[id^="del_thx"]').on('click', function (e) {
        e.preventDefault();
        var post_id = $(this).attr('id');
        post_id = post_id.substr(7);
		post_body="pid="+post_id;
        var btn = $(this);

		function showSpinner() {
			$('#post_'+post_id).prepend('<div id="thx_spinner"><img src="'+spinner_image+'" alt="spinner" />'+loading_text+'</div>');
			$('#thx_spinner').css({
				"height": $('#post_'+post_id).height()+'px',
				"width": $('#post_'+post_id).width()+'px',
			}).fadeTo(0, 0.1).fadeTo("slow" , 0.6);
		}
		
		function hideSpinner() {
		  $('#thx_spinner').remove();
		}	
		
		$.ajax(
		{
			url: 'xmlhttp.php?action=remove_thankyou&my_post_key='+my_post_key,
			type: 'post',
			data: post_body,
			dataType: 'json',
			beforeSend:function(){
				showSpinner();							
			},
        	success: function (data)
        	{
				$("#counter"+post_id).html(data.count);
				$("#thxpid_"+post_id).html(data.post);
				$("#sp_"+post_id).html(data.buttons);
				$("#thx_thanked_"+post_id).html(data.thxcount);
				$("#thx"+post_id).html(data.list);
				hideSpinner();									
			},
			complete: function(request,status){
				var json = $.parseJSON(request.responseText);
				if(json.hasOwnProperty("errors"))
				{
					$.each(json.errors, function(i, error)
					{
						$.jGrowl(error, { position: 'bottom-left', theme: 'thx_window', header: 'Error:' });
					});
					return false;					
				}
				else
				{
					$.jGrowl(thx_msg_remove,{ position: 'bottom-left', theme: 'thx_window', header: thx_msg_title, live: 3000 });								
					$("#del_thx"+post_id).hide();
					$("#add_thx"+post_id).show();
					$("#thx"+post_id).hide();
					$("#counter"+post_id).attr('class','bad_thx');	
					$("#thxpid_"+post_id).removeClass("thx_thanked_post");				
				}
			}
		});
	});	 
});