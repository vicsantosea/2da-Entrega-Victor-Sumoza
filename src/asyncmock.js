const misProductos = [
    { id: "1", nombre: "PlayStation 4", stock: 10, precio: 10000, img: "../img/play4Negro.png", idCat: "PlayStation" },
    { id: "2", nombre: "PlayStation 4 Blue", stock: 12, precio: 200, img: "../img/Play4Blue.jpeg", idCat:"PlayStation" },
    { id: "2", nombre: "PlayStation 5", stock: 12, precio: 200, img: "../img/play5.jpg", idCat:"PlayStation" },
    { id: "3", nombre: "Arroz", stock: 5, precio: 300, img: "../img/arroz.jpg", idCat:"almacen" }, 
    { id: "4", nombre: "Aceite", stock: 7, precio: 900, img: "../img/aceite.jpg", idCat:"almacen" },
    { id: "4", nombre: "Aceite", stock: 7, precio: 900, img: "../img/aceite.jpg", idCat:"almacen" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}



export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}