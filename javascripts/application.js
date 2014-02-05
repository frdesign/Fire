  
 //landing page
function showLandingPage() {
    var webView = new steroids.views.WebView("index.html");
    steroids.layers.push(WebView);
  }

  
//Open login modal
function showLogin() {
    var modalWebView = new steroids.views.WebView("login.html");
    steroids.modal.show(modalWebView);
  }

//Put uPrise logo on nav bar
steroids.view.navigationBar.show({
      titleImagePath: "/images/uprise_navbar_logo@2x.png"
  });