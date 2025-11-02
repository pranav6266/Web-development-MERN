function myfun1() {
    let ele = document.getElementById("pwd2");
    console.log(ele.placeholder);
    console.log(ele.type);
    console.log(ele.value);
}


// In this function, we have successfully implemented show and hide icon for password field

function myfun2() {
    let passwordInput = document.getElementById('pwd1');
    let toggleBtn = document.getElementById('pwdBtn');
    let icon = toggleBtn.querySelector('i'); // grabs the <i> inside button

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}


// We can also use getElementsByTag and getElementsByName 
// There is a better way of using this querySelector
// (where it uses String for tag, '#' for id, '.' for recognising class)
// We can also use querySelectorAll to select all the elements where a particular class is assigned
// QuerySelectors work same as selectors in CSS (combinator selectors) works with relationships.


