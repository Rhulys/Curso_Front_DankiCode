var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef001da5e62a5f1028df29a355e64537&language=en-US&page=1').then(response => response.json()).then(data=>{
    data.results.map((i,j)=>{
        if(j > 15)
            return;
        if(j == 0){
            main.innerHTML+=`
                <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j == 1){
                main.innerHTML+=`
                    <h2>Assista o melhor filme</h2>
                    <div class="card-movie"><img src='https://image.tmdb.org/t/p/w500`+i.poster_path+`'/></div>
                `;
            }else{
                main.innerHTML+=`
                    <div class="card-movie"><img src='https://image.tmdb.org/t/p/w500`+i.poster_path+`'/></div>
                `;
            }
        }
    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef001da5e62a5f1028df29a355e64537&language=en-US&page=2').then(response => response.json()).then(data=>{
    data.results.map((i,j)=>{
        if(j > 15)
            return;
        if(j == 0){
            main.innerHTML+=`
                <div class="banner-principal" style="margin:20px 0; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j == 1){
                main.innerHTML+=`
                    <div class="card-movie"><img src='https://image.tmdb.org/t/p/w500`+i.poster_path+`'/></div>
                `;
            }else{
                main.innerHTML+=`
                    <div class="card-movie"><img src='https://image.tmdb.org/t/p/w500`+i.poster_path+`'/></div>
                `;
            }
        }
    })
})

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef001da5e62a5f1028df29a355e64537&language=en-US&page=3').then(response => response.json()).then(data=>{
    data.results.map((i,j)=>{
        if(j > 15)
            return;
        if(j == 0){
            main.innerHTML+=`
                <div class="banner-principal" style="margin:20px 0; background-image:url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
            `;
        }else{
            if(j == 1){
                main.innerHTML+=`
                    <div class="card-movie"><img src='https://image.tmdb.org/t/p/w500`+i.poster_path+`'/></div>
                `;
            }else{
                main.innerHTML+=`
                    <div class="card-movie"><img src='https://image.tmdb.org/t/p/w500`+i.poster_path+`'/></div>
                `;
            }
        }
    })
})