/* let foo = 'hello';
if (foo == 'hel' + 'lo') {
    console.log(`${foo} is true!`);

}

let bar = 1;
if (bar > 2) {
    console.log('true');

} else if (bar < 2) {
    console.log('hello');

} else {
    console.log('other one');

}

switch (bar) {
    case 0:
        console.log('bar is 0');
        break;
    case 1:
        console.log('bar is 1');
        break;
    default:
        break;

} */ // strict comparator

/* if (true && false) {

} */
/* let choice = window.prompt('Please tell us what kind of animal you want? Use words like: mammal, reptile, or fish. Also tell us your hobby: swimming, slithering, fetching, or napping');

/* pet finder */
/* if (choice.includes('mammal')) {
    if (choice.includes('fetching') || choice.includes('dog')) {
        console.log('You need a dog!');
    }
    if (choice.includes('napping') || choice.includes('cat')) {
        console.log('You need a cat!');
    }
} else if (choice.includes('reptile')) {
    if (choice.inlcudes('slithering') || choice.includes('snake')) {
        console.log('You need a snake!');
    }
} else if (choice.includes('fish')) {
    if (choice.includes('aquatic') || choice.includes('swimming')) {
        console.log('You need a fish!');
    }
} else {
    console.log('You need to choose another pet store...');
} */

/* truth && falsey */
/* 
int 0 -> falsey
bool false -> falsey
str empty string -> falsey
undefined -> falsey
null -> falsey
NaN -> falsey
*/

/* ----
loops--

for (initialization; condition; iterator)
for in
for of
do while
while

foreach

break
continue

*/

/* for */
let arr = ['Bryce', 'Bruce', 'Brian']

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}
/* for in */
let obj = {
    name: 'Bryce',
    age: 42,
    address: '123 Sesame Street'
}
for (const key in obj) {
    const element = obj[key];
    console.log(element);
}
for (const key in arr) {
    const element = arr[key];
    console.log(element);
}
/* for of */
for (const iterator of arr) {
    console.log(iterator);
}

/* do while */

do {
    console.log('do while');

} while (false);


/* while */
let count = 0;
while (count < 5) {
    console.log('while');
    count++;
}

/* foreach */
/* let names = ['Bryce', 'Bruce', 'Brian']

names.forEach(function(name) {
    console.log(name);

});

names.forEach(function(name, index) {
    console.log(name, index);

});


for (const name of names) {
    if (name === 'Bruce') {
        break;
    }
    console.log(name);

}

for (const name of names) {
    if (name === 'Bruce') {
        continue;
    }
    console.log(name);

}

names.forEach(function(name) {

    console.log(name);
}); */
/* var data = [
    ['Bryce', 'Mullican'],
    ['Herbert', 'Brown']
]
console.log(data[0][0]);

for (let i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].length; j++) {
        console.log(data[i][j]);

    }
} */

let myFunction = function(string) {

    let obj = {
        lowercase: 0,
        uppercase: 0,
        consonants: 0,
        vowels: 0
    };
    for (letter of string) {

        switch (letter) {
            case 'a':
                obj.lowercase++;
                obj.vowels++;
                break;
            case 'b':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'c':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'd':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'e':
                obj.lowercase++;
                obj.vowels++;
                break;
            case 'f':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'g':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'h':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'i':
                obj.lowercase++;
                obj.vowels++;
                break;
            case 'j':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'k':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'l':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'm':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'n':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'o':
                obj.lowercase++;
                obj.vowels++;
                break;
            case 'p':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'q':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'r':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 's':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 't':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'u':
                obj.lowercase++;
                obj.vowels++;
                break;
            case 'v':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'x':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'y':
                obj.lowercase++;
                obj.consonants++;
                break;
            case 'z':
                obj.lowercase++;
                obj.consonants++;
                break;
            default:
                break;
        }
    }

    return obj;
}

console.log(myFunction('djflsdjalfeljf'));


// check for unique char

let password = 'password!';
let char = ['!', '@', '#', '$', '%'];

for (const letter of password) {
    for (const specChar of char) {
        if (letter === specChar) {
            console.log(letter);
        }
    }
}

