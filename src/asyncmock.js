const misProductos = [
    { id: "1", nombre: "PlayStation 4", stock: 10, precio: 100000, img: "../img/play4Negro.png", idCat: "PlayStation" },
    { id: "2", nombre: "PlayStation 4 Blue", stock: 5, precio: 150000, img: "../img/play4blue.png", idCat:"PlayStation" },
    { id: "3", nombre: "PlayStation 5", stock: 5, precio: 3000000, img: "../img/Play5.png", idCat:"PlayStation" },
    { id: "4", nombre: "XboxOne", stock: 5, precio: 320000, img: "../img/XboxOne.png", idCat:"Xbox" }, 
    { id: "5", nombre: "XboxS", stock: 5, precio: 300000, img: "../img/XboxS.png", idCat:"Xbox" }, 
    { id: "6", nombre: "Xbox Edicion Especial", stock: 5, precio: 350000, img: "../img/xboxedition.jpeg", idCat:"Xbox" }, 
    { id: "7", nombre: "Nintendo Switch Zelda", stock: 3, precio: 250000, img: "../img/switchZelda.webp", idCat:"Nintendo" },
    { id: "8", nombre: "Nintendo Switch ", stock: 20, precio: 250000, img: "../img/nintendoSwitch.webp", idCat:"Nintendo" },
    { id: "9", nombre: "Nintendo Switch Fortnite ", stock: 8, precio: 150000, img: "../img/fortnite.jpg", idCat:"Nintendo" },

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