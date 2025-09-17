function changebgcolor(id) {
    console.log("changebgcolor() funtion called")
    const body = document.getElementById('body')
    const colors = {
        "violet": 'rgb(204, 153, 255)',
        "indigo": 'rgb(95, 124, 190)',
        "blue": 'rgb(173, 216, 230)',
        "green": 'rgb(152, 251, 152)',
        "yellow": 'rgb(255, 255, 191)',
        "orange": 'rgb(255, 197, 143)',
        "red": 'rgb(210, 114, 114)',
        "black": 'rgb(0, 0, 0)',
    }
    body.style.backgroundColor = colors[id]

}

function clearpage(id) {
    console.log("clearpage() funtion called")
    const main_div = document.getElementById(id).parentElement;
    if (main_div.style.opacity === '1') {
        main_div.style.transition = 'opacity 0.6s linear';
        main_div.style.opacity = '0';
    } else {
        main_div.style.transition = 'opacity 0.6s linear';
        main_div.style.opacity = '1';
        const body = document.getElementById('body')
        body.style.backgroundColor = 'white'
    }


}

// function showpage() {
//     console.log("showpage() funtion called")
//     const main_div1 = document.getElementById('bg-change-button').parentElement;
//     main_div1.style.transition = 'opacity 0.6s linear';
//     main_div1.style.opacity = '1';
// }

const buttons = document.getElementsByClassName("bg-change-button");

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        // change background color
        changebgcolor(event.target.id);
        // hide content in the page
        clearpage(event.target.id);
    })
};



