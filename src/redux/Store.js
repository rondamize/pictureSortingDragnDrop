export let DownloadImages = async (searchText) => {
    let Flickr = require('flickr-sdk');
    let photos = [];
    let api_key = "5d5c001614ac51c3b054848859942220";
    let f = new Flickr(api_key);

    await f.photos.search({
        text: searchText,
        per_page: 5,
        page: Math.round(Math.random() * 101),
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
        images: {
            'keyWord-0': {
                'k-0-photo-0': {id: 'k-0-photo-0', source: '', tag:''},
                'k-0-photo-1': {id: 'k-0-photo-1', source: '', tag:''},
                'k-0-photo-2': {id: 'k-0-photo-2', source: '', tag:''},
                'k-0-photo-3': {id: 'k-0-photo-3', source: '', tag:''},
                'k-0-photo-4': {id: 'k-0-photo-4', source: '', tag:''}
            },
            'keyWord-1': {
                'k-1-photo-0': {id: 'k-1-photo-0', source: '', tag:''},
                'k-1-photo-1': {id: 'k-1-photo-1', source: '', tag:''},
                'k-1-photo-2': {id: 'k-1-photo-2', source: '', tag:''},
                'k-1-photo-3': {id: 'k-1-photo-3', source: '', tag:''},
                'k-1-photo-4': {id: 'k-1-photo-4', source: '', tag:''}
            }
        },
        userMessage:'',
        searchText:'',
        displaySortedPhotos: {
            displaySortedPhotos0: false,
            displaySortedPhotos1: false
        },
        columns: {
            'imagesArea': {
                id: 'imagesArea',
                ImgIds: ['k-0-photo-0','k-0-photo-1','k-0-photo-2','k-0-photo-3','k-0-photo-4',
                         'k-1-photo-0','k-1-photo-1','k-1-photo-2','k-1-photo-3','k-1-photo-4']
            },
            'sortingArea0': {
                id: 'sortingArea0',
                tag: '',
                ImgIds: []
            },
            'sortingArea1': {
                id: 'sortingArea1',
                tag: '',
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
                break;
            case 'CLEAR_PAGE':
                this.state.images = {
                    'keyWord-0': {
                        'k-0-photo-0': {id: 'k-0-photo-0', source: '', tag:''},
                        'k-0-photo-1': {id: 'k-0-photo-1', source: '', tag:''},
                        'k-0-photo-2': {id: 'k-0-photo-2', source: '', tag:''},
                        'k-0-photo-3': {id: 'k-0-photo-3', source: '', tag:''},
                        'k-0-photo-4': {id: 'k-0-photo-4', source: '', tag:''}
                    },
                    'keyWord-1': {
                        'k-1-photo-0': {id: 'k-1-photo-0', source: '', tag:''},
                        'k-1-photo-1': {id: 'k-1-photo-1', source: '', tag:''},
                        'k-1-photo-2': {id: 'k-1-photo-2', source: '', tag:''},
                        'k-1-photo-3': {id: 'k-1-photo-3', source: '', tag:''},
                        'k-1-photo-4': {id: 'k-1-photo-4', source: '', tag:''}
                    }};
                this.state.columns = {
                    'imagesArea': {
                        id: 'imagesArea',
                        ImgIds: ['k-0-photo-0','k-0-photo-1','k-0-photo-2','k-0-photo-3','k-0-photo-4',
                            'k-1-photo-0','k-1-photo-1','k-1-photo-2','k-1-photo-3','k-1-photo-4']
                    },
                    'sortingArea0': {
                        id: 'sortingArea0',
                        tag: '',
                        ImgIds: []
                    },
                    'sortingArea1': {
                        id: 'sortingArea1',
                        tag: '',
                        ImgIds: []
                    }
                };
                this.state.userMessage = '';
                this.displaySortedPhotos =  {
                    displaySortedPhotos0: false,
                    displaySortedPhotos1: false
                }
                this._callSubscriber(store.state);
                break;
        }

    }
};

export default store;
window.store = store;
