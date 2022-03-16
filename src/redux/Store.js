const RERENDER = 'RERENDER';

export let DownloadImages = async (searchText) => {
    let Flickr = require('flickr-sdk');
    let photos = [];
    let api_key = "5d5c001614ac51c3b054848859942220";
    let f = new Flickr(api_key);

    await f.photos.search({
        // text: 'dog',
        text: searchText,
        per_page: 10,
        sort: 'interestingness-desc'
    }).then(function (res) {
        console.log('yay!', res.body.photos.photo);
        photos = res.body.photos.photo;
        console.log(photos);
    }).catch(function (err) {
        console.error('bonk', err);
    });

    // f.photos.search({
    //     text: 'dog',
    //     per_page: 10,
    //     sort: 'interestingness-desc'
    // }).then( async res => {
    //         debugger;
    //         photos = await res.body.photos.photo;
    //         console.log(photos);
    // });
    // debugger;
    //
    // let promise = f.photos.search({
    //     text: 'dog',
    //     per_page: 10,
    //     sort: 'interestingness-desc'
    // }).then(async function (res) {
    //         console.log('yay!', res.body.photos.photo);
    //         photos = await res.body.photos.photo;
    //         console.log(photos);
    // }).catch(function (err) {
    //         console.error('bonk', err);
    // });
    //
    // let res = await promise;
    //debugger;


    return photos;
};

let store = {
    _state : {
        images: {
            'photo-0': {id: 'photo-0', source: '', tag:''},
            'photo-1': {id: 'photo-1', source: '', tag:''},
            'photo-2': {id: 'photo-2', source: '', tag:''},
            'photo-3': {id: 'photo-3', source: '', tag:''},
            'photo-4': {id: 'photo-4', source: '', tag:''},
            'photo-5': {id: 'photo-5', source: '', tag:''},
            'photo-6': {id: 'photo-6', source: '', tag:''},
            'photo-7': {id: 'photo-7', source: '', tag:''},
            'photo-8': {id: 'photo-8', source: '', tag:''},
            'photo-9': {id: 'photo-9', source: '', tag:''}
        },
        firstKeyWord: 'cat',
        secondKeyWord:'dog',
        searchText:'',
        // images: {
        //     'photo-0': {id: 'photo-0', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-1': {id: 'photo-1', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-2': {id: 'photo-2', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-3': {id: 'photo-3', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-4': {id: 'photo-4', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-5': {id: 'photo-5', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-6': {id: 'photo-6', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-7': {id: 'photo-7', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-8': {id: 'photo-8', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     'photo-9': {id: 'photo-9', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'}
        // },
        // images: [
        //     {id: 'photo-0', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-1', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-2', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-3', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-4', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-5', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-6', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-7', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-8', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'},
        //     {id: 'photo-9', source: 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'}
        // ],
        columns: {
            'imagesArea': {
                id: 'imagesArea',
                //ImgIds: ['photo-0','photo-1']
                ImgIds: ['photo-0','photo-1','photo-2','photo-3','photo-4','photo-5','photo-6','photo-7','photo-8','photo-9']
            },
            'sortingArea1': {
                id: 'sortingArea',
                ImgIds: []
            },
            'sortingArea2': {
                id: 'sortingArea',
                ImgIds: []
            }
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
                break;
            case 'UPDATE_SEARCH_TEXT':
                this.state.searchText = action.newText;
                this._callSubscriber(store.state);
                //console.log(this.state.searchText);
                break;
        }

    }
};

export default store;
window.store = store;
