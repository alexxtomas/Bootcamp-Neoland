const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    if(foodSchedule[i].isVegan === false) {
        if(typeof fruits[i] === 'undefined') console.log('We do not have more fruit')
        else {
            foodSchedule[i].name = fruits[i]
            foodSchedule[i].isVegan = true
        }
    }
}

console.log(foodSchedule)