var cadastroParaEventos = ["data","idade","participantes"]

let data = 21;
if(data>20){
    console.log("Data disponível para reserva")
}else {
    console.log("Não é permitido cadastrar eventos com data atual, tente cadastrar outra data.")    
}

let idade = 18
if(idade<18){
    console.log("não é permitido cadastro para menores de 18 anos.")
}else {
    console.log("Permitir cadastro, prosseguir para finalizar.")
}

let quantidadeParticipantesePalestrantes = 100
if(quantidadeParticipantesePalestrantes<100){
    console.log("Participante cadastrado com sucesso.")
}else {
    console.log("O número máximo de participantes para este evento é de 100, limite excedido.")
}