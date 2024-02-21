const navbar = document.querySelector(`#navbar`)
const body = document.querySelector(`body`)
const appItem = document.querySelector('[item]')
const viewApp = document.querySelector('.viewApp')
const viewAppContent = document.querySelector('.viewAppContent')
const searchUserBar = document.querySelector('[searchUserBar]')
const searchImgBar = document.querySelector('[searchImgBar]')
const searchUserBtn = document.querySelector('[searchUser]')
const searchImgBtn = document.querySelector('[searchImg]')

let orderByValue = '';

// values
API_KEY = "zm65fG3jRhwoa7-G_Lw6p3mzcrTP7pjt7LNpQWk7KCM"
apiUrl = "https://api.unsplash.com/photos/?client_id="+API_KEY+"&per_page=30";
searchUrl = "https://api.unsplash.com/search/photos/?client_id="+API_KEY+"&query=";

let handleError = function(err) {
    console.warn(err);
    viewAppContent.innerHTML = "<h4>Unable to fetch data"+err+"</h4>";
    return;
}

const UnsplashAPI = async () => {

    let tempUrl = apiUrl;
    if(orderByValue != ''){
        tempUrl += ('&order_by='+orderByValue)
    }

    const response = await (fetch(apiUrl).catch(handleError))
    const myJson = await response.json();

    let imageArrays = myJson;

    imageArrays.forEach(element => {
        const img = document.createElement('img')
        const anchor = document.createElement('a')
        const item = document.createElement('div')
        
        img.innerHTML = `Likes = ${element.likes}`;
        img.setAttribute('src', element.urls.thumb)
        item.innerHTML = `<span><a href="${element.user.links.html}" target="_blank">${element.user.username}</a></span>`
        anchor.href = element.links.html;
        anchor.target = '_blank'
        anchor.appendChild(img)
        item.classList.add('masonry-item')
        item.appendChild(anchor)
        viewAppContent.appendChild(item)

    });
}
window.addEventListener(`DOMContentLoaded`, UnsplashAPI())




    
//     displayImage();
// }



// function displayImage() {
//     viewAppContent.innerHTML = '';
//     if(imageURLS.length == 0) {
//         viewAppContent.innerHTML = "<h4>Unable to fetch data.</h4>"
//     }
// }
const clean = () => {
    return new Promise((resolve, reject) =>{
        viewApp.innerHTML = '';
    }
    )
    }

const UnsplashAPIClean = async () => {
   
await clean();
    UnsplashAPI();
}