
        const container = document.querySelector('#container');
        const request = new XMLHttpRequest();

        request.open('GET', 'https://restcountries.eu/rest/v2/name/nepal');
        request.send();

        request.addEventListener('load', function () {
            // console.log(this.responseText);

            const [data] = JSON.parse(this.responseText);
            // console.log(data);

            const htmlData = `
        <div id="card">
    <article class="card">
        <div class="card-body">
            <img src="${data.flag}" alt="image" class="card-body-img">
            <h1 class="card-body-title">
                ${data.name}<span></span>
            </h1>

            <p class="card-body-text">Capital: ${data.capital}</p>
        </div>
        <hr>

        <div class="card-footer">
            <div id="card-footer-social1">
                <h3>${data.nativeName}</h3>
                <p>Native language</p>
            </div>
            <div id="card-footer-social2">
                <h3> ${data.population}</h3>
                <p>Populaton</p>
            </div>
            <div id="card-footer-social3">
                <h3>${data.demonym}</h3>
                <p>Demonym</p>
            </div>
        </div>
    </article>
</div>
        `;
            container.insertAdjacentHTML("beforebegin", htmlData)
        })
    