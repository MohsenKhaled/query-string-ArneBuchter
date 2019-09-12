// by Arne

document.addEventListener('DOMContentLoaded', () => {

    let mainElement = document.querySelector('.flex');

    const destinationer = fetch('./assets/json/destinationer.json')
    .then(function(Response) {
        return Response.json();
    })
    .then(function(result){
            result.destinationer.forEach(destination => {
                mainElement.innerHTML += `
                    <section class="card">
                        <div class="card__img-holder">
                            <img class="card__img" src="./assets/media/${destination.image}" alt="" srcset="">
                        </div>
                        <footer class="card__footer">
                            <i class="fas fa-heart"></i>
                            <a href="template.html?destination_id=${destination.id}" class="card__footer-link">more</a> 
                        </footer>
                    </section>
                `
            });
        });



}); // DOM