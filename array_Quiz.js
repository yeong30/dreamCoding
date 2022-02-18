

// Q1. make a string out of an array
{
    const fruits1 = ['apple', 'banana', 'orange'];
  let str = fruits1.toString();
  console.log(str);
  console.log(typeof fruits1)


  }
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let arr =fruits.split(',');
    console.log(typeof arr);

  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    let reverArr  = array.reverse();
    console.log(reverArr);

  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    array.splice(0,2);
    console.log("4번"+ array);

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {


    let names=  students.forEach((items)=>{
          if(items.score===90) console.log(`90점 :${items.name} `)
      })
  }
  
  // Q6. make an array of enrolled students
  {
    let enrolledStudent=  students.filter((student)=>{
       return student.enrolled ===true
    })
    console.log(enrolledStudent);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
 {     let scores = students.map((student)=>{
      return  student.score;
      });
      console.log(scores)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    let result = students.some((student)=>{
       return student.score <50
    })
    console.log("result : " +result);
  }
  
  // Q9. compute students' average score
  {
   // (previousValue: T, currentValue: T, currentIndex: number, array: T[])
    let averageAge = students.reduce((pre,curr,currIndex,arr)=>{
    let sum=pre+curr.score;
      if(currIndex===arr.length-1){
        return sum/arr.length
      }else{
        return sum;
      }
      },0)
      console.log(averageAge)


  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    let scores = students.map((stu)=>{return stu.score});
  let scoresStr = scores.join(', ');
      console.log(scoresStr )


   
  }



  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    students.sort((a,b)=>{
      console.log(a.score)
      console.log(b.score)

      if(a.score<b.score){
        return -1
      }else{
        return 1
      }
    })
    let scores = students.map((stu)=>{return stu.score});
    let scoresStr = scores.join(', ');
        console.log(scoresStr )
  }