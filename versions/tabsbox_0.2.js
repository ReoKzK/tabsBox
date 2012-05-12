
	/** --------------------------------- **
	 *               Tabs_Box              *
	 * ----------------------------------- *
	 * File : tabs_box.js                  *
	 * Klasa oprogramowująca box z         *
	 * zakładkami                          *
	 * @author Reo  reo.fox@gmail.com      *
	 * @version 0.2 <2010-08-11>           *
	 * @license Open Source                *
	 ** --------------------------------- **
	*/
	
		function Tabs_Box (elementId)
		{
			var thisObj = new Object();
			
			thisObj.id = elementId;
			
			thisObj.menu = "ul.tabs";
			thisObj.menuItemSorrounding = "li";
			thisObj.menuItemSorroundingSelClass = "selected";
			thisObj.contents = "div.contents";
			
			thisObj.showTab = null;
			thisObj.hideAllContents = null;
			thisObj.clearMenu = null;
			
			// - Typy przejść i ich czasy trwania -
			
			thisObj.showType = "fade";
			thisObj.showDuration = "slow";
			thisObj.hideType = "fade";
			thisObj.hideDuration = 300;
			
			thisObj.run = function ()
			{
				// --- Pokazuje element o danym id ---
				// - id: ID elementu do pokazania
				// - elem: referencja do obiektu klikniętego linku
				thisObj.showTab = function (id, elem)
				{
					thisObj.hideAllContents();
					
					if ( thisObj.showType.toLowerCase() == "fade" )
						$("#" + id).fadeIn(thisObj.showDuration);
					
					else if ( thisObj.showType.toLowerCase() == "slide" )
						$("#" + id).slideDown(thisObj.showDuration);
						
					else if ( thisObj.showType.toLowerCase() == "show" )
						$("#" + id).show(thisObj.showDuration);
					
					else
						$("#" + id).show(thisObj.showDuration);
					
					thisObj.clearMenu();
					$(elem).parent().addClass(thisObj.menuItemSorroundingSelClass);
				};
				
				// --- Ukrywa wszystkie elementy ---
				thisObj.hideAllContents = function ()
				{
					$("#" + thisObj.id + " " + thisObj.contents + " > div").each( function(index, dom) {
						if ( $(this).css("display") != "none" )
						{
							if ( thisObj.hideType.toLowerCase() == "fade" )
								$(this).fadeOut(thisObj.hideDuration);
							
							else if ( thisObj.showType.toLowerCase() == "slide" )
								$(this).slideUp(thisObj.hideDuration);
							
							else if ( thisObj.showType.toLowerCase() == "hide" )
								$(this).hide(thisObj.hideDuration);
							
							else
								$(this).hide(thisObj.hideDuration);
						}
					});
				};
				
				// --- Czyści klasy przycisków menu ---
				thisObj.clearMenu = function ()
				{
					$("#" + thisObj.id + " " + thisObj.menu + " " + thisObj.menuItemSorrounding).each( function(index, dom) {
							$(this).removeClass(thisObj.menuItemSorroundingSelClass);
						}
					);
				};
			};
			
			return thisObj;
		}
		
		