//Modell
let reverseThisText = '';


//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>Reverse løkke</h1>
    <br/>
    <div id=showText></div>
    <br/>
    <input id="userInput" type="text"/>
    <br/>
    <button onclick ="reverseInput()">Reverse Loop</button>
    <br/>
    `;
}

//Controll
function reverseInput() {
    let sentence = document.getElementById("userInput").Value;
    reverseThisText = textChanger(sentence);
    document.getElementById("showText").innerHTML = `${reverseThisText}`;
}


function textChanger(string) {
    let reversed = "";

    for (let i = string.length; i = 0; i--) {
        reversed = string[i];
    }
    return reversed;
    console.log(reversed)
}






// function testing() {
//     let original = "hello World";
//     let reversed = "";

//     for (let i = original.length - 1; i >= 0; i--) {
//         reversed += original[i];
//     }
//     console.log(reversed)
// }