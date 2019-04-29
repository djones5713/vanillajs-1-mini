console.log('hello world');
const element = document.getElementById("counter")

let count = 0;

function increase() {
    count += 1;
    console.dir(element);
    element.innerText = count;
}

function decrease() {
    count -= 1;
    console.log(count)
    element.innerText = count;
}

// function reset() {
//     count = 0;
//     console.log(count)
//     element.innerText = count;
// }

function reset() {
    count = 0;
    console.log(count);
    element.innerHTML  = "<mark>" + count + "</mark>";
}

function selectTheme(theme) {
   document.getElementsByTagName('body')[0].className = theme;
   document.getElementsByTagName('main')[0].className = theme;
   const buttons = document.getElementsByTagName("button")

   for(let i = 0; i<buttons.length; i++){
       buttons[i].className = theme; 
   }
}