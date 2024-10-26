import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
    const person = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    };

    return new Response(JSON.stringify(person), {
        status: 200,
        headers: {
            'content-type': 'application/json'
        }
    });
       
};

// Tarea
// Crear el repo de git
// regresar todas las entradas del blog que estan en la collecion 
//api/post listado de postMessageesta en la collecion blog 
//tiene que tomar la coleecion crear el endpoint y retornlao con la infor de las post
//crear carpeta posts y todo se hace denttro la capeta va dentro de api 
