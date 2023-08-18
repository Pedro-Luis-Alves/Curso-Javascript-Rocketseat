
/* 

    const e let são locais e só funcionam no escopo 
    onde foi criada

*/
let y = 1


{
    {
        {
            {
                {
                    y = 0
                    console.log('>Existe y ', y)
                }
                y = 1
            }
            y = 2
        }
        y = 3
    }
    y = 4
}

console.log('>Existe y depois do bloco?', y)



