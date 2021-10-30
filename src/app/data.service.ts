import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  palmsData = [
    {
      name: "trachycarpus_fortunei",
      title: "Trachycarpus fortunei",
      images: [
        "../assets/content/trachycarpus_fortunei/1.jpeg",
        "../assets/content/trachycarpus_fortunei/2.jpeg",
        "../assets/content/trachycarpus_fortunei/3.jpeg",
      ],
      subspieces: [
        {
          title: "Trachycarpus fortunei (szorstkowiec fortunego)",
          description: "Gatunek drzewa z rodziny arekowatych. Pochodzi z gór południowych i środkowych Chin, poza tym występuje w Bhutanie, Nepalu, północnych Indiach, Mjanmie i Wietnamie, a jako gatunek naturalizowany także w Japonii. Nazwa upamiętnia Roberta Fortune'a, który przywiózł tę roślinę z Chin do Europy. Gatunek jest uprawiany już w Europie od ponad 160 lat jako roślina ozdobna. Ze względu na relatywnie, jak na palmę, dużą odporność na niskie temperatury jest popularna w uprawie w krajach klimatu umiarkowanego. Z włókna otrzymanego z liści w niektórych krajach wykonuje się miotły, powrozy, nieprzemakalne płaszcze, kapelusze i inne wyroby.",
          images: [
            "../assets/content/trachycarpus_fortunei/1.jpeg",
            "../assets/content/trachycarpus_fortunei/2.jpeg",
            "../assets/content/trachycarpus_fortunei/3.jpeg",
            "../assets/content/trachycarpus_fortunei/4.jpeg",
            "../assets/content/trachycarpus_fortunei/5.jpeg",
            "../assets/content/trachycarpus_fortunei/6.jpeg",
            "../assets/content/trachycarpus_fortunei/7.jpeg",
            "../assets/content/trachycarpus_fortunei/8.jpeg",
            "../assets/content/trachycarpus_fortunei/9.jpeg",
            "../assets/content/trachycarpus_fortunei/10.jpeg",
            "../assets/content/trachycarpus_fortunei/11.jpeg",
            "../assets/content/trachycarpus_fortunei/12.jpeg",

          ]
        }
      ]
    },
    {
      name: "Karlatka",
      title: "Karłatka",
      subspieces: [
        {
          title: "Karłatka niska (chamaerops humilis)",
          description: "Gatunek wiecznie zielonej rośliny z rodziny arekowatych. Jedyny przedstawiciel monotypowego rodzaju karłatka. Jako łatwy gatunek do uprawy, sadzony jest także poza swym pierwotnym zasięgiem, w tym uprawiany jest jako roślina doniczkowa. Owoce są niejadalne i nie mają wartości użytkowej.",
          images: []
        },
        {
          title: "Karłatka niebieska (chamaerops humilis carifera)",
          description: "Jest jedyną w Eruopie rodzimą palmą. Jej zasięg obejmuje zachodnią część obszaru śródziemnomorskiego, od południowych Włoch do południowej Hiszpanii oraz Afrykę, wzdłuż wybrzeża północnoafrykańskiego, od Tunezji do Maroka. Obecnie bywa uprawiana, w celach ozdobnych, na większym obszarze, między innymi na południu Chorwacji i Grecji. Ta wdzięczna i niewybredna roślina bardzo dobrze nadaje się zarówno do miejsc słonecznych jak i zacienonych. Odmiana Carifera cechuje się kolorem liści, które są z góry jak i dołu srebrzysto-niebieskie.",
          images: [],
        },
      ]
    },
    {
      name: "Waszyngtonia",
      title: "Waszyngtonia",
      images: [
        "../assets/content/waszyngtonia/1.jpeg",
        "../assets/content/waszyngtonia/2.jpeg",
        "../assets/content/waszyngtonia/3.jpeg",
      ],
      subspieces: [
        {
          title: "Waszyngtonia nitkowata (Filifera)",
          description: "Pochodzi z północno-zachodniego Meksyku. Jest jedną z tych palm, które przykuwają naszą uwagę sowim naprawdę wyjątkowym wyglądem. Palma ta zawdzięcza to ozdobnym włóknom zwisającym z wachlarzowatych liści. Z tym też związana jest jej nazwa, ponieważ filifera z łaciny oznacza mająca włókna. Doskonale nadaje się do uprawy w pojemnikach. Szybko rośnie, w mieszkaniu wymaga dużo miejsca oraz wysokiej wilgotności powietrza. Latem można ją bez obaw wynosić na zewnątrz. Najlepiej prezentuje się samotnie - wtedy dobrze widoczne są jej dekoracyjne liście i pień.",
          images: [
            "../assets/content/waszyngtonia/1.jpeg",
            "../assets/content/waszyngtonia/2.jpeg",
            "../assets/content/waszyngtonia/3.jpeg",
            "../assets/content/waszyngtonia/5.jpeg",
            "../assets/content/waszyngtonia/6.jpeg",
          ]
        },
        {
          title: "Waszyngtonia robusta",
          description: "Pochodzi z suchych obszarów na terenie Meksyku, gdzie ma dostęp do wód gruntowych. Rośnie również w południowych regionach USA. Washingtonia robusta zwana jest Meksykańską. W naturze pnie przysłonięte są suchymi, opadniętymi liśćmi, które tworzą wokół pnia warstwową spódniczkę.",
          images: [
            "../assets/content/waszyngtonia/7.jpeg",
            "../assets/content/waszyngtonia/8.jpeg",
            "../assets/content/waszyngtonia/9.jpeg",
            "../assets/content/waszyngtonia/10.jpeg",
            "../assets/content/waszyngtonia/11.jpeg",
            "../assets/content/waszyngtonia/12.jpeg",
          ]
        },
      ]
    },

    {
      name: "Phoenix",
      title: "Phoenix",
      images: [
        "../assets/content/phoenix/1.jpeg",
        "../assets/content/phoenix/2.jpeg",
        "../assets/content/phoenix/3.jpeg",
      ],
      subspieces: [
        {
          title: "Phoenix  canarsis",
          description: "Gatunek rośliny z rodziny arekowatych, pochodzący z zachodniego wybrzeża Afryki, najprawdopodobniej z Wysp Kanaryjskich. Nazywana jest palmą królewską. Ze względu na atrakcyjny wygląd daktylowiec kanaryjski jest często uprawiany w cieplejszych, na ogół subtropikalnych regionach świata, szczególnie w klimacie śródziemnomorskim. Roślina ta występuje od południowej Wielkiej Brytanii na wyspie Tresco aż po południe Chile. Bardzo popularna jest w całej południowej Europie, a także w cieplejszych regionach USA, Australii, Nowej Zelandii, południowej Afryce, Chile i Argentynie. W Polsce ze względu na klimat uprawiana jest w oranżeriach lub w pojemnikach jako roślina pokojowa.",
          images: [
            "../assets/content/phoenix/phoenix_canariensis/1.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/2.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/3.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/4.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/5.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/6.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/7.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/8.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/9.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/10.jpeg",
            "../assets/content/phoenix/phoenix_canariensis/11jpeg",
            "../assets/content/phoenix/phoenix_canariensis/12.jpeg",
          ],
        },
        {
          title: "Phoenix  actylifera",
          description: "opis wymaga uzupełnienia",
          images: [
            "../assets/content/phoenix/phoenix_actylifera/2.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/3.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/4.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/5.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/6.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/7.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/8.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/9.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/10.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/11.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/12.jpeg",
            "../assets/content/phoenix/phoenix_actylifera/13.jpeg",
          ],
        },
        {
          title: "Phoenix roebelini",
          description: "Gatunek rośliny z rodziny arekowatych, występujący naturalnie w północnych Indiach, Laosie i na południu Wietnamu. Daktylowiec niski może dorastać do 3 m. Ma pokrój krzaczasty, rosnąc dziko wytwarza liczne odrosty, w uprawie doniczkowej zazwyczaj ma tylko jeden pień. Młode pędy liściowe są pokryte szarawym nalotem. Rozwinięte liście są pierzaste, delikatne i ładnie wygięte, na łodygach mają cienkie, ostre kolce. Powierzchnia pnia przypomina fakturą niedojrzały ananas i pokryta jest w górnej części brązowymi włóknami.",
          images: [
            "../assets/content/phoenix/phoenix _roebelini/1.jpeg",
            "../assets/content/phoenix/phoenix _roebelini/2.jpeg",
            "../assets/content/phoenix/phoenix _roebelini/3.jpeg",
            "../assets/content/phoenix/phoenix _roebelini/4.jpeg",
            "../assets/content/phoenix/phoenix _roebelini/5.jpeg",
          ],
        },
      ]
    },
    {
      name: "Bismarckia_nobilis",
      title: "Bismarckia nobilis",
      images: [
        "../assets/content/bismarckia_nobilis/1.jpeg",
        "../assets/content/bismarckia_nobilis/2.jpeg",
        "../assets/content/bismarckia_nobilis/3.jpeg",

      ],
      subspieces: [
        {
          title: "Bismarckia nobilis",
          description: "Bismarckia nobilis – jedyny gatunek z monotypowego rodzaju Bismarckia Hildebrandt. Palma ta występuje naturalnie na terenie Madagaskaru, gdzie jest dość rzadka. Poza tym jednak jest szeroko rozpowszechniona w uprawie jako roślina ozdobna.",
          images: [
            "../assets/content/bismarckia_nobilis/1.jpeg",
            "../assets/content/bismarckia_nobilis/2.jpeg",
            "../assets/content/bismarckia_nobilis/3.jpeg",
            "../assets/content/bismarckia_nobilis/4.jpeg",
            "../assets/content/bismarckia_nobilis/5.jpeg",
            "../assets/content/bismarckia_nobilis/6.jpeg",
          ]
        }
      ]
    },
    {
      name: "Brahea",
      title: "Brahea",
      images: [
        "../assets/content/brahea/1.jpeg",
      ],
      subspieces: [
        {
          title: "Brahea armata",
          description: "Powszechnie znana jako meksykańska niebieska palma lub niebieska palma hesper, jest dużym wiecznie zielonym drzewem z rodziny arekowatych, pochodzącym z Baja California w Meksyku. Jest powszechnie sadzony jako roślina ozdobna. Dorasta do wysokości 15 metrów z grubym pniem.",
          images: [
            "../assets/content/brahea/1.jpeg"
          ]
        },
        {
          title: "Brahea edulis",
          description: "Palma Guadalupe lub palma de Guadalupe, jest endemiczną palmą występującą na wyspie Guadalupe w Meksyku, chociaż kilka drzewostanów zostało posadzonych w innych miejscach. Jest to palma wachlarzowa, która rośnie od 4,50 do 13 metrów. Rośnie na wysokości między 400 a 1000 metrów nad poziomem morza.",
          images: [
            "../assets/content/brahea/1.jpeg"
          ]
        },
      ]
    },

    {
      name: "Jubea_chilensis",
      title: "Jubaea chilensis",
      images: [
        "../assets/content/jubea_chilensis/1.jpeg",
        "../assets/content/jubea_chilensis/2.jpeg",
        "../assets/content/jubea_chilensis/3.jpeg"
      ],
      subspieces: [
        {
          title: "Jubaea chilensis",
          description: "Gatunek rośliny z rodziny arekowatych z monotypowego rodzaju zwanego jubea Jubaea, zwyczajowo zwany palmą chilijską i palmą miodową. Pochodzi z południowo-zachodniego obszaru Ameryki Południowej i jest endemicznym gatunkiem obszaru chilijsko-patagońskiego. Jest bardzo imponującą palmą osiągającą ponad 30 metrów wysokości, kłodzina u podstawy może osiągnąć do 1,5 m średnicy. Kłodzina jest krępa, szara i gładka. Obwód korony osiąga do dziewięciu metrów. Pierzaste liście mają długość od dwóch do czterech metrów. Palma ta rośnie bardzo wolno – jest jedną z najwolniej rosnących palm na świecie. Zakwita i owocuje dopiero po 60 latach. Dorosła palma w odpowiednim klimacie przyrasta do 20 cm rocznie. W klimacie umiarkowanym uprawa jubei jest możliwa, roślina przyrasta jednak znacznie wolniej (ok. 10 cm rocznie). Jest tolerancyjna do około -15 °C, co czyni ją jedną z najbardziej odpornych na zimno palm z pierzastymi liśćmi. Ponieważ w swoim środowisku rośnie aż do wysokości 1400 metrów nad poziomem morza, nie wymaga gorących okresów letnich.",
          images: [
            "../assets/content/jubea_chilensis/1.jpeg",
            "../assets/content/jubea_chilensis/2.jpeg",
            "../assets/content/jubea_chilensis/3.jpeg"
          ]
        }
      ]
    },
    {
      name: "Palma_sabalowa",
      title: "Palma sabałowa",
      images: [],
      subspieces: [
        {
          title: "Palma sabałowa",
          description: "Gatunek roślin, należący do rodziny arekowatych (palm). Pochodzi z Ameryki Północnej, gdzie na naturalnych stanowiskach rośnie w USA w stanach: Oklahoma, Alabama, Arkansas, Floryda, Georgia, Luizjana, Missisipi, Karolina Północna i Karolina Południowa. Jest to krzaczasta palma o wysokości do 2 m i szerokości do 1 m. Ma bardzo krótki pęd, który zazwyczaj nie wyrasta ponad ziemię, lub tylko bardzo niewiele. Na jego szczycie wyrasta pióropusz liści. Są one sztywne, zielone lub niebieskozielone i podzielone na taśmowate listki. W krajach o cieplejszym klimacie palma ta jest uprawiana jako ogrodowa roślina ozdobna. Może też być w pojemnikach uprawiana na balkonach, w altanach, itp. W Polsce jest uprawiana jako roślina pokojowa, latem wystawiana na zewnątrz domu. Może być również hodowana na powietrzu pod warunkiem zapewnienia odpowiedniej osłony zimowej (ze szczególnym wskazaniem na dogrzewanie.",
          images: []
        },
        {
          title: "Sabal palmetto",
          description: "opis wymaga uzupełnienia",
          images: []
        }
      ]
    },

    {
      name: "Butia",
      title: "Butia",
      images: [
        "../assets/content/butia/1.jpeg",
      ],
      subspieces: [
        {
          title: "Butia odorata",
          description: "opis wymaga uzupełnienia",
          images: [
            "../assets/content/butia/1.jpeg"
          ]
        },
        {
          title: "Butia capitata (palma dżemowa)",
          description: "jedna z bardziej wytrzymałych palm – dorosła roślina potrafi znieść mrozy nawet do -12 stopni. Może upiększać taras, czy ogród od wczesnej wiosny do późnej jesieni. Dobrze znosi także hodowle domową, nie ma zbyt wielkich wymagań, potrzebuje przede wszystkim słonecznego stanowiska. Ma bardzo efektowne niebiesko-zielone liście pokrojem przypominające strusie pióra. Hodowana w doniczce dorasta do około 1,5m wysokości. Dużym atutem tej rośliny jest to, że produkuje jadalne, smaczne owoce, które w miejscu naturalnego występowania palmy, służą przede wszystkim do wyrobu dżemów oraz innych przetworów (stąd jej popularna nazwa - palma dżemowa).",
          images: [
            "../assets/content/butia/1.jpeg"
          ]
        },
        {
          title: "Butia Yatay",
          description: "galaretowa palma lub palma yatay, to palma Butia pochodząca z południowej Brazylii, Urugwaju i północnej Argentyny. Jest znany jako butiá-jataí w języku portugalskim na południu Brazylii, a także po prostu jataí lub butiá. Czasami jest uprawiany jako roślina ozdobna w Europie i Stanach Zjednoczonych.",
          images: [
            "../assets/content/butia/1.jpeg"
          ]
        },
      ]

    },

    {
      name: "Aarchontophoenics_alexandra",
      title: "Aarchontophoenics alexandra",
      images: [
        "../assets/content/archontophoenics_alexandra/1.jpeg",
        "../assets/content/archontophoenics_alexandra/2.jpeg",
        "../assets/content/archontophoenics_alexandra/3.jpeg",

      ],
      subspieces: [
        {
          title: "Aarchontophoenics alexandra",
          description: "Gatunek pochodzi z lasów deszczowych porastających nadbrzeże północno-wschodniej Australii. Ma piękny, smukły, szary pień i rozszerzoną podstawę liści z widocznymi śladami po opadłych liściach. Duże, pierzaste liście są jasnozielone od góry, srebrno-białe od spodu. Wykształca białe rozgałęzione kwiatostany, które zwisają spomiędzy liści. Owoce są okrągłe i czerwone. Dobrze rośnie w wilgotnej ziemi, ważny jest też dobry drenaż. Kiedy jest sucho warto pamiętać o dodatkowym podlewaniu. Dobrze odnajduje się w pełnym słońcu i półcieniu. Ta piękna palma doskonale nadaje się jako palma doniczkowa do jasnych pomieszczeń.",
          images: [
            "../assets/content/archontophoenics_alexandra/1.jpeg",
            "../assets/content/archontophoenics_alexandra/2.jpeg",
            "../assets/content/archontophoenics_alexandra/3.jpeg",
          ]
        }
      ]
    },
    {
      name: "Palma_kokosowa",
      title: "Palma kokosowa",
      images: [],
      subspieces: [
        {
          title: "Palma kokosowa",
          description: "Gatunek pochodzi z południowo-wschodniej Azji lub z północno-zachodniej Ameryki Południowej. Kopalne szczątki z Nowej Zelandii wskazują, że rośliny o małych orzechach kokosowych rosły tam już przed 15 milionami lat. Najstarsze skamieniałości były znajdowane w Radżastanie w Indiach. Jej owoce wyrzucone przez morze i zdolne do kiełkowania znajdowano w Norwegii. Obecnie jest najczęściej występującą palmą, gdyż rośnie wzdłuż wszystkich tropikalnych brzegów morskich. Dorasta do 30 m wysokości. Ma pierzaste liście o 4–6 m długości i szerokości 60–90 cm.",
          images: []
        }
      ]
    },
    {
      name: "Tritrinox_capestis",
      title: "Tritrinox capestis",
      images: [],
      subspieces: [
        {
          title: "Tritrinox capestis",
          description: "opis wymaga uzupełnienia",
          images: []
        }
      ]
    },
  ];

  exoticPlantsData = [
    {
      title: "Jukka rostrata",
      description: "To mrozoodporny gatunek Jukki o srebrno – niebieskich lancetowatych wąskich liściach może rosnąć w pełnym słońcu, jest to mało wymagająca roślina, kwitnie latem kwiaty białe zebrane w grona. Wytrzymuje spadek temperatury do – 20 C."
    },
    {
      title: "Jukka aloesowa",
      description: "Gatunek z rodzaju Yucca. Popularne nazwy to aloes, roślina sztyletu i hiszpański bagnet. Rośnie na glebach piaszczystych, szczególnie na wydmach wzdłuż wybrzeża"
    },
    {
      title: "Jukka rigida",
      description: "Gatunek należący do rodziny agawowatych.Pochodzi z terenów USA i Meksyku. Jukka rigida bywa mylona z jukką rostratą ma jednak sztywniejsze i bardziej szorstkie liście."
    },
    {
      title: "Jukka faxoniana",
      description: "Nazywana palmą ixtle, palmą istle lub palmą barretą – gatunek roślin należących do rodziny szparagowatych. Pochodzi z północnego Meksyku i Teksasu.. Najbardziej mrozoodporna jukka wytwarzająca tak duży pień. Wytrzymuje długie spadki temperatury do -18°C, a krótkotrwałe nawet do -23°C."
    },
    {
      title: "Dasylirion",
      description: "",
      subspieces: [
        {
          title: "Dasylirion wheeleri",
          description: "Gatunek rośliny kwitnącej z rodziny szparagów Asparagaceae, pochodzącej z suchych środowisk w północnym Meksyku, w Chihuahua i Sonorze oraz w południowo-zachodnich Stanach Zjednoczonych, na pustyni Sonoran w Arizonie, a także w Nowym Meksyku i Teksasie.",
          images: []
        },
        {
          title: "Dasylirion serratifolium",
          description: "Gatunek rosnący w Meksyku na wysokości ok 2 tysięcy metrów, w suchym i skalistym terenie krzewiasta i zimozielona roślina cechuje się powolnym wzrostem i dorasta do ok 3 metrów. Pień pełen dekoracyjnych pióropuszy liści o długości około 1,2 metra.Długie na niemal 5 metrów kwiatostany w formie kolby wyrastają podczas kwitnienia pięknie zdobiąc roślinę. Kwiatostan podobnie jak w przypadku odmiany Dasylirion Wheeleri koloru biało beżowego. Roślina dobrze znosi suszę i duże nasłonecznienie. Jej mrozoodporność szacowana jest na około minus 15 stopni.",
          images: []
        },
      ]

    },
    {
      title: "Sagowiec odwinięty",
      description: "Gatunek roślin należących do klasy sagowców i rodziny sagowcowatych. Zasięg naturalny obejmuje południową Japonię. Popularna roślina ozdobna, w środkowoeuropejskich warunkach klimatycznych uprawiana jako roślina doniczkowa."
    },
    {
      title: "Alokazja Macrorrhiza",
      description: "Pochodzi z obszarów tropikalnej Malezji, Australii oraz Wysp Salomona. Alokazja Macrorrhiza wyróżnia się na tle innych roślin olbrzymi liśćmi, które mają około 1 metra długości. W liściach i łodygach występuje obficie sok roślinny, który w stanie surowym jest trujący. Alokazja ma pokrój wyprostowany, krzewiasty. Wytwarza duże, strzałkowate liście, które osadzone są na długich i grubych łodygach wyrastających z podziemnej bulwy. W odpowiednich warunkach roślina ta może osiągać wysokość 15 metrów."
    },
    {
      title: "Nolina nelsonii",
      description: "To roślina kwitnąca z rodzaju Nolina. Gatunek ten został po raz pierwszy opisany w 1906 roku; w swoim rodzaju jest morfologicznie najbardziej podobny do Nolina parryi."
    },

  ]

  citrusesData = [];
  oliveTreesData = [];

  getAllPalmsData(): Array<any> {

    return this.palmsData;
  }

  getPalmData(name: string): Array<any> {

    const result = this.palmsData.find(element => element.name === name);

    return result ? result.subspieces : [];
  }

  getExoticPlantsData(): Array<any> {

    return this.exoticPlantsData;
  }

}
