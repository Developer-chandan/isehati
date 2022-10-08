
// navbar


let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

$(document).on('click','ul li.nav-item', function(){
    $(this).addClass('active').siblings().removeClass('active');
})


//price input

const chooseNumberValueText = document.getElementById('choose_number');
const getTrialPrice = document.getElementById('trialPrice');
const getTrialBasic = document.getElementById('basicPrice');
const getTrialPro = document.getElementById('ProPrice');

const monthlyTrial = document.getElementById('monthlyAnountTrial');
const monthlyTrialBasic = document.getElementById('monthlyAnountBasic');
const monthlyTrialPro = document.getElementById('monthlyAnountPro');

const totalWithTrial = document.getElementById('withTrial');
const totalWithBasic = document.getElementById('withBasic');
const totalWithPro = document.getElementById('withPro');


const getTrialPriceValue = getTrialPrice.innerText;
const getTrialPriceValueNumber = parseInt(getTrialPriceValue);
const getValueBasic = getTrialBasic.innerText;
const getValueBasicNumber = parseInt(getValueBasic);
const getValuePro = getTrialPro.innerText;
const getValueBasicPro = parseInt(getValuePro);

chooseNumberValueText.addEventListener('keyup',(event)=>{
    const eventValue = event.target.value;

    const totalValueTrial = getTrialPriceValueNumber * eventValue;
    const totalValueBasic = getValueBasicNumber * eventValue;
    monthlyTrial.innerText = totalValueTrial;
    monthlyTrialBasic.innerText = totalValueBasic;
    totalWithTrial.innerText = totalValueTrial;
    totalWithBasic.innerText = totalValueBasic;
})