var dataArray = ['dime', 'dime', 'dime', 'penny', 'nickel', 'penny', 'dime', 'quarter', 'dime', 'nickel', 'nickel', 'dime', 'quarter', 'nickel', 'penny', 'dime', 'nickel', 'dime', 'dime', 'dime', 'quarter', 'nickel', 'quarter', 'dime', 'nickel', 'penny', 'dime', 'penny', 'nickel', 'quarter', 'quarter', 'quarter', 'dime', 'nickel', 'dime', 'quarter', 'dime', 'penny', 'penny', 'nickel', 'penny', 'penny', 'dime', 'nickel', 'penny', 'penny', 'quarter', 'quarter', 'nickel', 'nickel', 'penny', 'dime', 'nickel', 'quarter', 'nickel', 'nickel', 'quarter', 'quarter', 'dime', 'nickel', 'penny', 'dime', 'dime', 'nickel', 'penny', 'quarter', 'quarter', 'quarter', 'dime', 'nickel', 'nickel', 'dime', 'quarter', 'quarter', 'nickel', 'penny', 'quarter', 'penny', 'quarter', 'nickel', 'dime', 'quarter', 'dime', 'penny', 'quarter', 'nickel', 'nickel', 'nickel', 'quarter', 'penny', 'nickel', 'nickel', 'dime', 'dime', 'dime', 'quarter', 'quarter', 'quarter', 'penny', 'penny', 'dime', 'dime', 'dime', 'penny', 'quarter', 'nickel', 'quarter', 'quarter', 'penny', 'nickel', 'penny', 'nickel', 'nickel', 'penny', 'quarter', 'nickel', 'dime', 'quarter', 'nickel', 'dime', 'penny', 'nickel', 'nickel', 'penny', 'penny', 'penny', 'dime', 'quarter', 'quarter', 'quarter', 'penny', 'dime', 'nickel', 'dime', 'dime', 'penny', 'quarter', 'penny', 'quarter', 'penny', 'dime', 'dime', 'nickel', 'dime', 'penny', 'penny', 'nickel', 'penny', 'nickel', 'quarter', 'dime', 'dime', 'nickel', 'nickel', 'nickel', 'dime', 'dime', 'dime', 'quarter', 'penny', 'dime', 'nickel', 'quarter', 'nickel', 'penny', 'nickel', 'penny', 'nickel', 'penny', 'nickel', 'nickel', 'penny', 'dime', 'nickel', 'dime', 'dime', 'quarter', 'quarter', 'quarter', 'penny', 'dime', 'penny', 'dime', 'dime', 'penny', 'penny', 'nickel', 'nickel', 'penny', 'quarter', 'nickel', 'quarter', 'dime', 'nickel', 'quarter', 'nickel', 'penny', 'dime', 'quarter', 'nickel', 'penny', 'quarter', 'quarter', 'penny', 'quarter', 'dime', 'penny', 'dime', 'nickel', 'penny', 'dime', 'quarter', 'nickel', 'quarter', 'quarter', 'quarter', 'dime', 'quarter', 'dime', 'quarter', 'nickel', 'penny', 'penny', 'quarter', 'quarter', 'penny', 'dime', 'penny', 'dime', 'penny', 'nickel', 'nickel', 'dime', 'penny', 'quarter', 'penny', 'quarter', 'nickel', 'quarter', 'penny', 'nickel', 'quarter', 'dime', 'quarter', 'dime', 'penny', 'dime', 'dime', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'quarter', 'nickel', 'quarter', 'dime', 'quarter', 'penny', 'penny', 'penny', 'nickel', 'nickel', 'quarter', 'penny', 'quarter', 'quarter', 'penny', 'nickel', 'dime', 'penny', 'quarter', 'nickel', 'dime', 'penny', 'penny', 'quarter', 'penny', 'penny', 'dime', 'nickel', 'dime', 'penny', 'dime', 'nickel', 'nickel', 'dime', 'dime', 'penny', 'nickel', 'penny', 'dime', 'dime', 'nickel', 'dime', 'dime', 'penny', 'penny', 'dime', 'penny', 'nickel', 'quarter', 'nickel', 'quarter', 'quarter', 'penny', 'nickel', 'penny', 'quarter', 'nickel', 'nickel', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'penny', 'penny', 'nickel', 'quarter', 'nickel', 'dime', 'nickel', 'nickel', 'penny', 'quarter', 'dime', 'dime', 'nickel', 'dime', 'nickel', 'nickel', 'dime', 'quarter', 'quarter', 'nickel', 'penny', 'dime', 'dime', 'dime', 'dime', 'quarter', 'nickel', 'nickel', 'dime', 'nickel', 'quarter', 'nickel', 'dime', 'quarter', 'nickel', 'dime', 'quarter', 'quarter', 'penny', 'quarter', 'nickel', 'dime', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'quarter', 'dime', 'penny', 'dime', 'dime', 'quarter', 'dime', 'penny', 'quarter', 'penny', 'penny', 'nickel', 'nickel', 'nickel', 'penny', 'penny', 'quarter', 'penny', 'penny', 'quarter', 'dime', 'quarter', 'nickel', 'quarter', 'nickel', 'penny', 'penny', 'penny', 'dime', 'dime', 'dime', 'dime', 'nickel', 'dime', 'quarter', 'nickel', 'dime', 'nickel', 'dime', 'dime', 'penny', 'dime', 'quarter', 'nickel', 'penny', 'nickel', 'penny', 'penny', 'quarter', 'dime', 'nickel', 'nickel', 'nickel', 'penny', 'nickel', 'dime', 'penny', 'quarter', 'quarter', 'dime', 'quarter', 'penny', 'nickel', 'nickel', 'penny', 'dime', 'dime', 'nickel', 'nickel', 'dime', 'penny', 'nickel', 'penny', 'quarter', 'dime', 'nickel', 'dime', 'penny', 'penny', 'quarter', 'dime', 'quarter', 'penny', 'penny', 'nickel', 'quarter', 'quarter', 'quarter', 'dime', 'penny', 'dime', 'dime', 'dime', 'quarter', 'penny', 'penny', 'dime', 'quarter', 'dime', 'penny', 'quarter', 'dime', 'dime', 'dime'];
let dataObj1 = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0
}
let dataObj2 = {
    penny: 0,
    nickel: 0,
    dime: 0,
    quarter: 0
}
for (const value of dataArray) {
    /* switch (value) {
        case 'penny':
            dataObj1.penny++;
            break;
        case 'nickel':
            dataObj1.nickel++;
            break;
        case 'dime':
            dataObj1.dime++;
            break;
        case 'quarter':
            dataObj1.quarter++;
            break;
        default:
            break;
    } */
    dataObj1[value]++;
}

console.log(dataObj1);
console.log(dataObj2);