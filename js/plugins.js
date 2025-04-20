// Third-party plugin initialization
$(document).ready(function() {
    // Typed.js
    $('.typing-text').typed({
        strings: ['Santhosh Thouda', 'Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        backDelay: 1000
    });

    // jQuery Validate
    $('#contact-form').validate({
        rules: {
            name: 'required',
            email: { required: true, email: true },
            message: 'required'
        },
        messages: {
            name: 'Please enter your name',
            email: 'Please enter a valid email address',
            message: 'Please enter your message'
        },
        submitHandler: function(form) {
            const btn = $(form).find('button');
            btn.html('<i class="fas fa-check"></i> Sent!').prop('disabled', true);
            gsap.to(form, {
                backgroundColor: 'rgba(79, 209, 197, 0.1)',
                duration: 0.5,
                onComplete: () => {
                    gsap.to(form, { backgroundColor: '#ffffff', duration: 1 });
                }
            });
            setTimeout(() => {
                btn.html('Send Message').prop('disabled', false);
                form.reset();
            }, 2000);
        }
    });

    // jQuery UI Effects
    $('.social-link').hover(
        function() { $(this).effect('shake', { distance: 5, times: 2 }, 300); },
        function() {}
    );
});