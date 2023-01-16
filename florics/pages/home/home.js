const theToBeAnimatedSession_1 = document.querySelector('.session1');
const theToBeAnimatedSession_1_title = document.querySelector('.title1');
const theToBeAnimatedSession_1_img = document.querySelector('.jogging-1');
const theToBeAnimatedSession_1_p = document.querySelector('.description-content1');
const theToBeAnimatedSession_1_h2 = document.querySelector('.description-title1');
const theToBeAnimatedSession_1_button = document.querySelector('.btn1');
const theToBeAnimatedAdvice1_circle1 = document.querySelector('.advice1-circle1');
const theToBeAnimatedAdvice1_circle2 = document.querySelector('.advice1-circle2');
const theToBeAnimatedAdvice1_circle3 = document.querySelector('.advice1-circle3');
const theToBeAnimatedKit1 = document.querySelector('.descrip-kit');
const theToBeAnimatedKit1_img = document.querySelector('.shoe-1');
const theToBeAnimatedKit1_title = document.querySelector('.des-kit1-title');
const theToBeAnimatedKit1_content = document.querySelector('.des-kit1-content');
const theToBeAnimatedKit1_confirm = document.querySelector('.confirm1');
const theToBeAnimatedKit1_circle1 = document.querySelector('.kit1-circle1');
const theToBeAnimatedKit1_circle2 = document.querySelector('.kit1-circle2');
const theToBeAnimatedKit1_circle3 = document.querySelector('.kit1-circle3');
const theToBeAnimatedPatience = document.querySelector('.require:nth-of-type(1)');
const theToBeAnimatedCommitment = document.querySelector('.require:nth-of-type(2)');
const theToBeAnimatedTime = document.querySelector('.require:nth-of-type(3)');
const theToBeAnimatedDiet = document.querySelector('.require:nth-of-type(4)');
const theToBeAnimatedNotif_1 = document.querySelector('.notification-1')
const theToBeAnimatedNotif_1_img = document.querySelector('.notif-img')
const theToBeAnimatedNotif_1_title = document.querySelector('.notif-title')
const theToBeAnimatedNotif_1_content = document.querySelector('.notif-content')
const theToBeAnimatedNotif_1_btn = document.querySelector('.notif-btn')
const theToBeAnimatedNotif_1_circle1 = document.querySelector('.notif1-circle1')
const theToBeAnimatedNotif_1_circle2 = document.querySelector('.notif1-circle2')
const theToBeAnimatedNotif_1_circle3 = document.querySelector('.notif1-circle3')
const theToBeAnimatedKit2 = document.querySelector('.descrip-kit2')
const theToBeAnimatedKit2_title = document.querySelector('.des-kit2-title')
const theToBeAnimatedKit2_btn = document.querySelector('.kit2-btn')
const theToBeAnimatedKit2_img = document.querySelector('.kit2-img')
const theToBeAnimatedKit2_circle1 = document.querySelector('.kit2-circle1')
const theToBeAnimatedKit2_circle2 = document.querySelector('.kit2-circle2')
const theToBeAnimatedKit2_circle3 = document.querySelector('.kit2-circle3')

