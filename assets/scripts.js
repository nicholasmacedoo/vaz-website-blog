const rangeSliders = document.querySelectorAll('input[type="range"]')

function onChangeRange(event) {
    let value = Number(event.target.value);
    let target = event.target.dataset.target;
    let valueFormat = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL'});
    let targetElement = document.querySelector(target);
    targetElement.innerHTML = valueFormat;
}
function initialValue(range) {
    let value = Number(range.value);
    let target = range.dataset.target;
    let valueFormat = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL'});
    let targetElement = document.querySelector(target);
    targetElement.innerHTML = valueFormat;
}
rangeSliders.forEach(range => {
    initialValue(range);
    range.addEventListener('input', onChangeRange)
});