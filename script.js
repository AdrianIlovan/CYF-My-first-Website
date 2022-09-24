function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button1').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_li);

});
var Nlinks, links;


Nlinks = ['Amazon', 'Netflix', 'Google'];
links = ['https://www.disney.co.uk', 'https://www.netflix.co.uk', 'https://www.google.co.uk'];
while (!!links.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", links.shift());
  new_a.innerText = Nlinks.shift();

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
}
