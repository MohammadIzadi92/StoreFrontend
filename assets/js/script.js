var searchBoxParent = document.getElementById('search-box-parent')
var navbarSearchBox = document.getElementById('navbar-search-box')
var navbar = document.getElementById('navbar');
var categoryLinks = document.getElementsByClassName('category-a')
var parentCategoryLinks = document.getElementsByClassName('parent-category-links')
var categoryLinksBox = document.getElementById('category-links-box')
var categoryLinksChild = document.getElementsByClassName('variable-margin')

function blurSearchBox() {
    navbarSearchBox.blur()
}
function fullShadow() {
    blurSearchBox()
    navbar.classList.add('full-shadow');
    navbar.classList.remove('shadow');
}
function clearFullShadow() {
    navbar.classList.remove('full-shadow')
    navbar.classList.add('shadow')
}
function giveActive(self) {
    for (let i = 0; i < categoryLinks.length; i++) {
        categoryLinks[i].classList.remove('active-category')
        categoryLinks[i].parentNode.children[1].classList.remove('d-block')
        categoryLinks[i].parentNode.children[1].classList.add('d-none')
    }
    self.classList.add('active-category')
    self.parentNode.children[1].classList.remove('d-none')
    self.parentNode.children[1].classList.add('d-block')
}
function focusSearchBox() {
    navbar.classList.add('full-shadow');
    navbar.classList.remove('shadow');
    navbarSearchBox.classList.add('border-white')
    navbarSearchBox.classList.add('search-box-rounded-top')
    searchBoxParent.classList.add('search-box-rounded-top')
    searchBoxParent.classList.add('search-box-shadow')
    searchBoxParent.children[1].classList.add('search-box-shadow')
    searchBoxParent.children[1].classList.remove('d-none')
    searchBoxParent.children[1].classList.add('d-block')
}
function unFocusSearchBox() {
    navbar.classList.remove('full-shadow');
    navbar.classList.add('shadow')
    navbarSearchBox.classList.remove('border-white')
    navbarSearchBox.classList.remove('search-box-rounded-top')
    searchBoxParent.classList.remove('search-box-rounded-top')
    searchBoxParent.classList.remove('search-box-shadow')
    searchBoxParent.children[1].classList.remove('search-box-shadow')
    searchBoxParent.children[1].classList.add('d-none')
    searchBoxParent.children[1].classList.remove('d-block')
}

function giveWidth() {
    var boxWidth = categoryLinksBox.clientWidth
    for (let i = 0; i < categoryLinksChild.length; i++) {
        categoryLinksChild[i].setAttribute('style', 'margin-right:' + boxWidth + 'px;')
        categoryLinksChild[i].children[0].setAttribute('style', 'width:' + (categoryLinksBox.parentNode.clientWidth - boxWidth - 35) + 'px;')
    }
}

window.addEventListener('resize', giveWidth());

// ========== For price limited ===================================================
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelectorAll(".slider .progress");
let priceGap = 0;


function priceRangeInput(e){
    let minPrice = parseInt(priceInput[0].value),
    maxPrice = parseInt(priceInput[1].value);
    
    if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
        if(e.target.className === "input-min"){
            rangeInput[0].value = minPrice;
            range.style.left = 100 - (maxPrice / rangeInput[0].max) * 100 + "%";
        }else{
            rangeInput[1].value = maxPrice;
            range.style.right = (minPrice / rangeInput[1].max) * 100 + "%";
        }
    }
}

function priceRangeInput2(e){
    let minPrice = parseInt(priceInput[2].value),
    maxPrice = parseInt(priceInput[3].value);
    
    if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[3].max){
        if(e.target.className === "input-min"){
            rangeInput[2].value = minPrice;
            range.style.left = 100 - (maxPrice / rangeInput[2].max) * 100 + "%";
        }else{
            rangeInput[3].value = maxPrice;
            range.style.right = (minPrice / rangeInput[3].max) * 100 + "%";
        }
    }
}

function rangeColored(e){
    var minVal = parseInt(rangeInput[0].value),
    maxVal = parseInt(rangeInput[1].value);

    if((maxVal - minVal) < priceGap){
        if(e.target.className === "range-min"){
            rangeInput[0].value = maxVal - priceGap;
        }else{
            rangeInput[1].value = minVal + priceGap;
        }
    }else{
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range[0].style.left = 100 - (maxVal / rangeInput[0].max) * 100 + "%";
        range[0].style.right = (minVal / rangeInput[1].max) * 100 + "%";
    }
}

function rangeColored2(e){
    var minVal = parseInt(rangeInput[2].value),
    maxVal = parseInt(rangeInput[3].value);

    if((maxVal - minVal) < priceGap){
        if(e.target.className === "range-min"){
            rangeInput[2].value = maxVal - priceGap;
        }else{
            rangeInput[3].value = minVal + priceGap;
        }
    }else{
        priceInput[2].value = minVal;
        priceInput[3].value = maxVal;
        range[1].style.left = 100 - (maxVal / rangeInput[2].max) * 100 + "%";
        range[1].style.right = (minVal / rangeInput[3].max) * 100 + "%";
    }
}

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        priceRangeInput(e)
        priceRangeInput2(e)
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        rangeColored(e)
        rangeColored2(e)
    });
});

if (performance.type == performance.TYPE_RELOAD) {
    rangeColored()
    rangeColored2()
}
