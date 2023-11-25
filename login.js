
document.getElementById('loginbtn').addEventListener('click', function() {
    var loginBoxElement = document.querySelector('.login-box');
    var peopleElement = document.querySelector('.login-form');

    // Toggle between login-box and people
    if (loginBoxElement.style.display === 'none' || loginBoxElement.style.display === '') {
      loginBoxElement.style.display = 'block'; // Hide login-box
      peopleElement.style.display = 'none'; // Show people
    } else {
      loginBoxElement.style.display = 'none'; // Show login-box
      peopleElement.style.display = 'block'; // Hide people
    }
  });

  