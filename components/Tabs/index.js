// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(function(response){
    console.log(response); 
    data = response; 
    let topics = document.querySelector(".topics");
    response.data.topics.forEach ( topic => { 
        const tab = createTab(topic);  
        topics.appendChild(tab) 
    });  
}); 

function createTab(topic){
    let div = document.createElement('div'); 
    div.setAttribute('class', 'tab'); 
    div.textContent = topic; 
    return div; 
}

