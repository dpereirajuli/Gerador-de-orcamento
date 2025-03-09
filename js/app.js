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

    let nomeDaEmpresa = "Nome da empresa Xyz"
    let enderecoDaEmpresa = " Av. Endereço da rua x 159, bairro tal - São Paulo"
    let telefoneDaEmpresa = " (11) 9 9999-9999 "

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
