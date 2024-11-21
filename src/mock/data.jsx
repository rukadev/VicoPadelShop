const productos = [
    {
        id: '1',
        nombre: 'HACK 03 COMFORT 23',
        precio: 38000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-1.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '2',
        nombre: 'HACK 03 23',
        precio: 55000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-2.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '3',
        nombre: 'VERTEX 03 CTR 23',
        precio: 35000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-3.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '4',
        nombre: 'VERTEX 03 23',
        precio: 50000,
        marca: 'bullpadel',
        stock: 5,
        img: '/paleta-4.png',
        categoria: 'nuevos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '5',
        nombre: 'PRO LIGTH WOMAN',
        precio: 15000,
        marca: 'royal padel',
        stock: 5,
        img: '/paleta-5.png',
        categoria: 'ofertas',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '6',
        nombre: 'EUROPE MASTER PRO',
        precio: 28000,
        marca: 'royal padel',
        stock: 5,
        img: '/paleta-6.png',
        categoria: 'ofertas',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '7',
        nombre: 'ML10 PRO',
        precio: 45000,
        marca: 'nox',
        stock: 5,
        img: '/paleta-7.png',
        categoria: 'ofertas',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '8',
        nombre: 'AMERICA VS EUROPA',
        precio: 44000,
        marca: 'nox',
        stock: 5,
        img: '/paleta-8.png',
        categoria: 'ofertas',
        descrpcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '9',
        nombre: 'AIR VIPER',
        precio: 40000,
        marca: 'babolat',
        stock: 5,
        img: '/paleta-9.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '10',
        nombre: 'METALBONE HRD',
        precio: 38000,
        marca: 'adidas',
        stock: 5,
        img: '/paleta-10.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '11',
        nombre: 'MATCH 3.1',
        precio: 17000,
        marca: 'adidas',
        stock: 5,
        img: '/paleta-11.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
    {
        id: '12',
        nombre: 'DRIVE LIGTH 3.1',
        precio: 9000,
        marca: 'adidas',
        stock: 5,
        img: '/paleta-12.png',
        categoria: 'mas vendidos',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis alias nihil consequatur accusantium aliquid accusamus animi, laborum totam quibusdam in minima tempora, repudiandae facilis cupiditate? Quas perspiciatis ex dolorem at.'
    },
]

export const getProducts = () => {
    let error = false
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (error) {
                rej('Hubo un error, intente mas tarde')
            } else {
                res(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!error) {
                let product = productos.find((item) => item.id === id)
                res(product)
            } else {
                rej('No hay datos')
            }
        }, 2000)
    })
}
