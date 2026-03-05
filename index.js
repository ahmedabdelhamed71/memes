const btn = document.querySelector('button');
const input = document.querySelector('input');
const result = document.querySelector('div');

let memes = [];

fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => {
        memes = data.data.memes;
        console.log(memes);
    });

btn.addEventListener('click', function() {
    const n = parseInt(input.value);

    const m = memes[n];

    result.innerHTML = `<h1>${m.name}</h1>
    <img src="${m.url}" width="300">`;
});