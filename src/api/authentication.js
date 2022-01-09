import axios from "axios";
import router from "@/router";

async function connexionUser(email,password){
    return await axios({
        url: 'http://localhost:8888/vuejs/public/index.php/authentication_token',
        data: {
            email:email,
            password:password
        },
        method: 'POST'
    })//username et password proviennent du formulaire
        .then(resp => {
            const token = resp.data.token
            const userData = atob(resp.data.token.split('.')[1]) //on récupère les données de l'utilisateur, par défaut, login, rôles
            console.log(userData);
            localStorage.setItem('user', userData) // store the user in localstorage
            localStorage.setItem('usertoken', token) // store the token in localstorage
            //router.push('/home')
        })
        .catch((err) => {
            console.log(err);
            localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
        }).then(router.push("/"));
}

function deconnexionUser(){
    localStorage.removeItem('user') // remove the user in localstorage
    localStorage.removeItem('usertoken') // remove the token in localstorage
}

async function postHeaders(url){
    await axios.post(url, {
        headers:{
            Authorization: `Bearer` + localStorage.getItem("usertoken"),
        },
    });
}

export{connexionUser,postHeaders, deconnexionUser};