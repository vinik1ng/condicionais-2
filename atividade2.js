//atividade 1


let nasci = parseInt(prompt('Veja se você poderá votar este ano! Digite o ano que vc nasceu.'))

if(nasci<= 2006){
    alert('Você pode votar!')
}else{
    alert('Você ainda nao pode votar :(')
}


// atividade 2

let senha = parseInt(prompt('Digite a senha do usuário'))

if (senha == 1234){
    alert('Acesso permitido')
}else{
    alert('Acesso negado')
}


// atividade 3 

let turno = prompt('em qual turno voce estuda,M , V OU N')

if (turno == 'matutino'){
    alert('bom dia')
}else if(turno == 'tarde'){
    alert('boa tarde')
}else if(turno == 'noite'){
    alert('boa noite')
}else{
    alert('valor invalido')
}
