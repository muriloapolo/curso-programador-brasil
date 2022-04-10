// 'use strict';
this.name = 'Murilo';

function say() {
    console.log(this.name);
}

say()
const user = {
    say: function () {
        console.log(this.name)
    }
};
user.say();
console.log(this.name);