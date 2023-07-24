var size=document.querySelectorAll(".drum").length;
for(var i=0;i<size;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {

        var buttonInner=this.innerHTML;
        makeSound(buttonInner);
        buttonAnimation(buttonInner);
        
       
        
});
    }


document.addEventListener("keydown",function(event){
    makeSound(event.key); //key is property to determine which key is pressed by the user
    buttonAnimation(event.key);
})
 
    



/*
function HouseKeeper (name,age,languages)  //constructor
{
    this.name=name;
    this.age=age
    this.languages=languages



}
    
var hk1= new HouseKeeper("abood",9,["Arabic","English"]); //crete an object 
alert(hk1.languages);

*/


function Employer(name,age,job)  //constructor contains Method 
{
    this.name=name;
    this.age=age;
    this.job=job;
    this.welcome = function ()
    {
        alert("welcome to our company");

    }
}

var emp1=new Employer("abood",55,"Enginner")
alert(emp1.welcome());




function makeSound(key)
{



    switch(key){
        case 'w':
             var audio = new Audio("/sounds/snare.mp3");
             audio.play();
             break;

        case 'a':
            var audio2 = new Audio("/sounds/crash.mp3");
            audio2.play();
            break;

        case 's':
             var audio3 = new Audio("/sounds/kick-bass.mp3");
             audio3.play();
             break; 


        case 'd':
            var audio4 = new Audio("/sounds/tom-1.mp3");
            audio4.play();
            break;

        case 'j':
            var audio5 = new Audio("/sounds/tom-2.mp3");
            audio5.play();
            break;  
        case 'k':
            var audio6 = new Audio("/sounds/tom-3.mp3");
            audio6.play();
            break;
                    
        case 'l':
            var audio7= new Audio("/sounds/tom-4.mp3");
            audio7.play();
            break;
        default:
            alert("nothing");    

    }

     
}

function buttonAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey); //the name of the classes .a .w ....
    activeButton.classList.add("pressed");  //add class named pressed to above button
    setTimeout(function(){activeButton.classList.remove("pressed");},100);//the aboce class we added is to make shadow in the presses button and now we removed thd class after 1 seconde,so setTimeOut take 2 input function + time
}