let Biggestnumber = 0
let index = 0
let numbervalues = [7, 23, 42, 36, 50, 20]
if (numbervalues[index] > numbervalues[index + 1]) {
    Biggestnumber = numbervalues[index]
} else if (numbervalues[index] < numbervalues[index + 1]) {
    Biggestnumber = numbervalues[index + 1]
}
for (let index = 0; index <= numbervalues.length; index++) {
    if (Biggestnumber > numbervalues[index + 1]) {
        Biggestnumber += 0
    } else if (Biggestnumber < numbervalues[index + 1]) {
        Biggestnumber = numbervalues[index + 1]
    }
}
serial.writeValue("Biggest Number", Biggestnumber)
basic.forever(function () {
	
})
