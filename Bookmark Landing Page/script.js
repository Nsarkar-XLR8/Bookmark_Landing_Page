
// Get DOM Elements
const urlInput = document.getElementById('urlInput');
const addbookmarks = document.getElementById('addbookmarks');
const deleteAll = document.getElementById('deleteAll');
const BookmarkList = document.getElementById('BookmarkLists');

// Validation URL Check
function isValidURL(url) { 
    const pattern = 
        /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/; 
    return pattern.test(url); 
}

// Event Listener for adding a BookMark
addbookmarks.addEventListener('click', 
()=> {
    const url = urlInput.value.trim();
    if(isValidURL(url)){
        const bookmarkItem = document.createElement('li');
        bookmarkItem.classList.add('bookmark-item');
        bookmarkItem.innerHTML =`<a href="${url}" taret="_blank">${url}</a> 
        <div class="buttons">  
            <button class="edit">Edit</button> 
            <button class="delete">Delete</button> 
        </div>`; 
        BookmarkList.appendChild(bookmarkItem);
        urlInput.value = '';
        addEditBookmarkListener(bookmarkItem);
        addDeleteBookmarkListener(bookmarkItem);

    }else{
        alert("Please enter a valid URL (http:// or https://).");
    }

});
// Event Listener for deleting  a BookMark
deleteAll.addEventListener('click',() => {

    while(BookmarkList.firstChild){
        BookmarkList.removeChild(BookmarkList.firstChild);
    }


});


// Event Listener for editing a BookMark
function addEditBookmarkListener(bookmarkItem){
    const editButton = bookmarkItem.querySelector('.edit');
    const bookmarkLink = bookmarkItem.querySelector('a');

    editButton.addEventListener('click',() => {
        const newURL = prompt("Edit the URl:",bookmarkLink.getAttribute('href'));
        if (newURL && isValidURL(newURL)) { 
            bookmarkLink.setAttribute("href", newURL); 
            bookmarkLink.innerHTML = newURL; 
        } 
        else if (newURL) { 
            alert( 
                "Please enter a valid URL (http:// or https://)."
            ); 
        }
    });
}

// Event listener for deleting a BookMark 
function addDeleteBookmarkListener( 
    bookmarkItem) { 
    const deleteButton =  
        bookmarkItem.querySelector(".delete"); 
    deleteButton.addEventListener("click", () => { bookmarkItem.remove(); }); 
}