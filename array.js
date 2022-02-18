let arr = ['1','2'];

// every()
// :  배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.
//  false 값을 만나는 순간 종료


// join()
//  : 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다. string을 반환합니다. 
//   파라미터를 넘겨주면 해당값을 연결되는 문자사이에 삽입합니다.

// reduce()
// :배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

// ex ) arr.reduce(callback[, initialValue])
// parameters

// 1. callback
//    : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
//         accumulator : 누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
//         currentValue : 처리할 현재 요소.
//         currentIndex Optional : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
//         array Optional : reduce()를 호출한 배열.
// 2. initialValue Optional
//   : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.


/* splice(start: number, deleteCount: number, ...items: T[]): T[];
// * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// * @param start The zero-based location in the array from which to start removing elements.
// * @param deleteCount The number of elements to remove.
// * @param items Elements to insert into the array in place of the deleted elements.
// * @returns An array containing the elements that were deleted.
 리턴값이 삭제된 데이터 이므로 주의 필요(삭제한 후 원본 배열이 아님);
 

// */