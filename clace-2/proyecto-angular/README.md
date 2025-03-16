## ng new "nombre del proyecto"
## ng new
Nuevo proyecto. Si le damos un nombre entonces crea una carpeta. Si utlizamos el punto, crea el proyecto en la raiz donde estamos posicionados.

## ng create component "nombre del componente"

Crea un nuevo componente dentro de 'src' con su fichero correspondiente.

```js
export class HeaderComponent {
  name = 'Jorge';
  isLoggin = false;

}
```

En el caso de arriba 'name' y 'isloggin' son estados utilizables y modificables desde el template del componente.