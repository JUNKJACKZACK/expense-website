function checkData(){
    var enterUsername = document.getElementById('username').value;
    var enterPassword = document.getElementById('password').value;

    var getUsername = localStorage.getItem('userName');
    var getPassword = localStorage.getItem('userPassword');

if(enterUsername == getUsername) {
    if(enterPassword == getPassword) {
        alert("Login Success");
    } else {
        alert("wrong password")
    }
    
} else {
    alert("wrong username")
}
}