// Handling the form submission
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Login Successful!');
});

document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Registration Successful!');
});

document.getElementById('bookingForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Ticket Booked Successfully!');
});

document.getElementById('paymentForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Payment Successful!');
});
