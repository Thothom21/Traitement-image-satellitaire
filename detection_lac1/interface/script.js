function startAnimation() {
    const mainTitle = document.getElementById('mainTitle');
    const startButton = document.getElementById('startButton');

    mainTitle.classList.remove('bigTitle');
    mainTitle.classList.add('smallTitle');

    mainTitle.style.animation = 'moveTitle 2s forwards';

    setTimeout(() => {
        startButton.style.display = 'none';

        const paragraph = document.createElement('p');
        paragraph.style.fontSize = '28px';
        paragraph.style.color = '#1d0ee9';
        paragraph.textContent = 'Sélectionne une marque d\'eau :';
        paragraph.classList.add('text-paragraph');

        const select = document.createElement('select');
        select.id = 'marque-select';
        select.style.fontSize = '20px';
        select.classList.add('select-box');

        const options = [
            "volvic", "evian", "cristaline", "hépar", "rozanna", "voss", "pailleter"
        ];

        options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            select.appendChild(option);
        });

        const heroSection = document.getElementById('hero');
        heroSection.appendChild(paragraph);
        heroSection.appendChild(select);

        select.addEventListener('change', onTreeEssenceSelected);
    }, 800);
}

function onTreeEssenceSelected() {
    const selectBox = document.getElementById('marque-select');
    const selectedEssence = selectBox.value;
    const bigRectangleRightTop = document.querySelector('.big-rectangle-right-top');
    const smallRectangleBelowTitle = document.querySelector('.small-rectangle-below-title');
    const bigRectangleBottomRight = document.querySelector('.big-rectangle-bottom-right');

    const essencesToShowRectangles = [
        "volvic", "evian", "cristaline", "hépar", "pailleter", "rozanna", "voss"
    ];

    if (essencesToShowRectangles.includes(selectedEssence)) {
        bigRectangleRightTop.style.display = 'block';
        smallRectangleBelowTitle.style.display = 'block';
        bigRectangleBottomRight.style.display = 'block';
    } else {
        bigRectangleRightTop.style.display = 'none';
        smallRectangleBelowTitle.style.display = 'none';
        bigRectangleBottomRight.style.display = 'none';
    }
}

