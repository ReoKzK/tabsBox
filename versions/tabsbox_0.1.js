
	/** --------------------------------- **
	 *               Tabs_Box              *
	 * ----------------------------------- *
	 * File : tabs_box.js                  *
	 * Klasa oprogramowująca box z         *
	 * zakładkami                          *
	 * @author Radek K reo.fox@gmail.com   *
	 * @version 0.1 <2010-08-09>           *
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
			
			thisObj.run = function ()
			{
				// --- Pokazuje element o danym id ---
				// - id: ID elementu do pokazania
				// - elem: referencja do obiektu klikniętego linku
				thisObj.showTab = function (id, elem)
				{
					thisObj.hideAllContents();
					$("#" + id).fadeIn("slow");
					
					thisObj.clearMenu();
					$(elem).parent().addClass(thisObj.menuItemSorroundingSelClass);
				};
				
				// --- Ukrywa wszystkie elementy ---
				thisObj.hideAllContents = function ()
				{
					$("#" + thisObj.id + " " + thisObj.contents + " > div").each( function(index, dom) {
						if ( $(this).css("display") != "none" )
							$(this).fadeOut(300);
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
		
		