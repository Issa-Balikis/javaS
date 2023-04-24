// Lexical This

const person = {
    name: 'issa',
    cars: ['ferrari', 'lambo'],
    toString: function() {
        this.cars.forEach((car) => {
            console.log(`${this.name} has ${car}`)
        })    //.bind(this)
    }
}

person.toString();