function showMapleData(event) {
    event.preventDefault();
    const treesData = {
        "volvic": {
            "04-2020": {
                "Resultat (€/km²)": 1175040,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 1077938,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 1049567,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 1036341,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 929479,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 837805,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 765793,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 723412,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 721865,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 663595,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 623669,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 512124,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 422843,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 371239,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 313733,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 276510,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 216322,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 155865,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 151058,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 170763,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 184113,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 216363,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 313279,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 273415,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 1196679,
                "km3": 0.091
            },
        },



        "cristaline": {
            "04-2020": {
                "Resultat (€/km²)": 587520,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 538969,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 524783,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 518170,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 464739,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 418902,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 382896,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 361706,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 360932,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 331797,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 311834,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 256062,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 211421,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 185619,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 156866,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 138255,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 108161,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 77932,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 75529,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 85381,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 92056,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 108181,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 156639,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 136707,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 98339,
                "km3": 0.091
            },
        },


        "evian": {
            "04-2020": {
                "Resultat (€/km²)": 1729920,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 1586964,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 1545196,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 1525724,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 1368401,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 1233435,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 1127418,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 1065024,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 1062745,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 976960,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 918180,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 753961,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 622519,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 546546,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 461885,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 407084,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 318474,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 229469,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 222391,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 251401,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 271055,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 318535,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 461216,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 402528,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 289555,
                "km3": 0.091
            },
        },


        "hépar": {
            "04-2020": {
                "Resultat (€/km²)": 2078080,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 1906354,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 1856179,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 1832788,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 1643802,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 1481673,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 1354320,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 1279368,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 1276631,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 1173581,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 1102971,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 905702,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 747806,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 656543,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 554843,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 489013,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 382569,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 275651,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 267149,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 301998,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 325607,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 382642,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 554040,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 483540,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 347830,
                "km3": 0.091
            },
        },

        "pailleter": {
            "04-2020": {
                "Resultat (€/km²)": 43520000,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 39923646,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 38872863,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 38383007,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 34425185,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 31029818,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 28362739,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 26793060,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 26735744,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 24577627,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 23098888,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 18967591,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 15660872,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 13749593,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 11619751,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 10241123,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 8011935,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 5772811,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 5594751,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 6324568,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 6819009,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 8013463,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 11602938,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 10126492,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 7284411,
                "km3": 0.091
            },
        },

        "rozanna": {
            "04-2020": {
                "Resultat (€/km²)": 1795200,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 1646850,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 1603505,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 1583299,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 1420038,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 1279979,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 1169962,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 1105213,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 1102849,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 1013827,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 952829,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 782413,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 646010,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 567170,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 479314,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 422446,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 330492,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 238128,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 230783,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 260888,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 281284,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 8013463,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 478621,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 417717,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 300481,
                "km3": 0.091
            },
        },

        "voss": {
            "04-2020": {
                "Resultat (€/km²)": 3367360,
                "km3": 0.544
            },
            "05-2020": {
                "Resultat (€/km²)": 3089092,
                "km3": 0.499
            },
            "06-2020": {
                "Resultat (€/km²)": 3007787,
                "km3": 0.485
            },
            "07-2020": {
                "Resultat (€/km²)": 2969885,
                "km3": 0.479
            },
            "08_2020": {
                "Resultat (€/km²)": 2663648,
                "km3": 0.430
            },
            "09-2020": {
                "Resultat (€/km²)": 2400932,
                "km3": 0.387
            },
            "10-2020": {
                "Resultat (€/km²)": 2194566,
                "km3": 0.354
            },
            "11_2020": {
                "Resultat (€/km²)": 2073113,
                "km3": 0.334
            },
            "12_2020": {
                "Resultat (€/km²)": 2073113,
                "km3": 0.333
            },
            "01-2021": {
                "Resultat (€/km²)": 1901693,
                "km3": 0.307
            },
            "02_2021": {
                "Resultat (€/km²)": 1787276,
                "km3": 0.288
            },
            "03-2021": {
                "Resultat (€/km²)": 1467617,
                "km3": 0.237
            },
            "04-2021": {
                "Resultat (€/km²)": 1211760,
                "km3": 0.195
            },
            "05-2021": {
                "Resultat (€/km²)": 1063874,
                "km3": 0.171
            },
            "06-2021": {
                "Resultat (€/km²)": 899078,
                "km3": 0.145
            },
            "07-2021": {
                "Resultat (€/km²)": 792406,
                "km3": 0.128
            },
            "08-2021": {
                "Resultat (€/km²)": 619923,
                "km3": 0.100
            },
            "09-2021": {
                "Resultat (€/km²)": 446671,
                "km3": 0.072
            },
            "10-2021": {
                "Resultat (€/km²)": 432893,
                "km3": 0.069
            },
            "11-2021": {
                "Resultat (€/km²)": 489363,
                "km3": 0.079
            },
            "12-2021": {
                "Resultat (€/km²)": 527620,
                "km3": 0.085
            },
            "01-2022": {
                "Resultat (€/km²)": 620041,
                "km3": 0.100
            },
            "02-2022": {
                "Resultat (€/km²)": 897777,
                "km3": 0.145
            },        
            "03-2022": {
                "Resultat (€/km²)": 783537,
                "km3": 0.126
            },
            "04-2022": {
                "Resultat (€/km²)": 563631,
                "km3": 0.091
            },
        },
        
    };

    const selectedEssence = document.getElementById('marque-select').value;
    const selectedTreeData = treesData[selectedEssence];

    if (selectedTreeData) {
        let htmlContent = `<h2>Données de ${selectedEssence}</h2><ul>`;

        for (const year in selectedTreeData) {
            htmlContent += `<li>Année ${year}: <br>`;
            htmlContent += `Résultat (€/km²): ${selectedTreeData[year]['Resultat (€/km²)']}, <br>`;
            htmlContent += '</li>';
        }

        htmlContent += '</ul>';

        const rectangleRightTop = document.querySelector('.big-rectangle-right-top');
        rectangleRightTop.innerHTML = htmlContent;
        rectangleRightTop.style.display = 'block';
        rectangleRightTop.style.overflow = 'auto';
    }
}





