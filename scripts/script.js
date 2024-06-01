
document.addEventListener('DOMContentLoaded', () => {
  fetch('data/tasks.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      function traverseJson(obj, depth = 0) {
        let indent = ' '.repeat(depth * 2);
        let outputElement = document.getElementById('output');
        outputElement.innerText += indent + obj.name + '\n';
        if (obj.children) {
          obj.children.forEach(child => traverseJson(child, depth + 1));
        }
      }
      traverseJson(data);
    })
    .catch(error => console.error('Error loading JSON:', error));
});
