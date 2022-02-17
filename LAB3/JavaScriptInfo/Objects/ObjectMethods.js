function makeUser() {
    return {
        name: "John",
        //ref: this
        ref() {
            return this;
        }
    };
}
let user = makeUser();
//alert(user.ref.name); // error
alert(user.ref().name); // John


let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read(){
        this.a = +prompt("a: ", 0);
        this.b = +prompt("b: ", 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 
ladder.down();
ladder.showStep(); // 0
