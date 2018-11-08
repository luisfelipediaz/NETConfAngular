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

## Primer paso, creemos el componente board

Corramos  `ng generate component board` para generar el componente donde estará alojado nuestro tablero de tareas.

## Configurando el routing

Para configurar el componente de board como una nueva ruta en la aplicación, vamos al archivo `app-routing.module.ts` y allí encontramos una linea de código similar a esta `const routes: Routes = [];` modifiquemosla de tal manera que quede:

```typescript
    const routes: Routes = [
        {
            path: 'board',
            component: BoardComponent
        }
    ];
```

para que esta configuración funcione correctamente es necesario agregar el import `import { BoardComponent } from './board/board.component';`

### Como creé este proyecto?

- Primero instalamos Angular CLI: `npm install -g @angular/cli`
- Creamos el proyecto: `ng new NETConfAngular --routing --style scss`
- Instalamos Bootstrap (opcional): `npm install bootstrap --save`