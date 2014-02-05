    // Listen for window.postMessage() messages that drawer sends us

window.addEventListener("message", function(msg) {
  var elem = document.querySelector("#selectedInDrawer");
  elem.textContent = msg.data.selection;
});

// Initialize the left drawer

var leftDrawer = new steroids.views.WebView("nav_drawer.html");

leftDrawer.preload({},{
  onSuccess: initGesture  // When the view has loaded, enable finger tracking
});

function initGesture() {
  steroids.drawers.enableGesture(leftDrawer);
}


// Helper functions

function openDrawer() {
  steroids.drawers.show(leftDrawer);
}

function closeDrawer() {
  steroids.drawers.hideAll();
}

//Logout user and close drawer
function logout() {
    //window.localStorage.clear();
    steroids.drawers.hideAll();
    showLogin();
    alert("You have logged out.");
}


  
    // Nav menu slider
    //var leftDrawer = new steroids.views.webView("nav_drawer.html");
    //
    //var myAnimation = new steroids.Animation({
    //  transition: "slideFromLeft",
    //  duration: 0.7,
    //  curve: "linear"
    //});
    //
    //function showDrawer() {
    //  steroids.drawers.show( {
    //    view: leftDrawer,
    //    edge: steroids.screen.edges.LEFT,
    //    keepLoading: true,
    //    widthOfDrawerInPixels: 400,
    //    widthOfLayerInPixels: 100,
    //    animation: myAnimation
    //  }, {
    //    onSuccess: function() {
    //      alert("Drawer is being drawn!");
    //    },
    //    onFailure: function(error) {
    //      alert("Could not show the drawer: " + error.errorDescription);
    //    }
    //  });
    //};
    //
    //leftDrawer.preload({}, {
    //  onSuccess: showDrawer
    //});