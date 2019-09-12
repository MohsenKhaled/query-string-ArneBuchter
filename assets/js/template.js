document.addEventListener('DOMContentLoaded', () =>{

    let params = new URLSearchParams(document.location.search);
    const destinationId = parseInt(params.get('destination_id'));
    let mainElement = document.querySelector('.template__main');

    const destinationer = fetch('./assets/json/destinationer.json')
                            .then(function(response){
                                return response.json();
                            })
                            .then((result) => {
                                const destination = result.destinationer.find((Element) => {
                                    return Element.id === destinationId;
                                })
                                
                                mainElement.innerHTML = `
                                <img class="template__img" src="./assets/media/${destination.image}" alt="" srcset="">
                                <i class="fas fa-heart template_heart"></i>
                                <article class="template__article-area">
                                    <h3 class="template__small-heading">${destination.destination}</h3>
                                    <h1 class="template__big-heading">${destination.title}</h1>
                                    <h3 class="template__small-heading template__heading_color">${destination.subtitle}</h3>
                                    <p class="template__text">${destination.text}</p>
                          
                                    <h2 class="template__medium-heading">Faciliteter</h2>
                                 
                                        ${destination.faciliteter.map(function(facilitet){ 
                        
                                            return `<p class="template__lilletext">${facilitet}</p>`
                                        }).join('')}
                                    
                                </article>
                                  `
                            
                            })


}); //DOM