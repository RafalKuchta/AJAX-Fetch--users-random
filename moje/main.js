const getUsers = (e) => {
    e.preventDefault();
    const genderUsers = document.querySelector('.generator__select').value;
    const numbersUsers = document.querySelector('.generator__input').value;

    const url = `https://randomuser.me/api/?results=${numbersUsers}&gender=${genderUsers}`;
    // const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,famale" : usersGender}`;

    // console.log(genderUsers, numbersUsers, url)

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                return console.log("Error Error!!! status nie 200!")
            } else {
                return response.json()
            }

        })
        .then(json => showUsers(json.results))

        .catch(err => console.log(`Błąd: ${err}`))

    const showUsers = (users) => {
        console.log(users)
        const resultArea = document.querySelector('.user-list');
        resultArea.textContent = "";
        users.forEach(user => {
            const item = document.createElement('div')
            item.className = 'user';
            item.innerHTML = `
            <img class="user-img" src=${user.picture.medium}>
            <div class="user-name">${user.name.title} ${user.name.first} ${user.name.last}</div>
            `
            resultArea.appendChild(item)
        })

    }
}




document.querySelector('.generator').addEventListener('submit', getUsers);