tabsBox
=======

simple jquery plugin creating box with tabs

Sample usage:
-------------

###Javascript:

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="./js/tabsbox_0.3.js"></script>
	<script type="text/javascript">
	// <![CDATA[
		
		$(document).ready(function() {
				
			$("#tabsBox").tabsBox({
				showType:     "fade",   // Type of showing
				showDuration: "slow",   // Duration of showing
				hideType:     "fade",   // Type of hiding
				hideDuration: 400       // Duration of hiding
			});
				
		});
			
	//]]>
	</script>
	
###HTML structure:
	
	<div id="tabsBox">
				
		<ul class="tabs">
			<li class="selected"><a href="#" id="tab-infoTab">Tab One</a></li>
			<li><a href="#" id="tab-someOtherTab">Tab Two</a></li>
		</ul>
					
					
		<div class="contents">
						
			<div id="infoTab" class="tab-content">
						
				<p>Cras a felis. Pellentesque aliquam ut, tristique senectus et lectus. 
					Mauris ullamcorper sem vestibulum sapien, tempus ipsum. Fusce imperdiet quis, placerat nisl sit amet mauris. 
					Pellentesque vel molestie nisl. Proin adipiscing quam congue eget, ante.Lorem ipsum dolor sit amet enim.</p>
						
			</div>
						
			<div id="someOtherTab" class="tab-content">
						
				<p>Lorem ipsum dolor sit amet enim. Cras interdum wisi bibendum porttitor. 
					Aenean feugiat tempus. Pellentesque habitant morbi tristique senectus et malesuada et, scelerisque sem. 
					Nulla a nibh. Cras luctus nisl. Cras a felis. Pellentesque aliquam ut, tristique senectus et lectus. 
					Mauris ullamcorper sem vestibulum sapien, tempus ipsum.</p>
			</div>
						
		</div>
					
	</div>
	
		
