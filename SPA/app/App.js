// Vamos a llmar a todos los componenetes o helpers para renderizar el html

import { ConteinerMenu } from "./components/ConteinerMenu.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { PostCard } from "./components/PostCard.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";
import { Ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";




export function App(){

    const $root = document.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(ConteinerMenu());
    $root.appendChild(Main());
    $root.appendChild(Posts());

// me permite ver la informacion de la api (segun el endpoint que le ponga)
    Ajax({
        url: api.POSTS,
        cbSuccess: (posts) =>{
            console.log(posts);
        }
    });

    Ajax({
        url: api.POSTS,
        cbSuccess: (posts) =>{
            console.log(posts);
            let html = "";
            posts.forEach(post => html += PostCard(post));
            document.getElementById("posts").innerHTML = html;
    
        }
    });

    // Nos muestra todos los endpoints de la api
    console.log(api);

    // $root.appendChild(Router());
    
}