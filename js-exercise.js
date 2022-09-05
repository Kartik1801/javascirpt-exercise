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
const memberName =  members.map(member => member.name);
console.log(memberName);
//2. Make everyone's last names in UPPERCASE in given array of objects
members.forEach(member => {
    let name = member.name.split(' ');
    let firstName = name[0];
    let lastName = name[1];
    member.name = `${firstName} ${lastName.toUpperCase()}`;
});
console.log(members);
//3. Get entries where age is between 41-60
const memberBetweenAge41n60 = members.filter(member => member.age >= 41 && member.age <=60);
console.log(memberBetweenAge41n60);
// 4. Get average age
const averageAge = members.reduce(  (previousValue, currentValue) => currentValue.age? previousValue + currentValue.age : previousValue,0,) / members.length ;
console.log(averageAge);
// 5. Get Person with maximum age
const maxAge = members.reduce(  (previousValue, currentValue) => currentValue.age? (previousValue > currentValue.age ? previousValue : currentValue.age) : previousValue,0,);
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
members.forEach(member => {
    member.age ? (member.age >= 35 ? group.old.push(member) : group.young.push(member) ) : group.noAge.push(member);
})
console.log(group);
// 7. add a new member to same members array instance at index 2
members.splice(2,0, {
    name: "Kartik",
    age: 21
});
console.log(members);
// 8. extract first and second element using destructing
const [first, second] = members;
console.log(first);
console.log(second);
// 9. Create a new array instance adding a new member at index 0,and keeping existing afterwards
const newMembersArray = members.slice();
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
const sumOfAge = members.reduce(  (previousValue, currentValue) => currentValue.age? previousValue + currentValue.age : previousValue,0,);
console.log(sumOfAge);
const reducedObject = Object.keys(group).reduce((previousValue, nextValue) => previousValue + nextValue)
console.log(reducedObject);
