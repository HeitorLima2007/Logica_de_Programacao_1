let cabecalho = document.getElementById("cabecalho")
//getElementById serve para buscar a função id no html para utiliza-lo

console.log(cabecalho)
//console.log serve para escrever uma mensagem no console do browser

function pegarDadosDoAluno(){
	
	const nome = document.getElementById("nome")
	console.log(nome.value)
	const nota1 = document.getElementById("nota1")
	console.log(nota1.value)
	const nota2 = document.getElementById("nota2")
	console.log(nota2.value)
	const nota3 = document.getElementById("nota3")
	console.log(nota3.value)
	const nota4 = document.getElementById("nota4")
	console.log(nota4.value)
	
	return nome.value
	
}

let pegarDado = pegarDadosDoAluno()

console.log("Nome",pegarDado)