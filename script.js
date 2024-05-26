$(document).ready(function () {
    // Toggle menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    // Add or remove 'active' class from header based on scroll position
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if ($(window).scrollTop() > 60) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }

        $('section').each(function () {
            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Function to display a toast message
    function showToast(message) {
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.classList.add('toast');
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    function showToast2(message) {
        const toast = document.createElement('div');
        toast.classList.add('toast2');
        toast.classList.add('toast2');
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // Function to validate the form
    // Function to validate the form
    function validateForm() {
        const name = $('.contact input[type="text"]').val();
        const email = $('.contact input[type="email"]').val();
        const phone = $('.contact input[type="number"]').val();
        const message = $('.contact textarea').val();

        if (name === '' || email === '' || phone === '' || message === '') {
            showToast('Please fill out all fields.');
            return false;
        }

        showToast2('Message sent successfully!');

        // Reset the input fields
        $('.contact input[type="text"]').val('');
        $('.contact input[type="email"]').val('');
        $('.contact input[type="number"]').val('');
        $('.contact textarea').val('');

        return true;
    }

    // Attach event listener to the "send message" button click
    $('.contact .btn').click(function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent default form submission if form is not valid
        }
    });
});
