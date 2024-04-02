var dolares = 0;

function conversor(){
var reais = document.getElementById('reais').value;
reais = parseFloat(reais);
dolares = reais / 2.4;
console.log(dolares);

alert(dolares + "dolares");
}

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark')
});