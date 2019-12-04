# booklist-app
* A booklist app in JavaScript without and library or JS framework, using classes, local storage and more.

## Design
* I used bootstrap to style the sheet. You can find different themes in www.bootswatch.com (I preferred theme "yeti").
* I used https://fontawesome.com for the fonts.

## Classes and Methods
* I used 3 classes in total; class Book, class UI (User Interface) and class Store.
* I used static methods inside the classes in order to be able to call them without instantiating the related classes.
    ### class Store 
    * Local storage stores key-value pairs. We can not store objects in local storage so we stringify objects before adding them into local storage, 
    * Item *books* is the string version of the entire array of books. When we pull it out we have to parse it, so that we can use it as a regular JavaScript array.
