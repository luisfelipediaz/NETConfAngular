# NETConfAngular

Este proyecto es una aplicacion de TODO List, el front-end esta desarrollado en Angular y el back-end esta desarrolada en .NET Core Web API

## Generalidades

- Debe tener 3 columnas:
    1. TODO
    2. WIP
    3. DONE

- El modelo de datos será:
    `name: string`
    `description: string`
    `dateTo: Date`

- Las tareas deben poderse cambiar de estado.
- Las tareas deben estar de color verde si la fecha de entrega es mayor a dos dias de la fecha actual, en amarillo cuando está a menos o igual de dos días y en rojo si se pasó la fecha de entrega.​
- Debe conectarse al API desarrollado en paralelo.

## Continuemos

Creemos 3 columnas en el componente board, entremos al archivo `board.component.html` y escribamos este código:

```html
<div class="row justify-content-md-center">
  <div class="col-sm-10 col-12">
    <div class="row board">
      <div class="col-4 text-center">
        <h2>TODO</h2>
      </div>
      <div class="col-4 text-center">
        <h2>WIP</h2>
      </div>
      <div class="col-4 text-center">
        <h2>DONE</h2>
      </div>
    </div>
  </div>
</div>
```

Agreguemos algo de estilos, en el archivo `board.component.scss`:

```scss
.row {
    height: 100%;
    .justify-content-md-center {
        padding-top: 12px;
        padding-bottom: 12px;
    }
}

.board {
    border: 2px lightgray solid;
    border-radius: 2px;
}

.col-4:not(:nth-child(3)) {
    border-right: 2px solid gray;
}

h2 {
    border-bottom: 2px solid gray;
}
````

El el archivo `style.scss`:

```scss
html, body {
    height: 100%;
}
```