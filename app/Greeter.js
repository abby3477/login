//let [a, b, c] = [1, 2, 3];
/*let [a=1, b] = [2, 3]
console.log(a, b);
let [,, third] = ["foo", "bar", "baz"];
console.log(third); //baz
*/
//定义变量
/*let a = 1;
let b = 2;
let c = 3;*/
//let [a, b, c] = [1, 2, 3];
/*let {foo} = {
    foo: "222",
    bar: "adsafe"
};
//console.log(foo);	//222
*/
/*let {foo:baz} = {
    foo: 12345
};
//console.log(foo); //foo is undefined
console.log(baz); //12345*/

/*function foo([x, y]) {
    return x + y;
}
var baz = foo([1, 2]);
console.log("baz", baz); //baz 3*/
/*function foo({x, y}) {
    return x + y;
}
var baz = foo({
    x: 1,
    y: 2
});
console.log("baz", baz); //baz 3*/
//交换变量的值
/*let x = 2;
let y = 3;
[x, y] = [y, x];
console.log(x, y); //3,2*/

/*function foo() {
    return {
        a: 1,
        b: 2,
        c: 3
    }
}
let {a, b, c} = foo();
console.log(b); //2*/

/*function foo() {
    return [1, 2, 3]
}
let [a, b, c] = foo();
console.log(b); //2
*/
/*let jsonData = {
    id: 12,
    status: 'OK',
    data: [987, 654]
}
let {id, status, data} = jsonData
console.log(id, status, data); //12 "OK" [987, 654]*/
//let
/*{
    var testa = 1;
    let tb = 22;
    console.log(tb); //22
}
console.log(testa); //1
console.log(tb); //tb is undefined*/
//报错
/*function foo(arg) {
    let arg;
}
//不报错
function foo(arg) {
    {
        let arg;
    }
}*/
/*var name = "kevin";
function call() {
    console.log(name); //undefined
    var name = "fan";
}
call();*/
/*var str = "thisishh";
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log(i); //8*/
/*(function foo() {
let name = "kevin";
if (true) {
    let name = "fan";
}
console.log(name);
})();*/
/*{
    let foo = function(name) {
        console.log(name);
    }
    foo("kevin"); //foo is not defined

}*/
var obj = {
    1: "a",
    2: "b",
    2: "c"
};
console.log(Object.keys(obj));
