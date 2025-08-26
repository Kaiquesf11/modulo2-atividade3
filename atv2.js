const usuarios=["Levi","João","Maria"]

function verificarLogin(nome){
    if (usuarios.includes(nome)) {
        console.log("Bem-Vindo,"+ nome)
    } else {
        console.log("Usuário não encontrado")
    }
}

verificarLogin("Levi")
verificarLogin("Carlos")