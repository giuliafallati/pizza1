var data = {
    lastId: 0,
    pizzas: []
}

const pizzaList = document.getElementsByClassName('pizza-list')[0];

function render() {
    while (pizzaList.lastElementChild) {
        pizzaList.removeChild(pizzaList.lastElementChild);
    }

    data.pizzas.forEach(function (value) {
        let liNode = document.createElement('li');
        liNode.classList.add('li-node');
        let textNode = document.createTextNode(value);
        liNode.appendChild(textNode);
        pizzaList.appendChild(liNode);

    })
}

const addPizzaButton = document.getElementsByClassName('add-pizza')[0];
addPizzaButton.onclick = function () {
    let id = data.lastId + 1;
    data.pizzas.push(id);
    data.lastId = id;
    data.pizzas.visible = true;
    render();
};


removePizzaButton.onclick = function () {
    let id = data.lastId - 1;
    data.lastId = id;
    data.pizzas.pop();
    render();
};