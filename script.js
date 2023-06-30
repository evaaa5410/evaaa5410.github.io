let inp = document.querySelector('.inp');
let downM = document.querySelector('.dropdown-content')
let btnGeo = document.querySelector('.geo');              


async function getCity() {                                  //получение данных с сервера
    let url = 'https://proverili.ru/api/areas';
    let response = await fetch(url, { method: 'POST' });
    let result = await response.json();
    let ul = document.querySelector('.ul2');
    let arr = []
    for (const key in result) {
            res = result[key].name
            arr.push(res)
            res2 = result[key].cities
            for (const i in res2) {
                cities = res2[i].name
                arr.push(cities)
            }
    }
    arr.forEach(element => {                                //вставила элементы массива в список городов
        let li = document.createElement('li');
        let a = document.createElement('a')
        a.href = '#'
        a.classList.add('lia')
        li.classList.add('.li2')
        ul.append(li);
        li.append(a);
        a.innerHTML = element
    });
}
getCity()


function inpV() {                                           //функция для фильтрации поисковика
    let ul  = document.querySelector('.ul2');
    filt = inp.value.toUpperCase();
    let li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().startsWith(filt)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


inp.addEventListener('keyup', (event) => {                  //отчистить поиск
    let btnClose = document.querySelector('.close');
    btnClose.style.display = 'flex';
    if (event.target == btnClose) {
        inp.value = ''
    }
})


downM.addEventListener('click', (event) => {                //функция, меняющая город
    let li = event.target;
    let city =  document.querySelector('.city');
    let inp = document.querySelector('.inp');
    city.textContent = li.textContent
    inp.value = li.textContent
    localStorage.setItem('city', inp.value)
    if (li.tagName != 'LI') return
})


window.onload = () => {                                     //сохранение города
    let city = localStorage.getItem('city');
    let placeC = document.querySelector('.city');
    placeC.textContent = city
}


btnGeo.addEventListener('click', showInput);                
function showInput() {                                      //функция, открывающая поисковик городов
    let menu = document.querySelector('.dropdown-content')
    menu.classList.toggle("show");
}


let btnMenu = document.querySelector('#btnMenu');            //открыть моб меню
btnMenu.addEventListener('click', () => {
    let mobMenu = document.querySelector('#mobMenu')
    mobMenu.style.display = (mobMenu.style.display == 'none') ? 'flex' : 'none';
})


let like = document.querySelector('#like');
like.addEventListener('click', (event) => {
    let img = document.querySelector('.img2');
    let img2 = document.querySelector('.imgnone')
    if (event.target == img) {
        img.style.display = 'none'
        img2.style.display = 'flex'
    } if (event.target == img2) {
        img.style.display = 'flex'
        img2.style.display = 'none'
    }
})


$(".rightt").click(function() {                             //функция для скролла вправо
    $("#li1").fadeOut(100); 
    $(".ul1").animate({width: "98%"}, 100);
    $(".leftt").css("display", "flex");
    $(".rightt").css("display", "none");
});
$(".leftt").click(function() {                              //функция для скролла влево
    $("#li1").fadeIn(100); 
    $(".ul1").animate({width: "106%"}, 100);
    $(".leftt").css("display", "none");
    $(".rightt").css("display", "flex");
});  

 