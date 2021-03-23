let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
    ];
    
    const bestMovies = (movies, year = 2019, rating = 4) => {
        result = [];
        for (let i = 0; i < movies.length; i++){
            if (movies[i]["year"] == year && movies[i]["rating"] > rating)
                result.push(movies[i]);
        }
        //console.log(result)
        return result;
    }
    console.log(bestMovies(movies));
    
    
    // asc - по убыванию, default - по возрастанию
    const sortByRating = (movies, sorting = '') => {
        return bestMovies(movies).sort((a, b) => {       
            return (sorting == 'asc') ?  a.rating - b.rating : b.rating - a.rating;      
        }); 
    }
    movies = sortByRating(movies);
    console.log(movies);
    
    const getTitles = (movies) => {
        let result = [];
        for (let i = 0; i < movies.length; i++){
            result.push(movies[i].title);
        }
        return result;
    }
    
    console.log(getTitles(movies));

// *****

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.1},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
    ]


    let goodMovies = movies.filter(function(item) {
        return item.rating >= 4 && item.year == 2019
    });

   let  goodMoviesSort = goodMovies.sort(function (a, b) {
        return b.rating - a.rating;
    })
  console.log(goodMoviesSort
    );
    goodMoviesSort.forEach(function(item, index, array) {
        console.log(item.title);
    });


// ***
const rating = 4
const year = 2019
const result = movies
    .filter((movie) => movie.year === year && movie.rating >= rating) // filtered array
    .sort((a, b) => b.rating - a.rating ) // sorted array
    .map((movie) => movie.title) // ['a', 'c']

console.log('result = ', result)