class Seguranca{
    static alarmeLigado = false

     verificarAlarme = function(){
        console.log(`Alarme ligado: ${(Seguranca.alarmeLigado ? 'sim' : 'não')}`)
    }
}


const guarita1 = new Seguranca
const guarita2 = new Seguranca

Seguranca.alarmeLigado = true
guarita1.verificarAlarme()
guarita2.verificarAlarme()