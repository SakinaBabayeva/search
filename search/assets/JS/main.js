const form=document.getElementById("searchform");
const searchinp=document.getElementById("searchinp")
const mydiv=document.querySelector(".mydiv")
const API=("https://api.github.com/users/")


form.addEventListener("submit" ,(e)=>{
    e.preventDefault(),searchuser();
});

searchuser=()=>{
    fetch(API+ searchinp.value)
    .then ((res)=>res.json())
    .then((data)=>{
        renderUser(data);
    });
    renderUser=(data)=>{
        mydiv.innerHTML =""

        const h2=document.createElement("h2");
        h2.textContent=data.login;

        const userImage=document.createElement("img");
        userImage.src=data.avatar_url;

        const follewers=document.createElement("p")
        follewers.textContent=`Followers: ${data.followers}`

        const following=document.createElement("p")
        following.textContent=`Following: ${data.following}`

        mydiv.append (h2, userImage ,follewers,following)
    }
};