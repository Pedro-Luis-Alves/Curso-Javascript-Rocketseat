// É uma função que está passando como       parâmetro par outra função

function sayMyName(name) {

    console.log(name)
}

sayMyName(
        () => {
            console.log('Estou em uma callback')
        }
    )