async function my_async_fn(url) {
    let response = await fetch(url);
    //console.log(response.text()); // Logs the response
    return response.text();
}

export let DownloadImages = async () => {
    let Flickr = require('flickr-sdk');
    // let path = 'https://www.flickr.com/services/rest/?format=json&api_key=a589d60fef250c0f9b3afe3903985a3c&method=flickr.photos.search&per_page=10&text=cat&sort=interestingness-desc';
    // let data = my_async_fn(path);
    // console.log(data);
    let photos = [];
    let api_key = "a589d60fef250c0f9b3afe3903985a3c";
    let f = new Flickr(api_key);
    //debugger;
    await f.photos.search({
        text: 'cat',
        per_page: 10
    }).then(function (res) {
        console.log('yay!', res.body.photos.photo);
        photos = res.body.photos.photo;
        console.log(photos);
        //debugger;
        // return photos;
    }).catch(function (err) {
        console.error('bonk', err);
    });

    return photos;

    // let stringToCut = 'jsonFlickrApi(';
    // let photos = JSON.parse(data.slice(stringToCut.length,data.length-1)).photos.photo;
    // console.log(photos);
    // let userPromise = fetch(path);
    // debugger;
    // userPromise
    //     .then(data => data.text())
    //     // Сделать проверку на ошибки
    //     .then(data => {
    //       let stringToCut = 'jsonFlickrApi(';
    //       let photos = JSON.parse(data.slice(stringToCut.length,data.length-1)).photos.photo;
    //       console.log(photos);
    //       return photos;
    //       // for (let i = 0; i < photos.length; i++) {
    //       //   let image = document.createElement('img');
    //       //   let route = 'https://live.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_' + photos[i].secret + '.jpg';
    //       //   image.setAttribute('src', route);
    //       //   let container = document.getElementById('container');
    //       //   container.appendChild(image);
    //       // }
};

let store = {
    _state : {
        mainPage: {
            images: [
                {id: 0, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 1, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 2, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 3, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 4, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 5, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 6, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 7, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 8, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
                {id: 9, source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'}
            ]
        }
    },
    get state() {
       return this._state;
    }

};

export default store;
window.store = store;
