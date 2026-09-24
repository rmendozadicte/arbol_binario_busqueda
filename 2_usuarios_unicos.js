class NodoUsuario{
    constructor(username){
        this.username = username;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function registrarUsuario(nodo, username){

    if(nodo === null){
        const nodoNuevo = new NodoUsuario(username);
        return nodoNuevo;
    }

    if(username < nodo.username){
        nodo.izquierdo = registrarUsuario(nodo.izquierdo,username)
    }
    else if(username > nodo.username){
        nodo.derecho = registrarUsuario(nodo.derecho, username)
    }
    else{
        console.log(`Aviso: El nombre de usuario: ${username} ya existe - Ignorado`)
    }
    // Retorna un nodo
    return nodo;

}

function imprimirArbolVisual(nodo, prefijo = "", esHijoDerecho = true) {
    if (nodo === null) return;

    // Primero procesa la rama derecha (aparece arriba)
    if (nodo.derecho !== null) {
        imprimirArbolVisual(nodo.derecho, prefijo + (esHijoDerecho ? "│   " : "    "), false);
    }

    // Imprime el usuario actual con sus conectores
    console.log(prefijo + (esHijoDerecho ? "└── " : "┌── ") + nodo.username);

    // Luego procesa la rama izquierda (aparece abajo)
    if (nodo.izquierdo !== null) {
        imprimirArbolVisual(nodo.izquierdo, prefijo + (esHijoDerecho ? "    " : "│   "), true);
    }
}


let arbol = null;
arbol = registrarUsuario(arbol,"lperez"); 
arbol = registrarUsuario(arbol,"agarcia"); 
arbol = registrarUsuario(arbol,"rmendoza"); 
arbol = registrarUsuario(arbol,"mvargas");
arbol = registrarUsuario(arbol,"vlopez");
// Duplicado
arbol = registrarUsuario(arbol,"agarcia");
arbol = registrarUsuario(arbol,"zllanos");

imprimirArbolVisual(arbol);