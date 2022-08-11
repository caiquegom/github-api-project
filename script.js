const button = document.querySelector("button");
const input = document.querySelector("input");
let apiURL = 'https://api.github.com/users/'

const createUserURL = username => apiURL + username;

const returnUser = () => {
    const userURL = createUserURL(input.value);

    fetch(userURL)
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
}

const searchUser = () => {
    returnUser();
}

button.addEventListener('click', searchUser);