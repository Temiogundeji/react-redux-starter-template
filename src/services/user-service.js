const user = require("../../../models/user");

export const userService = {
    login,
    logout,
    getAll,
    getById,
    signup,
    update,
    delete: _delete
};


const login = ( username, password ) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('http://localhost:8000/users/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
};

const logout = () => {
    localStorage.removeItem('item');
}

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('https://localhost:8000/users', requestOptions)
        .then(handleResponse);
}

const getById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/users/${id}`, requestOptions)
        .then(handleResponse);
}

const signup = (user) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('http://localhost:8000/users/register', requestOptions)
        .then(handleResponse);

}

const update = (user) => {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`http://localhost:8000/users/${user.id}`, requestOptions)
        .then(handleResponse);
}

const _delete = (id) => {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`http://localhost:8000/users/${id}`, requestOptions)
}

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok) {
            if(response.status === 401){
                //logout if 401 response is returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}