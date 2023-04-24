const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const redText = document.createElement('p');
redText.textContent = "Hey, I'm red!";
redText.style.color = 'red';

container.appendChild(redText)


const blueHeader = document.createElement('h3');
blueHeader.textContent = "I’m a blue h3!";
blueHeader.style.color = 'blue';

container.appendChild(blueHeader);


const pinkDiv = document.createElement('div');
pinkDiv.style.background = 'pink';
pinkDiv.style.border = "1px solid black";

container.appendChild(pinkDiv)


const pinkDivHeader = document.createElement('h1');
pinkDivHeader.textContent = "I’m in a div";

pinkDiv.appendChild(pinkDivHeader)

const pinkDivParagraph = document.createElement('p');
pinkDivParagraph.textContent = "Me Too";

pinkDiv.appendChild(pinkDivParagraph)