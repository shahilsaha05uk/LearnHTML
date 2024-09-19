# Working with Servers

## With Node and Express

There are a few things to know when working on the communication between the server and the client

* There are basically 5 different actions that a client needs to do in order to communicate with the client. This includes:
  * GET
  * POST
  * PUT
  * PATCH
  * DELETE

* The confusion comes who is communicating with whom and how. For beginners the tricky part is how have all sort of questions like:
  * How do we send data to the server
  * How do we identify if its the server who is responding to the request
  * What is actually sending the data to the server

* And this is very normal because it indeed is quiet confusing at first.
* For clarity one should know these few things:
  * In express all these actions come in the form of methods... for eg:
  ```js
      const app = express();
    
      app.get();
      app.post();
    ```
  * All of these methods take in a **path** and a **callback event** as a parameter.
    * Here the **path** refers to the directory of the HTML file
    * And the callback event is the function which does all the communication
      * Now this callback method takes two parameters: **req** and **res**... where req stands for request and res stands for response.
      * The communication works something like... 
        * The client has the lowerhand **and only has the ability to make a request.**
        * While the server has an upperhand, **so it has the tendency to only give or respond to the requests**. 
      * This means... that means that **req is for the clients** because its a request and **res is for the servers** because its a response.
      * When exchanging data...
        * From the client, the request goes like:
        ```js
            req.body;
            req.hostname;
        ```
        Here, its requesting for the information or some data
        * For the server, its like:
        ```js
          res.send();
        ```
        where they are sending something back to the client
    * Now while exchanging data, one might run across some serious errors... which the HTTP returns in some form of code:
    
      * 100s - Hold on
      * 200s - Here you go
      * 300s - Go away
      * 400s - Client screwed up
      * 500s - Server screwed up