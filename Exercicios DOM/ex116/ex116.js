class Calculadora{
    static somar = function(n1,n2) {
      return n1 + n2
    }

    static dobrar = function(n){
        return n + n
    }
}

console.log(Calculadora.somar(10, 5))
console.log(Calculadora.dobrar(10))
