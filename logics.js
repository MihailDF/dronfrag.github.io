function scrollDown() { //функция для скрола
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let search_button = document.querySelector(".button-search")
let main = document.querySelector(".main")
let iphone = document.querySelector(".iphone")
console.log(search_button)
let ser_numbers_list = ["1","2","3","4"] // 1 - первый телефон, 2 - компьютер, 3- телефоны, 4- холодильник
search_button.addEventListener('click', function(){
    let ser_number =document.querySelector("input")
    main.style.display = none
    console.log("pifjwijffjwiofj")
})
