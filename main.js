function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    var name =document.getElementById("name");
    var email = document.getElementById("email");
    var subjek = document.getElementById("subjek");
    var pesan = document.getElementById("pesan");
  
    if(name.value == ""){
      alert("nama harus diisi");
      name.focus();
      return false;
    }
  
    if(email.value == ""){
      alert("email harus diisi");
      email.focus();
      return false;
    }
  
    if(pesan.value == ""){
      alert("pesan harus diisi");
      feedbck.focus();
      return false;
    }
  
    if(subjek.value = ""){
      alert("subjek harus diisi");
      feedback.focus();
      return false;
    }
    return true;
  
  
  }