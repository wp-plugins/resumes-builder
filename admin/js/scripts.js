jQuery(document).ready(function($)
	{

		$(document).on('click', '.sections-adder .add-new-section', function()
			{	

				var section_name = prompt("Section name ?","");
				
				

			if(section_name != null)
				{
					html = '<div class="section section-'+section_name+'"><div class="header"><b>'+section_name+'</b></div><div class="args"><b>Section Name:</b><br><input type="text" value="'+section_name+'" name="resumes_builder_sections['+section_name+']"><br><br></div></div>';
				}



				$('.sections-adder .section-list').append(html);
				
				
			})

		$(document).on('click', '.sections-adder .args .remove', function()
			{	
				if (confirm('Do you really want to delete this field ?')) {
					
					$(this).parent().parent().remove();
				}
			})	
			
			
			
			
			
			
			

		$(document).on('click', '.sections-adder .add-new-args', function()
			{
				var section_key = $(this).attr('section-key');

				var section_args = prompt("Please input name","");


			if(section_args != null)
				{
					html = '<tr><td><input type="text" value="'+section_args+'" name="resumes_builder_section_args['+section_key+']['+section_args+']"></td><td><span class="remove">X</span></td></tr>';
				}



				$('.section-'+section_key+' .args table').append(html);
			})



		$(document).on('click', '.sections-adder .section .header', function()
			{
				
				if($(this).parent().hasClass('active'))
					{
						$(this).parent().removeClass('active');
					}
				else
					{
						$(this).parent().addClass('active');
					}
				
			})





		$(document).on('click', '.sections-adder .header .remove', function()
			{
				$(this).parent().parent().remove();

				
			})


		$(document).on('click', '.resumes-builder .entry .remove', function()
			{
				$(this).parent().remove();

				
			})






		$(document).on('click', '.resumes-builder .canvas .header', function()
			{
				
				if($(this).parent().hasClass('active'))
					{
						$(this).parent().removeClass('active');
					}
				else
					{
						$(this).parent().addClass('active');
					}
				
			})


		$(document).on('click', '.resumes-builder .canvas .add-new', function()
			{
				var section_id = $(this).attr('section_id');
				
				var entry_count = $.now();				
				
				$(this).html('Wait...');
				
				//alert('Hello');
				
				$.ajax(
					{
				type: 'POST',
				url:resumes_builder_ajax.resumes_builder_ajaxurl,
				data: {"action": "resumes_builder_add_entry_ajax", "section_id":section_id,"entry_count":entry_count,},
				success: function(data)
						{	
						
							$('.entry-list-'+section_id).append(data);
							$('.section-entry-'+section_id+' .add-new').html('Add New');
	
	
						
						}
					});				
			})











	});	







