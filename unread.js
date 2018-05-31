var lastnotificationcount = 0;

console.log(__dirname);

function refreshUnreadTotalExtension()
{        
    var totalunread = 0;
    //console.log("refreshUnreadTotalExtension is running");
   if (document.querySelector('.conversation-unread') !== null) {

   		var x = document.getElementsByClassName("conversation-unread");
		var i;
		for (i = 0; i < x.length; i++) {
		   var unreadinthisconvo = Number(x[i].innerHTML);
		   //console.log('unread in convo nr ' + i + ' is ' + unreadinthisconvo); 
		   totalunread += unreadinthisconvo;
		   //console.log('  total unread is ' + totalunread); 
		}
		document.title = 'Siilo (' + totalunread + ')';
		
		var unreadconvofirst = document.getElementsByClassName("conversation-main-name")[0].innerHTML;
		var unreadconvofirsttext = document.getElementsByClassName("conversation-message-text")[0].innerHTML.replace(/(<([^>]+)>)/ig,"").replace( /\s\s+/g, ' ' );
		var zin = 'Siilo ('+ totalunread + '): ' + unreadconvofirst + ':\r\n' + unreadconvofirsttext;
		console.log(zin);
		
		if(totalunread > lastnotificationcount && !document.hasFocus())
		{
						
			
			let myNotification = new Notification('Siilo', {
					body: zin
		  });
			
		}
		lastnotificationcount = totalunread;
	
/*
		if(process.platform === "win32")
		{
			mainWindow.setOverlayIcon(__dirname + '/changes.png',"NIEUW BERICHT");
		}
*/
	
	} else {
		//console.log('  total unread: none'); 
		document.title = 'Siilo';
		
/*
		if(process.platform === "win32")
		{
			
			mainWindow.setOverlayIcon(null,null);
		}
*/
		
		
	}
    
    
}




//refreshUnreadTotalExtension();
//setInterval(refreshUnreadTotalExtension, 1000);



function addObserverIfDesiredNodeAvailable() {
    var composeBox = document.querySelector(".conversations");
    if(!composeBox) {
        //The node we need does not exist yet.
        //Wait 500ms and try again
        //alert(".conversations not available");
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
    
    //alert(".conversations is available");
    
		var observeDOM = (function(){
	    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
	        eventListenerSupported = window.addEventListener;
	
	    return function(obj, callback){
	        if( MutationObserver ){
	            // define a new observer
	            var obs = new MutationObserver(function(mutations, observer){
	                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
	                    callback();
	            });
	            // have the observer observe foo for changes in children
	            obs.observe( obj, { childList:true, subtree:true });
	            //alert("added MutationObserver");
	        }
	        else if( eventListenerSupported ){
	            obj.addEventListener('DOMNodeInserted', callback, false);
	            obj.addEventListener('DOMNodeRemoved', callback, false);
	            //alert("added EventListener");
	        }
	    };
	})();
	
	// Observe a specific DOM element:
	observeDOM( document.querySelector('.conversations') ,function(){ 
	    //alert('dom changed');
	    refreshUnreadTotalExtension();
	});
}

addObserverIfDesiredNodeAvailable();


