import { menupage } from "./menu";

export const aboutpage = (content) => {
    // Clear previous classes and set space-themed class
    content.className = ''; 
    content.classList.add('about-content');

    // Section 1: Title
    const div1 = document.createElement('div');
    div1.classList.add('about-section');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to Burger Galaxy!';
    title.classList.add('about-title');

    // Section 2: Space-Themed Introduction
    const div2 = document.createElement('div');
    div2.classList.add('about-section');

    const introduction = document.createElement('p');
    introduction.textContent = "Serving the most stellar burgers to brave space cadets across the galaxy.";
    introduction.classList.add('about-text');

    const introduction2 = document.createElement('p');
    introduction2.textContent = "Experience cosmic flavors and interstellar satisfaction with every bite.";
    introduction2.classList.add('about-text');

    // Section 3: Call-to-Action Button
    const div3 = document.createElement('div');
    div3.classList.add('about-section');

    const orderBTN = document.createElement('button');
    orderBTN.textContent = 'Embark on a Flavor Journey!';
    orderBTN.classList.add('about-btn');

    // Append Elements to Content
    div1.appendChild(title);
    div2.appendChild(introduction);
    div2.appendChild(introduction2);
    div3.appendChild(orderBTN);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);


    orderBTN.addEventListener('click', function () {
        content.innerHTML = '';
        menupage(content)
    });
};
