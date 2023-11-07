var data = {
    lastId: 0,
    pizzas: []
}
var currentPizza = 0;

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
        var removeButton = document.createElement("button");
        removeButton.id = "removeButtonId";
        removeButton.innerHTML = "X";
        liNode.appendChild(removeButton);
    })
}

const addPizzaButton = document.getElementsByClassName('add-pizza')[0];
addPizzaButton.onclick = function () {
    let id = data.lastId + 1;
    data.pizzas.push(id);
    data.lastId = id;
    data.pizzas.visible = true;
    currentPizza += 1;
    render();
};


const removePizzaButton = document.getElementById('removeButtonId');
removePizzaButton.onclick = function () {
    if (currentPizza >= 1) {
        let id = data.lastId - 1;
        data.lastId = id;
        data.pizzas.splice(id);
        currentPizza -= 1;
        render();
    }
};
