


/*

--- TODO: START HERE FOR SOLUTION ---

-- What is the goal?
    We want to create a web page that is loaded when the containers in our index.html is loaded
    The web page needs to retrieve data from the backend controller api endpoint, and then display the data on the page

-- How?
    - We will do this with plain javascript:
        By embedding a script link into the html file, and defining a container that we want the script to fill.
    - The backend api needs to be called
        we will do this with a request made to the api endpoint, using fetch
    - The desired data needs to be extracted from the returned response
        we need to parse the response object and extract the data as text from the response body

Just use fetch as the base of our data retrieval from the endpoint.
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
*/

// Start by initiating the retrieval of a response from the backend API endpoint
fetch('/hello')
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    // when the response is given from the backend, we take the body/text from the response
    // since we know in this case it is a string, we can use .text(), otherwise use blob, json, body, etc
    .then((response) => {
        return response.text()
    })


    // we still need to put the response message into something for it to be displayed in our html.
    // the second .then is being called on the returned text value from response (the response body text/message (promise<>))
    .then((message) =>{

        // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
        const container = document.getElementById('response-container')
        container.innerHTML = message;


        // we can continue using innerHTML, but I was looking on stack for approaches
        // to setting text inside a div ele.
        // According to posters, textContent is the better approach
        // https://stackoverflow.com/questions/121817/how-do-i-replace-text-inside-a-div-element
        // it prevents HTML injection by treating as plain text

        // so we could also use textContent to set the value of this div element
        /*
        container.textContent = message
        */

    });






// https://developer.mozilla.org/en-US/docs/Web/API/Window
// https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
/* EXAMPLE:
    document.addEventListener("DOMContentLoaded", (event) => {
        console.log("DOM fully loaded and parsed");
    });

window.addEventListener("load", (event) => {
  log.textContent += "load\n";
});

We dont need the listener for this example as we are using the index.html to start the script, but could be useful later.

*/




/*

OLD STUFF FROM THE LECTURE / NOTES:


// assignment for the day, create an html landing page, one that is able to display the informmation from our /api output in the java backend endpoint
// use plain js for it. keep notes on how we got to the solution, the thought process.
TODO: we didnt actually attach the element to anything that we created in the example

// practice each day by making a quick api





console.log('hello')


//document.querySelector('#textbody').innerHTML ="this is an update"


// document.querySelector('').innerHTML = "updated title"




var greeting = function(){
    return '<p>' + data.greeting + ', ' + data.name + '</p>'
}

var app = document.querySelector('#textbody').innerHTML = greeting()


let data = {
    greeting: "hello",
    name: "world"
}

let posts = [{
    author: 'Edward',
    title: 'A CSS trick',
    body: 'Lorem ipsum'
}, {
    author: 'Azamat',
    title: 'Another css trick',
    body: 'Lorem ipsum'
}]

function Post(data)
{
    return `
        <div class="post"> 
            <h2>${data.title}</h2>
            <p>By ${data.author}</p>
            <p>${data.body}</p>
        </div>
    `
}

function Posts(posts){
    //map is somewhat shorthand for a for loop
    return `
    <div class="allposts">
    ${posts.map(Post).join('')}
    </div>
    `
}

document.querySelector('body').innerHTML = Posts(posts)

let newElement = document.createElement('p')
newElement.createAttribute()




    .setAttribute('id', 'api')
// need to run a fetch function to fetch an endpoint

newElement.innerHTML = ''


// window.fetch(new Request('/hello'))
// window.fetch('localhost:8080/hello').then((response) => {
//     return response.text
// }).then((responses => {
//     // the hash before api is because it is an id
//     document.querySelector('#api').innerHTML = responses
// }))


window.fetch('/hello')
    .then((response) => {
        return response.text()
    })
    .then((data => {
    // the hash before api is because it is an id
    document.querySelector('#api').innerHTML = data
}))



// can I just do this?

const newRequest = new Request('/hello')

*/


