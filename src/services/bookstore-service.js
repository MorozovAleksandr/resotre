// Наш сервис

export default class BookStoreService {

    data = [
        {
            id: 1,
            title: 'HarryPotter',
            author: 'A.M.',
            price: 32,
            coverImage: 'https://cdn21vek.by/img/galleries/1021/360/mahaon_04_5d49589faa8d0.jpeg'
        },
        {
            id: 2,
            title: 'Над пропостю по ржи',
            author: 'A.V.',
            price: 21,
            coverImage: 'https://cdn.eksmo.ru/v2/ITD000000000287863/COVER/cover1__w820.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happend'));
                }
                resolve(this.data)
            }, 800)
        })
    }
}