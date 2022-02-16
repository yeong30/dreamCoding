// 2. Variable , rw(read, write)

// 3, Constant r(only r)
// // use const wheneber possible
// //only use let if variable needs to change


// memory에 값이 저장되는 방법 
// > primitive type , object 타입
// primitibe type은 값 자체가 메모리에 저장됨
// obejct는 너무 커서 메모리에 한번에 저장될 수 없음. 엘리가 가리키는 ref가 있어서 이 ref가 실제로 데이터 담긴 메모리를 가리키게 된다
// 프리티비 타입은 value가 메모리에 저장되고 오브젝트 타입은 obj를 가리키는 ref가 메모리에 저장된다

// note!
// data type은 immutable data rt은 데이터자체즈를 절대 변경하지 못하는 타입. ellie라는 데이터를 저장했을 때 elli를 통채로 변경은 가능하나 elli의 i를 빼는 등의 작업은 불가능하다.
// frozen object도 내부 값 변경이 불가능하므로 immutalbe data type에 해당한다!
 
// 그리고 변경이 가능한 datatype에 해당하는 것은 오브젝트이다. 오브젝트는 스스로 내부 데이터 변경이 가능하기 때문에 mutable data type이다. 배열 또한 대부분 내부 roation이 가능하므로 mutable data type이다