const endpoint = "http://localhost:3000"
const signupURL = `${endpoint}/users`
const loginURL = `${endpoint}/login`
const validateURL = `${endpoint}/validate`
const polaroidsUrl = `${endpoint}/polaroids`

const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        throw res.json()
}

const handleServerError = response => {
    console.error(response)
    throw response
}

const saveToken = data => {
    localStorage.setItem('token', data.token)
    return data.user
}

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)

const logIn = (user) => fetch(loginURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)

// const updateUser = (user) => {
//    return fetch(signupURL + `/${user.id}`, {
//     method: 'PATCH',
//     headers: constructHeaders({
//         'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify({user})
// }).then(jsonify)
// .catch(handleServerError)
// }

// const deleteUser = id => {
//   return fetch(signupURL + `/${id}`, {
//     method: "DELETE",
//     headers: constructHeaders({
//         'Content-Type': 'application/json'
//     }),
//   });
// }

const validateUser = () => {
    if (!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })

    return fetch(validateURL, {
        headers: constructHeaders()
    }).then(jsonify)
        .then(saveToken)
        .catch(handleServerError)
}

const clearToken = () => localStorage.removeItem('token')

const getPolaroids = () => fetch(polaroidsUrl).then(jsonify)

const createPolaroid = (polaroid, userId) => {
    const formData = new FormData();
    formData.append('photo', polaroid);
    formData.append('user_id', userId)
    return fetch(polaroidsUrl, {
     method: 'POST',
     body: formData
 }).then(jsonify) 
 .catch(handleServerError)
 }

export default {
    signUp,
    logIn,
    validateUser,
    clearToken,
    getPolaroids,
    createPolaroid
    // updateUser,
    // deleteUser
}