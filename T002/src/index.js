class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('My name is '+this.name);
    }
}
class Programmer extends Animal {
    constructor(name) {
        super(name);
    }
    program() {
        console.log("I'm coding...");
    }
}

var animal=new Animal('dummy'),
zf=new Programmer('zf');

animal.sayName();
zf.sayName();
zf.program();
