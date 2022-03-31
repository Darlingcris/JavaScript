var agora = new Date()
var hora = agora.getHours()
var agora1 = new Date()
var minuto = agora1.getMinutes()


console.log(`Agora são ${hora}:${minuto} hora(s).`)
if (hora <= '12:00') {
    console.log('Bom dia!')
} else
if (hora < '18:00') {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}