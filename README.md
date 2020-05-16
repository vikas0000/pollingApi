# pollingAPI


It is a Polling API for which helps a User to add a Question, or others can add option to that question and can vote on that options.<br>

# Index
<ul>
<li><a href="#1">Technology Used in API</a>
<li><a href="#2">API's Functionality Explanation</a>
<li><a href="#3">Support</a>
</ul>

# Technology Used in API
<p id="3">
<strong>Stack</strong>: NodeJs, ExpressJs, MongoDB


# API's Functionality Explanation
<p id="4">
<br>
This API helps to performs the following function
<ul>
<li><a href="#a">Create a Question</a>
<li><a href="#b">Add Option to a Question</a>
 <li><a href="#p">Delete a Question</a>
<li><a href="#q">Add vote to an Option</a>
<li><a href="#r">Delete an Option</a>
<li><a href="#s">View a Question</a>
</ul>
<br>
Following is the description of all the function mentioned above.<br>
<ul>
<li>
 <p id="a">
<h3>Create a Question</h3>
Route: <code>/questions/create</code>
<br>
This route helps to create a question.
<li>
 <p id="b">
<h3>Add Option to a Question</h3>
Route: <code>/questions/:id/options/create</code>
<br>
This route helps to add different options to a particular question. The id of question is specified in the route params. The opions should be unique.
<li>
 <p  id="p">
<h3>Delete a Question</h3>
Route: <code>/questions/:id/delete</code>
<br>
This route helps to delete a question. It deletes the question only if it's option doesn't have votes in it.
<li>
 <p  id="q">
<h3>Add vote to an Option</h3>
Route: <code>/options/:id/add_vote</code>
<br>
This route helps to increment the vote of a particular option. The option id is specified in the route.
<li>
<p id="r">
<h3>Delete an Option</h3>
Route: <code>/options/:id/delete</code>
<br>
This route helps to delete an option of a question. It deletes the option only if there is no votes.
<li>
<p id="s"> 
<h3>View a Question</h3>
Route: <code>/questions/:id</code>
<br>
This route helps to view a question and all the option associated with it and the votes of option as well.
</ul>

# Support
<p id="5">
Feel free to contact at <i>vikasprajapati95(at)yahoo(dot)com</i> for any query.

 



