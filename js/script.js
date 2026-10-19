
document.addEventListener( DOMContentLoaded , function() {
    // 1. التحقق من نموذج تسجيل الدخول
    const loginForm = document.querySelector( #login form );
    if (loginForm) {
        loginForm.addEventListener( submit , function(e) {
            e.preventDefault();
            const email = this.querySelector( input[type="email"] ).value;
            const password = this.querySelector( input[type="password"] ).value;
            if (password.length < 6) {
                alert( ⚠️ كلمة المرور يجب أن تكون 6 أحرف على الأقل. );
                return;
            }
            alert( ✅ تم تسجيل الدخول بنجاح!\nمرحباً بك:   + email);
            this.reset();
        });
    }

    // 2. التحقق من نموذج إنشاء الحساب
    const registerForm = document.querySelector( #register form );
    if (registerForm) {
        registerForm.addEventListener( submit , function(e) {
            e.preventDefault();
            const name = this.querySelector( input[type="text"] ).value;
            const password = this.querySelector( input[type="password"] ).value;
            if (name.length < 3) {
                alert( ⚠️ الاسم يجب أن يكون 3 أحرف على الأقل. );
                return;
            }
            if (password.length < 6) {
                alert( ⚠️ كلمة المرور يجب أن تكون 6 أحرف على الأقل. );
                return;
            }
            alert( ✅ تم إنشاء الحساب بنجاح!\nمرحباً:   + name);
            this.reset();
        });
    }

    // 3. التحقق من نموذج تواصل معنا
    const contactForm = document.querySelector( #contact form );
    if (contactForm) {
        contactForm.addEventListener( submit , function(e) {
            e.preventDefault();
            const name = this.querySelector( input[type="text"] ).value;
            const message = this.querySelector( textarea ).value;
            if (message.length < 10) {
                alert( ⚠️ الرسالة قصيرة جداً، يرجى كتابة 10 أحرف على الأقل. );
                return;
            }
            alert( ✅ تم إرسال رسالتك بنجاح يا   + name +  ! );
            this.reset();
        });
    }
});
