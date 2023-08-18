/* 

    O Escopo determina a visibilidade de alguma variável no JS

    # Block Statement

*/

/* 
    {
     
        let x = 0
        console.log(x)
    
    } 
 */

   // ## var - é global e poderá funcionar fora de um escopo de bloco
   //hoisting
    console.log('>existe x antes do bloco?', x)

    {
        var x = 0
    }

    console.log('>existe x depois do bloco?', x)
