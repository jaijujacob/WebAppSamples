

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
{
	username: "jaiju",
	password: "pass"
},
{
	username: "jibi",
	password: "pass"
},{
	username: "jane",
	password: "pass"
}
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
{
	username: "Bobby",
	timeline: "So tired from all that learning!"
},
{
	username: "Sally",
	timeline: "Javascript is sooooo cool!"
},
{
	username: "Mitch",
	timeline: "Javascript is preeetyy cool!"
}
];

sesUsername = prompt("Enter username");
sesPass = prompt("Enter password");

function isValidUser(user, pass){
	for(var i=0; i < database.length; i++){
		if (user === database[i].username && pass === database[i].password){
			return true;
		}		
	}
	return false;
}

function signIn(user, pass){
	if(isValidUser(user,pass)){
		console.log("Logged in successfully");
		console.log(newsfeed);
	}else{
		console.log("Wrong username or password");
	}
	
}
signIn(sesUsername, sesPass);


