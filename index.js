const button = document.querySelector('.button');

function writeName() {
    let nameInput = document.querySelector('.name-input').value;
    let nameResult = nameInput[0].toUpperCase() + nameInput.slice(1).toLowerCase();

    (document.getElementById('no').checked) ? document.querySelector('.name-result').innerHTML = 'username': document.querySelector('.name-result').innerHTML = nameResult;
}
button.addEventListener('click', writeName);

function postAvatar() {
    let avatarInput = document.querySelector('.avatar-input').value;

    if (avatarInput) {
        document.querySelector('.avatar-result').src = avatarInput;
        avatarResult.alt = 'avatar';
    } else {
        const img1 = "https://static.wikia.nocookie.net/wikiprogubku/images/8/84/%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%BA.png/revision/latest?cb=20200729121528&path-prefix=ru"

        const img2 = "https://img.kupigolos.ru/hero/5cdafe4c30ac5.png?p=bh&s=13a8cd7af352f92aa8770693dc868667"

        const img3 = "https://upload.wikimedia.org/wikipedia/ru/thumb/2/23/Skvidvard.png/159px-Skvidvard.png"

        const img4 = "https://upload.wikimedia.org/wikipedia/ru/9/95/MrKrabs_Art_SB.png"

        const img5 = "https://upload.wikimedia.org/wikipedia/ru/9/97/%D0%A1%D1%8D%D0%BD%D0%B4%D0%B8_%D0%A7%D0%B8%D0%BA%D1%81.jpg"

        const img6 = "https://upload.wikimedia.org/wikipedia/ru/6/68/%D0%A8%D0%B5%D0%BB%D0%B4%D0%BE%D0%BD_%D0%9F%D0%BB%D0%B0%D0%BD%D0%BA%D1%82%D0%BE%D0%BD.jpg"

        Array.prototype.randomItem = function () {
            return this[Math.floor(Math.random() * this.length)];
        }

        const images = [img1, img2, img3, img4, img5, img6];

        let randomLink = images.randomItem();

        document.querySelector('.avatar-result').src = randomLink;
    }
}
button.addEventListener('click', postAvatar);

function postComment() {
    let commentInput = document.querySelector('.comment-input').value.replace(/viagra/gi, "***").replace(/xxx/gi, "***");
    let commentResult = document.querySelector('.comment-result').innerHTML = commentInput;
}
button.addEventListener('click', postComment);

function postDate() {
    let date = new Date();
    let today = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    document.querySelector('.info-date__date').innerHTML = today;
}
button.addEventListener('click', postDate);