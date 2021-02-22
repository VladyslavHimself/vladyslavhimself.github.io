 // declare variables for introduction
const   text = document.querySelector('.welcome__text'),
        textInner = document.querySelector('.welcome__text h1'),
        figure = document.querySelector('.welcome__figure'),
        scene = document.querySelector('.scene'),
        intro = document.querySelector('.wrapper'),
        introduceMyselfWrapper = document.querySelector('.introduceMyself'),
        skillsWrapper = document.querySelector('.skills'),
        photo = document.querySelector('.photo img');


const WCUDBtn = document.querySelector('#toSkillsBtn');

const skillsNamesBE = ['Node.js', 'Express.js', 'MongoDB, PostgreSQL', 'Firebase', 'REST','Docker'],
      skillsProgressBE = ['70%', '90%', '50%', '65%', '70%', '50%'],
      skillsHintsBE = ['Normal', 'Good', 'Learning', 'Normal', 'Good', 'Learning'];

const skillsNamesFE = ['JavaScript', 'React/Redux', 'Next.js', 'TypeScript', 'HTML/CSS (include preprocessors)', 'OWASP, CORS, HTTPS, CSP'],
      skillsProgressFE = ['90%', '85%', '75%', '80%', '94%', '80%'],
      skillsHintsFE = ['Good', 'Good', 'In Progress', 'Good', 'Beautifull', 'Still good'];

const skillsNamesUX = ['Prototyping & Testing', 'Visual Design, Mockups, UI Elements', 'Research, Wireframing', 'Typography', 'Figma, Zeplin, Sketch', 'Photoshop'],
      skillsProgressUX = ['70%', '65%', '80%', '70%', '90%', '93%'],
      skillsHintsUX = ['Normal', 'Learning', 'Good', 'Normal', 'Good', 'Good'];
// NOTE Functions


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
                intro.remove();
                setTimeout(() => {
                    introduceScene(introduceMyselfWrapper);
                }, 1000);
            }, 500);
        }, 1000);
    }, 1000);

}

function introduceScene(scene) {
    scene.style.display = '';
    setTimeout(() => {
        scene.style.opacity = '1';    
    }, 100);
    
}

function hideSection(section) {
    section.style.transition = '2s ease'
    section.style.opacity = '0';
    section.style.display = 'none';
}



// test functions

function disableFirstSection() {
    intro.remove();
}

function enableSecondSection() {
    introduceMyselfWrapper.style.display = '';
    introduceMyselfWrapper.style.opacity = '1'; 
}

function all() {
    disableFirstSection();
    enableSecondSection();
}

function disbaleSecondSection() {
    introduceMyselfWrapper.remove();
}

function disableThirdSection() {
    skillsWrapper.style.display = 'none';
}

// tests
    introduceMyselfWrapper.style.display = 'flex';
    introduceMyselfWrapper.style.opacity = '1';

// all();

// main functions

// hideSection(intro)
// skillsWrapper.style.display = 'flex';
hideSection(introduceMyselfWrapper);
hideSection(skillsWrapper);


introduce();


function hidePage(section, time) {
    
    return new Promise(resolve => {
        section.style.transition = `${time}s ease`;
        section.style.opacity = '0';
            setTimeout(() => {
                section.style.display = 'none';
                resolve('done')
            }, 500);
        
    });

}

function showPage(section) {
    return new Promise(resolve => {
        section.style.display = 'flex';
        setTimeout(() => {
            section.style.opacity = '1';
            resolve('done');
        }, 50);
    });
}

function animateScene(isStart, delay) {
    return new Promise(resolve => {
        if(isStart) {
            document.querySelector('.hovers').style.width = '100%';
            setTimeout(() => {
                resolve('done');
            }, delay);

        } else {
            document.querySelector('.hovers').style.width = '0%';
            setTimeout(() => {
                resolve('done');
            }, delay);
        }
    });


}

async function changePage() {
    await hidePage(introduceMyselfWrapper, '.5');
    await animateScene(true, 1500);
    await showPage(skillsWrapper, '.5');
    await animateScene(false, 1500);
}

function changeCarousel(items, e) {
    items.forEach(elem => {
                
        if (elem.classList.contains('current') && !(elem.innerHTML === e.target.innerHTML)) {
            elem.classList.remove('current');
        } 
        
        if (elem.innerHTML == e.target.innerHTML && !elem.classList.contains('current')) {
            elem.classList.add('current');
        }
    });
}

function changeSkills(names, progress, hints) {
    
    let bar = document.querySelectorAll('.bar__text'),
        pData = document.querySelectorAll('.progress__data');

        // animation
        pData.forEach(element => {
            element.classList.remove('animated')
            setTimeout(() => {
                element.classList.add('animated')    
            }, 100);
            
        });

        // changer
    bar.forEach((element, i) => {
        element.innerHTML = names[i];
    });
    pData.forEach((element,i) => {
        element.style.width = progress[i];
        element.innerHTML = hints[i]
    });

    
}

WCUDBtn.addEventListener('click', () => {
       changePage();
});

let carouselContent = document.querySelector('.carousel__inner');

carouselContent.addEventListener('click', (e) => {

    let items = document.querySelectorAll('.carousel__item');

    if (e.target.innerHTML == 'Front-end Dev') {
        changeCarousel(items, e);
        changeSkills(skillsNamesFE, skillsProgressFE, skillsHintsFE) 

    } else if (e.target.innerHTML == 'UX/UI Designer') {
        changeCarousel(items, e);
        changeSkills(skillsNamesUX, skillsProgressUX, skillsHintsUX) 

    } else if (e.target.innerHTML == 'Back-end Dev') {
        changeCarousel(items, e);
        changeSkills(skillsNamesBE, skillsProgressBE, skillsHintsBE)    
    }

});
