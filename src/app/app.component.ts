import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'palmiarnia-krakow';
  dataPalms = [
    {
      name: "Szorstkowiec Fortunego",
      description: "gatunek drzewa z rodziny arekowatych. Pochodzi z gór południowych i środkowych Chin, poza tym występuje w Bhutanie, Nepalu, północnych Indiach, Mjanmie i Wietnamie, a jako gatunek naturalizowany także w Japonii. Nazwa upamiętnia Roberta Fortune'a, który przywiózł tę roślinę z Chin do Europy. Gatunek jest uprawiany już w Europie od ponad 160 lat jako roślina ozdobna. Ze względu na relatywnie, jak na palmę, dużą odporność na niskie temperatury jest popularna w uprawie w krajach klimatu umiarkowanego. Z włókna otrzymanego z liści w niektórych krajach wykonuje się miotły, powrozy, nieprzemakalne płaszcze, kapelusze i inne wyroby."
    },
    {
      name: "Karłatka niska",
      description: "gatunek wiecznie zielonej rośliny z rodziny arekowatych. Jedyny przedstawiciel monotypowego rodzaju karłatka. Jako łatwy gatunek do uprawy, sadzony jest także poza swym pierwotnym zasięgiem, w tym uprawiany jest jako roślina doniczkowa. Owoce są niejadalne i nie mają wartości użytkowej."
    },
    {
      name: "Karłatka niebieska (chamaerops humilis)",
      description: "jest jedyną w Eruopie rodzimą palmą. Jej zasięg obejmuje zachodnią część obszaru śródziemnomorskiego, od południowych Włoch do południowej Hiszpanii oraz Afrykę, wzdłuż wybrzeża północnoafrykańskiego, od Tunezji do Maroka. Obecnie bywa uprawiana, w celach ozdobnych, na większym obszarze, między innymi na południu Chorwacji i Grecji. Ta wdzięczna i niewybredna roślina bardzo dobrze nadaje się zarówno do miejsc słonecznych jak i zacienonych. Odmiana Carifera cechuje się kolorem liści, które są z góry jak i dołu srebrzysto-niebieskie. "
    },
    {
      name: "Waszyngtonia nitkowata (Filifera)",
      description: "pochodzi z północno-zachodniego Meksyku. Jest jedną z tych palm, które przykuwają naszą uwagę sowim naprawdę wyjątkowym wyglądem. Palma ta zawdzięcza to ozdobnym włóknom zwisającym z wachlarzowatych liści. Z tym też związana jest jej nazwa, ponieważ filifera z łaciny oznacza mająca włókna. Doskonale nadaje się do uprawy w pojemnikach. Szybko rośnie, w mieszkaniu wymaga dużo miejsca oraz wysokiej wilgotności powietrza. Latem można ją bez obaw wynosić na zewnątrz. Najlepiej prezentuje się samotnie - wtedy dobrze widoczne są jej dekoracyjne liście i pień."
    },
    {
      name: "Waszyngtonia robusta",
      description: "pochodzi z suchych obszarów na terenie Meksyku, gdzie ma dostęp do wód gruntowych. Rośnie również w południowych regionach USA. Washingtonia robusta zwana jest Meksykańską. W naturze pnie przysłonięte są suchymi, opadniętymi liśćmi, które tworzą wokół pnia warstwową spódniczkę."
    },
    {
      name: "Daktylowiec kanaryjski",
      description: "gatunek rośliny z rodziny arekowatych, pochodzący z zachodniego wybrzeża Afryki, najprawdopodobniej z Wysp Kanaryjskich. Nazywana jest palmą królewską. Ze względu na atrakcyjny wygląd daktylowiec kanaryjski jest często uprawiany w cieplejszych, na ogół subtropikalnych regionach świata, szczególnie w klimacie śródziemnomorskim. Roślina ta występuje od południowej Wielkiej Brytanii na wyspie Tresco aż po południe Chile. Bardzo popularna jest w całej południowej Europie, a także w cieplejszych regionach USA, Australii, Nowej Zelandii, południowej Afryce, Chile i Argentynie. W Polsce ze względu na klimat uprawiana jest w oranżeriach lub w pojemnikach jako roślina pokojowa."
    },
    {
      name: "Daktylowiec niski",
      description: "gatunek rośliny z rodziny arekowatych, występujący naturalnie w północnych Indiach, Laosie i na południu Wietnamu. Daktylowiec niski może dorastać do 3 m. Ma pokrój krzaczasty, rosnąc dziko wytwarza liczne odrosty, w uprawie doniczkowej zazwyczaj ma tylko jeden pień. Młode pędy liściowe są pokryte szarawym nalotem. Rozwinięte liście są pierzaste, delikatne i ładnie wygięte, na łodygach mają cienkie, ostre kolce. Powierzchnia pnia przypomina fakturą niedojrzały ananas i pokryta jest w górnej części brązowymi włóknami."
    },
    {
      name: "Bismarckia nobilis",
      description: "Bismarckia nobilis – jedyny gatunek z monotypowego rodzaju Bismarckia Hildebrandt. Palma ta występuje naturalnie na terenie Madagaskaru, gdzie jest dość rzadka. Poza tym jednak jest szeroko rozpowszechniona w uprawie jako roślina ozdobna."
    },
    {
      name: "Palma dżemowa (Butia capitata)",
      description: "jedna z bardziej wytrzymałych palm – dorosła roślina potrafi znieść mrozy nawet do -12 stopni. Może upiększać taras, czy ogród od wczesnej wiosny do późnej jesieni. Dobrze znosi także hodowle domową, nie ma zbyt wielkich wymagań, potrzebuje przede wszystkim słonecznego stanowiska. Ma bardzo efektowne niebiesko-zielone liście pokrojem przypominające strusie pióra. Hodowana w doniczce dorasta do około 1,5m wysokości. Dużym atutem tej rośliny jest to, że produkuje jadalne, smaczne owoce, które w miejscu naturalnego występowania palmy, służą przede wszystkim do wyrobu dżemów oraz innych przetworów (stąd jej popularna nazwa - palma dżemowa)."
    },
    {
      name: "Brahea armata",
      description: "powszechnie znana jako meksykańska niebieska palma lub niebieska palma hesper, jest dużym wiecznie zielonym drzewem z rodziny arekowatych, pochodzącym z Baja California w Meksyku. Jest powszechnie sadzony jako roślina ozdobna. Dorasta do wysokości 15 metrów z grubym pniem."
    },
    {
      name: "Brahea edulis",
      description: "palma Guadalupe lub palma de Guadalupe, jest endemiczną palmą występującą na wyspie Guadalupe w Meksyku, chociaż kilka drzewostanów zostało posadzonych w innych miejscach. Jest to palma wachlarzowa, która rośnie od 4,50 do 13 metrów. Rośnie na wysokości między 400 a 1000 metrów nad poziomem morza."
    },
    {
      name: "Jubaea chilensis",
      description: "gatunek rośliny z rodziny arekowatych z monotypowego rodzaju zwanego jubea Jubaea, zwyczajowo zwany palmą chilijską i palmą miodową. Pochodzi z południowo-zachodniego obszaru Ameryki Południowej i jest endemicznym gatunkiem obszaru chilijsko-patagońskiego. Jest bardzo imponującą palmą osiągającą ponad 30 metrów wysokości, kłodzina u podstawy może osiągnąć do 1,5 m średnicy. Kłodzina jest krępa, szara i gładka. Obwód korony osiąga do dziewięciu metrów. Pierzaste liście mają długość od dwóch do czterech metrów. Palma ta rośnie bardzo wolno – jest jedną z najwolniej rosnących palm na świecie. Zakwita i owocuje dopiero po 60 latach. Dorosła palma w odpowiednim klimacie przyrasta do 20 cm rocznie. W klimacie umiarkowanym uprawa jubei jest możliwa, roślina przyrasta jednak znacznie wolniej (ok. 10 cm rocznie). Jest tolerancyjna do około -15 °C, co czyni ją jedną z najbardziej odpornych na zimno palm z pierzastymi liśćmi. Ponieważ w swoim środowisku rośnie aż do wysokości 1400 metrów nad poziomem morza, nie wymaga gorących okresów letnich."
    },
    {
      name: "Palma sabalowa",
      description: " gatunek roślin, należący do rodziny arekowatych (palm). Pochodzi z Ameryki Północnej, gdzie na naturalnych stanowiskach rośnie w USA w stanach: Oklahoma, Alabama, Arkansas, Floryda, Georgia, Luizjana, Missisipi, Karolina Północna i Karolina Południowa. Jest to krzaczasta palma o wysokości do 2 m i szerokości do 1 m. Ma bardzo krótki pęd, który zazwyczaj nie wyrasta ponad ziemię, lub tylko bardzo niewiele. Na jego szczycie wyrasta pióropusz liści. Są one sztywne, zielone lub niebieskozielone i podzielone na taśmowate listki. W krajach o cieplejszym klimacie palma ta jest uprawiana jako ogrodowa roślina ozdobna. Może też być w pojemnikach uprawiana na balkonach, w altanach, itp. W Polsce jest uprawiana jako roślina pokojowa, latem wystawiana na zewnątrz domu. Może być również hodowana na powietrzu pod warunkiem zapewnienia odpowiedniej osłony zimowej (ze szczególnym wskazaniem na dogrzewanie."
    },
    {
      name: "Butia Yatay",
      description: "galaretowa palma lub palma yatay, to palma Butia pochodząca z południowej Brazylii, Urugwaju i północnej Argentyny. Jest znany jako butiá-jataí w języku portugalskim na południu Brazylii, a także po prostu jataí lub butiá. Czasami jest uprawiany jako roślina ozdobna w Europie i Stanach Zjednoczonych."
    },
    {
      name: "Archontophoenix alexandrae",
      description: "gatunek pochodzi z lasów deszczowych porastających nadbrzeże północno-wschodniej Australii. Ma piękny, smukły, szary pień i rozszerzoną podstawę liści z widocznymi śladami po opadłych liściach. Duże, pierzaste liście są jasnozielone od góry, srebrno-białe od spodu. Wykształca białe rozgałęzione kwiatostany, które zwisają spomiędzy liści. Owoce są okrągłe i czerwone. Dobrze rośnie w wilgotnej ziemi, ważny jest też dobry drenaż. Kiedy jest sucho warto pamiętać o dodatkowym podlewaniu. Dobrze odnajduje się w pełnym słońcu i półcieniu. Ta piękna palma doskonale nadaje się jako palma doniczkowa do jasnych pomieszczeń."
    },
    {
      name: "Palma kokosowa",
      description: "gatunek pochodzi z południowo-wschodniej Azji lub z północno-zachodniej Ameryki Południowej. Kopalne szczątki z Nowej Zelandii wskazują, że rośliny o małych orzechach kokosowych rosły tam już przed 15 milionami lat. Najstarsze skamieniałości były znajdowane w Radżastanie w Indiach. Jej owoce wyrzucone przez morze i zdolne do kiełkowania znajdowano w Norwegii. Obecnie jest najczęściej występującą palmą, gdyż rośnie wzdłuż wszystkich tropikalnych brzegów morskich. Dorasta do 30 m wysokości. Ma pierzaste liście o 4–6 m długości i szerokości 60–90 cm."
    },

    {
      name: "",
      description: ""
    },
    {
      name: "",
      description: ""
    },
  ];
}


function readMoreToggle(): void {

  console.log("dupa")

}


const dataCitruses = [];
const dataOliveTrees = [];
const dataExoticTrees = [
  {
    name: "Jukka rostrata",
    description: "to mrozoodporny gatunek Jukki o srebrno – niebieskich lancetowatych wąskich liściach może rosnąć w pełnym słońcu, jest to mało wymagająca roślina, kwitnie latem kwiaty białe zebrane w grona. Wytrzymuje spadek temperatury do – 20 C."
  },
  {
    name: "Jukka aloesowa",
    description: "gatunek z rodzaju Yucca. Popularne nazwy to aloes, roślina sztyletu i hiszpański bagnet. Rośnie na glebach piaszczystych, szczególnie na wydmach wzdłuż wybrzeża"
  },
  {
    name: "Jukka rigida",
    description: "gatunek należący do rodziny agawowatych.Pochodzi z terenów USA i Meksyku. Jukka rigida bywa mylona z jukką rostratą ma jednak sztywniejsze i bardziej szorstkie liście."
  },
]


