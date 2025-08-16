const unitsData = {
  units: [
    {
      unitNumber: 1,
      text: {
        title: "Unit One: Nouns: Gender and Number",
        sections: [
          {
            title: "Gender: Masculine and Feminine",
            paragraphs: [
              {
                id: 1,
                content: "All Italian nouns are either **masculine** or **feminine**. The best way to remember the gender of a noun is to learn it along with its **definite article** (i.e., the word meaning ‘**the**’). In this unit, nouns will therefore be given along with their definite articles, but there will be no discussion of the articles as such. Definite and indefinite articles are the subject of Unit 2. Most nouns in the singular end in **-o**, **-a**, or **-e**."
              },
              {
                id: 2,
                content: "Italian nouns ending in **-o** are usually **masculine**:",
                table: {
                  headers: null,
                  rows: [
                    ["**l’uomo** [m]", "man"],
                    ["**il fratello** [m]", "brother"],
                    ["**il pomeriggio** [m]", "afternoon"],
                    ["**il treno** [m]", "train"]
                  ]
                }
              },
              {
                id: 3,
                content: "Italian nouns ending in **-a** are usually **feminine**:",
                table: {
                  headers: null,
                  rows: [
                    ["**la donna** [f]", "woman"],
                    ["**la sorella** [f]", "sister"],
                    ["**la sera** [f]", "evening"],
                    ["**la bicicletta** [f]", "bicycle"]
                  ]
                }
              },
              {
                id: 4,
                content: "Italian nouns ending in **-e** can be either **masculine** or **feminine**. Unless a noun ending in **-e** denotes a person whose gender is defined (e.g., ‘**husband**’, ‘**wife**’), there are virtually no rules to determine its gender, which must therefore be learned by heart or checked in a dictionary:",
                table: {
                  headers: null,
                  rows: [
                    ["**il padre**", "father", "**la madre**", "mother"],
                    ["**il ristorante**", "restaurant", "**la notte**", "night"],
                    ["**il sale**", "salt", "**la luce**", "light"],
                    ["**il cognome**", "surname", "**la chiave**", "key"]
                  ]
                }
              },
              {
                content: "To help you to determine the gender of some nouns ending in **-e**, here is a rule: nouns ending in **-sione** or **-zione** are **feminine**:",
                table: {
                  headers: null,
                  rows: [
                    ["**la televisione** [f]", "television"],
                    ["**la pensione** [f]", "pension"],
                    ["**la produzione** [f]", "production"],
                    ["**la stazione** [f]", "station"]
                  ]
                }
              },
              {
                content: "Sometimes, the gender of a noun ending in **-e** can be determined by the gender of the person it refers to: **masculine** when it refers to a male, **feminine** when it refers to a female:",
                table: {
                  headers: null,
                  rows: [
                    ["**il/la cantante** [m/f]", "(male/female) singer"],
                    ["**il/la cliente** [m/f]", "(male/female) customer"],
                    ["**il/la parente** [m/f]", "(male/female) relative"],
                    ["**l’inglese** [m/f]", "Englishman/Englishwoman"]
                  ]
                }
              },
              {
                id: 5,
                content: "Some nouns ending in **-a** and referring to persons are **masculine** when they refer to a male and **feminine** when they refer to a female:",
                table: {
                  headers: null,
                  rows: [
                    ["**il/la collega** [m/f]", "(male/female) colleague"],
                    ["**l’atleta** [m/f]", "(male/female) athlete"],
                    ["**il/la batterista** [m/f]", "(male/female) drummer"],
                    ["**il/la pianista** [m/f]", "(male/female) pianist"]
                  ]
                }
              },
              {
                content: "* There are some exceptions: e.g., **la persona** (person) and **la guida** (tourist guide) are always **feminine**, even when they refer to a male, while the feminine of **il poeta** (poet) is **la poetessa**."
              },
              {
                id: 6,
                content: "There are some nouns ending in **-a** which are **masculine** and some nouns ending in **-o** which are **feminine**:",
                table: {
                  headers: null,
                  rows: [
                    ["**il cinema**", "cinema", "**l’auto**", "car"],
                    ["**il papà**", "dad", "**la foto**", "photo"],
                    ["**il problema**", "problem", "**la mano**", "hand"]
                  ]
                }
              },
              {
                content: "Some nouns of this type are abbreviations, and have kept the gender of the full word: **cinema** stands for **cinematografo** [m], **auto** for **automobile** [f], **foto** for **fotografia** [f], etc. Such cases apart, there is no rule for determining gender, which has to be learned by heart or checked in a dictionary."
              },
              {
                id: 7,
                content: "Some nouns end in **-i**. The vast majority are **feminine**, but there are some exceptions:",
                table: {
                  headers: null,
                  rows: [
                    ["**l’analisi** [f]", "analysis"],
                    ["**l’ipotesi** [f]", "hypothesis"],
                    ["**la crisi** [f]", "crisis"]
                  ]
                }
              },
              {
                content: "Two exceptions are **l’alibi** (alibi) and **lo sci** (ski), which are **masculine**."
              },
              {
                id: 8,
                content: "Foreign nouns, unless they refer to a female, are generally **masculine**:",
                table: {
                  headers: null,
                  rows: [
                    ["**il bar** [m]", "bar"],
                    ["**il camion** [m]", "lorry"],
                    ["**il rock** [m]", "rock (music)"],
                    ["**l’hostess** [f]", "stewardess"]
                  ]
                }
              },
              {
                id: 9,
                content: "Occasionally, the gender of a foreign noun is the same as it is for the corresponding Italian word:",
                table: {
                  headers: null,
                  rows: [
                    ["**la new wave**", "is **feminine**, because **onda** (wave) is **feminine**."],
                    ["**la mail**", "(e-mail message) is **feminine**, because **posta** (mail) is **feminine**."]
                  ]
                }
              },
              {
                id: 10,
                content: "The following rules can help in determining the gender of nouns:",
                list: [
                  "All months of the year and days of the week are **masculine**, apart from **domenica** (Sunday), which is **feminine**.",
                  "All names of towns and cities are **feminine**, apart from **Il Cairo** [m].",
                  "All names of languages are **masculine**.",
                  "Names of countries are normally **feminine** when they end in **-a** and **masculine** when they end in any other letter:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["**la Francia** [f]", "France"],
                    ["**la Spagna** [f]", "Spain"],
                    ["**il Belgio** [m]", "Belgium"],
                    ["**il Paraguay** [m]", "Paraguay"]
                  ]
                }
              }
            ]
          },
          {
            title: "Number: Singular and Plural",
            paragraphs: [
              {
                id: 11,
                content: "**Masculine** nouns ending in **-o**, and all nouns ending in **-e**, end in **-i** in the **plural**:",
                table: {
                  headers: null,
                  rows: [
                    ["**il treno** [m]", "train", "**i treni**", "trains"],
                    ["**il nome** [m]", "name/noun", "**i nomi**", "names/nouns"],
                    ["**la notte** [f]", "night", "**le notti**", "nights"],
                    ["**la stazione** [f]", "station", "**le stazioni**", "stations"],
                    ["**la pensione** [f]", "pension", "**le pensioni**", "pensions"],
                    ["**il/la parente** [m/f]", "relative", "**i/le parenti**", "relatives"],
                    ["**la moglie** [f]", "wife", "**le mogli***", "wives"]
                  ]
                }
              },
              {
                content: "* Nouns ending in **-ie** have only one **-i** in the **plural**."
              },
              {
                id: 12,
                content: "Nouns ending in **-io** have only one **i** in the **plural**. But if the **-i** is stressed (**-ío**), the **plural** has two (**-ii**):",
                table: {
                  headers: null,
                  rows: [
                    ["**il bacio** [m]", "kiss", "**i baci**", "kisses"],
                    ["**il desiderio** [m]", "wish", "**i desideri**", "wishes"],
                    ["**l’inizio** [m]", "beginning", "**gli inizi**", "beginnings"],
                    ["**lo zio** [m]", "uncle", "**gli zii**", "uncles"],
                    ["**il mormorio** [m]", "murmur", "**i mormorii**", "murmurs"]
                  ]
                }
              },
              {
                id: 13,
                content: "**Feminine** nouns ending in **-a** take **-e** in the **plural**:",
                table: {
                  headers: null,
                  rows: [
                    ["**la sorella** [f]", "sister", "**le sorelle**", "sisters"],
                    ["**la lettera** [f]", "letter", "**le lettere**", "letters"],
                    ["**la sera** [f]", "evening", "**le sere**", "evenings"]
                  ]
                }
              },
              {
                id: 14,
                content: "**Masculine** nouns ending in **-a** take **-i** in the **plural**:",
                table: {
                  headers: null,
                  rows: [
                    ["**il problema** [m]", "problem", "**i problemi**", "problems"],
                    ["**il sistema** [m]", "system", "**i sistemi**", "systems"]
                  ]
                }
              },
              {
                id: 15,
                content: "When a noun ending in **-a** denotes a person, its **plural** ending depends on whether it is **masculine** or **feminine**. If it refers to a male, the **plural** ends in **-i**; if it refers to a female, the **plural** ends in **-e**:",
                table: {
                  headers: null,
                  rows: [
                    ["**il pianista** [m]", "(male) pianist", "**i pianisti** [m]", "(male) pianists"],
                    ["**la pianista** [f]", "(female) pianist", "**le pianiste** [f]", "(female) pianists"],
                    ["**il collega** [m]", "(male) colleague", "**i colleghi** [m]", "(male) colleagues"],
                    ["**la collega** [f]", "(female) colleague", "**le colleghe** [f]", "(female) colleagues"]
                  ]
                }
              },
              {
                content: "* For an explanation of the **-h-** in these endings, see paragraph 20 below."
              },
              {
                id: 16,
                content: "Nouns ending in **-i** do not change in the **plural**:",
                table: {
                  headers: null,
                  rows: [
                    ["**l’analisi** [f]", "analysis", "**le analisi**", "analyses"],
                    ["**la crisi** [f]", "crisis", "**le crisi**", "crises"]
                  ]
                }
              },
              {
                id: 17,
                content: "Foreign nouns, and nouns stressed on the last vowel, do not change in the **plural**:",
                table: {
                  headers: null,
                  rows: [
                    ["**il bar** [m]", "bar", "**i bar**", "bars"],
                    ["**lo sport** [m]", "sport", "**gli sport**", "sports"],
                    ["**la città** [f]", "city", "**le città**", "cities"],
                    ["**la virtù** [f]", "virtue", "**le virtù**", "virtues"]
                  ]
                }
              },
              {
                id: 18,
                content: "A number of nouns are irregular in the **plural**. E.g., **la mano** [f] (hand) becomes **le mani** in the **plural**, **l’uomo** [m] (man) becomes **gli uomini** in the **plural**. Here are some nouns which do not change in the **plural**, because they are abbreviations (cf. above, paragraph 6):",
                table: {
                  headers: null,
                  rows: [
                    ["**l’auto** [f]", "car", "**le auto**", "cars"],
                    ["**la radio** [f]", "radio", "**le radio**", "radios"],
                    ["**la moto** [f]", "motorbike", "**le moto**", "motorbikes"],
                    ["**la foto** [f]", "photo", "**le foto**", "photos"],
                    ["**il cinema** [m]", "cinema", "**i cinema**", "cinemas"]
                  ]
                }
              },
              {
                content: "Some nouns are **masculine** in the **singular** but **feminine** in the **plural**. Here are a few:",
                table: {
                  headers: null,
                  rows: [
                    ["**il dito** [m]", "finger", "**le dita** [f]", "fingers"],
                    ["**il centinaio** [m]", "(about) a hundred", "**le centinaia** [f]", "hundreds"],
                    ["**il migliaio** [m]", "(about) a thousand", "**le migliaia** [f]", "thousands"],
                    ["**il miglio** [m]", "mile", "**le miglia** [f]", "miles"],
                    ["**il paio** [m]", "pair", "**le paia** [f]", "pairs"],
                    ["**l’uovo** [m]", "egg", "**le uova** [f]", "eggs"]
                  ]
                }
              },
              {
                id: 19,
                content: "Note that, in Italian, the **masculine** form of a noun is also used when the gender is not important. A noun in the **plural** may therefore designate any one of three different sets of people:",
                table: {
                  headers: null,
                  rows: [
                    ["**gli amici**", "either a specific set of male friends [as in ‘Your friends (**Luigi** and **Giovanni**) have arrived.’] or a specific mixed set of male and female friends [as in ‘Your friends (**Luigi** and **Anna**) have arrived.’] or friends in general [whether male and female does not matter, as in ‘Everybody needs friends.’]"],
                    ["**gli insegnanti**", "either a specific set of male teachers or a specific mixed set of male and female teachers or teachers in general [regardless of gender]"],
                    ["**i colleghi**", "either a specific set of male colleagues or a specific mixed set of male and female colleagues or colleagues in general [regardless of gender]"]
                  ]
                }
              }
            ]
          },
          {
            title: "Spelling",
            paragraphs: [
              {
                content: "Care is needed in spelling some **plurals**."
              },
              {
                id: 20,
                content: "Nouns ending in **-ca** or **-ga** always add **-h-** (**-che** or **-ghe**) in the **plural**, in order to keep the hard sound of **c** and **g**. We saw the example of **il/la collega** in paragraph 15. Here are some more:",
                table: {
                  headers: null,
                  rows: [
                    ["**l’amica** [f]", "(female) friend", "**le amiche**", "(female) friends"],
                    ["**la tasca** [f]", "pocket", "**le tasche**", "pockets"],
                    ["**la riga** [f]", "line, ruler", "**le righe**", "lines, rulers"]
                  ]
                }
              },
              {
                id: 21,
                content: "Nouns ending in **-co** and **-go** normally add **-h-** (**-chi** or **-ghi**) and keep the hard sound, but some nouns change the sound of **c** and **g** in the **plural** (**-ci** or **-gi**). It is always best to check in a dictionary:",
                table: {
                  headers: null,
                  rows: [
                    ["**il bosco** [m]", "wood", "**i boschi**", "woods"],
                    ["**il gioco** [m]", "game", "**i giochi**", "games"],
                    ["**il parco** [m]", "park", "**i parchi**", "parks"],
                    ["**il lago** [m]", "lake", "**i laghi**", "lakes"],
                    ["**l’amico** [m]", "(male) friend", "**gli amici**", "(male) friends"],
                    ["**il medico** [m]", "doctor", "**i medici**", "doctors"],
                    ["**il biologo** [m]", "biologist", "**i biologi**", "biologists"]
                  ]
                }
              },
              {
                id: 22,
                content: "Nouns ending in **-cia** or **-gia** keep the **i** in the **plural** (**-cie** or **-gie**) when the **i** is stressed, or when **c** or **g** is preceded by a vowel. But if **-cia** or **-gia** is preceded by a consonant, the **i** is lost in the **plural**:",
                table: {
                  headers: null,
                  rows: [
                    ["**la farmacia** [f]", "pharmacy", "**le farmacie**", "pharmacies"],
                    ["**la bugia** [f]", "lie", "**le bugie**", "lies"],
                    ["**la camicia** [f]", "shirt/blouse", "**le camicie**", "shirts/blouses"],
                    ["**la ciliegia** [f]", "cherry", "**le ciliegie**", "cherries"],
                    ["**l’arancia** [f]", "orange", "**le arance**", "oranges"],
                    ["**la doccia** [f]", "shower", "**le docce**", "showers"],
                    ["**la spiaggia** [f]", "beach", "**le spiagge**", "beaches"]
                  ]
                }
              }
            ]
          }
        ]
      },
      exercises: [
        {
          title: "Exercise 1",
          instruction: "With the help of a dictionary where necessary, decide what gender the nouns are, and write **m**, **f**, or **m/f** after each one.",
          examples: ["**la notte** **f**", "**il/la pianista** **m/f**", "**il fratello** **m**"],
          items: [
            {question: "**il giorno**", answer: "m"},
            {question: "**la sera**", answer: "f"},
            {question: "**l’uomo**", answer: "m"},
            {question: "**l’infermiera**", answer: "f"},
            {question: "**la stanza**", answer: "f"},
            {question: "**l’orecchio**", answer: "m"},
            {question: "**il caffè**", answer: "m"},
            {question: "**lo zucchero**", answer: "m"},
            {question: "**il fiume**", answer: "m"},
            {question: "**l’olandese**", answer: "m/f"},
            {question: "**l’uovo**", answer: "m"},
            {question: "**la camicia**", answer: "f"},
            {question: "**l’atleta**", answer: "m/f"},
            {question: "**l’animale**", answer: "m"},
            {question: "**la strada**", answer: "f"},
            {question: "**l’acqua**", answer: "f"},
            {question: "**l’abitante**", answer: "m/f"},
            {question: "**l’occhio**", answer: "m"},
            {question: "**il sole**", answer: "m"},
            {question: "**la canzone**", answer: "f"}
          ]
        },
        {
          title: "Exercise 2",
          instruction: "With the help of a dictionary where necessary, fill in the **plurals** of the nouns.",
          examples: ["**la notte**: **le notti**", "**il nome**: **i nomi**", "**il treno**: **i treni**", "**la sera**: **le sere**"],
          items: [
            {question: "**il ragazzo** **i**", answer: "ragazzi"},
            {question: "**la marca** **le**", answer: "marche"},
            {question: "**la chiave** **le**", answer: "chiavi"},
            {question: "**l’abitante** **gli**", answer: "abitanti"},
            {question: "**lo zio** **gli**", answer: "zii"},
            {question: "**il fiume** **i**", answer: "fiumi"},
            {question: "**la stazione** **le**", answer: "stazioni"},
            {question: "**la ragazza** **le**", answer: "ragazze"},
            {question: "**l’energia** **le**", answer: "energie"},
            {question: "**il pomeriggio** **i**", answer: "pomeriggi"},
            {question: "**la banca** **le**", answer: "banche"},
            {question: "**il pianista** **i**", answer: "pianisti"},
            {question: "**la cliente** **le**", answer: "clienti"},
            {question: "**l’indirizzo** **gli**", answer: "indirizzi"},
            {question: "**l’occhio** **gli**", answer: "occhi"},
            {question: "**il ristorante** **i**", answer: "ristoranti"},
            {question: "**la televisione** **le**", answer: "televisioni"},
            {question: "**il calendario** **i**", answer: "calendari"},
            {question: "**il francese** **i**", answer: "francesi"},
            {question: "**il lago** **i**", answer: "laghi"}
          ]
        },
        {
          title: "Exercise 3",
          instruction: "With the help of a dictionary where necessary, fill in the **singulars** of the nouns.",
          examples: ["**la casa**: **le case**", "**il libro**: **i libri**", "**il mese**: **i mesi**", "**la moglie**: **le mogli**"],
          items: [
            {question: "**i nomi** **il**", answer: "nome"},
            {question: "**le vie** **la**", answer: "via"},
            {question: "**i figli** **il**", answer: "figlio"},
            {question: "**le mani** **la**", answer: "mano"},
            {question: "**le opinioni** **l'**", answer: "opinione"},
            {question: "**i clienti** **il**", answer: "cliente"},
            {question: "**gli occhi** **l'**", answer: "occhio"},
            {question: "**le persone** **la**", answer: "persona"},
            {question: "**le marche** **la**", answer: "marca"},
            {question: "**i problemi** **il**", answer: "problema"},
            {question: "**le ciliegie** **la**", answer: "ciliegia"},
            {question: "**i caffè** **il**", answer: "caffè"},
            {question: "**i medici** **il**", answer: "medico"},
            {question: "**gli attivisti** **l'**", answer: "attivista"},
            {question: "**le ginocchia** **il**", answer: "ginocchio"},
            {question: "**le bugie** **la**", answer: "bugia"},
            {question: "**i tedeschi** **il**", answer: "tedesco"},
            {question: "**i test** **il**", answer: "test"},
            {question: "**gli uomini** **l'**", answer: "uomo"},
            {question: "**le amiche** **l'**", answer: "amica"}
          ]
        }
      ]
    },
    {
      unitNumber: 2,
      text: {
        title: "Unit Two: Definite and Indefinite Articles",
        sections: [
          {
            title: "Definite Article",
            paragraphs: [
              {
                content: "2.01 In Italian, the **definite article** (English ‘**the**’) has different forms, depending on the **gender** (**masculine**/**feminine**) and **number** (**singular**/**plural**) of the following word, and on the letter (or sound) with which the following word begins. Here are the forms:",
                table: {
                  headers: ["", "**Feminine**", "**Masculine**"],
                  rows: [
                    ["**Singular**", "**la**, **l’**", "**il**, **lo**, **l’**"],
                    ["**Plural**", "**le**", "**i**, **gli**"]
                  ]
                }
              },
              {
                content: "2.02 The **feminine** forms are used before **feminine** words: **la** and **l’** for the **singular**, and **le** for the **plural**:",
                list: [
                  "**la** is used before words beginning with a **consonant**;",
                  "**l’** is used before words beginning with a **vowel** (**a**, **e**, **i**, **o**, **u**) or **h**;",
                  "**le** is used as the **plural** for both **la** and **l’**:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["**la ragazza**", "the girl", "**le ragazze**", "the girls"],
                    ["**la casa**", "the house", "**le case**", "the houses"],
                    ["**la stanza**", "the room", "**le stanze**", "the rooms"],
                    ["**l’auto**", "the car", "**le auto**", "the cars"],
                    ["**l’esperienza**", "the experience", "**le esperienze**", "the experiences"],
                    ["**l’hostess**", "the stewardess", "**le hostess**", "the stewardesses"]
                  ]
                }
              },
              {
                content: "2.03 There are three different forms for the **masculine** **singular**: **il**, **lo**, and **l’**; and two for the **plural**: **i** and **gli**. All these forms are used before **masculine** words:",
                list: [
                  "**l’** is used before words beginning with a **vowel** or **h**;",
                  "**lo** is used before words starting with **z**, **gn**, **ps**, **s** + **consonant**;",
                  "**il** is used in all other cases;",
                  "**i** is used as the **plural** of **il**;",
                  "**gli** is used as the **plural** of both **l’** and **lo**:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["**l’articolo**", "the article", "**gli articoli**", "the articles"],
                    ["**l’uomo**", "the man", "**gli uomini**", "the men"],
                    ["**l’hotel**", "the hotel", "**gli hotel**", "the hotels"],
                    ["**lo zio**", "the uncle", "**gli zii**", "the uncles"],
                    ["**lo gnomo**", "the gnome", "**gli gnomi**", "the gnomes"],
                    ["**lo psicologo**", "the psychologist", "**gli psicologi**", "the psychologists"],
                    ["**lo chef***", "the chef", "**gli chef***", "the chefs"],
                    ["**lo spettacolo**", "the show", "**gli spettacoli**", "the shows"],
                    ["**lo sciopero**", "the strike", "**gli scioperi**", "the strikes"],
                    ["**il bar**", "the bar", "**i bar**", "the bars"],
                    ["**il ristorante**", "the restaurant", "**i ristoranti**", "the restaurants"],
                    ["**il senso**", "the sense", "**i sensi**", "the senses"]
                  ]
                }
              },
              {
                content: "* The use of **lo**/**gli** is due to the initial sound of **chef**, pronounced in Italian as in English (i.e., ‘**sh**’). **Lo** is also used before **masculine** words starting with **i** + **vowel**, **x**, **y**:",
                table: {
                  headers: null,
                  rows: [
                    ["**lo ione**", "the ion", "**gli ioni**", "the ions"],
                    ["**lo yuppie**", "the yuppie", "**gli yuppie**", "the yuppies"],
                    ["**lo xenofobo**", "the xenophobe", "**gli xenofobi**", "the xenophobes"],
                    ["**lo juventino***", "the Juventus fan", "**gli juventini***", "the Juventus fans"]
                  ]
                }
              },
              {
                content: "* The use of **lo**/**gli** is due to the initial sound of **juventino**, pronounced as **i** + **vowel** (i.e., like the ‘**y**’ in English ‘**youth**’).",
                id: "2.04"
              },
              {
                content: "Care is needed in using the **article** with nouns ending in **-e** or **-a** which can refer to both male or female persons (see Unit 1, paragraphs 4 and 5):",
                table: {
                  headers: null,
                  rows: [
                    ["**il cantante** [m]", "the (male) singer", "**i cantanti** [m]", "the singers [male, or male and female mixed]"],
                    ["**la cantante** [f]", "the (female) singer", "**le cantanti** [f]", "the (female) singers"],
                    ["**l’insegnante** [m]", "the (male) teacher", "**gli insegnanti** [m]", "the teachers [male, or male and female mixed]"],
                    ["**l’insegnante** [f]", "the (female) teacher", "**le insegnanti** [f]", "the (female) teachers"],
                    ["**il collega** [m]", "the (male) colleague", "**i colleghi** [m]", "the colleagues [male, or male and female mixed]"],
                    ["**la collega** [f]", "the (female) colleague", "**le colleghe** [f]", "the (female) colleagues"],
                    ["**l’atleta** [m]", "the (male) athlete", "**gli atleti** [m]", "the athletes [male, or male and female mixed]"],
                    ["**l’atleta** [f]", "the (female) athlete", "**le atlete** [f]", "the (female) athletes"]
                  ]
                }
              },
              {
                content: "Remember that, as we saw in Unit 1, paragraph 19, the **masculine** **plural** form can also denote a class of people in general, as well as a group of males or a mixed group of males and females: e.g., **i cantanti** [m] can denote either a group of male singers, or a mixed group of male and female singers, or singers in general."
              }
            ]
          },
          {
            title: "Indefinite Article",
            paragraphs: [
              {
                content: "2.05 Like the **definite article**, the **indefinite article** (English ‘**a**/**an**’) has different forms, depending on the **gender** of the word it refers to and the letter (or sound) with which the following word begins. There is no **plural** for the **indefinite article**. Here are the forms:",
                table: {
                  headers: ["**Feminine**", "**Masculine**"],
                  rows: [
                    ["**un’**, **una**", "**un**, **uno**"]
                  ]
                }
              },
              {
                content: "2.06 The **feminine** forms **un’** and **una** are used before **feminine** words:",
                list: [
                  "**un’** is used before words beginning with a **vowel** or **h**;",
                  "**una** is used before words beginning with a **consonant**:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["**una ragazza**", "a girl"],
                    ["**una casa**", "a house"],
                    ["**una stanza**", "a room"],
                    ["**un’auto**", "a car"],
                    ["**un’esperienza**", "an experience"],
                    ["**un’hostess**", "a stewardess"]
                  ]
                }
              },
              {
                content: "2.07 The **masculine** forms **uno** and **un** are used before **masculine** words:",
                list: [
                  "**uno** is used before words starting with **z**, **gn**, **ps**, **s** + **consonant**;",
                  "**un** is used before all other words:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["**uno zio**", "an uncle"],
                    ["**uno gnomo**", "a gnome"],
                    ["**uno psicologo**", "a psychologist"],
                    ["**uno chef**", "a chef"],
                    ["**uno spettacolo**", "a show"],
                    ["**un articolo**", "an article"],
                    ["**un uomo**", "a man"],
                    ["**un hobby**", "a hobby"],
                    ["**un bar**", "a bar"],
                    ["**un ristorante**", "a restaurant"],
                    ["**un senso**", "a sense"]
                  ]
                }
              },
              {
                content: "**Uno** (like **lo**) is also used before **masculine** words starting with **i** + **vowel**, **x**, **y**:",
                table: {
                  headers: null,
                  rows: [
                    ["**uno ione**", "an ion"],
                    ["**uno yuppie**", "a yuppie"],
                    ["**uno xenofobo**", "a xenophobe"],
                    ["**uno juventino**", "a Juventus fan"]
                  ]
                }
              },
              {
                content: "2.08 As with the **definite article**, care is needed in choosing the right **article** to use with nouns ending in **-e** or **-a** which can refer to either male or female persons:",
                table: {
                  headers: null,
                  rows: [
                    ["**un cantante** [m]", "a singer (male)"],
                    ["**una cantante** [f]", "a singer (female)"],
                    ["**un insegnante** [m]*", "a teacher (male)"],
                    ["**un’insegnante** [f]*", "a teacher (female)"],
                    ["**un collega** [m]", "a colleague (male)"],
                    ["**una collega** [f]", "a colleague (female)"],
                    ["**un atleta** [m]*", "an athlete (male)"],
                    ["**un’atleta** [f]*", "an athlete (female)"]
                  ]
                }
              },
              {
                content: "* In the case of nouns starting with a **vowel**, the only difference between the **articles** is the apostrophe."
              },
              {
                content: "2.09 It may be useful to compare the use of the **definite** and **indefinite article** in table form:",
                table: {
                  headers: ["", "**Masculine**", "**Feminine**"],
                  rows: [
                    ["**Definite**", "**un** is used when **il** and **l’** are used **uno** is used when **lo** is used", "**un’** is used when **l’** is used **una** is used when **la** is used"]
                  ]
                }
              }
            ]
          },
          {
            title: "Use of the Articles",
            paragraphs: [
              {
                content: "2.10 The use of the **articles** is often the same in Italian as in English, but there are cases (mostly concerning the **definite article**) where the two languages differ. Here are the most common instances:",
                list: [
                  "In Italian, the **definite article** is used before a noun used in a general sense:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["Amo **la musica rock**/**le vacanze**.", "I love rock music/holidays."],
                    ["**La musica rock** è popolare.", "Rock music is popular."],
                    ["**Le vacanze** sono sempre troppo corte.", "Holidays are always too short."],
                    ["**Il tempo** vola.", "Time flies."],
                    ["**Le auto** inquinano **l’ambiente**.", "Cars pollute the environment."],
                    ["**La disoccupazione** è diffusa.", "Unemployment is widespread."]
                  ]
                }
              },
              {
                list: [
                  "Italian uses the **definite article** before a **title** followed by a surname, except when addressing the person directly:"
                ],
                table: {
                  headers: null,
                  rows: [
                    ["**La Signora Urbani** è gentile.", "Mrs/Ms Urbani is kind."],
                    ["**La Dottoressa Vanni** non c’è.", "Doctor Vanni isn’t here."],
                    ["**Il Dottor*** **Marchi** è occupato.", "Doctor Marchi is busy."],
                    ["Buongiorno, **Signor*** **Carli**!", "Good morning, Mr Carli!"],
                    ["Buongiorno, **Dottore**.", "Good morning, Doctor."],
                    ["Scusi, **Signore**.", "Excuse me(, Sir)."]
                  ]
                }
              },
              {
                content: "* Note that some **masculine** **titles**, notably **Signore**, **Professore**, and **Dottore**, drop the final **vowel** when used before the name of the person, becoming **Signor**, **Professor**, **Dottor**, etc."
              },
              {
                list: [
                  "The Italian **definite article** is always used with years, e.g., **il 1990**, **il 2000**.",
                  "The **definite article** is normally used in Italian with names of countries and regions, e.g., **l’Inghilterra** (England), **la Toscana** (Tuscany), **il Portogallo** (Portugal), **l’Europa** (Europe). But the rule may be different when using a **preposition**, e.g., **in Italia** (in Italy) (see Unit 8, paragraph 14)."
                ]
              },
              {
                content: "2.11 In some cases, a **definite article** is used in Italian where an **indefinite article** (or a **possessive adjective** – see Unit 3) is used in English. Here are some instances:",
                table: {
                  headers: null,
                  rows: [
                    ["**Antonio** ha **il naso** lungo.", "Antonio has a long nose."],
                    ["Hai **la patente**?", "Have you got a driving licence?"],
                    ["Avete **l’ombrello**?", "Have you got an umbrella?"],
                    ["Ho **il raffreddore**.", "I have got a cold."],
                    ["Dove passi **le vacanze** di solito?", "Where do you normally spend your holidays?"],
                    ["Di **pomeriggio** faccio **il compito**.", "In the afternoon I do my homework."],
                    ["Hai **il biglietto**?", "Have you got a/your ticket?"]
                  ]
                }
              },
              {
                content: "There are also cases when there is no **article** in Italian but the **definite** or **indefinite article** is used in English:",
                table: {
                  headers: null,
                  rows: [
                    ["Andiamo **in montagna**.", "We’re going to the mountains."],
                    ["Stasera andiamo **a teatro**.", "We’re going to the theatre this evening."],
                    ["Accompagno **Anna** **in aeroporto**.", "I’m taking Anna to the airport."],
                    ["Andiamo **in macchina**.", "We’re going in the/a car."],
                    ["**Carlo** è **medico**.", "Carlo is a doctor."],
                    ["Sono **studente**.", "I’m a student."],
                    ["Non ha **marito**.", "She hasn’t got a husband."]
                  ]
                }
              }
            ]
          },
          {
            title: "Definite and Indefinite Article Before an Adjective",
            paragraphs: [
              {
                content: "2.12 As we shall see (Unit 3), a noun can sometimes be preceded by an **adjective**, so that the **adjective** comes between the **article** and the noun (e.g., **una bella donna**, a beautiful woman). In such cases, the form of the **article** depends on the spelling of the **adjective**, not the noun:",
                table: {
                  headers: null,
                  rows: [
                    ["**la casa**", "the house"],
                    ["**una casa**", "a house"],
                    ["**l’auto**", "the car"],
                    ["**un’auto**", "a car"],
                    ["**l’ultima casa**", "the last house"],
                    ["**un’ottima casa**", "an excellent house"],
                    ["**la prima auto**", "the first car"],
                    ["**una bella auto**", "a beautiful car"]
                  ]
                }
              }
            ]
          }
        ]
      },
      exercises: [
        {
          title: "Exercise 1",
          instruction: "Insert the **definite article** before the nouns.",
          examples: ["**l’acqua**", "**la stanza**", "**le esperienze**", "**il ristorante**", "**lo zio**", "**gli uomini**"],
          items: [
            {question: "___ **figlia**", answer: "la"},
            {question: "___ **zia**", answer: "la"},
            {question: "___ **problema**", answer: "il"},
            {question: "___ **mano**", answer: "la"},
            {question: "___ **auto**", answer: "l’"},
            {question: "___ **fratello**", answer: "il"},
            {question: "___ **libri**", answer: "i"},
            {question: "___ **entrata**", answer: "l’"},
            {question: "___ **studio**", answer: "lo"},
            {question: "___ **zii**", answer: "gli"},
            {question: "___ **notti**", answer: "le"},
            {question: "___ **sport**", answer: "gli"},
            {question: "___ **uovo**", answer: "l’"},
            {question: "___ **xenofobia**", answer: "la"},
            {question: "___ **tivù**", answer: "la"},
            {question: "___ **amici**", answer: "gli"},
            {question: "___ **pianiste**", answer: "le"},
            {question: "___ **dita**", answer: "le"},
            {question: "___ **crisi**", answer: "le"},
            {question: "___ **inglese**", answer: "l’"}
          ]
        },
        {
          title: "Exercise 2",
          instruction: "Insert the **indefinite article** before the nouns.",
          examples: ["**un’auto**", "**una ragazza**", "**un articolo**", "**uno spettacolo**", "**un insegnante** [m]", "**un’atleta** [f]"],
          items: [
            {question: "___ **sorella**", answer: "una"},
            {question: "___ **ciliegia**", answer: "una"},
            {question: "___ **amico**", answer: "un"},
            {question: "___ **zio**", answer: "uno"},
            {question: "___ **zia**", answer: "una"},
            {question: "___ **aereo**", answer: "un"},
            {question: "___ **amica**", answer: "un’"},
            {question: "___ **cantante** [f]", answer: "una"},
            {question: "___ **migliaio**", answer: "un"},
            {question: "___ **specchio**", answer: "uno"},
            {question: "___ **arancia**", answer: "un’"},
            {question: "___ **psichiatra** [m]", answer: "uno"},
            {question: "___ **sigaretta**", answer: "una"},
            {question: "___ **insegnante** [f]", answer: "un’"},
            {question: "___ **gnu**", answer: "uno"},
            {question: "___ **artista** [m]", answer: "un"},
            {question: "___ **sbaglio**", answer: "uno"},
            {question: "___ **figlio**", answer: "un"},
            {question: "___ **yogurt**", answer: "uno"},
            {question: "___ **analisi**", answer: "un’"}
          ]
        },
        {
          title: "Exercise 3",
          instruction: "Insert the correct **article** in the blank spaces.",
          examples: ["**Maria** ha **una casa**. (Maria has a house.)"],
          items: [
            {question: "___ **zio** di **Maria** arriva domani. (Maria’s uncle arrives tomorrow.)", answer: "Lo"},
            {question: "**Paolo** scrive ___ **lettera**. (Paolo is writing a letter.)", answer: "una"},
            {question: "Hai ___ **mani** pulite? (Have you got clean hands?)", answer: "le"},
            {question: "È ___ **amica** di **Patrizia**. (She’s a friend of Patrizia’s.)", answer: "un’"},
            {question: "**Laura** non ha ___ **patente**. (Laura hasn’t got a driving licence.)", answer: "la"},
            {question: "C’è ___ **Signor Totti**? (Is Mr Totti here?)", answer: "il"},
            {question: "È ___ **insegnante** molto capace. (She’s a very capable teacher.)", answer: "un’"},
            {question: "___ **inquinamento** è ___ **problema** preoccupante. (Pollution is a worrying problem.)", answer: "L’ un"},
            {question: "___ **nuovo stadio** è più grande. (The new stadium is bigger.)", answer: "Il"},
            {question: "Ho ___ **stesso CD**. (I’ve got the same CD.)", answer: "lo"}
          ]
        }
      ]
    }
  ]
};

let currentUnit = 1;
let currentView = 'text'; // 'text' or 'exercises'

function parseBoldText(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function loadData() {
    try {
        renderContent();
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('content').innerHTML = '<p class="error">Error loading content. Please try again.</p>';
    }
}

function renderContent() {
    const contentDiv = document.getElementById('content');
    const unit = unitsData.units.find(u => u.unitNumber === currentUnit);
    if (!unit) {
        contentDiv.innerHTML = '<p class="error">Unit not found.</p>';
        return;
    }

    let html = '';
    if (currentView === 'text') {
        html = `
            <h2>${parseBoldText(unit.text.title)}</h2>
            ${unit.text.sections.map(section => `
                <section>
                    <h3>${parseBoldText(section.title)}</h3>
                    ${section.paragraphs.map(p => `
                        ${p.content ? `<p>${p.id ? p.id + ' ' : ''}${parseBoldText(p.content)}</p>` : ''}
                        ${p.list ? `<ul>${p.list.map(item => `<li>${parseBoldText(item)}</li>`).join('')}</ul>` : ''}
                        ${p.table ? `
                            <table>
                                ${p.table.headers && p.table.headers.length > 0 ? `<tr>${p.table.headers.map(h => `<th>${parseBoldText(h)}</th>`).join('')}</tr>` : ''}
                                ${p.table.rows.map(row => `<tr>${row.map(cell => `<td>${parseBoldText(cell)}</td>`).join('')}</tr>`).join('')}
                            </table>
                        ` : ''}
                    `).join('')}
                </section>
            `).join('')}
        `;
    } else {
        html = unit.exercises.map((exercise, exIndex) => `
            <section id="exercise-section-${currentUnit}-${exIndex}">
                <h3>${parseBoldText(exercise.title)}</h3>
                <p>${parseBoldText(exercise.instruction)}</p>
                <p><strong>Examples:</strong> ${exercise.examples.map(ex => parseBoldText(ex)).join('; ')}</p>
                ${exercise.items.map((item, index) => `
                    <div class="exercise-item" id="exercise-item-${currentUnit}-${exIndex}-${index}">
                        ${index + 1}. ${parseBoldText(item.question)} <input type="text" id="answer-${currentUnit}-${exIndex}-${index}" />
                    </div>
                `).join('')}
                <button onclick="checkAnswers(${currentUnit}, ${exIndex}, ${exercise.items.length})">Check Answers</button>
                <button onclick="resetAnswers(${currentUnit}, ${exIndex}, ${exercise.items.length})">Reset</button>
            </section>
        `).join('');
    }
    contentDiv.innerHTML = html;

    // Update navigation links visibility
    document.getElementById('backLink').style.display = currentUnit > 1 ? 'inline' : 'none';
    document.getElementById('nextLink').style.display = currentUnit < unitsData.units.length ? 'inline' : 'none';
    document.getElementById('exercisesLink').style.display = currentView === 'text' ? 'inline' : 'none';
}

function checkAnswers(unitNum, exIndex, itemCount) {
    const unit = unitsData.units.find(u => u.unitNumber === unitNum);
    const exercise = unit.exercises[exIndex];
    let correctCount = 0;
    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove(); // Remove previous correct answer display
        if (input.value.trim() === exercise.items[i].answer) {
            input.style.backgroundColor = '#d4edda';
            correctCount++;
        } else {
            input.style.backgroundColor = '#f8d7da';
            const correctAnswer = document.createElement('p');
            correctAnswer.className = 'correct-answer';
            correctAnswer.textContent = `Correct answer: ${exercise.items[i].answer}`;
            container.appendChild(correctAnswer);
        }
    }
    // Calculate and display percentage
    const percentage = (correctCount / itemCount * 100).toFixed(0);
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
    const percentageDisplay = document.createElement('p');
    percentageDisplay.className = 'percentage-correct';
    percentageDisplay.textContent = `${percentage}% correct (${correctCount}/${itemCount})`;
    section.appendChild(percentageDisplay);
}

function resetAnswers(unitNum, exIndex, itemCount) {
    for (let i = 0; i < itemCount; i++) {
        const input = document.getElementById(`answer-${unitNum}-${exIndex}-${i}`);
        const container = document.getElementById(`exercise-item-${unitNum}-${exIndex}-${i}`);
        const existingAnswer = container.querySelector('.correct-answer');
        if (existingAnswer) existingAnswer.remove();
        input.value = '';
        input.style.backgroundColor = 'white';
    }
    // Remove percentage display
    const section = document.getElementById(`exercise-section-${unitNum}-${exIndex}`);
    const existingPercentage = section.querySelector('.percentage-correct');
    if (existingPercentage) existingPercentage.remove();
}

function navigate(direction) {
    if (direction === 'back' && currentUnit > 1) {
        currentUnit--;
    } else if (direction === 'next' && currentUnit < unitsData.units.length) {
        currentUnit++;
    }
    currentView = 'text';
    renderContent();
}

function showContents() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h2>Table of Contents</h2>
        <ul>
            ${unitsData.units.map(unit => `
                <li>
                    <a href="#" onclick="setUnitAndView(${unit.unitNumber}, 'text')">Unit ${unit.unitNumber}: Text</a> | 
                    <a href="#" onclick="setUnitAndView(${unit.unitNumber}, 'exercises')">Exercises</a>
                </li>
            `).join('')}
        </ul>
    `;
    // Hide exercises link on contents page
    document.getElementById('exercisesLink').style.display = 'none';
}

function setUnitAndView(unitNum, view) {
    currentUnit = unitNum;
    currentView = view;
    renderContent();
}

window.onload = loadData;