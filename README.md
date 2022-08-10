# Resolución de prueba técnica

## Pasos para el despliegue de manera local

    1. Clonar el proyecto.
    2. Abrir una terminal y navegar hasta la raíz del proyecto.
    3. Ejecutar "npm i" en la terminal.
    4. Ejecutar "npm run dev"

## Ejercicios extra

#### Resolución ejercicio 1
```js
    const sum = (numbersArray) => {
        let result = 0;
        numbersArray.forEach(number => {
            if(number % 2 == 0 && number > 20){
                result += 20;
                return;
            }
            result += number;
        })
        const actionFn = (action) => {
            return (action(result));
        }
        return actionFn;
    }
```

#### Resolución ejercicio 2
```js
    const ListNickNames = ({ names, order }) => {
        const ASC = 'ASC';
        const DESC = 'DESC';

        names = names.filter(name => String(name).trim());
        names.sort((a, b) => {
            a = a.toLocaleLowerCase().trimStart();
            b = b.toLocaleLowerCase().trimStart();
            if (a == b) return 0;
            if (order == ASC) {
                if (a < b) return -1
                return 1;
            } else if (order == DESC) {
                if (a < b) return 1;
                return -1;
            }
        })

        return (
            <>
                {names.map(nick => {
                    return (<ul key={nick}>{nick}</ul>)
                })}
            </>
        )
    }

    export default ListNickNames;
```