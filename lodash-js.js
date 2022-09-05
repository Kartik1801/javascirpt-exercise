const {_, last} = require("lodash");
const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
// 1. Get array of first names of everyone
const memberName =  _.map(members, (member) => member.name)
console.log(memberName);

//2. Make everyone's last names in UPPERCASE in given array of objects
_.forEach( members, member => {
   member.name = `${_.split( member.name , ' ')[0]} ${_.toUpper(_.split( member.name , ' ')[1])}`;
});
console.log(members);
//3. Get entries where age is between 41-60
const memberBetweenAge41n60 = _.filter(members, member => member.age >= 41 && member.age <=60);
console.log(memberBetweenAge41n60);
// 4. Get average age
const averageAge = _.reduce( members, (previousValue, currentValue) => currentValue.age? previousValue + currentValue.age : previousValue,0,) / _.size(members);
console.log(averageAge);
// 5. Get Person with maximum age
const maxAge = _.reduce( members, (previousValue, currentValue) => currentValue.age? (previousValue > currentValue.age ? previousValue : currentValue.age) : previousValue);
console.log(maxAge);
/* 
6. Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
 */ 
const group = {
    young: [],
    old: [],
    noAge: []
};
_.forEach(members, member => {
    member.age ? (member.age >= 35 ? group.old.push(member) : group.young.push(member) ) : group.noAge.push(member);
})
console.log(group);
// 7. add a new member to same members array instance at index 2
console.log(members);
_.insert = (array, index, item) => {
    array.splice(index,0, item);
}
_.insert(members,2 ,{
    name: "Kartik",
    age: 21    
});
console.log(members);
// 8. extract first and second element using destructing
const [ first, second ] = members;
console.log(first);
console.log(second);
// 9. Create a new array instance adding a new member at index 0,and keeping existing afterwards
const newMembersArray = _.slice(members);
newMembersArray.unshift({   
    name: "Amit",
    age: 12
});
console.log(members);
console.log(newMembersArray);
// 10. Extract properties of object using destructuring
// 11. Rename extracted property of object while destructing
const { name: personName, age } = members[0];
console.log(personName, age);
// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
const {young, ...others} = group;
console.log(young);
console.log(others);
// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const newObject = {
    ...group,
    noAge: "I am overriden"
}
console.log(newObject);
// 14. Use reduce function on array and object
const sumOfAge = _.reduce( members, (previousValue, currentValue) => currentValue.age? previousValue + currentValue.age : previousValue,0,);
console.log(sumOfAge);
const reducedObject = _.reduce(Object.keys(group), (previousValue, nextValue) => previousValue + nextValue)
console.log(reducedObject);