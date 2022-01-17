//string
var of = "Algun texto aleatório";
console.log(of);
console.log("Tipo da variavel of = " + typeof(of));
//string
var x = 1;
console.log(x);
console.log("Tipo da variavel s= " + typeof(x));
//boolean
var y = false
console.log("Tipo da variavel y = " + typeof(y))

//declara em escopo local de bloco.
let varia = "akame"
console.log(varia)
//Valor constantes que não pode ser alterado.
const constante = "valor inicial obrigatório"
console.log(constante)

var escopoGlobal = "Escopo Global"
console.log(escopoGlobal)
function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocal);   
}

var adicao = 1+1;

var subtra = 2-1;

var multiplica = 2 * 2;

var divisaoreal = 6 / 2;

var divisaointeira = 10 % 2;

var potenciacao = 2 ** 2;

// maior que
var maiorque = 6 > 4
// menor que
var menorque = 7 < 10
//menor ou igual
var menoouigual= 7 >= 7
// maior ou igual
var menorouigual = 2 <= 3

// operador e
var a = true && true
console.log(a)
// operador ou
var b = true || false
console.log(b)
// operador de negação.
var c = !true
console.log(c)