// Clase Nodo
class NodoABB{
    constructor(valor){
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

//Funcion para agregar nodos con su respectivo valor
function insertarABB(nodo,valor){

    if(nodo === null){
        const nodo_ABB = new NodoABB(valor);
        return nodo_ABB;
    }

    //Evaluamos si el valor menor, agregamos a la izquierda
    if(valor < nodo.valor){
        nodo.izquierdo = insertarABB(nodo.izquierdo,valor);

    //Evaluamos si el valor mayor, agregamos a la derecha    
    } else if(valor > nodo.valor){
        nodo.derecho = insertarABB(nodo.derecho,valor);
    
    // Si se repite el valor, lo ignoramos
    } else{
        console.log(`Aviso: El valor ${valor} ya existe - Ignorado`);
    }

    return nodo;
}

// Funcion de imprimir el arbol de una mejor manera
function imprimirArbolVisual(nodo, prefijo = "", esHijoDerecho = true) {
    if (nodo === null) return;

    // Primero procesamos la rama derecha (aparecerá arriba en la consola)
    if (nodo.derecho !== null) {
        imprimirArbolVisual(nodo.derecho, prefijo + (esHijoDerecho ? "│   " : "    "), false);
    }

    // Imprimimos el nodo actual con líneas conectoras
    console.log(prefijo + (esHijoDerecho ? "└── " : "┌── ") + nodo.valor);

    // Luego procesamos la rama izquierda (aparecerá abajo en la consola)
    if (nodo.izquierdo !== null) {
        imprimirArbolVisual(nodo.izquierdo, prefijo + (esHijoDerecho ? "    " : "│   "), true);
    }
}

/*
let arbol = null;
arbol = insertarABB(arbol,5);
arbol = insertarABB(arbol,4);
arbol = insertarABB(arbol,8);
arbol = insertarABB(arbol,7);
arbol = insertarABB(arbol,1);
arbol = insertarABB(arbol,55);

imprimirArbolVisual(arbol);
*/

let arbol = null;
const valores = [5,4,8,15,55,7,1,44,33,12,34,5,7,8,10,24,14,1,2];

valores.forEach( (numero) => {
    //console.log(`En el posición [${index+1}] el valor es ${numero}`);    
    arbol = insertarABB(arbol,numero);
    //imprimirArbolVisual(arbol);
}
);

//valores.forEach( valor => arbol = insertarABB(arbol,valor) );
imprimirArbolVisual(arbol);