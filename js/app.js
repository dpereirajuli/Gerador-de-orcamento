// dados da empresa
let nomeDaEmpresa
let enderecoDaEmpresa
let telefoneDaEmpresa

// dados do cliente
let nomeDoCliente
let enderecoDoCliente
let telefoneDoCliente

let btnIniciarOrcamento = document.getElementById("btn_iniciar_orcamento")
btnIniciarOrcamento.addEventListener('click', () =>{
    dadosPrincipais()
    document.location.replace('pages/novo_orcamento.html')
})

function dadosPrincipais() {

    let nomeDaEmpresa = "Imperatriz Serviços em Contruções"
    let enderecoDaEmpresa = " Av. Elísio Cordeiro De Siqueira 159, Jd Santo Elias - São Paulo"
    let telefoneDaEmpresa = " (11) 3647-8325 "

    let nomeDoCliente = document.getElementById("nome_do_cliente").value
    let enderecoDoCliente = document.getElementById("endereco_do_cliente").value
    let telefoneDoCliente = document.getElementById("telefone_do_cliente").value

    let mapDados = {
        "empresa": {
            "nome": nomeDaEmpresa,
            "endereco": enderecoDaEmpresa,
            "telefone": telefoneDaEmpresa
        },
        "cliente": {
            "nome": nomeDoCliente,
            "endereco": enderecoDoCliente,
            "telefone": telefoneDoCliente
        }
    }

    localStorage.setItem("dadosDaEmpresaEDoCliente", JSON.stringify(mapDados))

}