const slidesContainer = document.getElementById("diaporama-images");
const slides = document.querySelectorAll("#diaporama-images img");
const prevButton = document.getElementById("fleche-defilement-prev");
const nextButton = document.getElementById("fleche-defilement-next");
let currentSlideIndex = 0;

nextButton.addEventListener("click", () => {
    showSlide(currentSlideIndex + 1);
});

prevButton.addEventListener("click", () => {
    showSlide(currentSlideIndex - 1);
});

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex = index;
    }

    slides[currentSlideIndex].style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function () {
    const options = [
        "2000", "2001", "2002", "2003", "2004", "2005", "2006",
        "2007", "2008", "2009", "2010", "2011", "2012",
        "2013", "2014", "2015", "2016", "2018",
        "2019", "2048", "62d6dfeb97661c91708b456f", "deforestation_spot_1986", "deforestation_spot_1998", "deforestation_spot_2005",
        "inline_image_preview", "photographie-aerienne-en-couleur-naturelle-telespazio-france", "phpYHheAY"
    ];
 
    const select = createImageSelect(options);
    const heroSection = document.getElementById('hero');
    heroSection.appendChild(select);
 
    // Ajoutez ces lignes pour obtenir les éléments des rectangles
    const bigRectangleRightTop = document.querySelector('.big-rectangle-right-top');
    const smallRectangleBelowTitle = document.querySelector('.small-rectangle-below-title');
    const bigRectangleBottomRight = document.querySelector('.big-rectangle-bottom-right');
 
    // Cachez la liste déroulante par défaut
    select.style.display = 'none';
 
    // Vérifiez si les trois rectangles sont visibles, puis affichez la liste déroulante
    if (isElementVisible(bigRectangleRightTop) && isElementVisible(smallRectangleBelowTitle) && isElementVisible(bigRectangleBottomRight)) {
        select.style.display = 'block';
    }
 
    select.addEventListener('change', handleImageSelection);
});
 
function isElementVisible(element) {
    return element.style.display !== 'none';
}
 
function createImageSelect(options) {
    const select = document.createElement('select');
    select.id = 'image-select';
    select.style.fontSize = '20px';
    select.classList.add('image-select');
 
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });
 
    return select;
}
 
function handleImageSelection() {
    const selectElement = document.getElementById('image-select');
    const selectedOption = selectElement.value;
 
    // Ajoutez ou supprimez la classe 'show' en fonction de l'option sélectionnée
    const imagePaths = getImagePaths();
 
    if (imagePaths.hasOwnProperty(selectedOption)) {
        // Affichez les images correspondantes pour l'option sélectionnée
        const imagePath = imagePaths[selectedOption];
        displayImage(imagePath);
    }
}
 
function getImagePaths() {

    return {
        "2000": "/chemin/vers/dossier/2000/image.jpg",
        "2001": "/chemin/vers/dossier/2001/image.jpg",
        "2002": "/chemin/vers/dossier/2002/image.jpg",
        // ... Ajoutez les autres options avec leurs chemins d'accès
    };
}
 
function displayImage(imagePath) {
    // Utilisez l'URL de l'image pour l'afficher dans votre application
    console.log(imagePath);
    // Mettez à jour ici pour afficher l'image dans votre application
}