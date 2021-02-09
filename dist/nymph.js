 // declare variables for introduction
const text = document.querySelector('.welcome__text'),
        figure = document.querySelector('.welcome__figure'),
        scene = document.querySelector('.scene'),
        introduceWrapper = document.querySelector('.wrapper'),
        introduceMyselfWrapper = document.querySelector('.introduceMyself'),
        textInner = document.querySelector('.welcome__text h1');

// declare vars for Part I

const WCUDBtn = document.querySelector('a .button');


function changeFigureColor(color) {
    figure.style.transition = '1s ease';
    figure.style.background = color;
}

function changeText(words, timing = 1500, fade = 400) {
    return new Promise(resolve => {
        setTimeout(() => {
            text.style.opacity = '0';
            setTimeout(() => {
                textInner.innerHTML = words;
                setTimeout(() => {
                    text.style.opacity = '1';
                    resolve('done');    
                }, fade);
            }, fade);
        }, timing);
    });
}

function resizeScene(x) {
    scene.style.width = `${x}%`;
}

async function introduce() {
    
    await changeText('My name is Vlad & I\'m ');
    resizeScene(50);
    await changeText('Front-End Developer', 1500, 400);
    await changeText('Back-End Developer', 500, 200);
    await changeText('UX/UI Designer', 500, 200);
    await changeText('My portfolio can tell more', 1300, 400);
    await changeText('Enjoy it ;)', 1000, 300);
    resizeScene(100);
    changeFigureColor('#000');
    setTimeout(() => {
        scene.style.opacity = '0'
        changeFigureColor('#f4f4f4');

        setTimeout(() => {
            text.style.opacity = '0';
            setTimeout(() => {
                introduceWrapper.remove();
                setTimeout(() => {
                    introduceMyself();
                }, 1000);
            }, 500);
        }, 1000);
    }, 1000);

}

function introduceMyself() {
    introduceMyselfWrapper.style.display = '';
    setTimeout(() => {
        introduceMyselfWrapper.style.opacity = '1';    
    }, 100);
    
}


// test functions
function disableFirstSection() {
    introduceWrapper.remove();
    introduceMyselfWrapper.style.display = '';
    introduceMyselfWrapper.style.opacity = '1'; 
}

function disbaleSecondSection() {
    introduceMyselfWrapper.remove();
}



introduceMyselfWrapper.style.transition = '2s ease'
introduceMyselfWrapper.style.opacity = '0';
introduceMyselfWrapper.style.display = 'none';


// tests

// disableFirstSection();
// disbaleSecondSection();


// main functions 
introduce();

WCUDBtn.addEventListener('click', () => {
    introduceMyselfWrapper.style.transition = '.3s ease';
    introduceMyselfWrapper.style.opacity = '0';
});


