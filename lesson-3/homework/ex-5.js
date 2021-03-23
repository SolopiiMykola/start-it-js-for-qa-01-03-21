const showStars = (rows) => {
    if (rows <= 0) return
    let star = '*'

    for (let i = 1; i < rows; i++) {
        star = star + ' '

        for (let j = 0; j <= i; j++) {
            star = star + '*' 
        }
    }
    console.log(star)
}

showStars(4)

function showStars(rows){ 
    let result = '';
    let star = "*"; 
    for (let row = 1; row <= rows; row++ )
    {        
        for(let i = 0; i < row; i++)
            result += star; 
        result += ' ';
    }
    console.log(result);
}

showStars(5);

function showStars(rows){
    let star = "";
    for (let row = 0; row < rows; row ++) {
        star += "*"; 
        console.log(star);
      }
    }
    showStars (4); 