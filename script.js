const linksSocialMedia = {
    github: 'gabrielucas',
    youtube: 'channel/UCVgGMVUJwHFKtuK9WSYwzig',
    facebook: 'gabrielviana28',
    instagram: 'lucas.gabl',
    twitter: ''
}

const changeSocialMediaLinks = () => {

    for (let li of listItems.children) {

        /* get class name of DOM element */
        let nameSocialMedia = li.getAttribute('class')

        /* pega o atributo href do primeiro elemento filho do '<li></li>' (<a></a>) e altera, dinamicamente, 
        o endereço através do noma da classe e do objeto linksSocialMedia */

        li.children[0].href = `https://www.${nameSocialMedia}.com/${linksSocialMedia[nameSocialMedia]}`

    }

}

const getInfoProfile = () => {

    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(res => res.json())
        .then(dataJSON => {
            username.textContent = dataJSON.name
            description.textContent = dataJSON.bio
            document.getElementById('url').href = dataJSON.html_url
            photo.src = dataJSON.avatar_url
            login.textContent = dataJSON.login
        })

}

changeSocialMediaLinks();
getInfoProfile();