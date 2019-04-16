let senhaCadastrada = "aviao123"
let senhaEntrada = prompt("Digite sua senha começando com aviao");
let limDiario = 500;
if(senhaCadastrada===senhaEntrada){
    
    let saldo=700;
    let vlrSaque=prompt("Qual o valor do saque ")

       
        if((vlrSaque<saldo) && (vlrSaque<=limDiario)){
        alert("Saque aprovado");
        }
        else if(vlrSaque==saldo){
            alert("Saque aprovado mas seu saldo é R$0,00")
        }
        else{
        alert("Saldo insuficiente");
        }
}
else{
    alert("Senha incorreta");
}