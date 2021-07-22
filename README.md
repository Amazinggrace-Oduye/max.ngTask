## max.ng Assessment Task

### Get  all movies
url : https://maxng-assesment.herokuapp.com/movie

### Get movie by id
url : https://maxng-assesment.herokuapp.com/movie/1

### Get movie by search query name
url : https://maxng-assesment.herokuapp.com/movie/singleMovie?search=A New 

### Get movie by sort field name or height,direction asc or desc and filter by gender

url : https://maxng-assesment.herokuapp.com/movie/characters/1?sortBy=name

url : https://maxng-assesment.herokuapp.com/movie/characters/1?sortBy=height&gender=female&direction=asc

url : https://maxng-assesment.herokuapp.com/movie/characters/1?sortBy=height&gender=female&direction=desc

### Add comment
url : https://maxng-assesment.herokuapp.com/movie/comment/create
##### It require two input fields 
```
}
    "movieid":4,
    "comment":"nice graphics and picture Quality movie"
}
```
### Get all movie comments
url : https://maxng-assesment.herokuapp.com/movie/comments

### Get movie comment by Id
url : https://maxng-assesment.herokuapp.com/movie/comment/1
