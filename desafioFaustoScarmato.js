let products = {};

class ProductManager {
    constructor() {
        this.currentId = Object.keys(products).length + 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (stock <= 0 || typeof stock !== 'number') {
            console.log('Ingrese un número válido');
            return '';
        }

        for (const productId in products) {
            if (products[productId]['code'] === code) {
                console.log('No repetir codigo');
                return '';
            }
        }

        let thisItem = {};

        thisItem.id = this.currentId;
        thisItem.title = title;
        thisItem.description = description;
        thisItem.price = price;
        thisItem.thumbnail = thumbnail;
        thisItem.code = code;
        thisItem.stock = stock;

        products[thisItem.id] = thisItem;

        console.log(`El producto con ID ${thisItem.id} ha sido añadido exitosamente`);
    }

    getProducts() {
        if (Object.keys(products).length > 0) {
            return products;
        } else {
            console.log('Ningún producto encontrado');
            return '';
        }
    }

    getProductById(id = null) {
        if (products[id] === undefined) {
            console.log(`No hay producto con el código ${id}`);
            return '';
        } else {
            return products[id];
        }
    }
}

const product1 = new ProductManager();
product1.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc001', 25);

const product2 = new ProductManager();
product2.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc002', 25);

// da error por repetir code
const product3 = new ProductManager();
product3.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc001', 25);

const product4 = new ProductManager();
product3.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc003', 25);

// prueba del getProductById
console.log(product1.getProductById(5));
console.log(product1.getProductById(1));
