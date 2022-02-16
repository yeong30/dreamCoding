'use strict';

/* class : template
 object : instance of class (*instance : 실체)
 
 Javascript의 class
 - es6에 도입됨
 - 이전까지 class 정의없이 바로 object를 만들어서 사용.
   function을 사용해서 template을 만들기도함
 - 아직까지 제대로 class가 도입되었다기 보다 prototype을 베이스로 class 문법만 추가된 것!

1. Class declaration

class라는 키워드를 사용해서 person이라는 클래스를 만들고
생성자(constructor)를 이용해서 나중에 object를 만들때 필요한 데이터를 전달한다. 
전달받은 데이터를 클래스에 존재하는 필드에 바로 할당한다.
 */

class Persion{
    생성자
    constructor(name, age){
        //field
        this.name = name;
        this.age =age;
    }

    //method
    speak(){
        console.log(`${this.name } : hello`);
    }
}
//새로운 object를 만들때는 new라는 키워드를 사용한다.
const hoho= new Persion('hoho', 20)
console.log(hoho);
console.log(hoho.name);
console.log(hoho.age);
hoho.speak();

/**2. getter , setter
 * 
 * class를 사용하는 사용자가 잘못 사용하는 것을 방지하기 위해 
 * 좀더 방어적인 자세로 만들 수 있도록 해주는것이 getter와 setter이다
 * 
 * 
 * class 내에서 변수에 데이터를 할당할 때, 해당 변수와 같은 getter, setter가 있으면 해당 getter ,setter가 호출된다.
   예를 들어 this.age= 'steave'를 실핼할 시 set age가 존재할 경우 set age가 실행되어 할당한 데이터 'steave'는 인자로
   넘어간다. 또한 this.age 를 실행할경우 get age가 존재하면 get age가 자동실행된다. 그러므로 gettersetter에서 데이터를 
   조회 및 할당 후 루프를 돌지 않도록 getter, setter 내부에서 사용하는 변수명에는 _를 붙인다. 

    변수명을 _age로 지정했음에도 외부에서 this.age로 해당 값을 불러올 수 있는것은 바로 내부적으로 getter, setter가 호출되어
    사용되기 때문이다
   */

class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName =lastName;
        this.age=age;
    }
    get age(){
        console.log("call getter!")
        return this._age;
    }

    set age(value){
        this._age= value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','job',-1);
console.log(user1.age) //-1

/*
3.Fields (public, private)
- 최근에 추가된것이라 지원되는 브라우저가 적음.
class 생성자를 정의할 때 contructor 블록없이 정의할 수 있는데
그냥 정의하게 되면 publicField, #을 붙여 정의하면 privateField가 된다.
publicField는 외부에서 접근이 가능하나 private field는 class 내부에서만 값이  보여지고 접근이 가능하다

*/
class fieldEx{
    publicField = 2;
    #privateField = 2;
}
const fields = new fieldEx();
console.log(fields.publicField , fields.privateField)

/*4.Static properties
- 아직 미지원 브라우저가 많음.

class 안에있는 필드와 메소드들은 새로운 obejct를 만들때마다 그대로 복제되어
값만 사용자가 대입한 값으로 변경되어 만들어지는데, 
혹 이러한 object 데이터와 무관하게 클래스의 고유한 값 혹은 
동일하게 반복적으로 사용되어지는 메소드가 필요할 수 있는데
그럴때 static이라는 키워드를 이용해 선언하면 object와 무관하게 class 자체에 붙게된다.
> 이러한 static field는 object가 아닌 class를 통해 호출이 가능하다.

object에 상관없이 class애서 사용하기 위한것이라면 static을 사용하는것이 좋다
*/

class Article{
    static publisher = 'Dream Coding';
    constructor(){
        this.year = '2022'
    }
}
const article1 = new Article();
const article2 = new Article();
console.log(`article1 publisher : ${article1.publisher} , article2 publisher : ${article2.publicField}`)
console.log(`Article publisher : ${Article.publisher}`)


/*상속과 다양성

만약 동그라미, 세모 , 네모를 그릴 수 있는 class를 정의하려고 한다,

각각의 모양들은 높이, 너비들을 속성으로 가지고 모두 도형이라는 공통점이 있다.
이러한 도형들의 공통점인 높이,너비 색상을 재사용한다면,
즉, 속성값을 각각 모양들을 정의할 때 재사용하면 더 편리하지 않을까.


5.Inheritance(상속)
* a way for one class to extend another class.

class를 상속하게 되면 부모 class의 메소드와 필드들이 그대로 자식 클래스에 포함된다.
한번만 클래스를 정의해두고 상속을 이용해서 재사용할 수 있다. 


예시)
Shape라는 도형 class를 정의하고  이 클래스는 width ,hegiht, color를 속성으로 가진다.
그리고 Rectangle , Circle, Triangle 의 각각 클래스를 정의하되 
필요한 width,hegiht,color를 따로 정의하지않고 Shape 클래스를 상속받아 그대로 사용한다고 하자





*/

class Shape {
    constructor(width, height,color){
        this.width= width;
        this.height= height;
        this.color= color;
    }
    draw(){
        console.log(`drawing ${this.color} color ` );
    }
    getArea(){
        return this.width* this.height
    }
}

class Rectangle extends Shape{
}

const rectangle  = new Rectangle(10, 5, 'red');

//rectangle.draw();

/**
 * 다양성
 * 위에 예시에서 getArea 즉 사이즈를 구할때 width와 height를 곱하였다.
   그러나 rectangle을 제외한 triangle, circle은 면적을 구하는 방식이 다르다. 
 * 이럴때 필요한것이 다양성이다
 * 
 *필요한 함수만 재정의해서 사용할 수 있고 이러한 것을 overriding이라고한다. 

만약 overriding 하였으나 부모의 메소드도 계속 사용하려고 할때는 super 키워드를 사용한다.
 */
 class Triangle extends Shape{
     draw(){
         super.draw();
         console.log(' draw Triangle');
     }
     getArea(){
        return (this.width* this.height)/2

     }
}
const triangle  = new Triangle(10, 5, 'blue');

let recSize =rectangle.getArea();
let triSize =triangle.getArea();
rectangle.draw();
triangle.draw();

console.log(`shape size : ${recSize} , triangle size : ${triSize}` )


/*6. instanc of Operator
object는  class를 이용해서 만들어진 instance인데
instnceof는 특정 object가 특정 class를 이용해서 만들어진 object인지 판별해준다
+
모든 object class들은 Object class를 상속한다.(최상위) 그러므로 어떤 객체든지 Obeject의 
메소드와 필드들을 사용할 수  있다.
*/
console.log(rectangle instanceof Shape);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Object);


/**
 * JavaScript MDN 사이트
 */