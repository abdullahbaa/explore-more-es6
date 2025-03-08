// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const numbers = [1,2,3,4,5,6,7];

const players =[75,78,79,55,66];
// const selected = players.filter(p => p>70) 70 Above numbers
// const selected = players.filter(p => p>80)  80 above numbers
// const selected = players.filter(p => p>50) 50 above numbers

// const selected = players.filter (p => p % 2 === 1) odd numbers
// const selected = players.filter (p => p % 2 === 0) Even numbers
// console.log(selected);

const friends =['Tom','Jerry','Halum','Kalum','Tikki'];
const oddFriends = friends.filter(friend => friend.length > 2)
console.log(oddFriends);
