function Person() {
    this.age = 0

    setTimeout(() => {
        this.age++
        console.log(this.age)
        console.log(`this:${JSON.stringify(this)}`)
    }, 1000)

    setTimeout(() => {
        this.age++
        console.log(this.age)
    }, 1000)
}
var p = new Person()


global.test = "foo"

console.log(global.test)
console.log(test)
