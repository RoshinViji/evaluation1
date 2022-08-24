(function () {
    'use strict'
     
    
    var forms = document.querySelectorAll('.needs-validation')
     
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
     
          form.classList.add('was-validated')
        }, false)
      })
    })()
    
    
        function passvalue(){
          var fname=document.getElementById("firstName").value;
          localStorage.setItem("firstName",fname);
          var lname=document.getElementById("lastName").value;
          localStorage.setItem("lastName",lname);
          var age=document.getElementById("age").value;
          localStorage.setItem("age",age);
            var mail=document.getElementById("emailId").value;
             localStorage.setItem("a1",mail);
             var gen = document.getElementById("rad").value;
                    var gender_value;
    
                    if (document.getElementById("male").checked) {
                    gender_value = document.getElementById("male").value;
                    }
                        
                    else if(document.getElementById("female").checked){
                        gender_value = document.getElementById("female").value;
                        
                    }else if(document.getElementById("other").checked){
                        gender_value = document.getElementById("other").value;
                    
                    }  
                    localStorage.setItem("a2",gender_value);
                
             
             var pnumber=document.getElementById("phoneNumber").value;
             localStorage.setItem("phone",pnumber);}

              function getvalue(){

             var fname=document.getElementById("firstName1").value;
             sessionStorage.setItem("firstName1",fname);
             var lname=document.getElementById("lastName1").value;
             sessionStorage.setItem("lastName1",lname);
             var age=document.getElementById("age1").value;
             sessionStorage.setItem("age1",age);
             var gender = document.getElementById("radio").value;
                    var gender_value1;
    
                    if (document.getElementById("male1").checked) {
                    gender_value1 = document.getElementById("male1").value;
                    }
                        
                    else if(document.getElementById("female1").checked){
                        gender_value1 = document.getElementById("female1").value;
                        
                    }else if(document.getElementById("other1").checked){
                        gender_value1 = document.getElementById("other1").value;
                    
                    }  
                    sessionStorage.setItem("gender",gender_value1);
                  }
       
        





      function callvalue(){
        if(document.getElementById('addpassenger').checked) {
          document.getElementById('new').style.display='block';
          document.getElementById('button1').style.display='none';

        } else{
          document.getElementById('new').style.display='none';
          document.getElementById('button1').style.display='block';
        }
      }
     
      
       