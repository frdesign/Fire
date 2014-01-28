var nid; // global node id variable


$(window).on("load", function(){
    
    var userId = window.localStorage.getItem('userId');
    var userName = window.localStorage.getItem('userName');
    if(userId !== undefined) {
        
        $('#button_logout').removeClass('hidden');
        //FOR TESTING-REMOVE
        //alert("user name: " + userName)
        alert("token: " + window.localStorage.getItem('token'));
        
    } else {
        // user is logged in, hide the login button, show the logout button
        $('#buttons_login').removeClass('hidden');
        alert("user " + userId)
    }
});

//Logout function

//function logout_account(){
//    try {
//        $.ajax({
//            url: 'http://dev-uprise.gotpantheon.com/services/user/logout.json',
//            dataType: 'post',
//            beforeSend: function (request) {
//                request.setRequestHeader("X-CSRF-Token", window.localStorage.getItem('token'));
//            },
//            
//            error: function(XMLHttpRequest, textStatus, errorThrown) {
//              alert('button_logout - failed to logout - ' + testStatus + ' ' + errorThrown);
//              console.log(JSON.stringify(XMLHttpRequest));
//              console.log(JSON.stringify(textStatus));
//              console.log(JSON.stringify(errorThrown));
//            },
//            
//            success: function() {
//                window.localStorage.clear();
//                alert("You have been logged out.");
//                window.location.reload();
//            }
//        });
//   }
//   catch (error) { alert("button_logout - " + error); }
//   return false;
//}




function logout_account() {
    window.localStorage.clear();
    alert("You have logged out.");
    window.location.reload();
}