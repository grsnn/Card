let heart = document.getElementById('heart');
let pizzaSize = document.querySelectorAll('.pizza__size button');
let total = document.getElementById('total');
let inputNumber = document.getElementById('inputNumber');


//btn increase and diminish
let increase = document.getElementById('increase');
let diminish = document.getElementById('diminish');

increase.addEventListener('click', () => {
    inputNumber.value++;
});
diminish.addEventListener('click', () => {
    inputNumber.value--;
    if (inputNumber.value == 0) {
        inputNumber.value = 1;
    }
});

//size pizza
let sizePizza = (event) => {
    switch (event.target.id) {
        case 'onePizza':
            total.innerHTML = 'Q. 40.44';
            break;
        case 'twoPizza':
            total.innerHTML = 'Q. 50.00';
            break;
        case 'threePizza':
            total.innerHTML = 'Q. 60.50';
            break;
    }
}

pizzaSize.forEach((collbak) => {
    //active btn
    collbak.addEventListener('click', () => {
        pizzaSize.forEach((collbak) => collbak.classList.remove('active'))
        collbak.classList.add('active');
    })

    //size pizza
    collbak.addEventListener('click', sizePizza)
});

//btn like
heart.addEventListener('click', () => {
    heart.classList.toggle('active')
});