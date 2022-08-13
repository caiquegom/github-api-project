const button = document.querySelector("button");
const input = document.querySelector("input");
const card = document.querySelector('section');

const userInfo = {
    avatar: document.getElementById('avatar'),
    name: document.getElementById('name'),
    bio: document.getElementById("bio"),
    followers: document.getElementById("followers"),
    following: document.getElementById("following"),
    company: document.getElementById("company"),
    location: document.getElementById("location")
}

const icons = {

}

let apiURL = 'https://api.github.com/users/'

const showCard = () => {
    card.style.display = 'inline-block';
}

const createUserURL = username => apiURL + username;

const verifyCompanyAndLocation = (userInfo, user) => {
    userInfo.company.style.display = user.company === null ? 'none' : 'list-item';
    userInfo.location.style.display = user.location === null ? 'none' : 'list-item';
}

const returnUser = () => {
    const userURL = createUserURL(input.value);

    fetch(userURL)
        .then(response => response.json())
        .then(user => {
            verifyCompanyAndLocation(userInfo, user);
            console.log(user.company, user.location)
            userInfo.avatar.src = user.avatar_url;
            userInfo.name.innerHTML = user.name;
            userInfo.bio.innerHTML = user.bio;
            userInfo.followers.innerHTML = `<i class="fa fa-user-group"></i> <br> ${user.followers} seguidores`;
            userInfo.following.innerHTML = `<i class="fa fa-user-group"></i> <br> ${user.following} seguindo`;
            userInfo.company.innerHTML = `<i class="fa fa-building"></i> <br> ${user.company}`;
            userInfo.location.innerHTML = `<i class="fa fa-location-dot"></i> <br> ${user.location}`;
        })
}

const showUser = () => {
    returnUser();
    showCard()
}

button.addEventListener('click', showUser);

