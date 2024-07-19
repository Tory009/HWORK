const user = {
  name: 'Vika',
  age: 26,
  height: 169,
  city: 'Orenburg'
}
console.log(user)
// // ========================================

const hello = {
  greetings(name) {
    console.log(`Hello ${name}`)
  }
}
hello.greetings('Mary')
hello.greetings('Tom')
// ===================================

const users = [{
  name:'Max',
  age: 18,
  isAdmin:false
},
 {
  name:'Ann',
  age: 22,
  isAdmin:false
},
 {
  name:'Ben',
  age: 21,
  isAdmin:false
},
 {
  name:'Leo',
  age: 28,
  isAdmin:true
},
 { 
  name:'Jack',
  age: 24,
  isAdmin:false
}
]

let simpleUsers = 0
//  Вопрос на миллион: почему если в for прописать "i <= users.length, то воникает ошибка?"
  for(i = 0; i < users.length; i++) {
    if(users[i].isAdmin === false) {
      simpleUsers++
    }
  }
   console.log(simpleUsers)
























// function getSimpleUsers(array, item) {
//   for(i = 0; i <= array.length; i++)
//   switch(array[i] in array) {
//   case 'item[i] !== admin':
//     simpleUsers = simpleUsers + 1
//     break
//       case ' item[0] !== admin ':
//         simpleUsers = simpleUsers + 1
//         break
//         case ' item[1] !== admin ':
//           simpleUsers = simpleUsers + 1
//         break
//         case ' item[2] !== admin ':
//           simpleUsers = simpleUsers + 1
//         break     
// }
// console.log(simpleUsers)
// }
// getSimpleUsers(users, users[key])



