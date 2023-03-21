const fishData = [
  {
    id: "1",
    name: "līdaka",
    description:
      "Parastā līdaka jeb vienkārši līdaka (Esox lucius) ir plēsīga saldūdens zivs ar torpēdveidīgu ķermeni. Tā mājo ziemeļu puslodes kontinentos — Eirāzijā un Ziemeļamerikā",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Esox_lucius_Prague_Vltava_2.jpg/250px-Esox_lucius_Prague_Vltava_2.jpg",
  },
  {
    id: "2",
    name: "līnis",
    description:
      "Līnis (Tinca tinca) ir vienīgā līņu dzimtas (Tincidae) saldūdens zivs, kas mājo arī jūrā upju grīvu tuvumā",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Tench_%28Tinca_tinca%29_%2813532518743%29.jpg/260px-Tench_%28Tinca_tinca%29_%2813532518743%29.jpg",
  },
  {
    id: "3",
    name: "zandarts",
    description:
      "Līnis (Tinca tinca) ir vienīgā līņu dzimtas (Tincidae) saldūdens zivs, kas mājo arī jūrā upju grīvu tuvumā",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/StizostedionLuciopercaAquarium.JPG/240px-StizostedionLuciopercaAquarium.JPG",
  },
  {
    id: "4",
    name: "zutis",
    description:
      "Līnis (Tinca tinca) ir vienīgā līņu dzimtas (Tincidae) saldūdens zivs, kas mājo arī jūrā upju grīvu tuvumā",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Anguilla_anguilla.jpg",
  },
  {
    id: "5",
    name: "asaris",
    description:
      "Asaris jeb Eiropas asaris (Perca fluviatilis) ir asaru dzimtas (Percidae) plēsīga saldūdens zivis.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Perca_fluviatilis.jpg",
  },
  {
    id: "7",
    name: "ķīsis",
    description:
      "Ķīsis ir neliela zivs, kas lēni aug. Tā garums Latvijā ir līdz 20 cm, masa līdz 120 g.[1] Neskatoties uz savu mazo augumu, ķīsis ir agresīva zivs. Ķīsis šķērsgriezumā ir samērā apaļš. Mugura brūngana, sāni brūnganzaļi vai pelēcīgi, ar melniem, nelieliem plankumiem. Raibumiņi ir arī uz muguras un astes spuras",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gymnocephalus_cernuus_P%C3%A4rnu_River_Estonia_2010-01-06.jpg/1280px-Gymnocephalus_cernuus_P%C3%A4rnu_River_Estonia_2010-01-06.jpg",
  },
  {
    id: "9",
    name: "breksis (plaudis)",
    description:
      "Pieauguša plauža ķermeņa garums parasti ir 30—55 cm, vidējais svars 2—4 kg.[4] Bet plaudis var sasniegt 75 cm garumu un svērt vairāk kā 6 kg.[3] Plauža ķermenis ir sāniski saplacināts, un tam ir augstu izcelts muguras kūkums. Zvīņas ir sudrabaini pelēkā krāsā, lai gan vecākas zivis iegūst bronzas krāsas toni, īpaši tās, kas dzīvo tīros ūdeņos. Spuras ir tumši pelēkas vai gandrīz melnas, tās nekad nav sārtas. Spuru krāsa ir viena no galvenajām pazīmēm, pēc kuras plaudi var atšķirt no citām, līdzīgām zivīm. Galva relatīvi maza, arī acis un zvīņas mazas.Plaudim ir ļoti daudz asaku",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Abramis_brama_Prague_Vltava_1.jpg/1920px-Abramis_brama_Prague_Vltava_1.jpg",
  },
  {
    id: "11",
    name: "rauda",
    description:
      "Rauda ir neliela vai vidēji liela zivs. Tās ķermeņa garums var sasniegt 50 cm, lai gan parasti tas ir apmēram 25 cm garš.[1][3] Latvijā rauda sasniedz 33—47 cm. Lielākais zināmais svars bijis 2,6 kg.[2] Ķermenis samērā augsts, no sāniem mazliet saplacināts. Mute ir vērsta uz priekšu vai nedaudz uz leju. Mugura ir zilganzaļa vai zilganbrūna, sāni un vēders sudrabains. Acs varavīksnene sarkana, retāk dzeltenīga. Vēdera spuras un anālā spura, retāk citas spuras dzeltenīgi sarkanas vai oranžas, sāni un vēders sudrabains, rīkles zobi vienā rindā. Pirms nārsta tēviņiem uz ķermeņa un galvas izveidojas nārsta kārpiņas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Rutilus_rutilus_Prague_Vltava_3.jpg/1920px-Rutilus_rutilus_Prague_Vltava_3.jpg",
  },
  {
    id: "12",
    name: "rudulis",
    description:
      "Ruduļa ķermenis ir samērā augsts, no sāniem nedaudz saplacināts. Mute pavērsta uz augšu. Ķermeņa garums līdz 51 cm, svars līdz 2,1 kg.[1] Latvijā dzīvojošam rudulim ķermeņa garums var sasniegt vairāk kā 30 cm, bet svars vairāk kā kilogramu. Rudulis ir skaista zivs ar zeltainām zvīņām un spilgti sarkanām spurām.[2] Acs varavīksnene sarkanīga vai oranžīga. Mugura ir zilganpelēka, zaļganpelēka vai zaļganbrūna, sāni un vēders zeltains. Rīkles zobi divās rindās, rievoti. Pirms nārsta tēviņam uz galvas un muguras veidojas nārsta kārpiņas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rotfeder_Rudd.jpg/1280px-Rotfeder_Rudd.jpg",
  },
  {
    id: "6",
    name: "karpa",
    description:
      "Karpa, Eiropas karpa[1] jeb sazāns[2] (Cyprinus carpio) ir plaši izplatīta saldūdens karpu dzimtas (Cyprinidae) zivs, kuras dabīgais izplatības areāls ir Eiropa, Rietumāzija un daļēji Centrālāzija (no Turcijas līdz Afganistānai un Tadžikistānai )",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cyprinus_carpioSalzburgZoo_02.jpg/1280px-Cyprinus_carpioSalzburgZoo_02.jpg",
  },
  {
    id: "10",
    name: "sams",
    description:
      "Samu var atpazīt pēc tā lielās, plakanās galvas un platās mutes, kas vērsta uz augšu.[2] Samam ir daudzi, sīki zobiņi un divas garas ūsas augšžoklī un četras īsākas apakšžoklī. Tam ir gara anālā spura, kas stiepjas līdz astes spurai, un maza, smaila muguras spura, kas novietota relatīvi tuvu galvai. Tā krūšu spuras ir slaidas un tiek izmantotas, lai satvertu medījumu. Spuras norobežo telpu, liekot zivij bēgšanai izvēlēties sama plati atplesto muti. Muguras spurai un sānu spurām ir stingrs, dobs, kaulains, dzelonim līdzīgs spuru balstošs stars. Tas kā īlens ir garāks par pārējo spuras formu un tiek lietots kā ass ierocis. Tam medīt palīdz arī ļoti labā dzirde. Samam nav zvīņu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Silurus_glanis_02.jpg/1280px-Silurus_glanis_02.jpg",
  },
  {
    id: "8",
    name: "lasis",
    description:
      "Lasis ir slaids, ar nedaudz no sāniem saplacinātu ķermeni. Mute ar asiem un lieliem zobiem, kas vērsti uz priekšu. Kā visām lašveidīgajām zivīm tam ir taukspura. Raksturīga pazīme - augšžokļa gali sniedzas līdz acs aizmugurējai malai. ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Atlantischer_Lachs.jpg",
  },
];

export default fishData;
