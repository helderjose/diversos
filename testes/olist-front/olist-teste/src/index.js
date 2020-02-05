
document.querySelector('#createAccount').addEventListener('click', createAccount)

function isFormValid() {
  let name = document.querySelector('#name').value;
  console.log(name)
}

function createAccount() {
  isFormValid()
}