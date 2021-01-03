const obj = {
    name : 'Akshay',
    sing: function(){
        return 'lalala' + this.name
    }
}
console.log(obj.sing())


// we can make code clean by using function like this

const obj = {
    name : 'Akshay',
    sing(){
        return 'lalala' + this.name
    },
    singAgain(){
        return this.sing() + '!'
    }
}
console.log(obj.singAgain())
