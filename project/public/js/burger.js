var button = document.getElementById('burger');

var navigation = document.getElementById('menu');

var wrp = document.getElementById('wrp');

button.addEventListener('click', function(){
    navigation.classList.toggle('display-block');
    wrp.classList.toggle('display-block');
});