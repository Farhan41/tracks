

document.querySelectorAll('.play').forEach(function(button, index) {
    button.addEventListener('click', function() {
        const popup = document.querySelectorAll('.popup')[index];
        popup.style.display = 'block';
    });
});

document.querySelectorAll('.close-btn').forEach(function(button, index) {
    button.addEventListener('click', function() {
        const popup = document.querySelectorAll('.popup')[index];
        popup.style.display = 'none';
    });
});
