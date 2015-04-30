<?php


function resumes_builder_themes_blue($resume_id)
	{
		$ResumesBuilderClass = new ResumesBuilderClass();
		$sections_data = (array)$ResumesBuilderClass->post_meta($resume_id, 'sections_data');
		
		//var_dump($sections_data);
		
		$html = '';
		
		$html .= '<div class="resumes-container blue">';
		$html .= '<div class="col-left">';	
		
		$html.= $ResumesBuilderClass->get_resumes_header($resume_id, array('thumbnail'));
		
		$html .= '<div class="title-container">';	
		$html.= $ResumesBuilderClass->get_resumes_header($resume_id, array('title'));		
		$html.= $ResumesBuilderClass->get_resumes_header($resume_id, array('subtitle'));
		$html.= '</div>';
		
		$html.= $ResumesBuilderClass->get_resumes_header($resume_id, array('details'));
		$html .= '<div class="resumes-contact">';
		$html.= $ResumesBuilderClass->get_resumes_section_entry($resume_id, 'contact_info');
		$html.= '</div>';
		
		$html .= '<div class="resumes-social">';
		$html.= $ResumesBuilderClass->get_resumes_section_entry($resume_id, 'social');
		$html.= '</div>';
		
		$html .= '<div class="resumes-skill">';
		$skill_entries = (array)$ResumesBuilderClass->get_resumes_section_entry_array($resume_id, 'skill');

		foreach($skill_entries as $values)
			{
				$html .= '<div class="present" >';
				$html .= '<div class="present-value" style=" width:'.$values['level'].'">&nbsp;&nbsp;'.$values['name'].' - '.$values['level'].'</div>';
				$html .= '</div>';
			}
		
		$html.= '</div>';		
			
		$html.= '</div>';
		
		$html .= '<div class="col-right">';	
		
		foreach($sections_data as $key=>$values)
			{
				
				
				if($key == 'thumbnail' || $key == 'title' || $key == 'subtitle' || $key == 'details'  )
					{
						//$html.=$key.'-';
					}
				else
					{
						
						
						
						
						if(isset($sections_data[$key]['display']))
							{
								$html.= $ResumesBuilderClass->get_resumes_sections($resume_id, $key);
							}
						
						
						
					}

			}
		
		
		$html.= '</div>';		
		
		
		
		





		
		return $html;
	}