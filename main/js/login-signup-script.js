
function rgstrButton() {
    let login = document.querySelector('.login-sect');
    let rgstr = document.querySelector('.register-sect');
    console.log(login, rgstr);
    login.style.display = "none";
    rgstr.style.display = 'flex';
    rgstr.style.transition="all 1000ms ease";
    rgstr.style.transform = "translateX(0)";
    document.getElementById('body').style.overflow = 'hidden';

}

function loginButton() {
    let login = document.querySelector('.login-sect');
    let rgstr = document.querySelector('.register-sect');

    rgstr.style.display = "none";
    login.style.display = "flex"
    document.getElementById('body').style.overflow = 'hidden';
}

function xButton() {
    let panel = document.querySelector('.panel');
    panel.style.display = "none";
    loginButton();
    document.getElementById('body').style.overflow = 'visible';
}

function logButton() {
    let panel = document.querySelector('.panel');
    panel.style.display = "flex";
    document.getElementById('body').style.overflow = 'hidden';

}

function signup(){
    let panel = document.querySelector('.panel');
    panel.style.display = "flex";
    rgstrButton();
}