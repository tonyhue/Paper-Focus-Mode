chrome.runtime.sendMessage({}, function(response) {
    

    var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        
        // check current page, exit execution if not viewing Paper doc
        var currentPage = window.location.href;

        if (currentPage === "https://paper.dropbox.com/home/recents" || 
            currentPage === "https://paper.dropbox.com/home/favorites" || 
            currentPage === "https://paper.dropbox.com/home/folders/all" ||
            currentPage === "https://paper.dropbox.com/home/" ||
            currentPage === "https://paper.dropbox.com/") 
        { 
            clearInterval(readyStateCheckInterval); 
        }

        function stealthMode() {
            
        
            var facePile = document.getElementById('main-header').getElementsByClassName('hp-user-avatar');
 
            for(i = 0; i < facePile.length; i++) {
                facePile[i].classList.add('hp-user-is-disconnected');
            }
        }
 
        stealthMode();
 
    }
    }, 100);
});