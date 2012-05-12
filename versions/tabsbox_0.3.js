
	/** ----------------------------------------- **
	 *                   tabsBox                   *
	 * ------------------------------------------- *
	 * File : tabs_box.js                          *
	 * Plugin jQuery oprogramowujący box z         *
	 * zakładkami                                  *
	 * @author Reo  reo.fox@gmail.com              *
	 * @version 0.3 <2011-02-06>                   *
	 * @license Open Source                        *
	 ** ----------------------------------------- **
	 ** Changelog:                                **
	 **  - teraz to plugin jQuery                 **
	 **  - linki do zakładek działają             **
	 **    automatycznie (id="tab-nazwa_zakładki) **
	 **  - aktualnie otwarta zakładka nie jest    **
	 **    otwierana ponownie                     **
	 ** ----------------------------------------- **
	*/
	
	jQuery.fn.extend ({ 
	
		tabsBox: function (tbConfig)
		{
			// - Konfiguracja domyślna -
			
			var config = {
				menu:                        "ul.tabs",
				menuItemSorrounding:         "li",
				menuItemSorroundingSelClass: "selected",
				contents:                    "div.contents",
			
				// - Typy przejść i ich czasy trwania -
				showType:     "fade",
				showDuration: "slow",
				hideType:     "fade",
				hideDuration: 300
			};
			
			var tabPrefix = "tab-";
			var tabPrefixLen = tabPrefix.length;
			
			var openTabId = "";
			var elementId = jQuery(this).attr("id");
			
			jQuery.extend(config, tbConfig);
			
			
			// - Dodanie akcji do poszczególnych linków zakładek -
			
			var elements = jQuery(this).find(config.menu + " " + config.menuItemSorrounding + " a[id^=" + tabPrefix + "]");
			
			elements.each( function(index, dom) {
			
				// - Pobranie id zakładki z id linku -
				var tabId = jQuery(this).attr("id").substring(tabPrefixLen);
				
				jQuery(this).click( function(event) {
					// - Otwarcie zakładki tylko jeśli nie jest otwarta -
					if ( openTabId != tabId )
						showTab(tabId, jQuery(this));
					return false;
				});
				
				// - Element z klasą config.menuItemSorroundingSelClass zawierający link do zakładki
				// - wskazuje na otwartą zakładkę
				if ( jQuery(this).parent().hasClass(config.menuItemSorroundingSelClass) )
					openTabId = tabId;
			});
			
			// --- Czyści klasy przycisków menu ---
			function clearMenu ()
			{
				jQuery("#" + elementId + " " + config.menu + " " + config.menuItemSorrounding).each( function(index, dom) {
						jQuery(this).removeClass(config.menuItemSorroundingSelClass);
					}
				);
			};
			
			// --- Ukrywa wszystkie elementy ---
			function hideAllContents ()
			{
				jQuery("#" + elementId + " " + config.contents + " > div").each( function(index, dom) {
					if ( jQuery(this).css("display") != "none" )
					{
						if ( config.hideType.toLowerCase() == "fade" )
							jQuery(this).fadeOut(config.hideDuration);
						
						else if ( config.showType.toLowerCase() == "slide" )
							jQuery(this).slideUp(config.hideDuration);
						
						else if ( config.showType.toLowerCase() == "hide" )
							jQuery(this).hide(config.hideDuration);
						
						else
							jQuery(this).hide(config.hideDuration);
					}
				});
			};
			
			// --- Pokazuje element o danym id ---
			// - id: ID elementu do pokazania
			// - elem: referencja do obiektu klikniętego linku
			function showTab (id, elem)
			{
				hideAllContents();
				
				if ( config.showType.toLowerCase() == "fade" )
					jQuery("#" + id).fadeIn(config.showDuration);
				
				else if ( config.showType.toLowerCase() == "slide" )
					jQuery("#" + id).slideDown(config.showDuration);
					
				else if ( config.showType.toLowerCase() == "show" )
					jQuery("#" + id).show(config.showDuration);
				
				else
					jQuery("#" + id).show(config.showDuration);
				
				openTabId = id;
				
				clearMenu();
				jQuery(elem).parent().addClass(config.menuItemSorroundingSelClass);
			};
		}
	
	});
