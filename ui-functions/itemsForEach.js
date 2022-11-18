import { cars } from '../objects/objectsList.js'

const colors = document.querySelectorAll('.check__color');

export default function itemsForEach() {
    // iterates over each object in array
    cars.forEach((car) => {
        const productCards = document.getElementById('productCards');

        // creates an iterated element to anchor onto productcards
        let carCard = document.createElement('div');

        // passes in html similar to react api calls
        let carItems = `
        <div class="card ${car.id}">
            <img class="card__image" src="${car.image}" alt="${car.make} ${car.model} pic">
            <div class="card__info">
                <p class="card__make car__${car.make} car__${car.model} car__${car.color}">
                    ${car.year} ${car.make} ${car.model}
                </p>
            </div>
            <div class="card__value">
            <span class="material-symbols-outlined">remove</span>
            <p class="card__price">
                ${car.price}
            </p>
            <span class="material-symbols-outlined">add</span>
            </div>
        </div>
        
      `

        carCard.innerHTML = carItems;
        productCards.append(carCard);
    });
    
    // declares new array
    /* let colorChoices = [];
    colors.forEach(color => {
        color.addEventListener('change', () => {
            color.checked ? colorChoices.push(color.value) : colorChoices.splice( colorChoices.indexOf(color.value), 1);
            console.log(colorChoices)
            const filteredColors = cars.filter(item => colorChoices.includes(item.value));
            console.log(filteredColors)
            itemsForEach(filteredColors)
        })
    }) */
}