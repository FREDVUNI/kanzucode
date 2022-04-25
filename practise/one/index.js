// alert("start")

let head = document.getElementById("heading");
head.innerText = "This is it for me."

head.innerHTML = "<i>Here's this!</i>"

head.style.color = "red"
// head.style.backgroundColor = "#000"

// let body = document.querySelector('#singleSelected')
// let body = document.querySelector('.multipleSelected')

let body = document.querySelector('body')
let paragraph = document.createElement('p')
paragraph.innerText = "Here's some dummy text about nothing."

body.appendChild(paragraph)
// body.removeChild(paragraph)

let clickMe = document.querySelector('#sub')
let color = ["red","blue","yellow","teal","purple"]

clickMe.addEventListener("click",()=>{
    // alert("Good")
    let newB = document.createElement('h1')
    newB.innerText = "I'm the new h1 Tag."
    body.appendChild(newB)
})
function Person(firstName,lastName,age,id){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.id = id
}

let pep = new Person("Fred","vuni",200,"hjsfjj")
console.log(pep);

class People{
    constructor(firstName,lastName,age,id){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.id = id
    }
    speak(){
        console.log(`speaker ${firstName} is speaking`)
    }
}
let p = new People("Fred","vuni",200,"hjsfjj")
console.log(p);

const companies =[
    {name:"company one",category:"Finance",start:1981,end:2003},
    {name:"company two",category:"Retail",start:1991,end:2008},
    {name:"company three",category:"Auto",start:1999,end:2007},
    {name:"company four",category:"Retail",start:2009,end:2018},
    {name:"company five",category:"Tech",start:1981,end:2010},
    {name:"company six",category:"Finance",start:1987,end:2003},
    {name:"company seven",category:"Auto",start:1986,end:1996},
    {name:"company eight",category:"Tech",start:2011,end:2016},
    {name:"company nine",category:"Retail",start:1981,end:189},
]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]

const company = companies.forEach(c=>{
    console.log(c.name)
})

//forEach,filter,map,reduce,sort

let cFilter = companies.filter(c=>c.name === "company three")
console.log(cFilter);

let cCompany = companies.map(company => company.name)
console.log(cCompany);

class Name {
    constructor(forename, surname) {
        this.forename = forename;
        this.surname = surname;
    }
    sayHello() {
        return `My name is ${this.forename} ${this.surname}`;
    }
}
let names = new Name("Fred","Fred").sayHello()
console.log(names);



