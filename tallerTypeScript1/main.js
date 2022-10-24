"use strict";
//Clase Netflix
Object.defineProperty(exports, "__esModule", { value: true });
exports.nf = exports.Serie = exports.Netflix = void 0;
class Netflix {
    constructor(series) {
        this.series = series;
    }
}
exports.Netflix = Netflix;
//Clase Serie
class Serie {
    constructor(position, name, channel, seasons, description, review, picture) {
        this.position = position;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.review = review;
        this.picture = picture;
    }
}
exports.Serie = Serie;
//Constantes de las series
let series = [new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")];
//Constante de la clase Netflix
exports.nf = new Netflix(series);
//Tabla de series
let serieTable = document.getElementById("serie");
let statisticTable = document.getElementById("statistic");
mostrarDatosSeries(exports.nf.series);
mostrarPromedioTemporadas(exports.nf.series);
//Función para mostrar los datos de las series
function mostrarDatosSeries(series) {
    let tbodySerie = document.createElement("tbody");
    for (let serie of series) {
        let trElement = document.createElement("tr");
        trElement.setAttribute("position", serie.position.toString());
        trElement.onclick = (event) => {
            let position = event.path[1].position;
            let serieClick = series[Number(position) - 1];
            let card = document.getElementById("card");
            let picture = document.getElementById("picture");
            picture.setAttribute("src", serie.picture);
            let review = document.getElementById("review");
            review.setAttribute("href", serie.review);
            let description = document.getElementById("description");
            description.innerHTML = `${serie.description}`;
            let name = document.getElementById("name");
            name.innerHTML = `${serie.name}`;
            card.style["display"] = "unset";
        };
        trElement.innerHTML = `<td>${serie.position}</td><td>${serie.name}</td><td>${serie.channel}</td><td>${serie.seasons}</td>`;
        tbodySerie.appendChild(trElement);
    }
    serieTable.appendChild(tbodySerie);
}
//Función para mostrar el promedio de series
function mostrarPromedioTemporadas(series) {
    let tbodystatistic = document.createElement("tBody");
    let promedio = 0;
    for (let serie of series) {
        promedio += serie.seasons;
    }
    let res = promedio / series.length;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class = "promedio">Seasons Average: ${res}</td>`;
    tbodystatistic.appendChild(trElement);
    statisticTable.appendChild(tbodystatistic);
}
