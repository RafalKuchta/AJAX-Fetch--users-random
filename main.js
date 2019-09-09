const getUsers = (e) => {
    e.preventDefault();


    const usersNumber = document.querySelector('[name = "users-number"]').value;
    const usersGender = document.querySelector('[name = "gender"]').value;
    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,famale" : usersGender}`;

    console.log(url)
    fetch(url)
        .then((response) => {
            // console.log(response)
            if (response.status !== 200) {
                throw Error("To ne jest odpowiedź 200")
            } else {
                return response.json()
            }
        })
        .then(json => showUsers(json.results))

        .catch(err => console.log(`błąd ${err}`))
}

const showUsers = (users) => {
    const resultAres = document.querySelector('.user-list');
    resultAres.textContent = "";
    users.forEach(user => {
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
       
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
        <img class="user__img" src=${user.picture.medium}>
        `
        resultAres.appendChild(item)
    });
}
document.querySelector('.generator').addEventListener('submit', getUsers);