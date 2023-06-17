document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.site-nav').classList.toggle('site-nav--open');
    this.classList.toggle('open');
  });
  



  let index = 1;
let sentences = ["Homes!","Cars!","Catering!"];
let sentIndex = 0;




function nextStep(){
    let input = document.getElementById("inputID");
    let val = input.getAttribute("placeholder") || "";
    val = sentences[sentIndex].substring(0,val.length+index);
    if(val.length===sentences[sentIndex].length)index=-1;
    if(val.length===0){
      index=1;
      sentIndex = (sentIndex+1)%sentences.length;
    }
    input.setAttribute("placeholder",val);
}

window.setInterval(nextStep,400);


//
async function getModels(event) {
  event.preventDefault();

  const make = document.getElementById("Make").value;
  const model = document.getElementById("Model").value;
  const year = document.getElementById("year").value.trim();
  const Transmission = document.getElementById("Transmission").value.trim();
  const fuel = document.getElementById("fuel").value.trim();

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${make}&year=${year}&drive=${Transmission}&fuel_type=${fuel}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'cfdc7f3373mshae41231ec895e6ap1f7273jsn2d02751e771b',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    console.log(result);
   

    const pexelsUrl = `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${make} ${model}&locale=en-US&per_page=4&page=1`;
    const pexelsOptions = {
      method: 'GET',
      headers: {
        Authorization: 'ZMXNZMrEoNchb3tHs6uvb4oGlAryWhQ9S67p3l4Lr2Smoq025FzcCSIS',
        'X-RapidAPI-Key': 'cfdc7f3373mshae41231ec895e6ap1f7273jsn2d02751e771b',
        'X-RapidAPI-Host': 'pexelsdimasv1.p.rapidapi.com'
      }
    };

    const pexelsResponse = await fetch(pexelsUrl, pexelsOptions);
    const pexelsResult = await pexelsResponse.json();
    const imageUrl = pexelsResult.photos[0].src.original;

    
    const imgTag = document.createElement('img');
    imgTag.src = imageUrl;
    imgTag.alt = 'Description of the image';

    const here = document.querySelector(".imges")
    here.appendChild(imgTag);
    
  } catch (error) {
    console.error(error);
  }
}

document.querySelector('.form-input').addEventListener('submit', getModels);

// 