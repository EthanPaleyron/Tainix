// function boucleFor(num) {
//     if (num < 50 || num > 100) {
//         console.log('ca marhce pas');
//         return;
//     }
    
//     let counteur = 0;

//     for (let i = 0; i < num; i ++) {
//         counteur += i;
//     }
//     return counteur;
// }

// console.log(boucleFor(88));


// &&: la je dit si jamais c'est moins de 50 et qu'il et aussi plus de 100 ca ne marchera pas
// ||: la je dit si jamais c'est moins de 50 ou plus de 100 ca ne marchera pas

// function result(tableau) {
//     const values = [97, 94, 85, 69, 24, 81, 90, 10, 12, 26, 12, 36, 57, 62, 80, 41, 24, 98, 59, 74, 85, 92, 99, 43, 12, 34, 51];

//     if (tableau < 10 || tableau < 100) {
//         console.log('ca marhce pas');
//         return;
//     }

//     for (let i = 0; i < tableau.length; i++) {
//         values[i] *= 3;
//     }
//     return values;
// }

// console.log(result(tableau));




// function carre(coté) {
//   let perimetre = coté * 4;
//   for (let i = 0; i < coté; i++) {
//     coté = perimetre;
//   }
// }

// console.log(carre(38));