/*1.string concatenation
plus 기호를 사용해서 문자열과 문자열을 더해 새로운 문자열을 만들 숭 ㅣㅆ음
문자 + 숫자 = 문자
백틱을 사용하여 String literals를 만들어 사용할 수 있다

2. numeric concatentaion
덧셈 곱셈...

3. incremnt and decrement operators*/

let counter =2 ;
let preIncrement  = ++counter ;
let postIncrement  = counter++ ;

console.log(`preIncrement : ${preIncrement} , postIncrement : ${postIncrement} , counter :${counter}`)

let preDecrement  = --counter ;
let postDecrement  = counter-- ;

console.log(`preDecrement : ${preDecrement} , postDecrement : ${postDecrement} , counter :${counter}`)

//4. assignment operators;
let x= 27;
let y=3;
x+=y; //x = x+y;
console.log(`1. x : ${x} and y : ${y}`)
x-=y // x= x-y;
console.log(`2. x : ${x} and y : ${y}`)
x*=y // x= x*y;
console.log(`3. x : ${x} and y : ${y}`)
x/=y // x= x/y;
console.log(`4. x : ${x} and y : ${y}`)

//5. comparision opetatos(비교연산자)
// < , > <= .>=

//6. logical operatos
// ||(or), &&(and) , !(not)
//
/**
 * ||(or) finds the first truthy valaue
 * true 값을 찾으면 뒤에 연산을 하지 않는다.
 * 그러므로 연산이 가장 가볍고 간단한것을 연산자 가장 앞에 두는 것이 좋다.
 * 
 */
/**
* &&(and) finds the first falsy valaue
* false 값을 만나면 그 뒤에 연산을 하지 않는다.

and 는 null 체크에서도 사용

1. if(nullableObj!=null){
    nullableObj.something;
}
2. nullableObj && nullableObj.something

1번과 2번은 같은 동작을 한다

!(not)
>value 를 바꿔줌
*/
/**7. Equality (==, ===)
 * == loose equality , with type conversion
 * 타입을 변경해서 검사한ㄷ. 즉 string '5'와 number 5을 같다고 인식
 * 
 * === strict equalty , no type conversion
 * 타입을 그대로 검사한다.. 즉 string '5'와 number 5을 다르다고 인식
 * 
 * strict equality를 사용하는것이 더 좋음.
*/
let numberFive =5;
let stringFive = '5';
console.log(`numberFive == stringFive ${numberFive==stringFive}  vs numberFive === stringFive ${numberFive===stringFive}`)

/**
 * object equality by reference
 * object는 ref 형태로 저장되므로 주의가 필요
 */
let elly1 = {name :'elly'};
const elly2 = {name :'elly'};
const elly3 = elly1

/*elly1과 elly2는 같은 값을 가진것처럼 보이지만 elly1이 실제로 가리키는건 ref1 , elly2가 실제로 가리키는건 ref2이고
 각각 서로다른 object({name:'elly'})를 가리키고 잇으므로 일치하지 않는 값이다.
 단, elly3은 elly1의 ref1을 할당받으므로 똑같은 ref를 갖게된다.
  이때 ref1이 가리키는 객체는 결국 동일하므로 elly1의 객체 값을 바꾸어도 elly3에 똑같이 적용된다. 
  그러나 elly1의 ref값 자체를 변경할 경우에는 달라지게 된다. (let 한정)
*/
console.log(elly1==elly2);
console.log(elly1==elly3);
elly1.name='jwy';
console.log(elly1==elly3);
console.log(elly3);

elly1 ={name:'test'}
console.log(elly1==elly3);
console.log(elly3);


/** 8. Conditional operator(if, elseif else)
 * 
 */

// 9. Ternary operator : ?
// condition ? vlaue1 : value2; 
// 간단하게만 사용!!!

/* 10. Switch statement 
// use for multiple if checks
// use for enum-like vlaue check(enum 비슷한것을 비교할때 사용)
// use for multiple type check in TS(ts 에서 다양한 타입을 비교할 때 사용)
case문 두개를 연달아서 사용도 가능!!

*/


/* 11. loops
* while loop
: while the condition is truthy,  body xod is excuted

* do while loop
: body code is execited first,then check the condition

블록을 먼저 실행시키고 싶다면 do while, 조건문에 따라 실행시키고 싶다면 while사용


* for loop
for(begin ; condition; step)



+ break ,continue;

break : loops 를 완전히 종료
continue 한번만 종료
*/
//iterate from 0 t0 10 and print only even numbers
let i=0;
for(i; i<11 ; i++){
    if(i%2===0){
        console.log('current i : '+i);
    }else{
        continue;
    }
}
i=0;
console.log('============================' +i);
while(i<9){
    console.log('current i : '+i);
    i++;
}