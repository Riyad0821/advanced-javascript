 const limit = 8;
 for (let i = 0; i < limit; i++) {
     for (let j = 0; j < limit; j++) {
         if ((i + j) % 2 == 0) {
             console.log(' ');
         } else {
             console.log('#');
         }
     }
 }