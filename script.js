
let preloading = false;


const showPreLoader = () => {
    let preloader = document.getElementById('preloader');
    console.log('showpreloader');
    preloader.style.display = 'block';
    preloading = true;
}

const hidePreLoader = () => {
    let preloader = document.getElementById('preloader');
    console.log('hidepreloader');
    preloader.style.display = 'none';
    preloading = false;
}




const getData = () => {
    // console.log('getData');

    if (!preloading) {
        showPreLoader();
        
        fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {
    
            let body = document.body;
            let hr = document.createElement('hr')
            body.appendChild(hr);
    
            for (let user of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pURL = document.createElement('p');
    
                pId.innerText = `User ID: ${user.id}`
                pName.innerText = `User ID: ${user.name}`
                pURL.innerHTML = `User ID: ${user.website}<br />---------`;
    
               
                body.appendChild(pId);
                body.appendChild(pName);
                body.appendChild(pURL);
    
            }
           
            hidePreLoader();
            console.log(data);
        }) 
    }

}


const scrollToEndOfPage = () => {

// console.log("scrollend");

let d = document.documentElement;

//height of an element's content, including content not visible on the screen
let scrollHeight = d.scrollHeight;

//number of pixels that an element's content is scrolled vertically
let scrollTop = d.scrollTop;

//wewnetrzna wysokosc okna przegladarki
let clientHeight = d.clientHeight;


let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);

console.log(`scrollHeight:${scrollHeight} `);
console.log(`sumScrollTopClientHeight:${sumScrollTopClientHeight} `);
console.log(`scrollTop:${scrollTop} `);
console.log(`clientHeight:${clientHeight} `);
console.log('=====================');

if (sumScrollTopClientHeight >= scrollHeight) {

    console.log(`Scrolled to the end of page`);
    

    getData();
}




}

window.addEventListener('scroll',scrollToEndOfPage);