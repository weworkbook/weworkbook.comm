// scripts.js - minimal interactions for the offline demo
document.addEventListener('DOMContentLoaded', function(){
  var viewLink = document.getElementById('viewCertLink');
  viewLink.addEventListener('click', function(e){
    e.preventDefault();
    alert('This is a placeholder link in the offline package.');
  });
});

function showTimeZone(){
  try{
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    var tzInput = document.getElementById('timezone');
    if(tzInput) tzInput.value = tz;
  } catch(e){
    var tzInput = document.getElementById('timezone');
    if(tzInput) tzInput.value = 'UTC offset ' + new Date().getTimezoneOffset();
  }
  return true;
}
