var search = window.document.getElementById('search');
search.addEventListener('mouseenter', enter);
search.addEventListener('mouseout', leave);
function enter() {
    search.style.boxShadow = '0 0 10px #cccccc';
}
function leave() {
    search.style.boxShadow = 'none';
}
var search_button = window.document.getElementById('search-button');
var search_lucky = window.document.getElementById('lucky-button');
search_button.addEventListener('mouseenter', enterButton);
search_button.addEventListener('mouseout', leaveButton);
search_lucky.addEventListener('mouseenter', enterInput);
search_lucky.addEventListener('mouseout', leaveInput);
function enterButton() {
    search_button.style.boxShadow = '0 0 10px #cccccc';
}
function leaveButton() {
    search_button.style.boxShadow = 'none';
}
function enterInput() {
    search_lucky.style.boxShadow = '0 0 10px #cccccc';
}
function leaveInput() {
    search_lucky.style.boxShadow = 'none';
}
search_button.addEventListener('onclick', performSearch);
addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

var content = window.document.getElementById('search').value;

const API_KEY = "VJB1TL4MrGSZoUszDvrZAvH6";

function performSearch(content) {
    const url = "https://www.searchapi.io/api/v1/search";
    const params = {
        "engine": "google",
        "q": "content",
        "api_key": API_KEY
    };
    axios.get(url, { params })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}