function clickHandler() {
    let name = 'Pesho'; 
    console.log(name);
}   

//Change tytle
function changeHeading(){
    let headingElement = document.getElementsByTagName("h1")[0];
    headingElement.textContent = 'Hello from the outside!';
}