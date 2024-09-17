const misProductos = [
    { id: "1", nombre: "PlayStation 4", stock: 10, precio: 100000, img: "../img/play4Negro.png", idCat: "PlayStation" },
    { id: "2", nombre: "PlayStation 4 Blue", stock: 5, precio: 150000, img: "../img/Play4Blue.jpeg", idCat:"PlayStation" },
    { id: "3", nombre: "Nintendo Switch ", stock: 12, precio: 250000, img: "../img/switchZelda.webp", idCat:"Nintendo" },
    { id: "4", nombre: "XboxOne", stock: 5, precio: 300000, img: "../img/xboxone.jpg", idCat:"Xbox" }, 
  
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