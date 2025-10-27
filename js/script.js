function entrar() {
    // console.log("Pau no cu");
    // let eamil  = "teste@teste";
    // console.log(eamil);
    // alert("Entrando");
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value
    if (email == 'teste153ovo@gmail.com' && senha == "123456") {
        alert("Bundinha Liberada")
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    } else {
        alert("Bundinha não liberada")
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    }
    console.log(email, senha);
}