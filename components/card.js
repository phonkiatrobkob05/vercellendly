// components/card.js

function createCard(imageSrc, title, text, link) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = imageSrc;
    img.alt = 'Card image cap';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = text;

    const cardLink = document.createElement('a');
    cardLink.classList.add('btn', 'btn-primary');
    cardLink.href = link;
    cardLink.textContent = 'Go somewhere';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);

    card.appendChild(img);
    card.appendChild(cardBody);

    document.getElementById('card-container').appendChild(card);
}

// Export the function to use it in other files
export { createCard };
