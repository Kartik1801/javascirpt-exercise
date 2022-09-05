var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var members = [
    { name: 'Rakesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
// 1. Get array of first names of everyone
var memberName = members.map(function (member) { return member.name; });
console.log(memberName);
//2. Make everyone's last names in UPPERCASE in given array of objects
members.forEach(function (member) {
    var name = member.name.split(' ');
    var firstName = name[0];
    var lastName = name[1];
    member.name = "".concat(firstName, " ").concat(lastName.toUpperCase());
});
console.log(members);
//3. Get entries where age is between 41-60
var memberBetweenAge41n60 = members.filter(function (member) { return member.age ? member.age >= 41 && member.age <= 60 : false; });
console.log(memberBetweenAge41n60);
// 4. Get average age
var averageAge = members.reduce(function (previousValue, currentValue) { return currentValue.age ? previousValue + currentValue.age : previousValue; }, 0) / members.length;
console.log(averageAge);
// 5. Get Person with maximum age
var maxAge = members.reduce(function (previousValue, currentValue) { return currentValue.age ? (previousValue > currentValue.age ? previousValue : currentValue.age) : previousValue; }, 0);
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
var group = {
    young: [],
    old: [],
    noAge: []
};
members.forEach(function (member) {
    member.age ? (member.age >= 35 ? group.old.push(member) : group.young.push(member)) : group.noAge.push(member);
});
console.log(group);
// 7. add a new member to same members array instance at index 2
members.splice(2, 0, {
    name: "Kartik",
    age: 21
});
console.log(members);
// 8. extract first and second element using destructing
var first = members[0], second = members[1];
console.log(first);
console.log(second);
// 9. Create a new array instance adding a new member at index 0,and keeping existing afterwards
var newMembersArray = members.slice();
newMembersArray.unshift({
    name: "Amit",
    age: 12
});
console.log(members);
console.log(newMembersArray);
// 10. Extract properties of object using destructuring
// 11. Rename extracted property of object while destructing
var _a = members[0], personName = _a.name, age = _a.age;
console.log(personName, age);
// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
var young = group.young, others = __rest(group, ["young"]);
console.log(young);
console.log(others);
// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
var newObject = __assign(__assign({}, group), { noAge: "I am overriden" });
console.log(newObject);
// 14. Use reduce function on array and object
var sumOfAge = members.reduce(function (previousValue, currentValue) { return currentValue.age ? previousValue + currentValue.age : previousValue; }, 0);
console.log(sumOfAge);
var reducedObject = Object.keys(group).reduce(function (previousValue, nextValue) { return previousValue + nextValue; });
console.log(reducedObject);
