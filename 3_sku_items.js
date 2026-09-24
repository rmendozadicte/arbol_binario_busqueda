class NodoProducto{
    constructor(sku,nombre){
        this.sku = sku;
        this.nombre = nombre;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function agregarProducto(nodo,sku,nombre){

    if(nodo === null){
        const nuevoNodo = new NodoProducto(sku,nombre);
        return nuevoNodo;
        //return  new NodoProducto(sku,nombre);
    }
    // Si el sku es menor, va por la rama izquierda
    if(sku < nodo.sku){
        nodo.izquierdo = agregarProducto(nodo.izquierdo, sku,nombre);
    }else if(sku > nodo.sku){
        nodo.derecho = agregarProducto(nodo.derecho, sku, nombre)
    }else{
        console.log(`Error en producto: El SKU ${sku} ya se encuentra registrado`);
    }
    return nodo;
}

function imprimirInventarioVisual(nodo, prefijo = "", esHijoDerecho = true) {
    if (nodo === null) return;

    // Primero procesa la rama derecha (aparece arriba)
    if (nodo.derecho !== null) {
        imprimirInventarioVisual(nodo.derecho, prefijo + (esHijoDerecho ? "│   " : "    "), false);
    }

    // Imprime el SKU y el nombre del producto actual con sus conectores
    console.log(prefijo + (esHijoDerecho ? "└── " : "┌── ") + `[SKU: ${nodo.sku}] - ${nodo.nombre}`);

    // Luego procesa la rama izquierda (aparece abajo)
    if (nodo.izquierdo !== null) {
        imprimirInventarioVisual(nodo.izquierdo, prefijo + (esHijoDerecho ? "    " : "│   "), true);
    }
}

let inventario = null;
inventario = agregarProducto(inventario, 5990, "Laptop HP");
inventario = agregarProducto(inventario, 8546, 'Monitor 14"');
inventario = agregarProducto(inventario, 9584, 'Teclado Gamer');
inventario = agregarProducto(inventario, 2584, 'Mouse Logitech');

imprimirInventarioVisual(inventario);