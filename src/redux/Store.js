export let DownloadImages = async () => {
    let Flickr = require('flickr-sdk');
    let photos = [];
    let api_key = "a589d60fef250c0f9b3afe3903985a3c";
    let f = new Flickr(api_key);
    await f.photos.search({
        text: 'dog',
        per_page: 10,
        sort: 'interestingness-desc'
    }).then(function (res) {
        console.log('yay!', res.body.photos.photo);
        photos = res.body.photos.photo;
        console.log(photos);
    }).catch(function (err) {
        console.error('bonk', err);
    });

    return photos;
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
    },
    _callSubscriber(state)  {
        return alert('State changed!');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case 'rerender':
                this._callSubscriber(store.state);
        }

    }
};

export default store;
window.store = store;
