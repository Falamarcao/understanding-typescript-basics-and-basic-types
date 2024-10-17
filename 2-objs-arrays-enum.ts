// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple data type
// } = {
//     name: 'John',
//     age: 21,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role { ADMIN, READ_ONLY, AUTHOR }; // ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // ADMIN = 5, READ_ONLY = 6, AUTHOR = 7
// enum Role { ADMIN = 5, READ_ONLY = 7, AUTHOR }; // ADMIN = 5, READ_ONLY = 7, AUTHOR = 8
enum Role {
  ADMIN = 5,
  READ_ONLY = 7,
  AUTHOR = 'AUTHOR',
}

const person = {
  name: 'John',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

// person.role.push('admin');
// person.role[1] = 10; // ERROR - Tuple has fixed data types.

// person.role = [0, 'admin', 'user'] // ERROR - Tuple has fixed size

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

let favoriteActivities2: any;
favoriteActivities2 = 0;

let favoriteActivities3: any[];
favoriteActivities3 = ['Sports', 0];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.AUTHOR) {
  console.log('is author!');
}
