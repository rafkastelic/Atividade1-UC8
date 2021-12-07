var cadastroParaEventos = ["data","idade","participantes"]

let dataDoEvento = 21;
if(dataDoEvento>20){
    console.log("Data disponível para reserva")
//Se a data do evento for posterior à data atual, permitir o evento; 
}else {
    console.log("Não é permitido cadastrar eventos com data atual, tente cadastrar outra data.") 
//senão, alertar que o cadastro não será permitido por data inválida;       
}


let idade = 18
if(idade<18){
    console.log("não é permitido cadastro para menores de 18 anos.")
//Se o participante for maior de 18 anos, permitir o cadastro;    
}else {
    console.log("Permitir cadastro, prosseguir para finalizar.")
//senão, alertar que o cadastro não é permitido pela idade;
}


let listasParticipantesePalestrantes = 100
if(listasParticipantesePalestrantes<100){
    console.log("Participante cadastrado com sucesso.")
//Enquanto a quantidade de participantes for inferior a 100, permitir cadastro;
}else {
    console.log("O número máximo de participantes para este evento é de 100, limite excedido.")
//senão, alertar que o cadastro não será permitido por ter excedido o limite;
}