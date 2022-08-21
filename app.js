const form = document.querySelector('#form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.search.value;
    const params = { q: searchTerm };
    try {
        const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(params.q)}`;
        const res = await fetch(apiUrl);
        const jsonRes = await res.json();
        displayPics(jsonRes)
        form.elements.search.value = '';
        return jsonRes;

    } catch (e) {
        console.log('Oh Nooooooooooooo!', e)
    }
})



const displayPics = (shows) => {
    for (let show of shows) {
        const img = document.createElement('IMG');
        img.src = show.show.image.medium;
        document.body.append(img);
    }


}