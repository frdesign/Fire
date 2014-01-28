
function drupal_login_request(){
  var name = $('#page_login_name').val();
  if (!name) { alert('Please enter your user name.'); return false; }
  var pass = $('#page_login_pass').val();
  if (!pass) { alert('Please enter your password.'); return false; }
  
  // BEGIN: drupal services user login (warning: don't use https if you don't have ssl setup)
  $.ajax({
      url: "http://dev-uprise.gotpantheon.com/services/user/login.json",
      type: 'post',
      data: 'username=' + encodeURIComponent(name) + '&password=' + encodeURIComponent(pass),
      dataType: 'json',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('page_login_submit - failed to login');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      //If succesful login hide login modal and go back to index
      success: function (data) {
       alert("welcome user " + data.user.name);
       
       //store userid in localstorage
       window.localStorage.setItem("userId", data.user.uid);
       window.localStorage.setItem("userName", data.user.name);
       // STORE SESSION NAME & ID IN LOCALSTORAGE FOR FURTURE CALLS
       window.localStorage.setItem('session_name', data.session_name );
       window.localStorage.setItem('sessid', data.sessid);
       
       //Get Token
       get_csrf_token();

       showLandingPage();
      }
  });
  // END: drupal services user login
  return false;
}

/*
 * Get token
 */
function get_csrf_token(){
  $.ajax({
    url:"http://dev-uprise.gotpantheon.com/services/session/token", //get session token
    type:"get",
    dataType:"text",
    beforeSend: function(request) {
        request.setRequestHeader("Cookie", window.localStorage.getItem("session_name") + '=' + window.localStorage.getItem("sessid"));
    },
   
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      console.log(JSON.stringify(XMLHttpRequest));
      console.log(JSON.stringify(textStatus));
      console.log(JSON.stringify(errorThrown));
    },
    success: function (token) {
      window.localStorage.setItem('token', token);
      console.log(token);
      return token;
    }
  });
}