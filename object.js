/**Object
object는 자바스크립트의 데이터 타입중 하나이다.
관련있는 데이터 또는 함수들(functionality?)의 집합이다.
object는 Object의 instance이다?
object는 키와 value의 집합체이다

1, literals and properties
* obejct를 만드는 방법
  1. object literal 
  const object ={};
  2. object constructor (class를 사용)
  const obj2 = new Object();
  
javasciprt는 동적으로 타입이 결정되는 언어이므로 객체에 속성을 나중에 추가, 삭제하것도 가능하다.
>유지보수에 어려움이 생길 수 있어서 최대한 피하는것이 좋다.

*/
const student ={name :'Josh' , age:17};
student.addr = 'seoul'; //possible!!
console.log(student.addr);//seoul
console.log(student.name) //Josh
delete student.name; // delete possible!!
console.log(student.name) //undefined


/*2. Computed properties(계산된 프로퍼티)
객체의 속성에 접근할 때 .을 이용하거나 []을 이용해서 접근이 가능하다
이때 후자를 computed prorperties라고한다.
단 computed prorperties 사용시 key는 string 타입으로 작성해야한다.

student.name 
student['name'] O
student[name] X
computed prorperties 를 사용하여 객체에 데이터 할당도 가능하다
student['sample']  = 'newName' O

* 
.(dot)은 코딩하는 그 순간 그키에 해당하는 값을 갖고오고 싶을때 사용하며
[] compputed properties는 어떠한 값이 필요할지 모를때 즉, 키값이 런타임중 결정될 때 사용한다.
 즉 동적으로 key값을 받아올 때 사용한다.

*/

function printValue(obj, key){

    console.log("get obejct : " +obj.key) //undefined > why?넘어온 parameter가 아닌 key라는 key값을 찾게됨. 
    console.log("get obejct : " +obj[key]) //17

}
printValue(student,'age');

/*3. Property value shorthand
key와 value가 이름이 동일하다면 생략이 가능하다
*/
function makePerson(name,age){
    return {
        name: name,
        age:age 
    }
   // === same
   return {
    name,
    age 
}

}
const person1 ={name:'bob', age:21};
const person2 ={name:'josh', age:31};
const person3 = makePerson('Sara',34);
/**
 
 * object를 필요할 때 일일히 만들게 되면 동일한 키와 value를 반복해서 작성해야하는 문제점이있다.
 * 이를 함수를 통해 obejct를 만들 수 있다.
 * 예시 
 * makePerson(name, age);
 * 4. Constructor Function
 * 이렇게 다른 계싼을 하지않고 순수하게 object를 생성하는 함수들은 Constructor Function로 만들면된다
  또한 객체 리터럴을 리턴하기 보다 class에서 사용하는 것처럼 데이터를 할당한다. 이렇게 하면 javascript 엔진이
  자체적으로 객체를 생성해준다. 이러한 것을 Constructor Function이라고 한다.
  Constructor Function 내부에서 사용하는 this는 변수를 가리킨다.

  */



  function MakePersion(name,age){
        /*생략된것
        1.  this ={}; //새로운 object생성
         */
      this.name = name;
      this.age =age;
    
      
      //2.  return this;

  }
  const person4 =new MakePersion('Harry',23);
  const person5 = MakePersion('Harry',23);

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)
console.log(person5)

console.log(person5 instanceof MakePersion)



/*5. in operator : 
해당하는 object안에 특정 키가 있는지 확인하기 위한 문법
*/
console.log('age' in student); //true
console.log('name' in student); //false ,,delete됨!
console.log('dream' in student) //false

//6. for ..in vs for..of
/*
for (item in obj)
*obj가 갖고있는 키들이 loops 를 돌면서 item 라는 지역 변수에할당된다.
*/
for (item in student){
    console.log(item)
}

/*
for(value of iteralbe)
*반복 가능한(iterable)객체는 배열을 일반화한 객체.
*배열, list들이 해당한다.
*/
const array = [1,2,3,4];
for(item of array){
    console.log(item)

}


// 7. cloning [...]
//Object.assign(user, ...user)
//객체를 복제할때 참조값이 아닌 실제 데이터를 카피하기 위해서 사용

const user1 ={name:'jon', age:11};
const user2 = user1;

//객체를 복사하는 방법
//1. for of를 이용
const copyUser1 ={};
const copyUser2 ={};

for(key in user1){
    copyUser1[key] = user1[key];
}
//2. assign 메소드 사용
Object.assign(copyUser2,user1);

user2.name='coder';

console.log(copyUser1)
console.log(copyUser2)

function Sample(name, test){
    this.naming =name;
    this.test= test;
}

let sampleData = new Sample('ellie', 'what!');
for(key in sampleData){
console.log(key)
}