// Example-01
const numbers = [4,5,6,7,8,10];
// Multiply
const doubled = numbers.map(num => num*2)
console.log(doubled);
// Add 
const fiveBonus =numbers.map(num => num+5);
console.log(fiveBonus);

// Divide
const halves =numbers.map(num => num / 2);
console.log(halves);

// Subtract
const davel =numbers.map(num => num - 2);
console.log(davel);

// Example-02
const friends =['Tom','Jerry','Halum','Kalum','Tikki'];
const lengths = friends.map(frnd => friends.length)
console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);


