document.getElementById('navbar-toggler').addEventListener('click', function () {
    var imgElement = this.querySelector('img');

    if (imgElement.src.includes('handburger-icon.png')) {
      imgElement.src = './img/handburger-icon-close.png';
    } else {
      imgElement.src = './img/handburger-icon.png';
    }
    this.style.outline = 'none';
  });


const dartikel = "json/data-artikel.json";
const PArtikel = document.querySelector('#C-pills-artikel');

const getListM = () => {
    fetch(dartikel)
    .then(response =>  {
        return response.json();
    }).then(responseJson => {
        console.log(responseJson);
        PArtikel.innerHTML = "";
        let mkn = responseJson;
        mkn.forEach(item => {
            PArtikel.innerHTML += `
            
            <div class="col-lg-4 col-md-6 col-sm-12 theGap">
            <div class="d-flex flex-row flex-lg-column flex-md-column flex-sm-row">
              <img src="${item.imageUrl}" alt="" style="" class="Art-Image">
              <div class="d-flex flex-column Art-info">
                <h1 class="">${item.title}</h1>
                <p>${item.time}</p>
              </div>
            </div>
          </div>
            
            `
        });

    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', getListM);


const dfoto = "json/data-foto.json";
const PFoto = document.querySelector('#C-pills-foto');

const getListN = () => {
    fetch(dfoto)
    .then(response =>  {
        return response.json();
    }).then(responseJson => {
        console.log(responseJson);
        PFoto.innerHTML = "";
        let mkn = responseJson;
        mkn.forEach(item => {
            PFoto.innerHTML += `
            
            <div class="col-lg-4 col-md-6 col-sm-12 theGap">
            <div class="d-flex flex-row flex-lg-column flex-md-column flex-sm-row">
              <img src="${item.imageUrl}" alt="" style="" class="Art-Image">
              <div class="d-flex flex-column Art-info">
                <h1>${item.title}</h1>
                <p>${item.time}</p>
              </div>
            </div>
          </div>
            
            `
        });

    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', getListN);

const dvideo = "json/data-video.json";
const Pvideo = document.querySelector('#C-pills-video');

const getListB = () => {
    fetch(dvideo)
    .then(response =>  {
        return response.json();
    }).then(responseJson => {
        console.log(responseJson);
        Pvideo.innerHTML = "";
        let mkn = responseJson;
        mkn.forEach(item => {
            Pvideo.innerHTML += `
            
            <div class="col-lg-4 col-md-6 col-sm-12 theGap">
            <div class="d-flex flex-row flex-lg-column flex-md-column flex-sm-row">
              <img src="${item.imageUrl}" alt="" style="" class="Art-Image">
              <div class="d-flex flex-column Art-info">
                <h1>${item.title}</h1>
                <p>${item.time}</p>
              </div>
            </div>
          </div>
            
            `
        });

    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', getListB);

