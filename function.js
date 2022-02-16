/*Function
function은 프로그램을 구성하는 매우 기본적인 빌딩 블록이다.
sub program이라고도 불리며 여러번 재사용이 가능하다.
최대한 한가지 기능을 처리하도록 하는 ㄱ서이 좋다.

*/
//function 을 선언하는 방법
/*1. function declaration
function anme(param1, param2){
    body... return something;
}

* one function === one thing!!
naming doSomething ,command ,verb!

*/
/**2. Parametes
prmitivie 타입은 vlaue가 그대로 전달되고
object타입은 reference가 전달된다.Parametes


/*
// elly라는 객체를 만들면 elly가 가리키는 ref가 메모리에 들어가고 이 ref는 메모리 어딘가를 가리킨다
// 만약 인수로 obj를 전달하면 ref자체가 전달되고 함수안에서 전달받은
//  obj 값을 변경해도 ref가 가리키는 obj의 메모리값이 변경되는것이므로 함수밖에서도 변경된 값을 조회할 수 있다.
*/

const elly = {age : 11};
log(elly)
function log(obj){
    console.log(obj); // {age: 11} 
    obj.age=20;
    obj.addr= 'seoul';
}

console.log(elly); //{age: 20, addr: "seoul"} 


// 3. Default paramters (added in es6)
// 함수에 파라미터를 전달할 때 인자가 2개인데 1개만 넘길경우 undefiend가 출력된다.
// 그러나 es6부터 값이 없을 경우을 대비한 default값을 지정해두면 사용자가 파라미터가 값을 전달하지 않더라도
// default값으로 대체되어서 출력된다.

//default parameters를 사용하지 않는경우
function showMesaage(name ,age){
    console.log(`name : ${name} , age: ${age}` );
}

//default parameters를 사용하는경우
function showMesaageWithDefault(name='elly!' ,age=1){
    console.log(`name : ${name} , age :${age}` );
}

showMesaage('uuyeong') //name : uuyeong , age :undefined
showMesaageWithDefault('uuyeong') //name : uuyeong , age :1


// 4. Rest parameters(added in es6)
// 배열형태로 파라미터가 전달된다

function printAll(...args){
    console.log(`all args :: ${args}`)
    for(let i=0; i<args.length ;i++){
        console.log(i + ' : '+args[i])
    }
//Tip : 배열데이터를 출력할때 for..of를 사용하면 더 간단하다.
    for(const item of args){
        console.log(item);
    }
}

printAll('apple', 'grape', 'orange' ,'banana')




// function은 object의 일종이다.
// 함수를 정의하면 object로 자동전환되어 속성값을 .으로 호출할 수 있다 
// > 차후 더욱 자세하게 학습


/*5. Local scope 
block level scope vs global level scope

- "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다"
* block안에서 변수를 선언하면 지역변수가 되고 지역적이기때문에 안에서만 접근이 가능하고 
 밖에서메시지를 출력하려고 하면 에러가 발생한다.
 그러나 블록 안에서는 ㅊ전역변수를 출력할 수 있다
* 이러한 원칙은 어느경우에나 적용된다. 함수안에서 함수를 선언하면 내부 함수는 외부함수에 정의된 변수에 접근할 수 있으나 
 외부함수에서(부모함수에서 ) 자식함수변수에 접근할 수 없다.
  > 이렇게 자식함수에서 부모함수에 접근하는것을 클로저 라고한다


  6. Return a value
 * 함수는 파라미터로 값을 전달받아서 계산한 값을 반환할 수 있다.
  리턴을 지정해주지 않은 함수는 return undefined가 자동으로 지정되며 return undefiend는 생략할 수 있다.
*/
function log(item1, item2){
    console.log(item1 + item2);
}

    //return undefined ; [생략되어있는 것이며 실제로는 자동 지정된다]
/*7. early return ,early exit
함수안에서 조건을 결 경우 조건 블록안에서 코드를 작성하면 가독성이 떨어진다,
그러므로 조건이 맞지않을경우 바로 return 처리를하고 조건이 맞을 경우에만 필요한 로직을 실행하는 것이 좋다.
*/

//for example, parameter 가 10이상 일 경우 log를 출력하려고 한다.
//bad case
function logItemBad(item){
    if(item>=10){
        console.log(item);
    }else{
        return;
    }
}
//good case
function logItemGood(item){
    if(item<10){
        return;
    }
    console.log(item);
}


/*
===========================================================================================

first class fcuntion
 * 프로그래밍 언어가 함수를 first-class citizen으로 취급하는것을 뜻한다
1. 함수는 다른 변수와 마찬가지로 변수에 할당이 되고 
2. 다른 함수의 파라미터로 전달이 되고
3. 다른 함수의 return value로 사용할 수 있다.


1. function expression(함수 표현식) [vs function declaration(함수 선언)]
first class function 이기때문에 function expression이 가능하다.
익명함수를 변수에 할당하면 변수명을 통해 함수를 호출할 수 있다.

named function()
anoymous function(익명함수)

*function expression 과 function declaration의 가장 큰 차이점은
 function expression은 함수를 할당한 다음부터 호출이 가능한 반면,
 function declaration은 호이스팅이 되어 선언하기 전부터 호출이 가능하는 것이다.
 (function declaration도 호이스팅이 된다!)

 (function declaration can be called earlier than it is defined == hoisted,
 function expression is created when the execution reaches it. 
 so, function expression can't call the  earlier than it is defined)

*/


/*2. callback hell!
callback function :  함수를 전달해서 상황에 맞게 함수를 호출하도록 전달하는 함수

*/

function randomQuiz(answer ,printYes, printNo){
    if(answer){
        printYes();
    }else{
        printNo();
    }
}
function yes(){
    console.log("yes!")
}
let no = function(){   
    console.log("No!")
}
randomQuiz(1>0 ,yes,no ) //yes!
randomQuiz(1>3 ,yes,no )//No!


// 3. Arrow function
// arrow function은 항상 anoymous function 이다
//화살표를 이용하여 함수를 표현할 수 있다. 
const simplePrint = ()=>{
    console.log("simple!")
}
//block없이 사용할 수 있으며 return 생략이 가능하다. 단 2줄이상 작성할경우 block이 필요하고 return 도 명시해줘야한다.
const returnItems = (a,b) => a+b;
const returnItems2 = (a,b,c,d)=>{
    let additems = a+b;
    let additems2 = additems+c+d;
    console.log(additems2)
    return additems2;
}
let calcRes = returnItems(1,2);
let calcRes2= returnItems2(1,2,3,4);
console.log(`calcRes : ${calcRes} , calcRes2 : ${calcRes2} `);


// IIFF :Immediately Invoked function expression
// 함수 선언과 동시에 실행할 수 있다

(function hello(){
    console.log('hello!')
})();

// * Quiz!
// command 에따라 a와 b를 처리하는 함수를 생성 
//command: add, substract, divide, multiply, remainder);

function calculator(command , item1, item2){

    switch(command){
        case 'add' : return item1+item2; 
        case 'substract' : return item1-item2;
        case 'divide':return item1/item2;
        case 'muliply':return item1*item2;
        case 'remainder':return item1%item2; 
        default: return 'bad command!'
    }
    
}

let test1 = calculator('dd', 4,2)
console.log(test1);