### Filtered LS
###### (Exercise 5 of 13)
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that __end with .txt__. Note that the second argument will not come prefixed with a '.'.

Keep in mind that the first arguments of your program are not the first values of the *process.argv array*, as the first two values are reserved for system info by Node.

The list of files should be printed to the console, one file per line. You __must__ use asynchronous I/O.

___
##### HINTS
The *fs.readdir()* method takes a pathname as its first argument and a callback as its second. The callback signature is:
    ```javascript
    function callback (err, list) { /* ... */ }
    ```
where *list* is an array of filename strings.

You may also find node's *path* module helpful, particularly the *extname method*.

___
###### » To print these instructions again, run:
    learnyounode print
###### » To execute your program in a test environment, run:
    learnyounode run FilteredLS.js
###### » To verify your program, run:
    learnyounode verify FilteredLS.js
###### » To access the main menu, run:
    learnyounode
