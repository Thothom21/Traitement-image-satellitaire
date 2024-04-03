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
        paragraph.style.color = '#937425';
        paragraph.textContent = 'Sélectionne une essence d\'arbre :';
        paragraph.classList.add('text-paragraph');

        const select = document.createElement('select');
        select.id = 'essence_select';
        select.style.fontSize = '20px';
        select.classList.add('select-box');

        const options = [
            "Érable", "Chêne", "Pin", "Hêtre", "Sapin", "Orme", "Peuplier",
            "Bouleau", "Tilleul", "Aulne", "Noyer", "Frêne", "Merisier",
            "Acer palmatum", "Cerisier à fleurs", "Châtaignier", "Saule", "Épicéa",
            "Cyprès", "Mélèze", "Érable à sucre", "Charme", "If", "Aubépine",
            "Cèdre", "Platane", "Sorbier", "Érable argenté", "Tulipier de Virginie",
            "Poirier"
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
    const selectBox = document.getElementById('essence_select');
    const selectedEssence = selectBox.value;
    const bigRectangleRightTop = document.querySelector('.big-rectangle-right-top');
    const smallRectangleBelowTitle = document.querySelector('.small-rectangle-below-title');
    const bigRectangleBottomRight = document.querySelector('.big-rectangle-bottom-right');

    const essencesToShowRectangles = [
        "Érable", "Chêne", "Pin", "Hêtre", "Sapin", "Orme", "Peuplier",
        "Bouleau", "Tilleul", "Aulne", "Noyer", "Frêne", "Merisier",
        "Acer palmatum", "Cerisier à fleurs", "Châtaignier", "Saule", "Épicéa",
        "Cyprès", "Mélèze", "Érable à sucre", "Charme", "If", "Aubépine",
        "Cèdre", "Platane", "Sorbier", "Érable argenté", "Tulipier de Virginie",
        "Poirier"
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
        "Érable": {
            "2000": {
                "Resultat (€/km²)": 183610948.75346258,
                "Resultat Hauteur (km*m²)": 1440085872.5761771,
                "Nb_arbre_total": 72004293.62880886
            },
            "2001": {
                "Resultat (€/km²)": 574608594.1828253,
                "Resultat Hauteur (km*m²)": 4506734072.02216,
                "Nb_arbre_total": 225336703.60110798
            },
            "2002": {
                "Resultat (€/km²)": 136930408.58725768,
                "Resultat Hauteur (km*m²)": 1073963988.919668,
                "Nb_arbre_total": 53698199.4459834
            },
            "2003": {
                "Resultat (€/km²)": 821988968.1440442,
                "Resultat Hauteur (km*m²)": 6446972299.168974,
                "Nb_arbre_total": 322348614.9584487
            },
            "2004": {
                "Resultat (€/km²)": 606337375.3462603,
                "Resultat Hauteur (km*m²)": 4755587257.617727,
                "Nb_arbre_total": 237779362.88088638
            },
            "2005": {
                "Resultat (€/km²)": 627772562.3268698,
                "Resultat Hauteur (km*m²)": 4923706371.191135,
                "Nb_arbre_total": 246185318.55955678
            },
            "2006": {
                "Resultat (€/km²)": 662334245.1523544,
                "Resultat Hauteur (km*m²)": 5194778393.351799,
                "Nb_arbre_total": 259738919.66758993
            },
            "2007": {
                "Resultat (€/km²)": 779599279.7783933,
                "Resultat Hauteur (km*m²)": 6114504155.124653,
                "Nb_arbre_total": 305725207.7562326
            },
            "2008": {
                "Resultat (€/km²)": 655489861.4958448,
                "Resultat Hauteur (km*m²)": 5141096952.9085865,
                "Nb_arbre_total": 257054847.64542934
            },
            "2009": {
                "Resultat (€/km²)": 787236211.9113574,
                "Resultat Hauteur (km*m²)": 6174401662.049862,
                "Nb_arbre_total": 308720083.1024931
            },
            "2010": {
                "Resultat (€/km²)": 743263898.8919667,
                "Resultat Hauteur (km*m²)": 5829520775.623268,
                "Nb_arbre_total": 291476038.7811634
            },
            "2011": {
                "Resultat (€/km²)": 775878469.5290859,
                "Resultat Hauteur (km*m²)": 6085321329.63989,
                "Nb_arbre_total": 304266066.48199445
            },
            "2012": {
                "Resultat (€/km²)": 789158601.1080332,
                "Resultat Hauteur (km*m²)": 6189479224.376731,
                "Nb_arbre_total": 309473961.21883655
            },
            "2013": {
                "Resultat (€/km²)": 786375498.6149584,
                "Resultat Hauteur (km*m²)": 6167650969.529085,
                "Nb_arbre_total": 308382548.47645426
            },
            "2014": {
                "Resultat (€/km²)": 794580706.371191,
                "Resultat Hauteur (km*m²)": 6232005540.1662035,
                "Nb_arbre_total": 311600277.0083102
            },
            "2015": {
                "Resultat (€/km²)": 174520657.8947368,
                "Resultat Hauteur (km*m²)": 1368789473.68421,
                "Nb_arbre_total": 68439473.68421051
            },
            "2016": {
                "Resultat (€/km²)": 775462416.897507,
                "Resultat Hauteur (km*m²)": 6082058171.745152,
                "Nb_arbre_total": 304102908.5872576
            },
            "2017": {
                "Resultat (€/km²)": 131087306.0941828,
                "Resultat Hauteur (km*m²)": 1028135734.0720221,
                "Nb_arbre_total": 51406786.7036011
            },
            "2018": {
                "Resultat (€/km²)": 175081163.43490306,
                "Resultat Hauteur (km*m²)": 1373185595.567867,
                "Nb_arbre_total": 68659279.77839334
            },
            "2019": {
                "Resultat (€/km²)": 132679466.75900277,
                "Resultat Hauteur (km*m²)": 1040623268.698061,
                "Nb_arbre_total": 52031163.43490305
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 412722091.4127423,
                "Resultat Hauteur (km*m²)": 3237036011.0803323,
                "Nb_arbre_total": 161851800.5540166
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 293292029.0858725,
                "Resultat Hauteur (km*m²)": 2300329639.889196,
                "Nb_arbre_total": 115016481.9944598
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 203582181.44044313,
                "Resultat Hauteur (km*m²)": 1596722991.68975,
                "Nb_arbre_total": 79836149.5844875
            },
        },
        "Chêne": {
            "2000": {
                "Resultat (€/km²)": 141128415.51246536,
                "Resultat Hauteur (km*m²)": 1080064404.4321327,
                "Nb_arbre_total": 43202576.17728531
            },
            "2001": {
                "Resultat (€/km²)": 441659939.0581717,
                "Resultat Hauteur (km*m²)": 3380050554.0166197,
                "Nb_arbre_total": 135202022.1606648
            },
            "2002": {
                "Resultat (€/km²)": 105248470.91412747,
                "Resultat Hauteur (km*m²)": 805472991.689751,
                "Nb_arbre_total": 32218919.66759004
            },
            "2003": {
                "Resultat (€/km²)": 631803285.3185594,
                "Resultat Hauteur (km*m²)": 4835229224.37673,
                "Nb_arbre_total": 193409168.97506922
            },
            "2004": {
                "Resultat (€/km²)": 466047551.2465373,
                "Resultat Hauteur (km*m²)": 3566690443.213296,
                "Nb_arbre_total": 142667617.72853184
            },
            "2005": {
                "Resultat (€/km²)": 482523224.37673134,
                "Resultat Hauteur (km*m²)": 3692779778.393352,
                "Nb_arbre_total": 147711191.13573408
            },
            "2006": {
                "Resultat (€/km²)": 509088282.5484763,
                "Resultat Hauteur (km*m²)": 3896083795.0138493,
                "Nb_arbre_total": 155843351.80055398
            },
            "2007": {
                "Resultat (€/km²)": 599221407.202216,
                "Resultat Hauteur (km*m²)": 4585878116.34349,
                "Nb_arbre_total": 183435124.6537396
            },
            "2008": {
                "Resultat (€/km²)": 503827501.38504153,
                "Resultat Hauteur (km*m²)": 3855822714.6814404,
                "Nb_arbre_total": 154232908.5872576
            },
            "2009": {
                "Resultat (€/km²)": 605091362.8808864,
                "Resultat Hauteur (km*m²)": 4630801246.537396,
                "Nb_arbre_total": 185232049.86149585
            },
            "2010": {
                "Resultat (€/km²)": 571293036.0110803,
                "Resultat Hauteur (km*m²)": 4372140581.717451,
                "Nb_arbre_total": 174885623.26869804
            },
            "2011": {
                "Resultat (€/km²)": 596361490.3047092,
                "Resultat Hauteur (km*m²)": 4563990997.229917,
                "Nb_arbre_total": 182559639.8891967
            },
            "2012": {
                "Resultat (€/km²)": 606568963.9889196,
                "Resultat Hauteur (km*m²)": 4642109418.282548,
                "Nb_arbre_total": 185684376.73130193
            },
            "2013": {
                "Resultat (€/km²)": 604429795.0138503,
                "Resultat Hauteur (km*m²)": 4625738227.146814,
                "Nb_arbre_total": 185029529.08587256
            },
            "2014": {
                "Resultat (€/km²)": 610736542.936288,
                "Resultat Hauteur (km*m²)": 4674004155.124653,
                "Nb_arbre_total": 186960166.20498613
            },
            "2015": {
                "Resultat (€/km²)": 134141368.42105259,
                "Resultat Hauteur (km*m²)": 1026592105.2631576,
                "Nb_arbre_total": 41063684.2105263
            },
            "2016": {
                "Resultat (€/km²)": 596041700.8310249,
                "Resultat Hauteur (km*m²)": 4561543628.808865,
                "Nb_arbre_total": 182461745.15235457
            },
            "2017": {
                "Resultat (€/km²)": 100757301.93905815,
                "Resultat Hauteur (km*m²)": 771101800.5540165,
                "Nb_arbre_total": 30844072.02216066
            },
            "2018": {
                "Resultat (€/km²)": 134572188.36565095,
                "Resultat Hauteur (km*m²)": 1029889196.6759002,
                "Nb_arbre_total": 41195567.86703601
            },
            "2019": {
                "Resultat (€/km²)": 101981080.33240998,
                "Resultat Hauteur (km*m²)": 780467451.5235457,
                "Nb_arbre_total": 31218698.06094183
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 317229529.08587253,
                "Resultat Hauteur (km*m²)": 2427777008.310249,
                "Nb_arbre_total": 97111080.33240996
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 225432304.7091412,
                "Resultat Hauteur (km*m²)": 1725247229.916897,
                "Nb_arbre_total": 69009889.19667588
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 156478853.1855955,
                "Resultat Hauteur (km*m²)": 1197542243.7673125,
                "Nb_arbre_total": 47901689.7506925
            },
        },
        "Pin": {
            "2000": {
                "Resultat (€/km²)": 367221897.50692517,
                "Resultat Hauteur (km*m²)": 3456206094.182825,
                "Nb_arbre_total": 115206869.80609417
            },
            "2001": {
                "Resultat (€/km²)": 1149217188.3656507,
                "Resultat Hauteur (km*m²)": 10816161772.853184,
                "Nb_arbre_total": 360538725.7617728
            },
            "2002": {
                "Resultat (€/km²)": 273860817.17451537,
                "Resultat Hauteur (km*m²)": 2577513573.407203,
                "Nb_arbre_total": 85917119.11357345
            },
            "2003": {
                "Resultat (€/km²)": 1643977936.2880883,
                "Resultat Hauteur (km*m²)": 15472733518.005537,
                "Nb_arbre_total": 515757783.9335179
            },
            "2004": {
                "Resultat (€/km²)": 1212674750.6925206,
                "Resultat Hauteur (km*m²)": 11413409418.282547,
                "Nb_arbre_total": 380446980.6094182
            },
            "2005": {
                "Resultat (€/km²)": 1255545124.6537397,
                "Resultat Hauteur (km*m²)": 11816895290.858727,
                "Nb_arbre_total": 393896509.69529086
            },
            "2006": {
                "Resultat (€/km²)": 1324668490.3047087,
                "Resultat Hauteur (km*m²)": 12467468144.044317,
                "Nb_arbre_total": 415582271.46814394
            },
            "2007": {
                "Resultat (€/km²)": 1559198559.5567865,
                "Resultat Hauteur (km*m²)": 14674809972.299168,
                "Nb_arbre_total": 489160332.40997225
            },
            "2008": {
                "Resultat (€/km²)": 1310979722.9916897,
                "Resultat Hauteur (km*m²)": 12338632686.980608,
                "Nb_arbre_total": 411287756.23268694
            },
            "2009": {
                "Resultat (€/km²)": 1574472423.8227148,
                "Resultat Hauteur (km*m²)": 14818563988.919668,
                "Nb_arbre_total": 493952132.9639889
            },
            "2010": {
                "Resultat (€/km²)": 1486527797.7839334,
                "Resultat Hauteur (km*m²)": 13990849861.495844,
                "Nb_arbre_total": 466361662.04986143
            },
            "2011": {
                "Resultat (€/km²)": 1551756939.0581717,
                "Resultat Hauteur (km*m²)": 14604771191.135735,
                "Nb_arbre_total": 486825706.37119114
            },
            "2012": {
                "Resultat (€/km²)": 1578317202.2160664,
                "Resultat Hauteur (km*m²)": 14854750138.504154,
                "Nb_arbre_total": 495158337.95013845
            },
            "2013": {
                "Resultat (€/km²)": 1572750997.2299168,
                "Resultat Hauteur (km*m²)": 14802362326.869806,
                "Nb_arbre_total": 493412077.56232685
            },
            "2014": {
                "Resultat (€/km²)": 1589161412.742382,
                "Resultat Hauteur (km*m²)": 14956813296.39889,
                "Nb_arbre_total": 498560443.2132963
            },
            "2015": {
                "Resultat (€/km²)": 349041315.7894736,
                "Resultat Hauteur (km*m²)": 3285094736.8421044,
                "Nb_arbre_total": 109503157.89473681
            },
            "2016": {
                "Resultat (€/km²)": 1550924833.795014,
                "Resultat Hauteur (km*m²)": 14596939612.188366,
                "Nb_arbre_total": 486564653.73961216
            },
            "2017": {
                "Resultat (€/km²)": 262174612.1883656,
                "Resultat Hauteur (km*m²)": 2467525761.772853,
                "Nb_arbre_total": 82250858.72576176
            },
            "2018": {
                "Resultat (€/km²)": 350162326.8698061,
                "Resultat Hauteur (km*m²)": 3295645429.3628807,
                "Nb_arbre_total": 109854847.64542936
            },
            "2019": {
                "Resultat (€/km²)": 265358933.51800555,
                "Resultat Hauteur (km*m²)": 2497495844.875346,
                "Nb_arbre_total": 83249861.49584489
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 825444182.8254846,
                "Resultat Hauteur (km*m²)": 7768886426.592797,
                "Nb_arbre_total": 258962880.88642657
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 586584058.171745,
                "Resultat Hauteur (km*m²)": 5520791135.734071,
                "Nb_arbre_total": 184026371.19113567
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 407164362.88088626,
                "Resultat Hauteur (km*m²)": 3832135180.0554,
                "Nb_arbre_total": 127737839.33518
            },
        },
        "Hêtre": {
            "2000": {
                "Resultat (€/km²)": 172810304.70914125,
                "Resultat Hauteur (km*m²)": 1267275567.8670359,
                "Nb_arbre_total": 57603434.903047085
            },
            "2001": {
                "Resultat (€/km²)": 540808088.6426592,
                "Resultat Hauteur (km*m²)": 3965925983.379501,
                "Nb_arbre_total": 180269362.8808864
            },
            "2002": {
                "Resultat (€/km²)": 128875678.67036016,
                "Resultat Hauteur (km*m²)": 945088310.2493079,
                "Nb_arbre_total": 42958559.55678672
            },
            "2003": {
                "Resultat (€/km²)": 773636675.9002769,
                "Resultat Hauteur (km*m²)": 5673335623.268697,
                "Nb_arbre_total": 257878891.96675894
            },
            "2004": {
                "Resultat (€/km²)": 570670470.9141273,
                "Resultat Hauteur (km*m²)": 4184916786.7036004,
                "Nb_arbre_total": 190223490.3047091
            },
            "2005": {
                "Resultat (€/km²)": 590844764.5429363,
                "Resultat Hauteur (km*m²)": 4332861606.648199,
                "Nb_arbre_total": 196948254.84764543
            },
            "2006": {
                "Resultat (€/km²)": 623373407.2022159,
                "Resultat Hauteur (km*m²)": 4571404986.149583,
                "Nb_arbre_total": 207791135.73407197
            },
            "2007": {
                "Resultat (€/km²)": 733740498.6149584,
                "Resultat Hauteur (km*m²)": 5380763656.509694,
                "Nb_arbre_total": 244580166.20498613
            },
            "2008": {
                "Resultat (€/km²)": 616931634.3490304,
                "Resultat Hauteur (km*m²)": 4524165318.559556,
                "Nb_arbre_total": 205643878.11634347
            },
            "2009": {
                "Resultat (€/km²)": 740928199.4459834,
                "Resultat Hauteur (km*m²)": 5433473462.603878,
                "Nb_arbre_total": 246976066.48199445
            },
            "2010": {
                "Resultat (€/km²)": 699542493.0747921,
                "Resultat Hauteur (km*m²)": 5129978282.548476,
                "Nb_arbre_total": 233180831.02493072
            },
            "2011": {
                "Resultat (€/km²)": 730238559.5567868,
                "Resultat Hauteur (km*m²)": 5355082770.083102,
                "Nb_arbre_total": 243412853.18559557
            },
            "2012": {
                "Resultat (€/km²)": 742737506.9252077,
                "Resultat Hauteur (km*m²)": 5446741717.451523,
                "Nb_arbre_total": 247579168.97506922
            },
            "2013": {
                "Resultat (€/km²)": 740118116.3434902,
                "Resultat Hauteur (km*m²)": 5427532853.1855955,
                "Nb_arbre_total": 246706038.78116342
            },
            "2014": {
                "Resultat (€/km²)": 747840664.8199445,
                "Resultat Hauteur (km*m²)": 5484164875.346259,
                "Nb_arbre_total": 249280221.60664815
            },
            "2015": {
                "Resultat (€/km²)": 164254736.8421052,
                "Resultat Hauteur (km*m²)": 1204534736.842105,
                "Nb_arbre_total": 54751578.947368406
            },
            "2016": {
                "Resultat (€/km²)": 729846980.6094183,
                "Resultat Hauteur (km*m²)": 5352211191.135734,
                "Nb_arbre_total": 243282326.86980608
            },
            "2017": {
                "Resultat (€/km²)": 123376288.08864264,
                "Resultat Hauteur (km*m²)": 904759445.9833794,
                "Nb_arbre_total": 41125429.36288088
            },
            "2018": {
                "Resultat (€/km²)": 164782271.46814403,
                "Resultat Hauteur (km*m²)": 1208403324.0997229,
                "Nb_arbre_total": 54927423.82271468
            },
            "2019": {
                "Resultat (€/km²)": 124874792.24376732,
                "Resultat Hauteur (km*m²)": 915748476.4542937,
                "Nb_arbre_total": 41624930.74792244
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 388444321.32963985,
                "Resultat Hauteur (km*m²)": 2848591689.7506924,
                "Nb_arbre_total": 129481440.44321328
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 276039556.7867035,
                "Resultat Hauteur (km*m²)": 2024290083.1024926,
                "Nb_arbre_total": 92013185.59556784
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 191606759.00277,
                "Resultat Hauteur (km*m²)": 1405116232.68698,
                "Nb_arbre_total": 63868919.66759
            },
        },
        "Sapin": {
            "2000": {
                "Resultat (€/km²)": 244814598.3379501,
                "Resultat Hauteur (km*m²)": 3024180332.4099717,
                "Nb_arbre_total": 86405152.35457063
            },
            "2001": {
                "Resultat (€/km²)": 766144792.2437671,
                "Resultat Hauteur (km*m²)": 9464141551.246536,
                "Nb_arbre_total": 270404044.3213296
            },
            "2002": {
                "Resultat (€/km²)": 182573878.11634356,
                "Resultat Hauteur (km*m²)": 2255324376.7313027,
                "Nb_arbre_total": 64437839.33518008
            },
            "2003": {
                "Resultat (€/km²)": 1095985290.8587255,
                "Resultat Hauteur (km*m²)": 13538641828.254845,
                "Nb_arbre_total": 386818337.95013845
            },
            "2004": {
                "Resultat (€/km²)": 808449833.7950137,
                "Resultat Hauteur (km*m²)": 9986733240.997229,
                "Nb_arbre_total": 285335235.4570637
            },
            "2005": {
                "Resultat (€/km²)": 837030083.102493,
                "Resultat Hauteur (km*m²)": 10339783379.501385,
                "Nb_arbre_total": 295422382.27146816
            },
            "2006": {
                "Resultat (€/km²)": 883112326.8698058,
                "Resultat Hauteur (km*m²)": 10909034626.038778,
                "Nb_arbre_total": 311686703.60110795
            },
            "2007": {
                "Resultat (€/km²)": 1039465706.371191,
                "Resultat Hauteur (km*m²)": 12840458725.76177,
                "Nb_arbre_total": 366870249.3074792
            },
            "2008": {
                "Resultat (€/km²)": 873986481.9944597,
                "Resultat Hauteur (km*m²)": 10796303601.108032,
                "Nb_arbre_total": 308465817.1745152
            },
            "2009": {
                "Resultat (€/km²)": 1049648282.5484765,
                "Resultat Hauteur (km*m²)": 12966243490.304708,
                "Nb_arbre_total": 370464099.7229917
            },
            "2010": {
                "Resultat (€/km²)": 991018531.8559556,
                "Resultat Hauteur (km*m²)": 12241993628.808863,
                "Nb_arbre_total": 349771246.5373961
            },
            "2011": {
                "Resultat (€/km²)": 1034504626.0387812,
                "Resultat Hauteur (km*m²)": 12779174792.243767,
                "Nb_arbre_total": 365119279.7783934
            },
            "2012": {
                "Resultat (€/km²)": 1052211468.1440443,
                "Resultat Hauteur (km*m²)": 12997906371.191135,
                "Nb_arbre_total": 371368753.46260387
            },
            "2013": {
                "Resultat (€/km²)": 1048500664.8199445,
                "Resultat Hauteur (km*m²)": 12952067036.01108,
                "Nb_arbre_total": 370059058.1717451
            },
            "2014": {
                "Resultat (€/km²)": 1059440941.8282547,
                "Resultat Hauteur (km*m²)": 13087211634.349028,
                "Nb_arbre_total": 373920332.40997225
            },
            "2015": {
                "Resultat (€/km²)": 232694210.52631572,
                "Resultat Hauteur (km*m²)": 2874457894.736841,
                "Nb_arbre_total": 82127368.4210526
            },
            "2016": {
                "Resultat (€/km²)": 1033949889.1966759,
                "Resultat Hauteur (km*m²)": 12772322160.66482,
                "Nb_arbre_total": 364923490.30470914
            },
            "2017": {
                "Resultat (€/km²)": 174783074.79224375,
                "Resultat Hauteur (km*m²)": 2159085041.551246,
                "Nb_arbre_total": 61688144.04432132
            },
            "2018": {
                "Resultat (€/km²)": 233441551.2465374,
                "Resultat Hauteur (km*m²)": 2883689750.6925206,
                "Nb_arbre_total": 82391135.73407201
            },
            "2019": {
                "Resultat (€/km²)": 176905955.67867038,
                "Resultat Hauteur (km*m²)": 2185308864.2659283,
                "Nb_arbre_total": 62437396.12188366
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 550296121.8836565,
                "Resultat Hauteur (km*m²)": 6797775623.268698,
                "Nb_arbre_total": 194222160.66481993
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 391056038.78116333,
                "Resultat Hauteur (km*m²)": 4830692243.767311,
                "Nb_arbre_total": 138019778.39335176
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 271442908.5872575,
                "Resultat Hauteur (km*m²)": 3353118282.5484753,
                "Nb_arbre_total": 95803379.501385
            },
        },
        "Orme": {
            "2000": {
                "Resultat (€/km²)": 115206869.80609417,
                "Resultat Hauteur (km*m²)": 648038642.6592797,
                "Nb_arbre_total": 36002146.81440443
            },
            "2001": {
                "Resultat (€/km²)": 360538725.7617728,
                "Resultat Hauteur (km*m²)": 2028030332.409972,
                "Nb_arbre_total": 112668351.80055399
            },
            "2002": {
                "Resultat (€/km²)": 85917119.11357345,
                "Resultat Hauteur (km*m²)": 483283795.0138506,
                "Nb_arbre_total": 26849099.7229917
            },
            "2003": {
                "Resultat (€/km²)": 515757783.9335179,
                "Resultat Hauteur (km*m²)": 2901137534.626038,
                "Nb_arbre_total": 161174307.47922435
            },
            "2004": {
                "Resultat (€/km²)": 380446980.6094182,
                "Resultat Hauteur (km*m²)": 2140014265.9279776,
                "Nb_arbre_total": 118889681.44044319
            },
            "2005": {
                "Resultat (€/km²)": 393896509.69529086,
                "Resultat Hauteur (km*m²)": 2215667867.036011,
                "Nb_arbre_total": 123092659.27977839
            },
            "2006": {
                "Resultat (€/km²)": 415582271.46814394,
                "Resultat Hauteur (km*m²)": 2337650277.0083094,
                "Nb_arbre_total": 129869459.83379497
            },
            "2007": {
                "Resultat (€/km²)": 489160332.40997225,
                "Resultat Hauteur (km*m²)": 2751526869.8060937,
                "Nb_arbre_total": 152862603.8781163
            },
            "2008": {
                "Resultat (€/km²)": 411287756.23268694,
                "Resultat Hauteur (km*m²)": 2313493628.808864,
                "Nb_arbre_total": 128527423.82271467
            },
            "2009": {
                "Resultat (€/km²)": 493952132.9639889,
                "Resultat Hauteur (km*m²)": 2778480747.9224377,
                "Nb_arbre_total": 154360041.55124655
            },
            "2010": {
                "Resultat (€/km²)": 466361662.04986143,
                "Resultat Hauteur (km*m²)": 2623284349.0304704,
                "Nb_arbre_total": 145738019.3905817
            },
            "2011": {
                "Resultat (€/km²)": 486825706.37119114,
                "Resultat Hauteur (km*m²)": 2738394598.33795,
                "Nb_arbre_total": 152133033.24099723
            },
            "2012": {
                "Resultat (€/km²)": 495158337.95013845,
                "Resultat Hauteur (km*m²)": 2785265650.9695287,
                "Nb_arbre_total": 154736980.60941827
            },
            "2013": {
                "Resultat (€/km²)": 493412077.56232685,
                "Resultat Hauteur (km*m²)": 2775442936.2880883,
                "Nb_arbre_total": 154191274.23822713
            },
            "2014": {
                "Resultat (€/km²)": 498560443.2132963,
                "Resultat Hauteur (km*m²)": 2804402493.074792,
                "Nb_arbre_total": 155800138.5041551
            },
            "2015": {
                "Resultat (€/km²)": 109503157.89473681,
                "Resultat Hauteur (km*m²)": 615955263.1578945,
                "Nb_arbre_total": 34219736.842105255
            },
            "2016": {
                "Resultat (€/km²)": 486564653.73961216,
                "Resultat Hauteur (km*m²)": 2736926177.2853184,
                "Nb_arbre_total": 152051454.2936288
            },
            "2017": {
                "Resultat (€/km²)": 82250858.72576176,
                "Resultat Hauteur (km*m²)": 462661080.3324099,
                "Nb_arbre_total": 25703393.35180055
            },
            "2018": {
                "Resultat (€/km²)": 109854847.64542936,
                "Resultat Hauteur (km*m²)": 617933518.0055401,
                "Nb_arbre_total": 34329639.88919667
            },
            "2019": {
                "Resultat (€/km²)": 83249861.49584489,
                "Resultat Hauteur (km*m²)": 468280470.91412747,
                "Nb_arbre_total": 26015581.717451524
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 258962880.88642657,
                "Resultat Hauteur (km*m²)": 1456666204.9861495,
                "Nb_arbre_total": 80925900.2770083
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 184026371.19113567,
                "Resultat Hauteur (km*m²)": 1035148337.9501382,
                "Nb_arbre_total": 57508240.9972299
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 127737839.33518,
                "Resultat Hauteur (km*m²)": 718525346.2603875,
                "Nb_arbre_total": 39918074.79224375
            },
        },
        "Peuplier": {
            "2000": {
                "Resultat (€/km²)": 187211163.43490303,
                "Resultat Hauteur (km*m²)": 2822568310.249307,
                "Nb_arbre_total": 100806011.0803324
            },
            "2001": {
                "Resultat (€/km²)": 585875429.3628808,
                "Resultat Hauteur (km*m²)": 8833198781.163433,
                "Nb_arbre_total": 315471385.0415512
            },
            "2002": {
                "Resultat (€/km²)": 139615318.55955684,
                "Resultat Hauteur (km*m²)": 2104969418.2825494,
                "Nb_arbre_total": 75177479.22437677
            },
            "2003": {
                "Resultat (€/km²)": 838106398.8919666,
                "Resultat Hauteur (km*m²)": 12636065706.37119,
                "Nb_arbre_total": 451288060.94182813
            },
            "2004": {
                "Resultat (€/km²)": 618226343.4903046,
                "Resultat Hauteur (km*m²)": 9320951024.930746,
                "Nb_arbre_total": 332891108.0332409
            },
            "2005": {
                "Resultat (€/km²)": 640081828.2548476,
                "Resultat Hauteur (km*m²)": 9650464487.534626,
                "Nb_arbre_total": 344659445.9833795
            },
            "2006": {
                "Resultat (€/km²)": 675321191.1357338,
                "Resultat Hauteur (km*m²)": 10181765650.969526,
                "Nb_arbre_total": 363634487.53462595
            },
            "2007": {
                "Resultat (€/km²)": 794885540.1662049,
                "Resultat Hauteur (km*m²)": 11984428144.04432,
                "Nb_arbre_total": 428015290.8587257
            },
            "2008": {
                "Resultat (€/km²)": 668342603.8781163,
                "Resultat Hauteur (km*m²)": 10076550027.70083,
                "Nb_arbre_total": 359876786.70360106
            },
            "2009": {
                "Resultat (€/km²)": 802672216.0664821,
                "Resultat Hauteur (km*m²)": 12101827257.61773,
                "Nb_arbre_total": 432208116.3434903
            },
            "2010": {
                "Resultat (€/km²)": 757837700.8310249,
                "Resultat Hauteur (km*m²)": 11425860720.221605,
                "Nb_arbre_total": 408066454.29362875
            },
            "2011": {
                "Resultat (€/km²)": 791091772.8531857,
                "Resultat Hauteur (km*m²)": 11927229806.094183,
                "Nb_arbre_total": 425972493.07479227
            },
            "2012": {
                "Resultat (€/km²)": 804632299.168975,
                "Resultat Hauteur (km*m²)": 12131379279.778393,
                "Nb_arbre_total": 433263545.7063712
            },
            "2013": {
                "Resultat (€/km²)": 801794626.0387812,
                "Resultat Hauteur (km*m²)": 12088595900.277008,
                "Nb_arbre_total": 431735567.867036
            },
            "2014": {
                "Resultat (€/km²)": 810160720.2216065,
                "Resultat Hauteur (km*m²)": 12214730858.72576,
                "Nb_arbre_total": 436240387.81163424
            },
            "2015": {
                "Resultat (€/km²)": 177942631.5789473,
                "Resultat Hauteur (km*m²)": 2682827368.421052,
                "Nb_arbre_total": 95815263.1578947
            },
            "2016": {
                "Resultat (€/km²)": 790667562.3268698,
                "Resultat Hauteur (km*m²)": 11920834016.620499,
                "Nb_arbre_total": 425744072.02216065
            },
            "2017": {
                "Resultat (€/km²)": 133657645.42936286,
                "Resultat Hauteur (km*m²)": 2015146038.7811632,
                "Nb_arbre_total": 71969501.38504153
            },
            "2018": {
                "Resultat (€/km²)": 178514127.4238227,
                "Resultat Hauteur (km*m²)": 2691443767.3130193,
                "Nb_arbre_total": 96122991.68975069
            },
            "2019": {
                "Resultat (€/km²)": 135281024.93074793,
                "Resultat Hauteur (km*m²)": 2039621606.6481996,
                "Nb_arbre_total": 72843628.80886427
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 420814681.44044316,
                "Resultat Hauteur (km*m²)": 6344590581.717451,
                "Nb_arbre_total": 226592520.77562326
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 299042853.18559545,
                "Resultat Hauteur (km*m²)": 4508646094.182824,
                "Nb_arbre_total": 161023074.79224372
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 207573988.9196675,
                "Resultat Hauteur (km*m²)": 3129577063.7119102,
                "Nb_arbre_total": 111770609.41828251
            },
        },
        "Bouleau": {
            "2000": {
                "Resultat (€/km²)": 144008587.2576177,
                "Resultat Hauteur (km*m²)": 1008060110.803324,
                "Nb_arbre_total": 50403005.5401662
            },
            "2001": {
                "Resultat (€/km²)": 450673407.20221597,
                "Resultat Hauteur (km*m²)": 3154713850.415512,
                "Nb_arbre_total": 157735692.5207756
            },
            "2002": {
                "Resultat (€/km²)": 107396398.8919668,
                "Resultat Hauteur (km*m²)": 751774792.2437676,
                "Nb_arbre_total": 37588739.612188384
            },
            "2003": {
                "Resultat (€/km²)": 644697229.9168974,
                "Resultat Hauteur (km*m²)": 4512880609.418282,
                "Nb_arbre_total": 225644030.47091407
            },
            "2004": {
                "Resultat (€/km²)": 475558725.76177275,
                "Resultat Hauteur (km*m²)": 3328911080.3324094,
                "Nb_arbre_total": 166445554.01662046
            },
            "2005": {
                "Resultat (€/km²)": 492370637.11911356,
                "Resultat Hauteur (km*m²)": 3446594459.833795,
                "Nb_arbre_total": 172329722.99168974
            },
            "2006": {
                "Resultat (€/km²)": 519477839.33517987,
                "Resultat Hauteur (km*m²)": 3636344875.346259,
                "Nb_arbre_total": 181817243.76731297
            },
            "2007": {
                "Resultat (€/km²)": 611450415.5124652,
                "Resultat Hauteur (km*m²)": 4280152908.587257,
                "Nb_arbre_total": 214007645.42936286
            },
            "2008": {
                "Resultat (€/km²)": 514109695.2908587,
                "Resultat Hauteur (km*m²)": 3598767867.0360107,
                "Nb_arbre_total": 179938393.35180053
            },
            "2009": {
                "Resultat (€/km²)": 617440166.2049862,
                "Resultat Hauteur (km*m²)": 4322081163.434903,
                "Nb_arbre_total": 216104058.17174515
            },
            "2010": {
                "Resultat (€/km²)": 582952077.5623268,
                "Resultat Hauteur (km*m²)": 4080664542.9362874,
                "Nb_arbre_total": 204033227.14681438
            },
            "2011": {
                "Resultat (€/km²)": 608532132.9639889,
                "Resultat Hauteur (km*m²)": 4259724930.7479224,
                "Nb_arbre_total": 212986246.53739613
            },
            "2012": {
                "Resultat (€/km²)": 618947922.4376731,
                "Resultat Hauteur (km*m²)": 4332635457.063711,
                "Nb_arbre_total": 216631772.8531856
            },
            "2013": {
                "Resultat (€/km²)": 616765096.9529085,
                "Resultat Hauteur (km*m²)": 4317355678.67036,
                "Nb_arbre_total": 215867783.933518
            },
            "2014": {
                "Resultat (€/km²)": 623200554.0166204,
                "Resultat Hauteur (km*m²)": 4362403878.116343,
                "Nb_arbre_total": 218120193.90581712
            },
            "2015": {
                "Resultat (€/km²)": 136878947.36842102,
                "Resultat Hauteur (km*m²)": 958152631.5789471,
                "Nb_arbre_total": 47907631.57894735
            },
            "2016": {
                "Resultat (€/km²)": 608205817.1745152,
                "Resultat Hauteur (km*m²)": 4257440720.2216067,
                "Nb_arbre_total": 212872036.01108032
            },
            "2017": {
                "Resultat (€/km²)": 102813573.4072022,
                "Resultat Hauteur (km*m²)": 719695013.8504155,
                "Nb_arbre_total": 35984750.69252077
            },
            "2018": {
                "Resultat (€/km²)": 137318559.5567867,
                "Resultat Hauteur (km*m²)": 961229916.8975068,
                "Nb_arbre_total": 48061495.84487534
            },
            "2019": {
                "Resultat (€/km²)": 104062326.8698061,
                "Resultat Hauteur (km*m²)": 728436288.0886427,
                "Nb_arbre_total": 36421814.40443213
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 323703601.1080332,
                "Resultat Hauteur (km*m²)": 2265925207.7562323,
                "Nb_arbre_total": 113296260.38781163
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 230032963.9889196,
                "Resultat Hauteur (km*m²)": 1610230747.9224372,
                "Nb_arbre_total": 80511537.39612186
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 159672299.168975,
                "Resultat Hauteur (km*m²)": 1117706094.182825,
                "Nb_arbre_total": 55885304.709141254
            },
        },
        "Tilleul": {
            "2000": {
                "Resultat (€/km²)": 172810304.70914125,
                "Resultat Hauteur (km*m²)": 1166469556.7867033,
                "Nb_arbre_total": 64803864.26592797
            },
            "2001": {
                "Resultat (€/km²)": 540808088.6426592,
                "Resultat Hauteur (km*m²)": 3650454598.3379493,
                "Nb_arbre_total": 202803033.2409972
            },
            "2002": {
                "Resultat (€/km²)": 128875678.67036016,
                "Resultat Hauteur (km*m²)": 869910831.0249311,
                "Nb_arbre_total": 48328379.50138506
            },
            "2003": {
                "Resultat (€/km²)": 773636675.9002769,
                "Resultat Hauteur (km*m²)": 5222047562.326869,
                "Nb_arbre_total": 290113753.4626038
            },
            "2004": {
                "Resultat (€/km²)": 570670470.9141273,
                "Resultat Hauteur (km*m²)": 3852025678.6703596,
                "Nb_arbre_total": 214001426.59279776
            },
            "2005": {
                "Resultat (€/km²)": 590844764.5429363,
                "Resultat Hauteur (km*m²)": 3988202160.66482,
                "Nb_arbre_total": 221566786.70360112
            },
            "2006": {
                "Resultat (€/km²)": 623373407.2022159,
                "Resultat Hauteur (km*m²)": 4207770498.614957,
                "Nb_arbre_total": 233765027.70083094
            },
            "2007": {
                "Resultat (€/km²)": 733740498.6149584,
                "Resultat Hauteur (km*m²)": 4952748365.650969,
                "Nb_arbre_total": 275152686.98060936
            },
            "2008": {
                "Resultat (€/km²)": 616931634.3490304,
                "Resultat Hauteur (km*m²)": 4164288531.855955,
                "Nb_arbre_total": 231349362.8808864
            },
            "2009": {
                "Resultat (€/km²)": 740928199.4459834,
                "Resultat Hauteur (km*m²)": 5001265346.260388,
                "Nb_arbre_total": 277848074.7922438
            },
            "2010": {
                "Resultat (€/km²)": 699542493.0747921,
                "Resultat Hauteur (km*m²)": 4721911828.254848,
                "Nb_arbre_total": 262328434.90304706
            },
            "2011": {
                "Resultat (€/km²)": 730238559.5567868,
                "Resultat Hauteur (km*m²)": 4929110277.00831,
                "Nb_arbre_total": 273839459.833795
            },
            "2012": {
                "Resultat (€/km²)": 742737506.9252077,
                "Resultat Hauteur (km*m²)": 5013478171.7451515,
                "Nb_arbre_total": 278526565.0969529
            },
            "2013": {
                "Resultat (€/km²)": 740118116.3434902,
                "Resultat Hauteur (km*m²)": 4995797285.31856,
                "Nb_arbre_total": 277544293.62880886
            },
            "2014": {
                "Resultat (€/km²)": 747840664.8199445,
                "Resultat Hauteur (km*m²)": 5047924487.534625,
                "Nb_arbre_total": 280440249.3074792
            },
            "2015": {
                "Resultat (€/km²)": 164254736.8421052,
                "Resultat Hauteur (km*m²)": 1108719473.68421,
                "Nb_arbre_total": 61595526.31578945
            },
            "2016": {
                "Resultat (€/km²)": 729846980.6094183,
                "Resultat Hauteur (km*m²)": 4926467119.113573,
                "Nb_arbre_total": 273692617.72853184
            },
            "2017": {
                "Resultat (€/km²)": 123376288.08864264,
                "Resultat Hauteur (km*m²)": 832789944.5983379,
                "Nb_arbre_total": 46266108.03324099
            },
            "2018": {
                "Resultat (€/km²)": 164782271.46814403,
                "Resultat Hauteur (km*m²)": 1112280332.4099722,
                "Nb_arbre_total": 61793351.800554015
            },
            "2019": {
                "Resultat (€/km²)": 124874792.24376732,
                "Resultat Hauteur (km*m²)": 842904847.6454294,
                "Nb_arbre_total": 46828047.091412745
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 388444321.32963985,
                "Resultat Hauteur (km*m²)": 2621999168.975069,
                "Nb_arbre_total": 145666620.49861494
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 276039556.7867035,
                "Resultat Hauteur (km*m²)": 1863267008.3102489,
                "Nb_arbre_total": 103514833.79501382
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 191606759.00277,
                "Resultat Hauteur (km*m²)": 1293345623.2686975,
                "Nb_arbre_total": 71852534.62603875
            },
        },
        "Aulne": {
            "2000": {
                "Resultat (€/km²)": 128167642.65927976,
                "Resultat Hauteur (km*m²)": 1188070844.8753462,
                "Nb_arbre_total": 79204722.99168974
            },
            "2001": {
                "Resultat (€/km²)": 401099332.40997225,
                "Resultat Hauteur (km*m²)": 3718055609.418282,
                "Nb_arbre_total": 247870373.9612188
            },
            "2002": {
                "Resultat (€/km²)": 95582795.01385045,
                "Resultat Hauteur (km*m²)": 886020290.8587261,
                "Nb_arbre_total": 59068019.39058174
            },
            "2003": {
                "Resultat (€/km²)": 573780534.6260387,
                "Resultat Hauteur (km*m²)": 5318752146.814404,
                "Nb_arbre_total": 354583476.45429355
            },
            "2004": {
                "Resultat (€/km²)": 423247265.92797774,
                "Resultat Hauteur (km*m²)": 3923359487.5346255,
                "Nb_arbre_total": 261557299.16897503
            },
            "2005": {
                "Resultat (€/km²)": 438209867.0360111,
                "Resultat Hauteur (km*m²)": 4062057756.232687,
                "Nb_arbre_total": 270803850.41551244
            },
            "2006": {
                "Resultat (€/km²)": 462335277.0083101,
                "Resultat Hauteur (km*m²)": 4285692174.515234,
                "Nb_arbre_total": 285712811.6343489
            },
            "2007": {
                "Resultat (€/km²)": 544190869.806094,
                "Resultat Hauteur (km*m²)": 5044465927.9778385,
                "Nb_arbre_total": 336297728.5318559
            },
            "2008": {
                "Resultat (€/km²)": 457557628.80886424,
                "Resultat Hauteur (km*m²)": 4241404986.1495843,
                "Nb_arbre_total": 282760332.40997225
            },
            "2009": {
                "Resultat (€/km²)": 549521747.9224377,
                "Resultat Hauteur (km*m²)": 5093881371.191135,
                "Nb_arbre_total": 339592091.4127424
            },
            "2010": {
                "Resultat (€/km²)": 518827349.03047085,
                "Resultat Hauteur (km*m²)": 4809354639.889196,
                "Nb_arbre_total": 320623642.65927976
            },
            "2011": {
                "Resultat (€/km²)": 541593598.3379501,
                "Resultat Hauteur (km*m²)": 5020390096.9529085,
                "Nb_arbre_total": 334692673.1301939
            },
            "2012": {
                "Resultat (€/km²)": 550863650.969529,
                "Resultat Hauteur (km*m²)": 5106320360.110803,
                "Nb_arbre_total": 340421357.3407202
            },
            "2013": {
                "Resultat (€/km²)": 548920936.2880886,
                "Resultat Hauteur (km*m²)": 5088312049.861496,
                "Nb_arbre_total": 339220803.3240997
            },
            "2014": {
                "Resultat (€/km²)": 554648493.0747921,
                "Resultat Hauteur (km*m²)": 5141404570.637118,
                "Nb_arbre_total": 342760304.7091412
            },
            "2015": {
                "Resultat (€/km²)": 121822263.1578947,
                "Resultat Hauteur (km*m²)": 1129251315.7894733,
                "Nb_arbre_total": 75283421.05263156
            },
            "2016": {
                "Resultat (€/km²)": 541303177.2853185,
                "Resultat Hauteur (km*m²)": 5017697991.689751,
                "Nb_arbre_total": 334513199.44598335
            },
            "2017": {
                "Resultat (€/km²)": 91504080.33240996,
                "Resultat Hauteur (km*m²)": 848211980.6094182,
                "Nb_arbre_total": 56547465.37396121
            },
            "2018": {
                "Resultat (€/km²)": 122213518.00554016,
                "Resultat Hauteur (km*m²)": 1132878116.3434904,
                "Nb_arbre_total": 75525207.75623268
            },
            "2019": {
                "Resultat (€/km²)": 92615470.91412742,
                "Resultat Hauteur (km*m²)": 858514196.6759003,
                "Nb_arbre_total": 57234279.77839336
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 288096204.98614955,
                "Resultat Hauteur (km*m²)": 2670554709.141274,
                "Nb_arbre_total": 178036980.60941827
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 204729337.95013845,
                "Resultat Hauteur (km*m²)": 1897771952.9085867,
                "Nb_arbre_total": 126518130.19390579
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 142108346.26038775,
                "Resultat Hauteur (km*m²)": 1317296468.1440437,
                "Nb_arbre_total": 87819764.54293625
            },
        },
        "Noyer": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1008060110.803324,
                "Nb_arbre_total": 50403005.5401662
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 3154713850.415512,
                "Nb_arbre_total": 157735692.5207756
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 751774792.2437676,
                "Nb_arbre_total": 37588739.612188384
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 4512880609.418282,
                "Nb_arbre_total": 225644030.47091407
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 3328911080.3324094,
                "Nb_arbre_total": 166445554.01662046
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 3446594459.833795,
                "Nb_arbre_total": 172329722.99168974
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 3636344875.346259,
                "Nb_arbre_total": 181817243.76731297
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 4280152908.587257,
                "Nb_arbre_total": 214007645.42936286
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 3598767867.0360107,
                "Nb_arbre_total": 179938393.35180053
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 4322081163.434903,
                "Nb_arbre_total": 216104058.17174515
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 4080664542.9362874,
                "Nb_arbre_total": 204033227.14681438
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 4259724930.7479224,
                "Nb_arbre_total": 212986246.53739613
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 4332635457.063711,
                "Nb_arbre_total": 216631772.8531856
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 4317355678.67036,
                "Nb_arbre_total": 215867783.933518
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 4362403878.116343,
                "Nb_arbre_total": 218120193.90581712
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 958152631.5789471,
                "Nb_arbre_total": 47907631.57894735
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 4257440720.2216067,
                "Nb_arbre_total": 212872036.01108032
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 719695013.8504155,
                "Nb_arbre_total": 35984750.69252077
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 961229916.8975068,
                "Nb_arbre_total": 48061495.84487534
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 728436288.0886427,
                "Nb_arbre_total": 36421814.40443213
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 2265925207.7562323,
                "Nb_arbre_total": 113296260.38781163
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1610230747.9224372,
                "Nb_arbre_total": 80511537.39612186
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1117706094.182825,
                "Nb_arbre_total": 55885304.709141254
            },
        },
        "Frêne": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 864051523.5457063,
                "Nb_arbre_total": 43202576.17728531
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 2704040443.213296,
                "Nb_arbre_total": 135202022.1606648
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 644378393.3518008,
                "Nb_arbre_total": 32218919.66759004
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 3868183379.5013843,
                "Nb_arbre_total": 193409168.97506922
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 2853352354.5706367,
                "Nb_arbre_total": 142667617.72853184
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 2954223822.7146816,
                "Nb_arbre_total": 147711191.13573408
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 3116867036.0110793,
                "Nb_arbre_total": 155843351.80055398
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 3668702493.074792,
                "Nb_arbre_total": 183435124.6537396
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 3084658171.745152,
                "Nb_arbre_total": 154232908.5872576
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 3704640997.229917,
                "Nb_arbre_total": 185232049.86149585
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 3497712465.373961,
                "Nb_arbre_total": 174885623.26869804
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 3651192797.7839336,
                "Nb_arbre_total": 182559639.8891967
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 3713687534.6260386,
                "Nb_arbre_total": 185684376.73130193
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 3700590581.7174516,
                "Nb_arbre_total": 185029529.08587256
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 3739203324.0997224,
                "Nb_arbre_total": 186960166.20498613
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 821273684.2105261,
                "Nb_arbre_total": 41063684.2105263
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 3649234903.0470915,
                "Nb_arbre_total": 182461745.15235457
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 616881440.4432132,
                "Nb_arbre_total": 30844072.02216066
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 823911357.3407202,
                "Nb_arbre_total": 41195567.86703601
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 624373961.2188365,
                "Nb_arbre_total": 31218698.06094183
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 1942221606.6481993,
                "Nb_arbre_total": 97111080.33240996
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1380197783.9335177,
                "Nb_arbre_total": 69009889.19667588
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 958033795.01385,
                "Nb_arbre_total": 47901689.7506925
            },
        },
        "Merisier": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1152068698.0609417,
                "Nb_arbre_total": 57603434.903047085
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 3605387257.6177278,
                "Nb_arbre_total": 180269362.8808864
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 859171191.1357344,
                "Nb_arbre_total": 42958559.55678672
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 5157577839.335179,
                "Nb_arbre_total": 257878891.96675894
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 3804469806.094182,
                "Nb_arbre_total": 190223490.3047091
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 3938965096.9529085,
                "Nb_arbre_total": 196948254.84764543
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 4155822714.681439,
                "Nb_arbre_total": 207791135.73407197
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 4891603324.099722,
                "Nb_arbre_total": 244580166.20498613
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 4112877562.3268695,
                "Nb_arbre_total": 205643878.11634347
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 4939521329.63989,
                "Nb_arbre_total": 246976066.48199445
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 4663616620.498614,
                "Nb_arbre_total": 233180831.02493072
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 4868257063.711911,
                "Nb_arbre_total": 243412853.18559557
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 4951583379.501385,
                "Nb_arbre_total": 247579168.97506922
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 4934120775.623268,
                "Nb_arbre_total": 246706038.78116342
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 4985604432.132963,
                "Nb_arbre_total": 249280221.60664815
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 1095031578.9473681,
                "Nb_arbre_total": 54751578.947368406
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 4865646537.396122,
                "Nb_arbre_total": 243282326.86980608
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 822508587.2576176,
                "Nb_arbre_total": 41125429.36288088
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 1098548476.4542935,
                "Nb_arbre_total": 54927423.82271468
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 832498614.9584488,
                "Nb_arbre_total": 41624930.74792244
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 2589628808.8642654,
                "Nb_arbre_total": 129481440.44321328
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1840263711.9113567,
                "Nb_arbre_total": 92013185.59556784
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1277378393.3518,
                "Nb_arbre_total": 63868919.66759
            },
        },
        "Acer palmatum": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 345620609.4182825,
                "Nb_arbre_total": 28801717.451523542
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 1081616177.2853184,
                "Nb_arbre_total": 90134681.4404432
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 257751357.34072033,
                "Nb_arbre_total": 21479279.77839336
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 1547273351.8005538,
                "Nb_arbre_total": 128939445.98337947
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 1141340941.8282547,
                "Nb_arbre_total": 95111745.15235455
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 1181689529.0858727,
                "Nb_arbre_total": 98474127.42382272
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 1246746814.4044318,
                "Nb_arbre_total": 103895567.86703598
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 1467480997.2299168,
                "Nb_arbre_total": 122290083.10249306
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 1233863268.6980608,
                "Nb_arbre_total": 102821939.05817173
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 1481856398.8919668,
                "Nb_arbre_total": 123488033.24099723
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 1399084986.1495843,
                "Nb_arbre_total": 116590415.51246536
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 1460477119.1135736,
                "Nb_arbre_total": 121706426.59279779
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 1485475013.8504155,
                "Nb_arbre_total": 123789584.48753461
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 1480236232.6869805,
                "Nb_arbre_total": 123353019.39058171
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 1495681329.639889,
                "Nb_arbre_total": 124640110.80332407
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 328509473.6842104,
                "Nb_arbre_total": 27375789.473684203
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 1459693961.2188365,
                "Nb_arbre_total": 121641163.43490304
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 246752576.17728528,
                "Nb_arbre_total": 20562714.68144044
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 329564542.93628806,
                "Nb_arbre_total": 27463711.91135734
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 249749584.48753464,
                "Nb_arbre_total": 20812465.37396122
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 776888642.6592797,
                "Nb_arbre_total": 64740720.22160664
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 552079113.573407,
                "Nb_arbre_total": 46006592.79778392
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 383213518.00554,
                "Nb_arbre_total": 31934459.833795
            },
        },
        "Cerisier à fleurs": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 172810304.70914125,
                "Nb_arbre_total": 21601288.088642657
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 540808088.6426592,
                "Nb_arbre_total": 67601011.0803324
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 128875678.67036016,
                "Nb_arbre_total": 16109459.83379502
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 773636675.9002769,
                "Nb_arbre_total": 96704584.48753461
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 570670470.9141273,
                "Nb_arbre_total": 71333808.86426592
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 590844764.5429363,
                "Nb_arbre_total": 73855595.56786704
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 623373407.2022159,
                "Nb_arbre_total": 77921675.90027699
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 733740498.6149584,
                "Nb_arbre_total": 91717562.3268698
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 616931634.3490304,
                "Nb_arbre_total": 77116454.2936288
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 740928199.4459834,
                "Nb_arbre_total": 92616024.93074793
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 699542493.0747921,
                "Nb_arbre_total": 87442811.63434902
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 730238559.5567868,
                "Nb_arbre_total": 91279819.94459835
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 742737506.9252077,
                "Nb_arbre_total": 92842188.36565097
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 740118116.3434902,
                "Nb_arbre_total": 92514764.54293628
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 747840664.8199445,
                "Nb_arbre_total": 93480083.10249306
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 164254736.8421052,
                "Nb_arbre_total": 20531842.10526315
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 729846980.6094183,
                "Nb_arbre_total": 91230872.57617728
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 123376288.08864264,
                "Nb_arbre_total": 15422036.01108033
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 164782271.46814403,
                "Nb_arbre_total": 20597783.933518004
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 124874792.24376732,
                "Nb_arbre_total": 15609349.030470915
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 388444321.32963985,
                "Nb_arbre_total": 48555540.16620498
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 276039556.7867035,
                "Nb_arbre_total": 34504944.59833794
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 191606759.00277,
                "Nb_arbre_total": 23950844.87534625
            },
        },
        "Châtaignier": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1620096606.648199,
                "Nb_arbre_total": 64803864.26592797
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 5070075831.02493,
                "Nb_arbre_total": 202803033.2409972
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 1208209487.5346265,
                "Nb_arbre_total": 48328379.50138506
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 7252843836.565095,
                "Nb_arbre_total": 290113753.4626038
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 5350035664.819943,
                "Nb_arbre_total": 214001426.59279776
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 5539169667.590028,
                "Nb_arbre_total": 221566786.70360112
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 5844125692.520774,
                "Nb_arbre_total": 233765027.70083094
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 6878817174.515235,
                "Nb_arbre_total": 275152686.98060936
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 5783734072.022161,
                "Nb_arbre_total": 231349362.8808864
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 6946201869.806094,
                "Nb_arbre_total": 277848074.7922438
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 6558210872.576177,
                "Nb_arbre_total": 262328434.90304706
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 6845986495.844875,
                "Nb_arbre_total": 273839459.833795
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 6963164127.423822,
                "Nb_arbre_total": 278526565.0969529
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 6938607340.7202215,
                "Nb_arbre_total": 277544293.62880886
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 7011006232.686979,
                "Nb_arbre_total": 280440249.3074792
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 1539888157.8947363,
                "Nb_arbre_total": 61595526.31578945
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 6842315443.213296,
                "Nb_arbre_total": 273692617.72853184
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 1156652700.831025,
                "Nb_arbre_total": 46266108.03324099
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 1544833795.0138505,
                "Nb_arbre_total": 61793351.800554015
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 1170701177.2853186,
                "Nb_arbre_total": 46828047.091412745
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 3641665512.4653735,
                "Nb_arbre_total": 145666620.49861494
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 2587870844.875345,
                "Nb_arbre_total": 103514833.79501382
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1796313365.6509688,
                "Nb_arbre_total": 71852534.62603875
            },
        },
        "Saule": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 86405152.35457063,
                "Nb_arbre_total": 14400858.725761771
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 270404044.3213296,
                "Nb_arbre_total": 45067340.7202216
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 64437839.33518008,
                "Nb_arbre_total": 10739639.88919668
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 386818337.95013845,
                "Nb_arbre_total": 64469722.991689734
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 285335235.4570637,
                "Nb_arbre_total": 47555872.57617728
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 295422382.27146816,
                "Nb_arbre_total": 49237063.71191136
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 311686703.60110795,
                "Nb_arbre_total": 51947783.93351799
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 366870249.3074792,
                "Nb_arbre_total": 61145041.55124653
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 308465817.1745152,
                "Nb_arbre_total": 51410969.52908587
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 370464099.7229917,
                "Nb_arbre_total": 61744016.62049861
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 349771246.5373961,
                "Nb_arbre_total": 58295207.75623268
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 365119279.7783934,
                "Nb_arbre_total": 60853213.29639889
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 371368753.46260387,
                "Nb_arbre_total": 61894792.243767306
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 370059058.1717451,
                "Nb_arbre_total": 61676509.695290856
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 373920332.40997225,
                "Nb_arbre_total": 62320055.40166204
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 82127368.4210526,
                "Nb_arbre_total": 13687894.736842101
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 364923490.30470914,
                "Nb_arbre_total": 60820581.71745152
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 61688144.04432132,
                "Nb_arbre_total": 10281357.34072022
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 82391135.73407201,
                "Nb_arbre_total": 13731855.95567867
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 62437396.12188366,
                "Nb_arbre_total": 10406232.68698061
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 194222160.66481993,
                "Nb_arbre_total": 32370360.11080332
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 138019778.39335176,
                "Nb_arbre_total": 23003296.39889196
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 95803379.501385,
                "Nb_arbre_total": 15967229.9168975
            },
        },
        "Épicéa": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1800107340.7202213,
                "Nb_arbre_total": 72004293.62880886
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 5633417590.027699,
                "Nb_arbre_total": 225336703.60110798
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 1342454986.149585,
                "Nb_arbre_total": 53698199.4459834
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 8058715373.961217,
                "Nb_arbre_total": 322348614.9584487
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 5944484072.02216,
                "Nb_arbre_total": 237779362.88088638
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 6154632963.98892,
                "Nb_arbre_total": 246185318.55955678
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 6493472991.689749,
                "Nb_arbre_total": 259738919.66758993
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 7643130193.905816,
                "Nb_arbre_total": 305725207.7562326
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 6426371191.135734,
                "Nb_arbre_total": 257054847.64542934
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 7718002077.562327,
                "Nb_arbre_total": 308720083.1024931
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 7286900969.529085,
                "Nb_arbre_total": 291476038.7811634
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 7606651662.049862,
                "Nb_arbre_total": 304266066.48199445
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 7736849030.470914,
                "Nb_arbre_total": 309473961.21883655
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 7709563711.911357,
                "Nb_arbre_total": 308382548.47645426
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 7790006925.207755,
                "Nb_arbre_total": 311600277.0083102
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 1710986842.1052625,
                "Nb_arbre_total": 68439473.68421051
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 7602572714.68144,
                "Nb_arbre_total": 304102908.5872576
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 1285169667.5900276,
                "Nb_arbre_total": 51406786.7036011
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 1716481994.4598336,
                "Nb_arbre_total": 68659279.77839334
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 1300779085.8725762,
                "Nb_arbre_total": 52031163.43490305
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 4046295013.850415,
                "Nb_arbre_total": 161851800.5540166
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 2875412049.861495,
                "Nb_arbre_total": 115016481.9944598
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1995903739.6121876,
                "Nb_arbre_total": 79836149.5844875
            },
        },
        "Cyprès": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 648038642.6592797,
                "Nb_arbre_total": 43202576.17728531
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 2028030332.409972,
                "Nb_arbre_total": 135202022.1606648
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 483283795.0138506,
                "Nb_arbre_total": 32218919.66759004
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 2901137534.626038,
                "Nb_arbre_total": 193409168.97506922
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 2140014265.9279776,
                "Nb_arbre_total": 142667617.72853184
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 2215667867.036011,
                "Nb_arbre_total": 147711191.13573408
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 2337650277.0083094,
                "Nb_arbre_total": 155843351.80055398
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 2751526869.8060937,
                "Nb_arbre_total": 183435124.6537396
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 2313493628.808864,
                "Nb_arbre_total": 154232908.5872576
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 2778480747.9224377,
                "Nb_arbre_total": 185232049.86149585
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 2623284349.0304704,
                "Nb_arbre_total": 174885623.26869804
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 2738394598.33795,
                "Nb_arbre_total": 182559639.8891967
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 2785265650.9695287,
                "Nb_arbre_total": 185684376.73130193
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 2775442936.2880883,
                "Nb_arbre_total": 185029529.08587256
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 2804402493.074792,
                "Nb_arbre_total": 186960166.20498613
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 615955263.1578945,
                "Nb_arbre_total": 41063684.2105263
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 2736926177.2853184,
                "Nb_arbre_total": 182461745.15235457
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 462661080.3324099,
                "Nb_arbre_total": 30844072.02216066
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 617933518.0055401,
                "Nb_arbre_total": 41195567.86703601
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 468280470.91412747,
                "Nb_arbre_total": 31218698.06094183
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 1456666204.9861495,
                "Nb_arbre_total": 97111080.33240996
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1035148337.9501382,
                "Nb_arbre_total": 69009889.19667588
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 718525346.2603875,
                "Nb_arbre_total": 47901689.7506925
            },
        },
        "Mélèze": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 3024180332.4099717,
                "Nb_arbre_total": 100806011.0803324
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 9464141551.246536,
                "Nb_arbre_total": 315471385.0415512
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 2255324376.7313027,
                "Nb_arbre_total": 75177479.22437677
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 13538641828.254845,
                "Nb_arbre_total": 451288060.94182813
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 9986733240.997229,
                "Nb_arbre_total": 332891108.0332409
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 10339783379.501385,
                "Nb_arbre_total": 344659445.9833795
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 10909034626.038778,
                "Nb_arbre_total": 363634487.53462595
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 12840458725.76177,
                "Nb_arbre_total": 428015290.8587257
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 10796303601.108032,
                "Nb_arbre_total": 359876786.70360106
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 12966243490.304708,
                "Nb_arbre_total": 432208116.3434903
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 12241993628.808863,
                "Nb_arbre_total": 408066454.29362875
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 12779174792.243767,
                "Nb_arbre_total": 425972493.07479227
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 12997906371.191135,
                "Nb_arbre_total": 433263545.7063712
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 12952067036.01108,
                "Nb_arbre_total": 431735567.867036
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 13087211634.349028,
                "Nb_arbre_total": 436240387.81163424
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 2874457894.736841,
                "Nb_arbre_total": 95815263.1578947
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 12772322160.66482,
                "Nb_arbre_total": 425744072.02216065
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 2159085041.551246,
                "Nb_arbre_total": 71969501.38504153
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 2883689750.6925206,
                "Nb_arbre_total": 96122991.68975069
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 2185308864.2659283,
                "Nb_arbre_total": 72843628.80886427
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 6797775623.268698,
                "Nb_arbre_total": 226592520.77562326
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 4830692243.767311,
                "Nb_arbre_total": 161023074.79224372
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 3353118282.5484753,
                "Nb_arbre_total": 111770609.41828251
            },
        },
        "Érable à sucre": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1620096606.648199,
                "Nb_arbre_total": 64803864.26592797
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 5070075831.02493,
                "Nb_arbre_total": 202803033.2409972
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 1208209487.5346265,
                "Nb_arbre_total": 48328379.50138506
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 7252843836.565095,
                "Nb_arbre_total": 290113753.4626038
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 5350035664.819943,
                "Nb_arbre_total": 214001426.59279776
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 5539169667.590028,
                "Nb_arbre_total": 221566786.70360112
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 5844125692.520774,
                "Nb_arbre_total": 233765027.70083094
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 6878817174.515235,
                "Nb_arbre_total": 275152686.98060936
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 5783734072.022161,
                "Nb_arbre_total": 231349362.8808864
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 6946201869.806094,
                "Nb_arbre_total": 277848074.7922438
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 6558210872.576177,
                "Nb_arbre_total": 262328434.90304706
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 6845986495.844875,
                "Nb_arbre_total": 273839459.833795
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 6963164127.423822,
                "Nb_arbre_total": 278526565.0969529
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 6938607340.7202215,
                "Nb_arbre_total": 277544293.62880886
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 7011006232.686979,
                "Nb_arbre_total": 280440249.3074792
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 1539888157.8947363,
                "Nb_arbre_total": 61595526.31578945
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 6842315443.213296,
                "Nb_arbre_total": 273692617.72853184
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 1156652700.831025,
                "Nb_arbre_total": 46266108.03324099
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 1544833795.0138505,
                "Nb_arbre_total": 61793351.800554015
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 1170701177.2853186,
                "Nb_arbre_total": 46828047.091412745
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 3641665512.4653735,
                "Nb_arbre_total": 145666620.49861494
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 2587870844.875345,
                "Nb_arbre_total": 103514833.79501382
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1796313365.6509688,
                "Nb_arbre_total": 71852534.62603875
            },
        },
        "Charme": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1008060110.803324,
                "Nb_arbre_total": 50403005.5401662
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 3154713850.415512,
                "Nb_arbre_total": 157735692.5207756
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 751774792.2437676,
                "Nb_arbre_total": 37588739.612188384
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 4512880609.418282,
                "Nb_arbre_total": 225644030.47091407
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 3328911080.3324094,
                "Nb_arbre_total": 166445554.01662046
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 3446594459.833795,
                "Nb_arbre_total": 172329722.99168974
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 3636344875.346259,
                "Nb_arbre_total": 181817243.76731297
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 4280152908.587257,
                "Nb_arbre_total": 214007645.42936286
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 3598767867.0360107,
                "Nb_arbre_total": 179938393.35180053
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 4322081163.434903,
                "Nb_arbre_total": 216104058.17174515
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 4080664542.9362874,
                "Nb_arbre_total": 204033227.14681438
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 4259724930.7479224,
                "Nb_arbre_total": 212986246.53739613
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 4332635457.063711,
                "Nb_arbre_total": 216631772.8531856
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 4317355678.67036,
                "Nb_arbre_total": 215867783.933518
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 4362403878.116343,
                "Nb_arbre_total": 218120193.90581712
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 958152631.5789471,
                "Nb_arbre_total": 47907631.57894735
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 4257440720.2216067,
                "Nb_arbre_total": 212872036.01108032
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 719695013.8504155,
                "Nb_arbre_total": 35984750.69252077
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 961229916.8975068,
                "Nb_arbre_total": 48061495.84487534
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 728436288.0886427,
                "Nb_arbre_total": 36421814.40443213
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 2265925207.7562323,
                "Nb_arbre_total": 113296260.38781163
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1610230747.9224372,
                "Nb_arbre_total": 80511537.39612186
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1117706094.182825,
                "Nb_arbre_total": 55885304.709141254
            },
        },
        "If": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 216012880.88642657,
                "Nb_arbre_total": 21601288.088642657
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 676010110.803324,
                "Nb_arbre_total": 67601011.0803324
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 161094598.3379502,
                "Nb_arbre_total": 16109459.83379502
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 967045844.8753461,
                "Nb_arbre_total": 96704584.48753461
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 713338088.6426592,
                "Nb_arbre_total": 71333808.86426592
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 738555955.6786704,
                "Nb_arbre_total": 73855595.56786704
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 779216759.0027698,
                "Nb_arbre_total": 77921675.90027699
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 917175623.268698,
                "Nb_arbre_total": 91717562.3268698
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 771164542.936288,
                "Nb_arbre_total": 77116454.2936288
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 926160249.3074793,
                "Nb_arbre_total": 92616024.93074793
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 874428116.3434902,
                "Nb_arbre_total": 87442811.63434902
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 912798199.4459834,
                "Nb_arbre_total": 91279819.94459835
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 928421883.6565096,
                "Nb_arbre_total": 92842188.36565097
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 925147645.4293629,
                "Nb_arbre_total": 92514764.54293628
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 934800831.0249306,
                "Nb_arbre_total": 93480083.10249306
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 205318421.05263153,
                "Nb_arbre_total": 20531842.10526315
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 912308725.7617729,
                "Nb_arbre_total": 91230872.57617728
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 154220360.1108033,
                "Nb_arbre_total": 15422036.01108033
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 205977839.33518004,
                "Nb_arbre_total": 20597783.933518004
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 156093490.30470914,
                "Nb_arbre_total": 15609349.030470915
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 485555401.66204983,
                "Nb_arbre_total": 48555540.16620498
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 345049445.9833794,
                "Nb_arbre_total": 34504944.59833794
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 239508448.7534625,
                "Nb_arbre_total": 23950844.87534625
            },
        },
        "Aubépine": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 138248243.767313,
                "Nb_arbre_total": 17281030.470914125
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 432646470.91412735,
                "Nb_arbre_total": 54080808.86426592
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 103100542.93628813,
                "Nb_arbre_total": 12887567.867036017
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 618909340.7202215,
                "Nb_arbre_total": 77363667.59002769
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 456536376.73130184,
                "Nb_arbre_total": 57067047.09141273
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 472675811.63434905,
                "Nb_arbre_total": 59084476.45429363
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 498698725.7617727,
                "Nb_arbre_total": 62337340.72022159
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 586992398.8919667,
                "Nb_arbre_total": 73374049.86149584
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 493545307.4792243,
                "Nb_arbre_total": 61693163.43490304
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 592742559.5567868,
                "Nb_arbre_total": 74092819.94459835
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 559633994.4598337,
                "Nb_arbre_total": 69954249.30747922
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 584190847.6454294,
                "Nb_arbre_total": 73023855.95567867
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 594190005.5401661,
                "Nb_arbre_total": 74273750.69252077
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 592094493.0747923,
                "Nb_arbre_total": 74011811.63434903
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 598272531.8559556,
                "Nb_arbre_total": 74784066.48199445
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 131403789.47368416,
                "Nb_arbre_total": 16425473.68421052
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 583877584.4875346,
                "Nb_arbre_total": 72984698.06094183
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 98701030.47091411,
                "Nb_arbre_total": 12337628.808864264
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 131825817.17451523,
                "Nb_arbre_total": 16478227.146814404
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 99899833.79501386,
                "Nb_arbre_total": 12487479.224376732
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 310755457.0637119,
                "Nb_arbre_total": 38844432.132963985
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 220831645.4293628,
                "Nb_arbre_total": 27603955.67867035
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 153285407.202216,
                "Nb_arbre_total": 19160675.900277
            },
        },
        "Cèdre": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 648038642.6592797,
                "Nb_arbre_total": 43202576.17728531
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 2028030332.409972,
                "Nb_arbre_total": 135202022.1606648
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 483283795.0138506,
                "Nb_arbre_total": 32218919.66759004
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 2901137534.626038,
                "Nb_arbre_total": 193409168.97506922
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 2140014265.9279776,
                "Nb_arbre_total": 142667617.72853184
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 2215667867.036011,
                "Nb_arbre_total": 147711191.13573408
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 2337650277.0083094,
                "Nb_arbre_total": 155843351.80055398
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 2751526869.8060937,
                "Nb_arbre_total": 183435124.6537396
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 2313493628.808864,
                "Nb_arbre_total": 154232908.5872576
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 2778480747.9224377,
                "Nb_arbre_total": 185232049.86149585
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 2623284349.0304704,
                "Nb_arbre_total": 174885623.26869804
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 2738394598.33795,
                "Nb_arbre_total": 182559639.8891967
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 2785265650.9695287,
                "Nb_arbre_total": 185684376.73130193
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 2775442936.2880883,
                "Nb_arbre_total": 185029529.08587256
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 2804402493.074792,
                "Nb_arbre_total": 186960166.20498613
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 615955263.1578945,
                "Nb_arbre_total": 41063684.2105263
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 2736926177.2853184,
                "Nb_arbre_total": 182461745.15235457
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 462661080.3324099,
                "Nb_arbre_total": 30844072.02216066
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 617933518.0055401,
                "Nb_arbre_total": 41195567.86703601
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 468280470.91412747,
                "Nb_arbre_total": 31218698.06094183
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 1456666204.9861495,
                "Nb_arbre_total": 97111080.33240996
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1035148337.9501382,
                "Nb_arbre_total": 69009889.19667588
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 718525346.2603875,
                "Nb_arbre_total": 47901689.7506925
            },
        },
        "Platane": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1980118074.7922435,
                "Nb_arbre_total": 79204722.99168974
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 6196759349.03047,
                "Nb_arbre_total": 247870373.9612188
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 1476700484.7645435,
                "Nb_arbre_total": 59068019.39058174
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 8864586911.357338,
                "Nb_arbre_total": 354583476.45429355
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 6538932479.224376,
                "Nb_arbre_total": 261557299.16897503
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 6770096260.387812,
                "Nb_arbre_total": 270803850.41551244
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 7142820290.858724,
                "Nb_arbre_total": 285712811.6343489
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 8407443213.296398,
                "Nb_arbre_total": 336297728.5318559
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 7069008310.249307,
                "Nb_arbre_total": 282760332.40997225
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 8489802285.31856,
                "Nb_arbre_total": 339592091.4127424
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 8015591066.481994,
                "Nb_arbre_total": 320623642.65927976
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 8367316828.254848,
                "Nb_arbre_total": 334692673.1301939
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 8510533933.518005,
                "Nb_arbre_total": 340421357.3407202
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 8480520083.102492,
                "Nb_arbre_total": 339220803.3240997
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 8569007617.72853,
                "Nb_arbre_total": 342760304.7091412
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 1882085526.315789,
                "Nb_arbre_total": 75283421.05263156
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 8362829986.149584,
                "Nb_arbre_total": 334513199.44598335
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 1413686634.3490303,
                "Nb_arbre_total": 56547465.37396121
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 1888130193.905817,
                "Nb_arbre_total": 75525207.75623268
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 1430856994.4598339,
                "Nb_arbre_total": 57234279.77839336
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 4450924515.235456,
                "Nb_arbre_total": 178036980.60941827
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 3162953254.8476443,
                "Nb_arbre_total": 126518130.19390579
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 2195494113.573406,
                "Nb_arbre_total": 87819764.54293625
            },
        },
        "Sorbier": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 259215457.06371188,
                "Nb_arbre_total": 25921545.70637119
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 811212132.9639888,
                "Nb_arbre_total": 81121213.29639888
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 193313518.00554025,
                "Nb_arbre_total": 19331351.800554026
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 1160455013.8504152,
                "Nb_arbre_total": 116045501.38504152
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 856005706.371191,
                "Nb_arbre_total": 85600570.6371191
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 886267146.8144045,
                "Nb_arbre_total": 88626714.68144044
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 935060110.8033237,
                "Nb_arbre_total": 93506011.08033238
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 1100610747.9224374,
                "Nb_arbre_total": 110061074.79224375
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 925397451.5235456,
                "Nb_arbre_total": 92539745.15235457
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 1111392299.168975,
                "Nb_arbre_total": 111139229.9168975
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 1049313739.6121882,
                "Nb_arbre_total": 104931373.96121882
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 1095357839.33518,
                "Nb_arbre_total": 109535783.933518
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 1114106260.3878117,
                "Nb_arbre_total": 111410626.03878115
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 1110177174.5152354,
                "Nb_arbre_total": 111017717.45152354
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 1121760997.2299168,
                "Nb_arbre_total": 112176099.72299168
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 246382105.2631578,
                "Nb_arbre_total": 24638210.526315782
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 1094770470.9141273,
                "Nb_arbre_total": 109477047.09141274
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 185064432.13296396,
                "Nb_arbre_total": 18506443.213296395
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 247173407.20221606,
                "Nb_arbre_total": 24717340.720221605
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 187312188.36565098,
                "Nb_arbre_total": 18731218.8365651
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 582666481.9944597,
                "Nb_arbre_total": 58266648.19944598
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 414059335.18005526,
                "Nb_arbre_total": 41405933.51800553
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 287410138.504155,
                "Nb_arbre_total": 28741013.8504155
            },
        },
        "Érable argenté": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 1152068698.0609417,
                "Nb_arbre_total": 57603434.903047085
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 3605387257.6177278,
                "Nb_arbre_total": 180269362.8808864
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 859171191.1357344,
                "Nb_arbre_total": 42958559.55678672
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 5157577839.335179,
                "Nb_arbre_total": 257878891.96675894
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 3804469806.094182,
                "Nb_arbre_total": 190223490.3047091
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 3938965096.9529085,
                "Nb_arbre_total": 196948254.84764543
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 4155822714.681439,
                "Nb_arbre_total": 207791135.73407197
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 4891603324.099722,
                "Nb_arbre_total": 244580166.20498613
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 4112877562.3268695,
                "Nb_arbre_total": 205643878.11634347
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 4939521329.63989,
                "Nb_arbre_total": 246976066.48199445
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 4663616620.498614,
                "Nb_arbre_total": 233180831.02493072
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 4868257063.711911,
                "Nb_arbre_total": 243412853.18559557
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 4951583379.501385,
                "Nb_arbre_total": 247579168.97506922
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 4934120775.623268,
                "Nb_arbre_total": 246706038.78116342
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 4985604432.132963,
                "Nb_arbre_total": 249280221.60664815
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 1095031578.9473681,
                "Nb_arbre_total": 54751578.947368406
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 4865646537.396122,
                "Nb_arbre_total": 243282326.86980608
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 822508587.2576176,
                "Nb_arbre_total": 41125429.36288088
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 1098548476.4542935,
                "Nb_arbre_total": 54927423.82271468
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 832498614.9584488,
                "Nb_arbre_total": 41624930.74792244
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 2589628808.8642654,
                "Nb_arbre_total": 129481440.44321328
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 1840263711.9113567,
                "Nb_arbre_total": 92013185.59556784
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 1277378393.3518,
                "Nb_arbre_total": 63868919.66759
            },
        },
        "Tulipier de Virginie": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 2592154570.637119,
                "Nb_arbre_total": 86405152.35457063
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 8112121329.639888,
                "Nb_arbre_total": 270404044.3213296
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 1933135180.0554025,
                "Nb_arbre_total": 64437839.33518008
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 11604550138.504152,
                "Nb_arbre_total": 386818337.95013845
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 8560057063.71191,
                "Nb_arbre_total": 285335235.4570637
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 8862671468.144045,
                "Nb_arbre_total": 295422382.27146816
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 9350601108.033237,
                "Nb_arbre_total": 311686703.60110795
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 11006107479.224375,
                "Nb_arbre_total": 366870249.3074792
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 9253974515.235456,
                "Nb_arbre_total": 308465817.1745152
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 11113922991.68975,
                "Nb_arbre_total": 370464099.7229917
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 10493137396.121881,
                "Nb_arbre_total": 349771246.5373961
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 10953578393.3518,
                "Nb_arbre_total": 365119279.7783934
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 11141062603.878115,
                "Nb_arbre_total": 371368753.46260387
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 11101771745.152353,
                "Nb_arbre_total": 370059058.1717451
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 11217609972.299168,
                "Nb_arbre_total": 373920332.40997225
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 2463821052.631578,
                "Nb_arbre_total": 82127368.4210526
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 10947704709.141273,
                "Nb_arbre_total": 364923490.30470914
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 1850644321.3296397,
                "Nb_arbre_total": 61688144.04432132
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 2471734072.0221605,
                "Nb_arbre_total": 82391135.73407201
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 1873121883.6565099,
                "Nb_arbre_total": 62437396.12188366
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 5826664819.944598,
                "Nb_arbre_total": 194222160.66481993
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 4140593351.800553,
                "Nb_arbre_total": 138019778.39335176
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 2874101385.04155,
                "Nb_arbre_total": 95803379.501385
            },
        },
        "Poirier": {
            "2000": {
                "Resultat (€/km²)": 216012880.88642657,
                "Resultat Hauteur (km*m²)": 172810304.70914125,
                "Nb_arbre_total": 17281030.470914125
            },
            "2001": {
                "Resultat (€/km²)": 676010110.803324,
                "Resultat Hauteur (km*m²)": 540808088.6426592,
                "Nb_arbre_total": 54080808.86426592
            },
            "2002": {
                "Resultat (€/km²)": 161094598.3379502,
                "Resultat Hauteur (km*m²)": 128875678.67036016,
                "Nb_arbre_total": 12887567.867036017
            },
            "2003": {
                "Resultat (€/km²)": 967045844.8753461,
                "Resultat Hauteur (km*m²)": 773636675.9002769,
                "Nb_arbre_total": 77363667.59002769
            },
            "2004": {
                "Resultat (€/km²)": 713338088.6426592,
                "Resultat Hauteur (km*m²)": 570670470.9141273,
                "Nb_arbre_total": 57067047.09141273
            },
            "2005": {
                "Resultat (€/km²)": 738555955.6786704,
                "Resultat Hauteur (km*m²)": 590844764.5429363,
                "Nb_arbre_total": 59084476.45429363
            },
            "2006": {
                "Resultat (€/km²)": 779216759.0027698,
                "Resultat Hauteur (km*m²)": 623373407.2022159,
                "Nb_arbre_total": 62337340.72022159
            },
            "2007": {
                "Resultat (€/km²)": 917175623.268698,
                "Resultat Hauteur (km*m²)": 733740498.6149584,
                "Nb_arbre_total": 73374049.86149584
            },
            "2008": {
                "Resultat (€/km²)": 771164542.936288,
                "Resultat Hauteur (km*m²)": 616931634.3490304,
                "Nb_arbre_total": 61693163.43490304
            },
            "2009": {
                "Resultat (€/km²)": 926160249.3074793,
                "Resultat Hauteur (km*m²)": 740928199.4459834,
                "Nb_arbre_total": 74092819.94459835
            },
            "2010": {
                "Resultat (€/km²)": 874428116.3434902,
                "Resultat Hauteur (km*m²)": 699542493.0747921,
                "Nb_arbre_total": 69954249.30747922
            },
            "2011": {
                "Resultat (€/km²)": 912798199.4459834,
                "Resultat Hauteur (km*m²)": 730238559.5567868,
                "Nb_arbre_total": 73023855.95567867
            },
            "2012": {
                "Resultat (€/km²)": 928421883.6565096,
                "Resultat Hauteur (km*m²)": 742737506.9252077,
                "Nb_arbre_total": 74273750.69252077
            },
            "2013": {
                "Resultat (€/km²)": 925147645.4293629,
                "Resultat Hauteur (km*m²)": 740118116.3434902,
                "Nb_arbre_total": 74011811.63434903
            },
            "2014": {
                "Resultat (€/km²)": 934800831.0249306,
                "Resultat Hauteur (km*m²)": 747840664.8199445,
                "Nb_arbre_total": 74784066.48199445
            },
            "2015": {
                "Resultat (€/km²)": 205318421.05263153,
                "Resultat Hauteur (km*m²)": 164254736.8421052,
                "Nb_arbre_total": 16425473.68421052
            },
            "2016": {
                "Resultat (€/km²)": 912308725.7617729,
                "Resultat Hauteur (km*m²)": 729846980.6094183,
                "Nb_arbre_total": 72984698.06094183
            },
            "2017": {
                "Resultat (€/km²)": 154220360.1108033,
                "Resultat Hauteur (km*m²)": 123376288.08864264,
                "Nb_arbre_total": 12337628.808864264
            },
            "2018": {
                "Resultat (€/km²)": 205977839.33518004,
                "Resultat Hauteur (km*m²)": 164782271.46814403,
                "Nb_arbre_total": 16478227.146814404
            },
            "2019": {
                "Resultat (€/km²)": 156093490.30470914,
                "Resultat Hauteur (km*m²)": 124874792.24376732,
                "Nb_arbre_total": 12487479.224376732
            },
            "deforestation_spot_1986": {
                "Resultat (€/km²)": 485555401.66204983,
                "Resultat Hauteur (km*m²)": 388444321.32963985,
                "Nb_arbre_total": 38844432.132963985
            },
            "deforestation_spot_1998": {
                "Resultat (€/km²)": 345049445.9833794,
                "Resultat Hauteur (km*m²)": 276039556.7867035,
                "Nb_arbre_total": 27603955.67867035
            },
            "deforestation_spot_2005": {
                "Resultat (€/km²)": 239508448.7534625,
                "Resultat Hauteur (km*m²)": 191606759.00277,
                "Nb_arbre_total": 19160675.900277
            },
        },
    };

    const selectedEssence = document.getElementById('essence_select').value;
    const selectedTreeData = treesData[selectedEssence];

    if (selectedTreeData) {
        let htmlContent = `<h2>Données de ${selectedEssence}</h2><ul>`;

        for (const year in selectedTreeData) {
            htmlContent += `<li>Année ${year}: <br>`;
            htmlContent += `Résultat (€/km²): ${selectedTreeData[year]['Resultat (€/km²)']}, <br>`;
            htmlContent += `Résultat Hauteur (km*m²): ${selectedTreeData[year]['Resultat Hauteur (km*m²)']}, <br>`;
            htmlContent += `Nb_arbre_total: ${selectedTreeData[year]['Nb_arbre_total']}<br><br>`;
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





function onTreeEssenceSelected() {
    const selectBox = document.getElementById('image-select');
    const selectedEssence = selectBox.value;

    const essencesToShowRectangles = [
        "phpYHheAY.jpg", "photographie-aerienne-en-couleur-naturelle-telespazio-france.jpg", "inline_image_preview.jpg", 
        "deforestation_spot_2005.jpg", "deforestation_spot_1998.jpg", "deforestation_spot_1986.jpg", "2048 (3).jpg",
        "2048 (2).jpg", "2048 (1).jpg", "2019.png", "2018.png", "2017.png", "2016.png",
        "2015.png", "2014.png", "2013.png", "2012.png", "2011.png",
        "2010.png", "2009.png", "2008.png", "2007.png", "2006.png", "2005.png",
        "2004.png", "2003.png", "2002.png", "2001.png", "2000.png",
        "62d6dfeb97661c91708b456f.jpg"
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