console.log("Farhan")
function navigateToPage2() {
    window.location.href = 'page2.html';
}

function navigateToPage() {
    // window.location.href = 'index.html';
    
    document.getElementById('error-message').style.display = 'block';

    setTimeout(function() {
        document.getElementById('error-message').style.display = 'none';
    }, 3000);
    
}

