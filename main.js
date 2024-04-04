alert('It\'s time for a coding break!');
document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('popup-image');
  image.addEventListener('click', function() {
    window.open(image.src, '_blank');
  });
});