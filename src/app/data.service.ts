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
        "../assets/content/palms/trachycarpus_fortunei/1.jpeg",
        "../assets/content/palms/trachycarpus_fortunei/2.jpeg",
        "../assets/content/palms/trachycarpus_fortunei/3.jpeg",
      ],
      subspieces: [
        {
          title: "Trachycarpus fortunei (szorstkowiec fortunego)",
          description: "Gatunek drzewa z rodziny arekowatych. Pochodzi z gór południowych i środkowych Chin, poza tym występuje w Bhutanie, Nepalu, północnych Indiach, Mjanmie i Wietnamie, a jako gatunek naturalizowany także w Japonii. Nazwa upamiętnia Roberta Fortune'a, który przywiózł tę roślinę z Chin do Europy. <br><br>Roślina jest uprawiana już w Europie od ponad 160 lat w celach ozdobnych. Ze względu na relatywnie, jak na palmę, dużą odporność na niskie temperatury jest popularna w uprawie w krajach klimatu umiarkowanego. Z włókna otrzymanego z liści w niektórych krajach wykonuje się miotły, powrozy, nieprzemakalne płaszcze, kapelusze i inne wyroby.",
          images: [
            "../assets/content/palms/trachycarpus_fortunei/1.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/2.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/3.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/4.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/5.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/6.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/7.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/8.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/9.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/10.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/11.jpeg",
            "../assets/content/palms/trachycarpus_fortunei/12.jpeg",

          ]
        }
      ]
    },
    {
      name: "Chamaerops",
      title: "Chamaerops",
      images: [
        "../assets/content/palms/chamaerops/1.jpeg",
        "../assets/content/palms/chamaerops/2.jpeg",
        "../assets/content/palms/chamaerops/3.jpeg",
      ],
      subspieces: [
        {
          title: "Chamaerops humilis",
          description: "Gatunek wiecznie zielonej rośliny z rodziny arekowatych. Jedyny przedstawiciel monotypowego rodzaju karłatka. Jako łatwy gatunek do uprawy, sadzony jest także poza swym pierwotnym zasięgiem, w tym uprawiany jest jako roślina doniczkowa. Owoce są niejadalne i nie mają wartości użytkowej.",
          images: [
            "../assets/content/palms/chamaerops/chamaerops_humilis/1.jpeg",
            "../assets/content/palms/chamaerops/chamaerops_humilis/2.jpeg",
            "../assets/content/palms/chamaerops/chamaerops_humilis/3.jpeg",
            "../assets/content/palms/chamaerops/chamaerops_humilis/4.jpeg",
            "../assets/content/palms/chamaerops/chamaerops_humilis/5.jpeg",
            "../assets/content/palms/chamaerops/chamaerops_humilis/6.jpeg",
          ]
        },
        {
          title: "Chamaerops humilis carifera",
          description: "Jest jedyną w Eruopie rodzimą palmą. Jej zasięg obejmuje zachodnią część obszaru śródziemnomorskiego, od południowych Włoch do południowej Hiszpanii oraz Afrykę, wzdłuż wybrzeża północnoafrykańskiego, od Tunezji do Maroka. <br><br>Obecnie bywa uprawiana, w celach ozdobnych, na większym obszarze, między innymi na południu Chorwacji i Grecji. Ta wdzięczna i niewybredna roślina bardzo dobrze nadaje się zarówno do miejsc słonecznych jak i zacienonych. Odmiana Carifera cechuje się kolorem liści, które są z góry jak i dołu srebrzysto-niebieskie.",
          images: [
            "../assets/content/palms/chamaerops/chamaerops_humilis_carifera/1.jpeg",
            "../assets/content/palms/chamaerops/chamaerops_humilis_carifera/2.jpeg",
          ],
        },
      ]
    },
    {
      name: "Waszyngtonia",
      title: "Waszyngtonia",
      images: [
        "../assets/content/palms/waszyngtonia/1.jpeg",
        "../assets/content/palms/waszyngtonia/2.jpeg",
        "../assets/content/palms/waszyngtonia/3.jpeg",
      ],
      subspieces: [
        {
          title: "Waszyngtonia nitkowata (Filifera)",
          description: "Pochodzi z północno-zachodniego Meksyku. Jest jedną z tych palm, które przykuwają naszą uwagę sowim naprawdę wyjątkowym wyglądem. Palma ta zawdzięcza to ozdobnym włóknom zwisającym z wachlarzowatych liści. Z tym też związana jest jej nazwa, ponieważ filifera z łaciny oznacza mająca włókna. <br><br>Doskonale nadaje się do uprawy w pojemnikach. Szybko rośnie, w mieszkaniu wymaga dużo miejsca oraz wysokiej wilgotności powietrza. Latem można ją bez obaw wynosić na zewnątrz. Najlepiej prezentuje się samotnie - wtedy dobrze widoczne są jej dekoracyjne liście i pień.",
          images: [
            "../assets/content/palms/waszyngtonia/1.jpeg",
            "../assets/content/palms/waszyngtonia/2.jpeg",
            "../assets/content/palms/waszyngtonia/3.jpeg",
            "../assets/content/palms/waszyngtonia/5.jpeg",
            "../assets/content/palms/waszyngtonia/6.jpeg",
          ]
        },
        {
          title: "Waszyngtonia robusta",
          description: "Pochodzi z suchych obszarów na terenie Meksyku, gdzie ma dostęp do wód gruntowych. Rośnie również w południowych regionach USA. Washingtonia robusta zwana jest Meksykańską. W naturze pnie przysłonięte są suchymi, opadniętymi liśćmi, które tworzą wokół pnia warstwową spódniczkę.",
          images: [
            "../assets/content/palms/waszyngtonia/7.jpeg",
            "../assets/content/palms/waszyngtonia/8.jpeg",
            "../assets/content/palms/waszyngtonia/9.jpeg",
            "../assets/content/palms/waszyngtonia/10.jpeg",
            "../assets/content/palms/waszyngtonia/11.jpeg",
            "../assets/content/palms/waszyngtonia/12.jpeg",
          ]
        },
      ]
    },

    {
      name: "Phoenix",
      title: "Phoenix",
      images: [
        "../assets/content/palms/phoenix/1.jpeg",
        "../assets/content/palms/phoenix/2.jpeg",
        "../assets/content/palms/phoenix/3.jpeg",
      ],
      subspieces: [
        {
          title: "Phoenix  canarsis",
          description: "Gatunek z rodziny arekowatych, pochodzący z zachodniego wybrzeża Afryki, najprawdopodobniej z Wysp Kanaryjskich. Nazywana jest palmą królewską. Ze względu na atrakcyjny wygląd daktylowiec kanaryjski jest często uprawiany w cieplejszych, na ogół subtropikalnych regionach świata, szczególnie w klimacie śródziemnomorskim. <br><br>Roślina ta występuje od południowej Wielkiej Brytanii na wyspie Tresco aż po południe Chile. Bardzo popularna jest w całej południowej Europie, a także w cieplejszych regionach USA, Australii, Nowej Zelandii, południowej Afryce, Chile i Argentynie. W Polsce ze względu na klimat uprawiana jest w oranżeriach lub w pojemnikach jako roślina pokojowa.",
          images: [
            "../assets/content/palms/phoenix/phoenix_canariensis/1.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/2.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/3.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/4.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/5.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/6.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/7.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/8.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/9.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/10.jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/11jpeg",
            "../assets/content/palms/phoenix/phoenix_canariensis/12.jpeg",
          ],
        },
        {
          title: "Phoenix  actylifera",
          description: "Daktylowiec, z łac. Phoenix, to rodzaj wiecznie zielonej palmy, która pochodzi z północnej Afryki, z Azji i Wysp Kanaryjskich. W naturalnym środowisku rośnie w strefie tropikalnej i subtropikalnej, dlatego w polskich warunkach klimatycznych może być hodowany wyłącznie w domach oraz palmiarniach. <br><br>Daktylowiec jest rośliną jadalną. Z soku wydzielanego z pnia wyrabia się cukier i wino palmowe. Owoce rośliny – daktyle – można spożywać na surowo bądź po przetworzeniu. Na krajowy rynek trafiają przed wszystkim daktyle w formie ususzonej. Daktylowiec hodowany w mieszkaniu rośnie mniej okazale i efektownie od gatunków w naturalnym środowisku. Osiąga do 150 cm wysokości. Posiada długi, smukły pień zakończony na szczycie pióropuszem długich, pierzastych liści w kolorze ciemnozielonym.",
          images: [
            "../assets/content/palms/phoenix/phoenix_actylifera/2.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/3.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/4.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/5.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/6.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/7.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/8.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/9.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/10.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/11.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/12.jpeg",
            "../assets/content/palms/phoenix/phoenix_actylifera/13.jpeg",
          ],
        },
        {
          title: "Phoenix roebelini",
          description: "Gatunek rośliny z rodziny arekowatych, występujący naturalnie w północnych Indiach, Laosie i na południu Wietnamu. Daktylowiec niski może dorastać do 3 m. Ma pokrój krzaczasty, rosnąc dziko wytwarza liczne odrosty, w uprawie doniczkowej zazwyczaj ma tylko jeden pień. Młode pędy liściowe są pokryte szarawym nalotem. Rozwinięte liście są pierzaste, delikatne i ładnie wygięte, na łodygach mają cienkie, ostre kolce. Powierzchnia pnia przypomina fakturą niedojrzały ananas i pokryta jest w górnej części brązowymi włóknami.",
          images: [
            "../assets/content/palms/phoenix/phoenix _roebelini/1.jpeg",
            "../assets/content/palms/phoenix/phoenix _roebelini/2.jpeg",
            "../assets/content/palms/phoenix/phoenix _roebelini/3.jpeg",
            "../assets/content/palms/phoenix/phoenix _roebelini/4.jpeg",
            "../assets/content/palms/phoenix/phoenix _roebelini/5.jpeg",
          ],
        },
      ]
    },
    {
      name: "Bismarckia_nobilis",
      title: "Bismarckia nobilis",
      images: [
        "../assets/content/palms/bismarckia_nobilis/1.jpeg",
        "../assets/content/palms/bismarckia_nobilis/2.jpeg",
        "../assets/content/palms/bismarckia_nobilis/3.jpeg",

      ],
      subspieces: [
        {
          title: "Bismarckia nobilis",
          description: "Bismarckia nobilis – jedyny gatunek z monotypowego rodzaju Bismarckia Hildebrandt. Palma ta występuje naturalnie na terenie Madagaskaru, gdzie jest dość rzadka. Poza tym jednak jest szeroko rozpowszechniona w uprawie jako roślina ozdobna.",
          images: [
            "../assets/content/palms/bismarckia_nobilis/1.jpeg",
            "../assets/content/palms/bismarckia_nobilis/2.jpeg",
            "../assets/content/palms/bismarckia_nobilis/3.jpeg",
            "../assets/content/palms/bismarckia_nobilis/4.jpeg",
            "../assets/content/palms/bismarckia_nobilis/5.jpeg",
            "../assets/content/palms/bismarckia_nobilis/6.jpeg",
          ]
        }
      ]
    },
    {
      name: "Brahea",
      title: "Brahea",
      images: [
        "../assets/content/palms/brahea/1.jpeg",
        "../assets/content/palms/brahea/2.jpeg",
        "../assets/content/palms/brahea/3.jpeg",
      ],
      subspieces: [
        {
          title: "Brahea armata",
          description: "Powszechnie znana jako meksykańska niebieska palma lub niebieska palma hesper, jest dużym wiecznie zielonym drzewem z rodziny arekowatych, pochodzącym z Baja California w Meksyku. Jest powszechnie sadzony jako roślina ozdobna. Dorasta do wysokości 15 metrów z grubym pniem.",
          images: [
            "../assets/content/palms/brahea/brahea_armata/1.jpeg",
            "../assets/content/palms/brahea/brahea_armata/2.jpeg",
            "../assets/content/palms/brahea/brahea_armata/3.jpeg",
            "../assets/content/palms/brahea/brahea_armata/4.jpeg",
            "../assets/content/palms/brahea/brahea_armata/5.jpeg",
            "../assets/content/palms/brahea/brahea_armata/6.jpeg",
            "../assets/content/palms/brahea/brahea_armata/7.jpeg",
            "../assets/content/palms/brahea/brahea_armata/8.jpeg",
            "../assets/content/palms/brahea/brahea_armata/9.jpeg",
            "../assets/content/palms/brahea/brahea_armata/10.jpeg",
            "../assets/content/palms/brahea/brahea_armata/11.jpeg",
            "../assets/content/palms/brahea/brahea_armata/12.jpeg",
            "../assets/content/palms/brahea/brahea_armata/13.jpeg",
            "../assets/content/palms/brahea/brahea_armata/14.jpeg",
            "../assets/content/palms/brahea/brahea_armata/15.jpeg",
            "../assets/content/palms/brahea/brahea_armata/16.jpeg",
            "../assets/content/palms/brahea/brahea_armata/17.jpeg",
            "../assets/content/palms/brahea/brahea_armata/18.jpeg",

          ]
        },
        {
          title: "Brahea edulis",
          description: "Palma Guadalupe lub palma de Guadalupe, jest endemiczną palmą występującą na wyspie Guadalupe w Meksyku, chociaż kilka drzewostanów zostało posadzonych w innych miejscach. Jest to palma wachlarzowa, która rośnie od 4,50 do 13 metrów. Rośnie na wysokości między 400 a 1000 metrów nad poziomem morza.",
          images: [
            "../assets/content/palms/brahea_edulis/1.jpeg",
          ]
        },
      ]
    },

    {
      name: "Jubea_chilensis",
      title: "Jubaea chilensis",
      images: [
        "../assets/content/palms/jubea_chilensis/1.jpeg",
        "../assets/content/palms/jubea_chilensis/2.jpeg",
        "../assets/content/palms/jubea_chilensis/3.jpeg"
      ],
      subspieces: [
        {
          title: "Jubaea chilensis",
          description: "Gatunek rośliny z rodziny arekowatych z monotypowego rodzaju zwanego jubea Jubaea, zwyczajowo zwany palmą chilijską i palmą miodową. Pochodzi z południowo-zachodniego obszaru Ameryki Południowej i jest endemicznym gatunkiem obszaru chilijsko-patagońskiego. <br><br>Jest bardzo imponującą palmą osiągającą ponad 30 metrów wysokości, kłodzina u podstawy może osiągnąć do 1,5 m średnicy. Kłodzina jest krępa, szara i gładka. Obwód korony osiąga do dziewięciu metrów. Pierzaste liście mają długość od dwóch do czterech metrów. Palma ta rośnie bardzo wolno – jest jedną z najwolniej rosnących palm na świecie. Zakwita i owocuje dopiero po 60 latach. Dorosła palma w odpowiednim klimacie przyrasta do 20 cm rocznie. W klimacie umiarkowanym uprawa jubei jest możliwa, roślina przyrasta jednak znacznie wolniej (ok. 10 cm rocznie). <br><br>Jest tolerancyjna do około -15 °C, co czyni ją jedną z najbardziej odpornych na zimno palm z pierzastymi liśćmi. Ponieważ w swoim środowisku rośnie aż do wysokości 1400 metrów nad poziomem morza, nie wymaga gorących okresów letnich.",
          images: [
            "../assets/content/palms/jubea_chilensis/1.jpeg",
            "../assets/content/palms/jubea_chilensis/2.jpeg",
            "../assets/content/palms/jubea_chilensis/3.jpeg",
            "../assets/content/palms/jubea_chilensis/4.jpeg",
            "../assets/content/palms/jubea_chilensis/5.jpeg",
            "../assets/content/palms/jubea_chilensis/6.jpeg",
            "../assets/content/palms/jubea_chilensis/7.jpeg",

          ]
        }
      ]
    },
    {
      name: "Sabal_minor",
      title: "Sabal minor",
      images: [
        "../assets/content/palms/sabal_minor/1.jpeg"
      ],
      subspieces: [
        {
          title: "Sabal minor",
          description: "to gatunek palmy, pochodzącej z rodziny arekowatych. W warunkach naturalnych rośnie w Ameryce północnej. Jest to palma krzaczasta, dorastająca do 200 cm, o pięknych zielonych,dużych wachlarzowych liściach. Wiosną kwitnie drobnymi białymi kwiatkami, które górują nad koroną silnych, sztywnych liści. Latem można ją przetrzymywać na zewnątrz, ale zimą musi stać wewnątrz.",
          images: [
            "../assets/content/palms/sabal_minor/1.jpeg",
          ]
        },
      ]
    },

    {
      name: "Butia",
      title: "Butia",
      images: [
        "../assets/content/palms/butia/1.jpeg",
        "../assets/content/palms/butia/2.jpeg",
        "../assets/content/palms/butia/3.jpeg",
      ],
      subspieces: [
        {
          title: "Butia odorata",
          description: "opis wymaga uzupełnienia",
          images: [
            "../assets/content/palms/butia/1.jpeg"
          ]
        },
        {
          title: "Butia capitata (palma dżemowa)",
          description: "jedna z bardziej wytrzymałych palm – dorosła roślina potrafi znieść mrozy nawet do -12 stopni. Może upiększać taras, czy ogród od wczesnej wiosny do późnej jesieni. Dobrze znosi także hodowle domową, nie ma zbyt wielkich wymagań, potrzebuje przede wszystkim słonecznego stanowiska. Ma bardzo efektowne niebiesko-zielone liście pokrojem przypominające strusie pióra. Hodowana w doniczce dorasta do około 1,5m wysokości. Dużym atutem tej rośliny jest to, że produkuje jadalne, smaczne owoce, które w miejscu naturalnego występowania palmy, służą przede wszystkim do wyrobu dżemów oraz innych przetworów (stąd jej popularna nazwa - palma dżemowa).",
          images: [
            "../assets/content/palms/butia/1.jpeg"
          ]
        },
        {
          title: "Butia Yatay",
          description: "galaretowa palma lub palma yatay, to palma Butia pochodząca z południowej Brazylii, Urugwaju i północnej Argentyny. Jest znany jako butiá-jataí w języku portugalskim na południu Brazylii, a także po prostu jataí lub butiá. Czasami jest uprawiany jako roślina ozdobna w Europie i Stanach Zjednoczonych.",
          images: [
            "../assets/content/palms/butia/1.jpeg"
          ]
        },
      ]

    },

    {
      name: "Aarchontophoenics_alexandra",
      title: "Aarchontophoenics alexandra",
      images: [
        "../assets/content/palms/archontophoenics_alexandra/1.jpeg",
        "../assets/content/palms/archontophoenics_alexandra/2.jpeg",
        "../assets/content/palms/archontophoenics_alexandra/3.jpeg",

      ],
      subspieces: [
        {
          title: "Aarchontophoenics alexandra",
          description: "Gatunek pochodzi z lasów deszczowych porastających nadbrzeże północno-wschodniej Australii. Ma piękny, smukły, szary pień i rozszerzoną podstawę liści z widocznymi śladami po opadłych liściach. Duże, pierzaste liście są jasnozielone od góry, srebrno-białe od spodu. Wykształca białe rozgałęzione kwiatostany, które zwisają spomiędzy liści. Owoce są okrągłe i czerwone. Dobrze rośnie w wilgotnej ziemi, ważny jest też dobry drenaż. Kiedy jest sucho warto pamiętać o dodatkowym podlewaniu. Dobrze odnajduje się w pełnym słońcu i półcieniu. Ta piękna palma doskonale nadaje się jako palma doniczkowa do jasnych pomieszczeń.",
          images: [
            "../assets/content/palms/archontophoenics_alexandra/1.jpeg",
            "../assets/content/palms/archontophoenics_alexandra/2.jpeg",
            "../assets/content/palms/archontophoenics_alexandra/3.jpeg",
          ]
        }
      ]
    },
    {
      name: "Palma_kokosowa",
      title: "Palma kokosowa",
      images: [
        "../assets/content/palms/coco_nucifera/1.jpeg",
      ],
      subspieces: [
        {
          title: "Palma kokosowa",
          description: "Coco nucifera często występuje również pod nazwami kokos właściwy, kokosowiec właściwy czy kokosowiec to należąca do rodziny arekowatych roślina którą spotkać możemy niemal na całym świecie. Najpopularniejsz w krajach Azjatyckich oraz w Ameryce Południowej. <br><br>Dorastająca do 30 metrów palma kokosowa o pojedynczym prostym pniu którego średnica nie przekracza 40 cm. Dorosła coco nucifera wypuszcza wiele łodyk których długie liście mogące dochodzić nawet do 6 metrów. Palma ta wymaga odpowiednio wysokiej temperatury, nie jest mrozoodporna, zimowanie powinniśmy przeprowadzić w chłodnym miejscu w którym to temperatura nie spada poniżej 10 stopni lub bez zimowania zapewnić palmie jasne stanowisko z temperaturą powyżej 20 stopni i odpowiednią wilgotnością powietrza. <br><br>Palma kokosowa uwielbia podlewanie, nie powinniśmy dopuszczać do całkowitego przeschnięcia podłoża które powinno być lekko kwaśne i przepuszczalne. <br><br>Palma preferuje stanowisko jasne, nasłonecznione.",
          images: [
            "../assets/content/palms/coco_nucifera/1.jpeg"
          ]
        }
      ]
    },
    {
      name: "Tritrinox_capestris",
      title: "Tritrinox capestris",
      images: [
        "../assets/content/palms/trithrinax_campestris/1.jpeg",
      ],
      subspieces: [
        {
          title: "Tritrinox capestris",
          description: "Niesamowita palma pochodząca z Argentyny i Urugwaju. Jest w stanie wytrzymać zarówno bardzo duże mrozy jak i silny wiatr, ponieważ liście tej palmy są niezwykle sztywne. Bardziej niż u Trachycarpus wagnerianus. Znane są przypadki, gdzie dorosłe, dobrze ukorzenione palmy wytrzymały bez uszkodzeń nawet -17C. <br><br>Sztywne liście na końcu pokryte są bardzo dużymi kolcami. Pień również jest uzbrojony w kolce (igły). Trzeba być bardzo ostrożnym. Wysokość palmy w naturze dochodzi do 5 metrów. Z reguły wytwarza kilka pni. Liście są majestatyczne w kolorze srebrzysto-niebieskim. <br>W naturze palma rośnie w rejonach górskich Ameryki Południowej. wytrzymuje zarówno ekstremalne susze i gorąco jak i mróz. <br><br>Palma bardzo trudna do zdobycia. Rośnie niezwykle wolno przez co jej ceny są wysokie. <br><br>Według mojej opinii mrozoodporność tej palmy, przy krótkotrwałych (kilku godzinnych) spadkach temperatury dla dorosłego dobrze ukorzenionego osobnika w gruncie to ok -12C. <br><br>Liście dorosłej palmy wytrzymują spadki temperatur do -10C, -12C. Zalecam okrywać zanim temperatura dojdzie do -10C",
          images: [
            "../assets/content/palms/trithrinax_campestris/1.jpeg",
          ]
        }
      ]
    },
  ];

  yuccasData = [
    {
      name: "jukka_rostrata",
      title: "Jukka rostrata",
      images: [
        "../assets/content/yuccas/yucca_rostrata/1.jpeg",
        "../assets/content/yuccas/yucca_rostrata/2.jpeg",
        "../assets/content/yuccas/yucca_rostrata/3.jpeg",
      ],
      subspieces: [
        {
          title: "Jukka rostrata",
          description: "To mrozoodporny gatunek Jukki o srebrno – niebieskich lancetowatych wąskich liściach może rosnąć w pełnym słońcu, jest to mało wymagająca roślina, kwitnie latem kwiaty białe zebrane w grona. Wytrzymuje spadek temperatury do – 20 C.",
          images: [
            "../assets/content/yuccas/yucca_rostrata/1.jpeg",
            "../assets/content/yuccas/yucca_rostrata/2.jpeg",
            "../assets/content/yuccas/yucca_rostrata/3.jpeg",
            "../assets/content/yuccas/yucca_rostrata/4.jpeg",
            "../assets/content/yuccas/yucca_rostrata/5.jpeg",
            "../assets/content/yuccas/yucca_rostrata/6.jpeg",
            "../assets/content/yuccas/yucca_rostrata/7.jpeg",
            "../assets/content/yuccas/yucca_rostrata/8.jpeg",
            "../assets/content/yuccas/yucca_rostrata/9.jpeg",
            "../assets/content/yuccas/yucca_rostrata/10.jpeg",
            "../assets/content/yuccas/yucca_rostrata/11.jpeg",
            "../assets/content/yuccas/yucca_rostrata/12.jpeg",
            "../assets/content/yuccas/yucca_rostrata/13.jpeg",
            "../assets/content/yuccas/yucca_rostrata/14.jpeg",
            "../assets/content/yuccas/yucca_rostrata/15.jpeg",
            "../assets/content/yuccas/yucca_rostrata/16.jpeg",
            "../assets/content/yuccas/yucca_rostrata/17.jpeg",
            "../assets/content/yuccas/yucca_rostrata/18.jpeg",
            "../assets/content/yuccas/yucca_rostrata/19.jpeg",
            "../assets/content/yuccas/yucca_rostrata/20.jpeg",
            "../assets/content/yuccas/yucca_rostrata/21.jpeg",
            "../assets/content/yuccas/yucca_rostrata/22.jpeg",
            "../assets/content/yuccas/yucca_rostrata/23.jpeg",
            "../assets/content/yuccas/yucca_rostrata/24.jpeg",
          ]
        }
      ]
    },
    {
      name: "jukka_aloifolia",
      title: "Jukka aloifolia",
      images: [
        "../assets/content/yuccas/yucca_aloifolia/1.jpeg",
        "../assets/content/yuccas/yucca_aloifolia/2.jpeg",
        "../assets/content/yuccas/yucca_aloifolia/3.jpeg",
      ],
      subspieces: [
        {
          title: "Jukka aloifolia",
          description: "Gatunek z rodzaju Yucca. Popularne nazwy to aloes, roślina sztyletu i hiszpański bagnet. Rośnie na glebach piaszczystych, szczególnie na wydmach wzdłuż wybrzeża",
          images: [
            "../assets/content/yuccas/yucca_aloifolia/1.jpeg",
            "../assets/content/yuccas/yucca_aloifolia/2.jpeg",
            "../assets/content/yuccas/yucca_aloifolia/3.jpeg",
            "../assets/content/yuccas/yucca_aloifolia/4.jpeg",
            "../assets/content/yuccas/yucca_aloifolia/5.jpeg",
            "../assets/content/yuccas/yucca_aloifolia/6.jpeg",
            "../assets/content/yuccas/yucca_aloifolia/7.jpeg",
          ],
        }
      ]
    },
    {
      name: "jukka_filifera",
      title: "Jukka filifera",
      images: [
        "../assets/content/yuccas/yucca_filifera/1.jpeg",
        "../assets/content/yuccas/yucca_filifera/2.jpeg",
        "../assets/content/yuccas/yucca_filifera/3.jpeg",
      ],
      subspieces: [
        {
          title: "Jukka filifera",
          description: "Opis wymaga uzupełnienia",
          images: [
            "../assets/content/yuccas/yucca_filifera/1.jpeg",
            "../assets/content/yuccas/yucca_filifera/2.jpeg",
            "../assets/content/yuccas/yucca_filifera/3.jpeg",
            "../assets/content/yuccas/yucca_filifera/4.jpeg",
            "../assets/content/yuccas/yucca_filifera/5.jpeg",
            "../assets/content/yuccas/yucca_filifera/6.jpeg",
            "../assets/content/yuccas/yucca_filifera/7.jpeg",
            "../assets/content/yuccas/yucca_filifera/8.jpeg",
            "../assets/content/yuccas/yucca_filifera/9.jpeg",
            "../assets/content/yuccas/yucca_filifera/10.jpeg",
            "../assets/content/yuccas/yucca_filifera/11.jpeg",
            "../assets/content/yuccas/yucca_filifera/12.jpeg",
          ]
        }
      ]
    },

    {
      name: "jukka_rigida",
      title: "Jukka rigida",
      images: [
        "../assets/content/yuccas/yucca_rigidia/1.jpeg",
        "../assets/content/yuccas/yucca_rigidia/2.jpeg",
      ],
      subspieces: [
        {
          title: "Jukka rigida",
          description: "Juka rigida bywa mylona z jukką rostrata, rigida ma jednak sztywniejsze i bardziej szorstkie liście. Roślina wykształca pień, który może się rozgałęziać, dorasta do 2-5 m. Liście niebieskawe, sztywne, ząbkowane, osiągają 30-60 cm długości.",
          images: [
            "../assets/content/yuccas/yucca_rigidia/1.jpeg",
            "../assets/content/yuccas/yucca_rigidia/2.jpeg",
          ],
        }
      ]
    },
    {
      name: "jukka_faxoniana",
      title: "Jukka faxoniana",
      images: [
        "../assets/content/yuccas/yucca_faxoniana/1.jpeg",
        "../assets/content/yuccas/yucca_faxoniana/2.jpeg",
        "../assets/content/yuccas/yucca_faxoniana/3.jpeg"
      ],
      subspieces: [
        {
          title: "Jukka faxoniana",
          description: "Nazywana palmą ixtle, palmą istle lub palmą barretą – gatunek roślin należących do rodziny szparagowatych. Pochodzi z północnego Meksyku i Teksasu.. Najbardziej mrozoodporna jukka wytwarzająca tak duży pień. Wytrzymuje długie spadki temperatury do -18°C, a krótkotrwałe nawet do -23°C. <br><br>Juka ta dorasta do 6-10 metrów. Czasami formuje kilka głów pełnych liści. W naturze jej zielone liście mają 90-110 cm długości i 5 cm szerokości ale w uprawie ogrodowej mogą mieć 120-140 cm i tworzyć wielką symetryczną kulę.",
          images: [
            "../assets/content/yuccas/yucca_faxoniana/1.jpeg",
            "../assets/content/yuccas/yucca_faxoniana/2.jpeg",
            "../assets/content/yuccas/yucca_faxoniana/3.jpeg",
            "../assets/content/yuccas/yucca_faxoniana/4.jpeg"
          ],
        }
      ]
    },
    {
      name: "nolina_nelsonii",
      title: "Nolina nelsonii",
      images: [
        "../assets/content/yuccas/nolina_nelsoni/1.jpeg",
        "../assets/content/yuccas/nolina_nelsoni/2.jpeg",
        "../assets/content/yuccas/nolina_nelsoni/3.jpeg",
      ],
      subspieces: [
        {
          title: "Nolina nelsonii",
          images: [
            "../assets/content/yuccas/nolina_nelsoni/1.jpeg",
            "../assets/content/yuccas/nolina_nelsoni/2.jpeg",
            "../assets/content/yuccas/nolina_nelsoni/3.jpeg",
            "../assets/content/yuccas/nolina_nelsoni/4.jpeg",
            "../assets/content/yuccas/nolina_nelsoni/5.jpeg",
          ],
          description: "To roślina kwitnąca z rodzaju Nolina. Gatunek ten został po raz pierwszy opisany w 1906 roku; w swoim rodzaju jest morfologicznie najbardziej podobny do Nolina parryi."

        }
      ]


    },

  ]
  exoticPlantsData = [
    {
      name: "cytrusy",
      title: "Cytrusy",
      images: [
        "../assets/content/exotic_plants/citruses/1.jpeg",
        "../assets/content/exotic_plants/citruses/2.jpeg",
        "../assets/content/exotic_plants/citruses/3.jpeg",
      ],
      subspieces: [
        {
          title: "Cytrusy",
          description: "Jeżeli chcemy uprawiać cytrusy, musimy niestety ograniczyć się do posadzenia ich w donicy i trzymania w domu. Drzewa cytrusowe nie poradziłyby sobie podczas polskich, mroźnych i długich zim. Możemy próbować budować osłony czy miniszklarnie, aby ochronić je przed zimnem, ale temperatura gleby jest tak niska, że korzenie najzwyczajniej przemarzają, a roślina szybko marnieje. Warto więc postawić na domową uprawę doniczkową. <br><br>Do wyboru mamy kilka rodzajów cytrusów. Najpopularniejsza jest oczywiście pomarańcza, często pojawiające się w sklepach niewielkie efektowne drzewko, lecz wymagające dużej uwagi. Przy nieodpowiednich warunkach liście zaczynają opadać i żółknąć. W naturalnych warunkach dorasta do 4 m, jednak my uprawiamy odmianę karłową, znacznie mniejszą. <br><br>Innym równie znanym owocem jest cytryna. Najpopularniejsza to cytryna skierniewicka. Ma drobne białe kwiaty i duże liście. Możemy także uprawiać drzewo grejpfrutowe, lecz polecane jest do ogrodów zimowych lub innych sporych pomieszczeń, ponieważ to duże drzewo. Cytrusem o małych owocach będzie mandarynka. Wolno rośnie i jest dość rzadko spotykana w polskich uprawach.",
          images: [
            "../assets/content/exotic_plants/citruses/1.jpeg",
            "../assets/content/exotic_plants/citruses/2.jpeg",
            "../assets/content/exotic_plants/citruses/3.jpeg",
            "../assets/content/exotic_plants/citruses/4.jpeg",
            "../assets/content/exotic_plants/citruses/5.jpeg",
            "../assets/content/exotic_plants/citruses/6.jpeg",
            "../assets/content/exotic_plants/citruses/7.jpeg",
            "../assets/content/exotic_plants/citruses/8.jpeg",
            "../assets/content/exotic_plants/citruses/9.jpeg",
            "../assets/content/exotic_plants/citruses/10.jpeg",
            "../assets/content/exotic_plants/citruses/11.jpeg",
            "../assets/content/exotic_plants/citruses/12.jpeg",
            "../assets/content/exotic_plants/citruses/13.jpeg",
            "../assets/content/exotic_plants/citruses/14.jpeg",
            "../assets/content/exotic_plants/citruses/15.jpeg",
            "../assets/content/exotic_plants/citruses/16.jpeg"
          ],
        },
      ]
    },
    {
      name: "strelicja",
      title: "Strelicja",
      images: [
        "../assets/content/exotic_plants/strelicja/1.jpeg",
        "../assets/content/exotic_plants/strelicja/2.jpeg",
        "../assets/content/exotic_plants/strelicja/3.jpeg",
      ],
      subspieces: [
        {
          title: "Strelicja augusta",
          description: "Opis wymaga uzupełnienia",
          images: [
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/1.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/2.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/3.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/4.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/5.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/6.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/7.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/8.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/9.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/10.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/11.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/12.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/13.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/14.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_augusta/15.jpeg",
          ],
        },
        {
          title: "Strelicja reginae",
          description: "Opis wymaga uzupełnienia",
          images: [
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/1.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/2.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/3.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/4.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/5.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/6.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/7.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/8.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/9.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/10.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/11.jpeg",
            "../assets/content/exotic_plants/strelicja/strelicja_reginae/12.jpeg",
          ],
        }
      ]
    },
    {
      name: "alokazja_macrorrhiza",
      title: "Alokazja macrorrhiza",
      images: [
        "../assets/brak_zdjecia.jpeg",
      ],
      subspieces: [
        {
          title: "Alokazja Macrorrhiza",
          description: "Pochodzi z obszarów tropikalnej Malezji, Australii oraz Wysp Salomona. Alokazja Macrorrhiza wyróżnia się na tle innych roślin olbrzymi liśćmi, które mają około 1 metra długości. W liściach i łodygach występuje obficie sok roślinny, który w stanie surowym jest trujący. Alokazja ma pokrój wyprostowany, krzewiasty. Wytwarza duże, strzałkowate liście, które osadzone są na długich i grubych łodygach wyrastających z podziemnej bulwy. W odpowiednich warunkach roślina ta może osiągać wysokość 15 metrów.",
          images: [
            "../assets/brak_zdjecia.jpeg",
          ],
        }
      ]
    },
    {
      name: "dasylirion",
      title: "Dasylirion ",
      images: [
        "../assets/content/exotic_plants/dasylirion/1.jpeg",
        "../assets/content/exotic_plants/dasylirion/2.jpeg",
        "../assets/content/exotic_plants/dasylirion/3.jpeg",
      ],
      subspieces: [
        {
          title: "Dasylirion longisimum",
          description: "Opis wymaga uzupełnienia",
          images: [
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/1.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/2.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/3.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/4.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/5.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/6.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/7.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/8.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/9.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/10.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/11.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/12.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_longisimum/13.jpeg",
          ],
        },
        {
          title: "Dasylirion seratifolium",
          description: "Opis wymaga uzupełnienia",
          images: [
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/1.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/2.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/3.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/4.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/5.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/6.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/7.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/8.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/9.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/10.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/11.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/12.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/13.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/14.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/15.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/16.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/17.jpeg",
            "../assets/content/exotic_plants/dasylirion/dasylirion_seratifolium/18.jpeg",
          ],
        },
        {
          title: "Dasylirion wheeleri",
          description: "Gatunek rośliny kwitnącej z rodziny szparagów Asparagaceae, pochodzącej z suchych środowisk w północnym Meksyku, w Chihuahua i Sonorze oraz w południowo-zachodnich Stanach Zjednoczonych, na pustyni Sonoran w Arizonie, a także w Nowym Meksyku i Teksasie.",
          images: [
            "../assets/brak_zdjecia.jpeg"
          ]
        },
      ]
    },
    {
      name: "cycas_revoluta",
      title: "Cycas revoluta",
      images: [
        "../assets/content/exotic_plants/cycas_revoluta/1.jpeg",
        "../assets/content/exotic_plants/cycas_revoluta/2.jpeg",
        "../assets/content/exotic_plants/cycas_revoluta/3.jpeg",
      ],
      subspieces: [
        {
          title: "Cycas revoluta (Sagowiec odwinięty)",
          description: "Gatunek roślin należących do klasy sagowców i rodziny sagowcowatych. Zasięg naturalny obejmuje południową Japonię. Popularna roślina ozdobna, w środkowoeuropejskich warunkach klimatycznych uprawiana jako roślina doniczkowa.",
          images: [
            "../assets/content/exotic_plants/cycas_revoluta/1.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/2.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/3.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/4.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/5.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/6.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/7.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/8.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/9.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/10.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/11.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/12.jpeg",
            "../assets/content/exotic_plants/cycas_revoluta/13.jpeg",
          ],
        }
      ]

    },
  ];

  oliveTreesData = [
    {
      name: "drzewa_oliwne",
      title: "Drzewa oliwne",
      images: [
        "../assets/content/olive_trees/1.jpeg",
        "../assets/content/olive_trees/2.jpeg",
        "../assets/content/olive_trees/3.jpeg",
      ],
      subspieces: [
        {
          title: "Drzewa oliwne",
          description: "Oliwka, z łac. Olea europaea, jest drzewem z rodziny oliwkowatych, którego naturalnym środowiskiem są obszary Afryki, Półwyspu Arabskiego, śródziemnomorskiej Azji i Europy Południowej. W formie hodowlanej występuje w wielu rejonach świata, również w Polsce. Jej cechą charakterystyczną są wiecznie zielone liście z białym nalotem na spodzie oraz owoce – mięsiste pestkowce o owalnym kształcie. Drzewko osiąga w naturze do 12 metrów wysokości, w wersji hodowlanej nie przekracza jednak 6 metrów. <br><br>Drzewko oliwne jest rośliną idealną dla początkujących ogrodników, ponieważ dobrze znosi wszelkie zaniedbania. Charakteryzuje je również wysoka odporność na susze oraz ataki szkodników i chorób. W uprawie roślina preferuje lekko zasadowe, piaszczyste, przepuszczalne i żyzne gleby, jednak najważniejsze dla jej wzrostu jest odpowiednio nasłonecznione stanowisko.",
          images: [
            "../assets/content/olive_trees/1.jpeg",
            "../assets/content/olive_trees/2.jpeg",
            "../assets/content/olive_trees/3.jpeg",
            "../assets/content/olive_trees/4.jpeg",
            "../assets/content/olive_trees/5.jpeg",
            "../assets/content/olive_trees/6.jpeg",
            "../assets/content/olive_trees/7.jpeg",
            "../assets/content/olive_trees/8.jpeg",
            "../assets/content/olive_trees/9.jpeg",
            "../assets/content/olive_trees/10.jpeg",
            "../assets/content/olive_trees/11.jpeg",
            "../assets/content/olive_trees/12.jpeg",
            "../assets/content/olive_trees/13.jpeg",
            "../assets/content/olive_trees/14.jpeg",
            "../assets/content/olive_trees/15.jpeg",
            "../assets/content/olive_trees/16.jpeg",
            "../assets/content/olive_trees/17.jpeg",
            "../assets/content/olive_trees/18.jpeg",
            "../assets/content/olive_trees/19.jpeg",
            "../assets/content/olive_trees/20.jpeg",
            "../assets/content/olive_trees/21.jpeg",
            "../assets/content/olive_trees/22.jpeg",
          ],
        },
      ]
    },
  ];

  getAllPalmsData(): Array<any> {

    return this.palmsData;
  }

  getPalmData(name: string): Array<any> {

    const result = this.palmsData.find(element => element.name === name);

    return result ? result.subspieces : [];
  }

  getAllYuccasData(): Array<any> {

    return this.yuccasData;
  }

  getYuccaData(name: string): Array<any> {

    const result = this.yuccasData.find(element => element.name === name);

    return result ? result.subspieces : [];
  }

  getAllExoticPlantsData(): Array<any> {

    return this.exoticPlantsData;
  }

  getExoticPlantData(name: string): Array<any> {

    const result = this.exoticPlantsData.find(element => element.name === name);

    return result ? result.subspieces : [];
  }

  getAllOliveTreesData(): Array<any> {

    return this.oliveTreesData;
  }

  getOliveTreeData(name: string): Array<any> {

    const result = this.oliveTreesData.find(element => element.name === name);

    return result ? result.subspieces : [];
  }

}
