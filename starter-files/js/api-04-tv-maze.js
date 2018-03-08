/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?


2. When was the premiere date for the 9th season of Friends?

3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
*/

const answerElement_tvmaze1 = document.getElementById('tvmaze-1')

request
   .get("http://api.tvmaze.com/search/shows?q=Better%20Call%20Saul")
   .then(function( data ) {
            
            let love=data.body[0].show
           

        answerElement_tvmaze1.innerHTML = JSON.stringify(love.rating)
           
 })

const answerElement_tvmaze2 = document.getElementById('tvmaze-2')

request
   .get("http://api.tvmaze.com/search/shows?q=Friends&embed=season9")
   .then(function( data ) {
            
            let friendsDeb=data.body[0].show
           

        answerElement_tvmaze2.innerHTML = friendsDeb.premiered
           
 })


const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request
   .get('http://api.tvmaze.com/people/10257/castcredits')
   .then(function(data){
       
       let shows = data.body.length
    answerElement_tvmaze_3.innerHTML = shows
  })


