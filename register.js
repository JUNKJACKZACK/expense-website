function addData(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('userName', username);
    localStorage.setItem('userPassword', password);
}