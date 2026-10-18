
// التحقق من تطابق كلمتي المرور في صفحة التسجيل
document.addEventListener( DOMContentLoaded , function () {
    const registerForm = document.querySelector( form[data-type="register"] );
    if (registerForm) {
        registerForm.addEventListener( submit , function (e) {
            const pass = document.querySelector( input[name="password"] ).value;
            const confirm = document.querySelector( input[name="confirm_password"] ).value;
            if (pass !== confirm) {
                e.preventDefault();
                alert( كلمتا المرور غير متطابقتين! );
            }
        });
    }
});
