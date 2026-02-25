class Conversar{
    static paraFahrenheit = function(celsius){
        this.celsius = celsius
        return console.log(celsius * 1.8 + 32)
    }
}

Conversar.paraFahrenheit(25)