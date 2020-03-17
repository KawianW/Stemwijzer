const colors = ["blauw", "oranje", "zwart", "paars"];

for(i = 0; i < colors.length; i++) {
    console.log( "dit is keuze " + (i + 1) + "de kleur " + colors[i]);
}

var number = ["st", "nd", "rd", "th"];

colors.sort();

// colorsArray.sort((a, b) => {
//     if(a.charAt(1) > b.charAt (1) {
//         return 1;
//     } else {
//         return -1
//     )}
// )}

colors.forEach((color, index) => {
    console.log(`this is my ${index + 1}${number[index]} choice, where the color is: ${color}`)
});









