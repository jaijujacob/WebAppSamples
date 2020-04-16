function moveCommand(direction){
	var whatHappens;
	switch(direction){
		case "forward":
		whatHappens = "You encounter a monster";
		break;
		case "back":
		whatHappens = "You arrived home";
		break;
		case "right":
		whatHappens = "You found a river";
		break;
		case "left":
		whatHappens = "You run in to a troll";
		break;
		default:
		whatHappens = "Please enter a valid direction";

	}
	return whatHappens;

}

// console.log(moveCommand("forward"));

const basket = ['apples','oranges','grapes'];

const detailedBasket = {
	apples : 5,
	oranges: 10,
	grapes: 1000
}

basket.forEach(itme => {
	console.log(itme);
})

console.log('----------');

for(item of basket){
	console.log(item);
}

console.log('----------');

for(item in detailedBasket){
	console.log(item);
}

console.log('1');
setTimeout(() => {console.log('2');}, 0)
console.log('3');