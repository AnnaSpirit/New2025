console.log('hello');
}

function getValue(e) {
  console.log(e.target.type, e.target.value);
}

const button = document.getElementById('sendbutton');

button.addEventListener('click', function (event) {
  alert('hello from send button')
  const header2 = document.getElementsByTagName('h2')[0]
  header2.style.color = 'blue'
  header2.addEventListener('mouseenter', function () {
    header2.style.backgroundColor = 'green'
  })
})