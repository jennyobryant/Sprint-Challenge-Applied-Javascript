// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(function(response) {
    console.log(response)
    let articles = document.querySelector(".cards-container");
    response.data.articles.bootstrap.forEach ( article => { 
        const card = createCard(article);  
        articles.appendChild(card);
    }); 
    response.data.articles.javascript.forEach ( article => { 
            const card = createCard(article);  
            articles.appendChild(card);
    });
    response.data.articles.jquery.forEach ( article => { 
        const card = createCard(article);  
        articles.appendChild(card);
    });
    response.data.articles.node.forEach ( article => { 
        const card = createCard(article);  
        articles.appendChild(card);
    });
    response.data.articles.technology.forEach ( article => { 
        const card = createCard(article);  
        articles.appendChild(card);
    });

});

function createCard(props){ 
    let divCard = document.createElement('div'); 
    divCard.setAttribute("class", "card");

    let divHeadLineInfo = document.createElement("div")
    divHeadLineInfo.setAttribute('class', 'headline'); 
    divHeadLineInfo.textContent = props.headline; 
    divCard.appendChild(divHeadLineInfo); 

    let divAuthor = document.createElement('div'); 
    divAuthor.setAttribute('class', "author");
    divCard.appendChild(divAuthor); 

    let imgContainer = document.createElement('div'); 
    imgContainer.setAttribute('class', "img-container"); 
    divAuthor.appendChild(imgContainer); 

    let img = document.createElement('img'); 
    img.setAttribute('src', props.authorPhoto); 
    imgContainer.appendChild(img); 

    let span = document.createElement('span'); 
    span.textContent = `By ${props.authorName}`; 
    divAuthor.appendChild(span); 

    return divCard; 
}