document.addEventListener('scroll', (e) => {
    
    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedSession_1.classList.add('anim-session1');
    }else{
        if(theToBeAnimatedSession_1.classList.contains('anim-session1')){
            theToBeAnimatedSession_1.classList.remove('anim-session1');
        }
    }

    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedSession_1_img.classList.add('anim-jogging1');
    }else{
        if(theToBeAnimatedSession_1_img.classList.contains('anim-jogging1')){
            theToBeAnimatedSession_1_img.classList.remove('anim-jogging1');
        }
    }

    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedSession_1_h2.classList.add('anim-title1');
    }else{
        if(theToBeAnimatedSession_1_h2.classList.contains('anim-title1')){
            theToBeAnimatedSession_1_h2.classList.remove('anim-title1');
        }
    }

    
    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedSession_1_p.classList.add('anim-content1');
    }else{
        if(theToBeAnimatedSession_1_p.classList.contains('anim-content1')){
            theToBeAnimatedSession_1_p.classList.remove('anim-content1');
        }
    }

    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedSession_1_button.classList.add('anim-btn1');
    }else{
        if(theToBeAnimatedSession_1_button.classList.contains('anim-btn1')){
            theToBeAnimatedSession_1_button.classList.remove('anim-btn1');
        }
    }

    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedAdvice1_circle1.classList.add('anim-circle1');
    }else{
        if(theToBeAnimatedAdvice1_circle1.classList.contains('anim-circle1')){
            theToBeAnimatedAdvice1_circle1.classList.remove('anim-circle1');
        }
    }

    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedAdvice1_circle2.classList.add('anim-circle2');
    }else{
        if(theToBeAnimatedAdvice1_circle2.classList.contains('anim-circle2')){
            theToBeAnimatedAdvice1_circle2.classList.remove('anim-circle2');
        }
    }

    if(Math.round(theToBeAnimatedSession_1.getBoundingClientRect().y) <= 775){
        theToBeAnimatedAdvice1_circle3.classList.add('anim-circle3');
    }else{
        if(theToBeAnimatedAdvice1_circle3.classList.contains('anim-circle3')){
            theToBeAnimatedAdvice1_circle3.classList.remove('anim-circle3');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1.classList.add('anim-kit1');
    }else{
        if(theToBeAnimatedKit1.classList.contains('anim-kit1')){
            theToBeAnimatedKit1.classList.remove('anim-kit1');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_title.classList.add('anim-title');
    }else{
        if(theToBeAnimatedKit1_title.classList.contains('anim-title')){
            theToBeAnimatedKit1_title.classList.remove('anim-title');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_img.classList.add('anim-shoe1');
    }else{
        if(theToBeAnimatedKit1_img.classList.contains('anim-shoe1')){
            theToBeAnimatedKit1_img.classList.remove('anim-shoe1');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_content.classList.add('anim-content');
    }else{
        if(theToBeAnimatedKit1_content.classList.contains('anim-content')){
            theToBeAnimatedKit1_content.classList.remove('anim-content');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_confirm.classList.add('anim-confirm1');
    }else{
        if(theToBeAnimatedKit1_confirm.classList.contains('anim-confirm1')){
            theToBeAnimatedKit1_confirm.classList.remove('anim-confrim1');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_circle1.classList.add('anim-circle1');
    }else{
        if(theToBeAnimatedKit1_circle1.classList.contains('anim-circle1')){
            theToBeAnimatedKit1_circle1.classList.remove('anim-circle1');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_circle2.classList.add('anim-circle2');
    }else{
        if(theToBeAnimatedKit1_circle2.classList.contains('anim-circle2')){
            theToBeAnimatedKit1_circle2.classList.remove('anim-circle2');
        }
    }

    if(Math.round(theToBeAnimatedKit1.getBoundingClientRect().y) <= 960){
        theToBeAnimatedKit1_circle3.classList.add('anim-circle3');
    }else{
        if(theToBeAnimatedKit1_circle3.classList.contains('anim-circle3')){
            theToBeAnimatedKit1_circle3.classList.remove('anim-circle3');
        }
    }

    if(Math.round(theToBeAnimatedCommitment.getBoundingClientRect().y) <= 770){
        theToBeAnimatedPatience.classList.add('anim-patience');
    }else{
        if(theToBeAnimatedPatience.classList.contains('anim-patience')){
            theToBeAnimatedPatience.classList.remove('anim-patience')
        }
    }

    if(Math.round(theToBeAnimatedCommitment.getBoundingClientRect().y) <= 770){
        theToBeAnimatedCommitment.classList.add('anim-commitment');
    }else{
        if(theToBeAnimatedCommitment.classList.contains('anim-commitment')){
            theToBeAnimatedCommitment.classList.remove('anim-commitment')
        }
    }

    if(Math.round(theToBeAnimatedCommitment.getBoundingClientRect().y) <= 770){
        theToBeAnimatedTime.classList.add('anim-time');
    }else{
        if(theToBeAnimatedTime.classList.contains('anim-time')){
            theToBeAnimatedTime.classList.remove('anim-time');
        }
    }

    if(Math.round(theToBeAnimatedCommitment.getBoundingClientRect().y) <= 770){
        theToBeAnimatedDiet.classList.add('anim-diet');
    }else{
        if(theToBeAnimatedDiet.classList.contains('anim-diet')){
            theToBeAnimatedDiet.classList.remove('anim-diet');
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 770){
        theToBeAnimatedNotif_1.classList.add('anim-notif1');
    }else{
        if(theToBeAnimatedNotif_1.classList.contains('anim-notif1')){
            theToBeAnimatedNotif_1.classList.remove('anim-notif1')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_img.classList.add('anim-notif-img');
    }else{
        if(theToBeAnimatedNotif_1_img.classList.contains('anim-notif-img')){
            theToBeAnimatedNotif_1_img.classList.remove('anim-notif-img')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_title.classList.add('anim-notif-title');
    }else{
        if(theToBeAnimatedNotif_1_title.classList.contains('anim-notif-title')){
            theToBeAnimatedNotif_1_title.classList.remove('anim-notif-title')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_content.classList.add('anim-notif-content');
    }else{
        if(theToBeAnimatedNotif_1_content.classList.contains('anim-notif-content')){
            theToBeAnimatedNotif_1_content.classList.remove('anim-notif-content')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_btn.classList.add('anim-notif-btn');
    }else{

        if(theToBeAnimatedNotif_1_btn.classList.contains('anim-notif-btn')){
            theToBeAnimatedNotif_1_btn.classList.remove('anim-notif-btn')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_circle1.classList.add('anim-notif-circle1');
    }else{

        if(theToBeAnimatedNotif_1_circle1.classList.contains('anim-notif-circle1')){
            theToBeAnimatedNotif_1_circle1.classList.remove('anim-notif-circle1')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_circle2.classList.add('anim-notif-circle2');
    }else{

        if(theToBeAnimatedNotif_1_circle2.classList.contains('anim-notif-circle2')){
            theToBeAnimatedNotif_1_circle2.classList.remove('anim-notif-circle2')
        }
    }

    if(Math.round(theToBeAnimatedNotif_1.getBoundingClientRect().y) <= 750){
        theToBeAnimatedNotif_1_circle3.classList.add('anim-notif-circle3');
    }else{

        if(theToBeAnimatedNotif_1_circle3.classList.contains('anim-notif-circle3')){
            theToBeAnimatedNotif_1_circle3.classList.remove('anim-notif-circle3')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2.classList.add('anim-kit2')
    }else{
        if(theToBeAnimatedKit2.classList.contains('anim-kit2')){
            theToBeAnimatedKit2.classList.remove('anim-kit2')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2_img.classList.add('anim-kit2-img')
    }else{
        if(theToBeAnimatedKit2_img.classList.contains('anim-kit2-img')){
            theToBeAnimatedKit2_img.classList.remove('anim-kit2-img')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2_title.classList.add('anim-kit2-title')
    }else{
        if(theToBeAnimatedKit2_title.classList.contains('anim-kit2-title')){
            theToBeAnimatedKit2_title.classList.remove('anim-kit2-title')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2_btn.classList.add('anim-kit2-btn')
    }else{
        if(theToBeAnimatedKit2_btn.classList.contains('anim-kit2-btn')){
            theToBeAnimatedKit2_btn.classList.remove('anim-kit2-btn')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2_circle1.classList.add('anim-kit2-circle1')
    }else{
        if(theToBeAnimatedKit2_circle1.classList.contains('anim-kit2-circle1')){
            theToBeAnimatedKit2_circle1.classList.remove('anim-kit2-circle1')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2_circle2.classList.add('anim-kit2-circle2')
    }else{
        if(theToBeAnimatedKit2_circle2.classList.contains('anim-kit2-circle2')){
            theToBeAnimatedKit2_circle2.classList.remove('anim-kit2-circle2')
        }
    }

    if(Math.round(theToBeAnimatedKit2.getBoundingClientRect().y) <= 735){
        theToBeAnimatedKit2_circle3.classList.add('anim-kit2-circle3')
    }else{
        if(theToBeAnimatedKit2_circle3.classList.contains('anim-kit2-circle3')){
            theToBeAnimatedKit2_circle3.classList.remove('anim-kit2-circle3')
        }
    }
})

const toggle = document.querySelector('.toggle');
const togglerButton = document.querySelector('.toggler-link');

togglerButton.addEventListener('click', () => {
    toggle.classList.toggle('active')
})
togglerButton.addEventListener('blur', () => {
    toggle.classList.remove('active')
})

const ratingStar1 = document.querySelector('i:nth-of-type(1)');
const ratingStar2 = document.querySelector('i:nth-of-type(2)');
const ratingStar3 = document.querySelector('i:nth-of-type(3)');
const ratingStar4 = document.querySelector('i:nth-of-type(4)');
const ratingStar5 = document.querySelector('i:nth-of-type(5)');

ratingStar1.addEventListener('click', () => {
    ratingStar1.style.color = 'yellow';
})
ratingStar2.addEventListener('click', () => {
    ratingStar2.style.color = 'yellow';
})
ratingStar3.addEventListener('click', () => {
    ratingStar3.style.color = 'yellow';
})
ratingStar4.addEventListener('click', () => {
    ratingStar4.style.color = 'yellow';
})
ratingStar5.addEventListener('click', () => {
    ratingStar5.style.color = 'yellow';
})

