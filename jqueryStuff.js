$('document').ready(function () {
	
	
	console.log("test is great");
	

})

$("#onBaton").on("click",function(){
	
	//     создае окошечко , и вертае то, що в нього ввели.
	var a = prompt("create p with text:",'text here');

console.log(+"")
console.log(+"43")
console.log(+"43fe")
console.log(parseInt("43fe"))
console.log(!!5)
console.log(!!0)
console.log(Number("444"))
console.log(String(444))
console.log(Boolean(444))

console.log(typeof 3434+"")
console.log(typeof +"")
console.log(typeof !!98)

console.log(typeof (!!98).toString())
console.log("========\n========\n")

var person = {
    name: "John",
    age: 15,
    gender: "male",
    greet : function() {
        return this.name + "!!!!";
    }
};

var test = {name:"booooob"};



console.log(Object.keys(person))

for(prop in person){
	console.log(prop)
}


console.log("++++++++++")
console.log(person.greet.call(test))



	// $('body').append("<h2>" + a + "</h2>");
})