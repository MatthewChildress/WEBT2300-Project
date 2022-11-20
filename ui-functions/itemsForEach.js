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
            <div class="card__name car__${car.make} car__${car.model} car__${car.color}">
                ${car.year} ${car.make} ${car.model}
            </div>
            <div class="card__value">
            <p class="card__price">
                ${car.price}
            </p>
            <button class="item__add" id="itemAdd">
            Add Item
            </button>
            </div>
        </div>
        
      `

        carCard.innerHTML = carItems;
        productCards.append(carCard);
    });
}