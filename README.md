# booklist-app
* A booklist app in JavaScript without and library or JS framework, using classes, local storage and more.

## Design
* To style the sheet I used bootstrap. You can find different themes in www.bootswatch.com. I used theme "yeti".
* For the fonts, I used https://fontawesome.com. website.

## Classes and Methods
* I used 3 classes in total; Book Class, UI (User Interface Class) and Store Class
* I used static methods inside the classes in order to be able to call them without instantiating the related classes.
    ### Class Store 
    * Local storage stores key-value pairs. We can not store objects in local storage so we stringify objects before adding them into local storage, 
    * Therefore item *books* is the string version of the entire array of books. When we pull it out we have to parse it, so that we can use it as a regular JavaScript array.
