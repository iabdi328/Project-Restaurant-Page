import { menupage } from "./menu";

export const homepage = (content) => {

    content.classList.add('home-content');

    const div1 = document.createElement("div");

    const div2 = document.createElement("div");

    const div3 = document.createElement("div");


    const introduction = document.createElement("h2");
    introduction.textContent = "Best Burgers in the Galaxy.";
    const introduction2 = document.createElement("h2");
    introduction2.textContent = "Are you ready?";

    const orderBTN  = document.createElement("button");

    orderBTN.textContent = "Order Now!";
    orderBTN.classList.add("order-btn")


    content.appendChild(div1)
    content.appendChild(div2)
    content.appendChild(div3)

    div1.appendChild(introduction);
    div2.appendChild(introduction2);
    div3.appendChild(orderBTN);


    orderBTN.addEventListener('click', function () {
        content.innerHTML = '';
        menupage(content)
    });
};

