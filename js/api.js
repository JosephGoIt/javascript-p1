const BASE_URL = "https://65f2d1ae105614e6549efd32.mockapi.io/todos";

//GET ALL TODOS
export const getTodos = () => {
    return fetch(BASE_URL).then((res) => res.json());
}
//ADD

//DELETE

//UPDATE