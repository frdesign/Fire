
    

//Open login modal
function showLogin() {
    var WebView = new steroids.views.WebView("login.html");
    steroids.layers.push(WebView);
  }
  
  //Open new account modal
function showNewAccount() {
    var WebView = new steroids.views.WebView("new_account.html");
    steroids.layers.push(WebView);
  }
  
    //Open new account modal
function showLandingPage() {
    var WebView = new steroids.views.WebView("index.html");
    steroids.layers.push(WebView);
  }

//Put uPrise logo on nav bar
steroids.view.navigationBar.show({
      titleImagePath: "/images/uprise_navbar_logo@2x.png"
  });