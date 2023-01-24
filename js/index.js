const btnSubmit = document.getElementById('btnSubmit');


let db_clients = [];


btnSubmit.addEventListener('click', ()=>{

     var client = {
          name: document.getElementById('name').value,
          phone: document.getElementById('phone').value,
          interestArea: document.getElementById('interestArea').value,
          email: document.getElementById('email').value,
          informations: document.getElementById('informations').value
     }

     //Limpa os campos do formulário após inclusão e envio
     document.getElementById('name').value = '';
     document.getElementById('phone').value = '';
     document.getElementById('interestArea').value = '';
     document.getElementById('email').value = '';
     document.getElementById('informations').value = '';

     db_clients.push(client);

     console.log(db_clients);

});

