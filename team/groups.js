
const allPartners = [
  [
    {
      "FirstName": "etsegenet",
      "LastName": "woldeselassie",
      "WtEmailAddress": "etsegenete13@outlook.com",
      "StudentIdNumber": "wtf/2025/4938",
      "Country": "ethiopia",
      "team": {
        "Teamid": "4",
        "Teamname": "slaybits",
        "Introspeech": "\"we slay bugs and serve looks 🔥 — welcome to slaybits!\""
      }
    },
    {
      "FirstName": "stephanie",
      "LastName": "obi",
      "WtEmailAddress": "stephanieukamaka@outlook.com",
      "StudentIdNumber": "wtf/2025/6701",
      "Country": "nigeria",
      "team": {
        "Teamid": "12",
        "Teamname": "consolequeens",
        "Introspeech": "\"queens of the terminal throne 👑 — consolequeens command the code!\""
      }
    }
  ],
  [
    {
      "FirstName": "amarachi",
      "LastName": "ekeji",
      "WtEmailAddress": "karenekeji@outlook.com",
      "StudentIdNumber": "wtf/2025/6815",
      "Country": "nigeria",
      "team": {
        "Teamid": "1",
        "Teamname": "bytequeens",
        "Introspeech": "\"we are the bytequeens 👑 — ruling every repo with elegance and power!\""
      }
    },
    {
      "FirstName": "favour",
      "LastName": "ogor",
      "WtEmailAddress": "favourogor@outlook.com",
      "StudentIdNumber": "wtf/2025/6378",
      "Country": "nigeria",
      "team": {
        "Teamid": "8",
        "Teamname": "debugdolls",
        "Introspeech": "\"cute outside, deadly inside 💣 — debugdolls make errors disappear!\""
      }
    }
  ],
  [
    {
      "FirstName": "winifred",
      "LastName": "rex",
      "WtEmailAddress": "rexwinifred21@outlook.com",
      "StudentIdNumber": "wtf/2025/3444",
      "Country": "nigeria",
      "team": {
        "Teamid": "9",
        "Teamname": "hackhunnies",
        "Introspeech": "\"honey-sweet, hacker-sharp 🍯 — hackhunnies own the hive!\""
      }
    },
    {
      "FirstName": "aisha",
      "LastName": "elabass",
      "WtEmailAddress": "aishaelabass@outlook.com",
      "StudentIdNumber": "wtf/2025/5165",
      "Country": "sudan",
      "team": {
        "Teamid": "2",
        "Teamname": "syntaxsquad",
        "Introspeech": "\"syntax flawless, style unmatched 💻 — we are the syntaxsquad!\""
      }
    }
  ],
  [
    {
      "FirstName": "nancy",
      "LastName": "mungathia",
      "WtEmailAddress": "mungathianancy@outlook.com",
      "StudentIdNumber": "wtf/2025/3018",
      "Country": "kenya",
      "team": {
        "Teamid": "11",
        "Teamname": "bitrebels",
        "Introspeech": "\"one commit at a time 🚀 — bitrebels break rules to build futures!\""
      }
    },
    {
      "FirstName": "kevina",
      "LastName": "nakayiza",
      "WtEmailAddress": "nakayizakevina@outlook.com",
      "StudentIdNumber": "wtf/2025/2648",
      "Country": "uganda",
      "team": {
        "Teamid": "7",
        "Teamname": "errorbabes",
        "Introspeech": "\"turning bugs into brag rights 🐞 — errorbabes turn problems into power!\""
      }
    }
  ],
  [
    {
      "FirstName": "eduaina",
      "LastName": "ighalo",
      "WtEmailAddress": "ighaloeduaina@outlook.com",
      "StudentIdNumber": "wtf/2025/3556",
      "Country": "nigeria",
      "team": {
        "Teamid": "3",
        "Teamname": "codedivas",
        "Introspeech": "\"drama-free, bug-free 💅 — the codedivas always deliver perfection!\""
      }
    },
    {
      "FirstName": "queen",
      "LastName": "christopher",
      "WtEmailAddress": "queenodede1@outlook.com",
      "StudentIdNumber": "wtf/2025/1100",
      "Country": "nigeria",
      "team": {
        "Teamid": "6",
        "Teamname": "pixelgang",
        "Introspeech": "\"sharp pixels, sharper minds 🎯 — pixelgang is in the building!\""
      }
    }
  ],
  [
    {
      "FirstName": "anuriamaka",
      "LastName": "nworah",
      "WtEmailAddress": "nworahanuriamaka@outlook.com",
      "StudentIdNumber": "wtf/2025/7584",
      "Country": "nigeria",
      "team": {
        "Teamid": "5",
        "Teamname": "stackchic",
        "Introspeech": "\"chic minds, stacked skills 🖤 — the stackchic run this stack!\""
      }
    },
    {
      "FirstName": "eniitan",
      "LastName": "adeleke",
      "WtEmailAddress": "eniitanadeleke@outlook.com",
      "StudentIdNumber": "wtf/2025/3086",
      "Country": "nigeria",
      "team": {
        "Teamid": "10",
        "Teamname": "scriptsistas",
        "Introspeech": "\"scripting dreams together 💌 — the scriptsistas never code alone!\""
      }
    }
  ],
  [
    {
      "FirstName": "jane",
      "LastName": "ndafia",
      "WtEmailAddress": "janendafia82@outlook.com",
      "StudentIdNumber": "wtf/2025/3825",
      "Country": "nigeria",
      "team": {
        "Teamid": "13",
        "Teamname": "loopladies",
        "Introspeech": "\"infinite brains, infinite beauty ♾️ — the loopladies never stop!\""
      }
    },
    {
      "FirstName": "deborah",
      "LastName": "olugboye",
      "WtEmailAddress": "olugboyedeborah@outlook.com",
      "StudentIdNumber": "wtf/2025/5219",
      "Country": "nigeria",
      "team": {
        "Teamid": "4",
        "Teamname": "slaybits",
        "Introspeech": "\"we slay bugs and serve looks 🔥 — welcome to slaybits!\""
      }
    }
  ],
  [
    {
      "FirstName": "wince",
      "LastName": "ogola",
      "WtEmailAddress": "winceogola@outlook.com",
      "StudentIdNumber": "wtf/2025/5927",
      "Country": "kenya",
      "team": {
        "Teamid": "12",
        "Teamname": "consolequeens",
        "Introspeech": "\"queens of the terminal throne 👑 — consolequeens command the code!\""
      }
    },
    {
      "FirstName": "chigozie",
      "LastName": "nwabueze",
      "WtEmailAddress": "chigozienwabueze@outlook.com",
      "StudentIdNumber": "wtf/2025/1951",
      "Country": "united states of america",
      "team": {
        "Teamid": "1",
        "Teamname": "bytequeens",
        "Introspeech": "\"we are the bytequeens 👑 — ruling every repo with elegance and power!\""
      }
    }
  ],
  [
    {
      "FirstName": "nneoma",
      "LastName": "iheanacho",
      "WtEmailAddress": "elizabethiheanacho@outlook.com",
      "StudentIdNumber": "wtf/2025/5574",
      "Country": "nigeria",
      "team": {
        "Teamid": "8",
        "Teamname": "debugdolls",
        "Introspeech": "\"cute outside, deadly inside 💣 — debugdolls make errors disappear!\""
      }
    },
    {
      "FirstName": "darlene",
      "LastName": "nandabi",
      "WtEmailAddress": "darlene.nyambura@outlook.com",
      "StudentIdNumber": "wtf/2025/6476",
      "Country": "kenya",
      "team": {
        "Teamid": "9",
        "Teamname": "hackhunnies",
        "Introspeech": "\"honey-sweet, hacker-sharp 🍯 — hackhunnies own the hive!\""
      }
    }
  ],
  [
    {
      "FirstName": "ladunni",
      "LastName": "akinsola",
      "WtEmailAddress": "ladunnitegbe@outlook.com",
      "StudentIdNumber": "wtf/2025/2112",
      "Country": "nigeria",
      "team": {
        "Teamid": "2",
        "Teamname": "syntaxsquad",
        "Introspeech": "\"syntax flawless, style unmatched 💻 — we are the syntaxsquad!\""
      }
    },
    {
      "FirstName": "Peace",
      "LastName": "Oreofeoluwa",
      "WtEmailAddress": "derinsterling@outlook.com",
      "StudentIdNumber": "wtf/2025/1978",
      "Country": "kenya",
      "team": {
        "Teamid": "11",
        "Teamname": "bitrebels",
        "Introspeech": "\"one commit at a time 🚀 — bitrebels break rules to build futures!\""
      }
    }
  ],
  [
    {
      "FirstName": "nancy",
      "LastName": "ndungu",
      "WtEmailAddress": "nyokabi5991@outlook.com",
      "StudentIdNumber": "wtf/2025/4446",
      "Country": "kenya",
      "team": {
        "Teamid": "7",
        "Teamname": "errorbabes",
        "Introspeech": "\"turning bugs into brag rights 🐞 — errorbabes turn problems into power!\""
      }
    },
    {
      "FirstName": "temilade",
      "LastName": "kolawole",
      "WtEmailAddress": "temiladekolawole131@outlook.com",
      "StudentIdNumber": "wtf/2025/755",
      "Country": "nigeria",
      "team": {
        "Teamid": "3",
        "Teamname": "codedivas",
        "Introspeech": "\"drama-free, bug-free 💅 — the codedivas always deliver perfection!\""
      }
    }
  ],
  [
    {
      "FirstName": "atete mpeta",
      "LastName": "shina",
      "WtEmailAddress": "atete.shina@outlook.com",
      "StudentIdNumber": "wtf/2025/7975",
      "Country": "rwanda",
      "team": {
        "Teamid": "6",
        "Teamname": "pixelgang",
        "Introspeech": "\"sharp pixels, sharper minds 🎯 — pixelgang is in the building!\""
      }
    },
    {
      "FirstName": "sherifat",
      "LastName": "aduku",
      "WtEmailAddress": "sherifataduku.as@outlook.com",
      "StudentIdNumber": "wtf/2025/8285",
      "Country": "nigeria",
      "team": {
        "Teamid": "5",
        "Teamname": "stackchic",
        "Introspeech": "\"chic minds, stacked skills 🖤 — the stackchic run this stack!\""
      }
    }
  ],
  [
    {
      "FirstName": "ayoropo",
      "LastName": "ajayi",
      "WtEmailAddress": "megajayi@outlook.com",
      "StudentIdNumber": "wtf/2025/2212",
      "Country": "nigeria",
      "team": {
        "Teamid": "10",
        "Teamname": "scriptsistas",
        "Introspeech": "\"scripting dreams together 💌 — the scriptsistas never code alone!\""
      }
    },
    {
      "FirstName": "happiness",
      "LastName": "hassan",
      "WtEmailAddress": "hassan.happiness@outlook.com",
      "StudentIdNumber": "wtf/2025/4988",
      "Country": "nigeria",
      "team": {
        "Teamid": "13",
        "Teamname": "loopladies",
        "Introspeech": "\"infinite brains, infinite beauty ♾️ — the loopladies never stop!\""
      }
    }
  ],
  [
    {
      "FirstName": "morufat",
      "LastName": "lamidi",
      "WtEmailAddress": "morufatkajogbolalamidi@outlook.com",
      "StudentIdNumber": "wtf/2025/6746",
      "Country": "nigeria",
      "team": {
        "Teamid": "4",
        "Teamname": "slaybits",
        "Introspeech": "\"we slay bugs and serve looks 🔥 — welcome to slaybits!\""
      }
    },
    {
      "FirstName": "yetunde",
      "LastName": "ganiyu",
      "WtEmailAddress": "yrganiyu@outlook.com",
      "StudentIdNumber": "wtf/2025/3277",
      "Country": "nigeria",
      "team": {
        "Teamid": "12",
        "Teamname": "consolequeens",
        "Introspeech": "\"queens of the terminal throne 👑 — consolequeens command the code!\""
      }
    }
  ],
  [
    {
      "FirstName": "aliyah",
      "LastName": "ogunleye",
      "WtEmailAddress": "aliyah.ogunleye@outlook.com",
      "StudentIdNumber": "wtf/2025/9360",
      "Country": "nigeria",
      "team": {
        "Teamid": "1",
        "Teamname": "bytequeens",
        "Introspeech": "\"we are the bytequeens 👑 — ruling every repo with elegance and power!\""
      }
    },
    {
      "FirstName": "deborah",
      "LastName": "koranteng",
      "WtEmailAddress": "deborahkoranteng97@outlook.com",
      "StudentIdNumber": "wtf/2025/6258",
      "Country": "ghana",
      "team": {
        "Teamid": "8",
        "Teamname": "debugdolls",
        "Introspeech": "\"cute outside, deadly inside 💣 — debugdolls make errors disappear!\""
      }
    }
  ],
  [
    {
      "FirstName": "charity",
      "LastName": "mapfudza",
      "WtEmailAddress": "charityr16@outlook.com",
      "StudentIdNumber": "wtf/2025/2151",
      "Country": "south africa",
      "team": {
        "Teamid": "9",
        "Teamname": "hackhunnies",
        "Introspeech": "\"honey-sweet, hacker-sharp 🍯 — hackhunnies own the hive!\""
      }
    },
    {
      "FirstName": "olamayowa",
      "LastName": "olaniyan",
      "WtEmailAddress": "mayowafolaniyan@outlook.com",
      "StudentIdNumber": "wtf/2025/9158",
      "Country": "nigeria",
      "team": {
        "Teamid": "2",
        "Teamname": "syntaxsquad",
        "Introspeech": "\"syntax flawless, style unmatched 💻 — we are the syntaxsquad!\""
      }
    }
  ],
  [
    {
      "FirstName": "ruqayyah",
      "LastName": "adebanjo",
      "WtEmailAddress": "ruqayyahadebanjo@outlook.com",
      "StudentIdNumber": "wtf/2025/9466",
      "Country": "nigeria",
      "team": {
        "Teamid": "11",
        "Teamname": "bitrebels",
        "Introspeech": "\"one commit at a time 🚀 — bitrebels break rules to build futures!\""
      }
    },
    {
      "FirstName": "oluwatomide",
      "LastName": "olaleye",
      "WtEmailAddress": "paulinaarike@outlook.com",
      "StudentIdNumber": "wtf/2025/9110",
      "Country": "nigeria",
      "team": {
        "Teamid": "7",
        "Teamname": "errorbabes",
        "Introspeech": "\"turning bugs into brag rights 🐞 — errorbabes turn problems into power!\""
      }
    }
  ],
  [
    {
      "FirstName": "joan",
      "LastName": "nandujja",
      "WtEmailAddress": "joanvirtual256@outlook.com",
      "StudentIdNumber": "0",
      "Country": "south africa",
      "team": {
        "Teamid": "3",
        "Teamname": "codedivas",
        "Introspeech": "\"drama-free, bug-free 💅 — the codedivas always deliver perfection!\""
      }
    },
    {
      "FirstName": "senait",
      "LastName": "gebreegziabher",
      "WtEmailAddress": "senaitg15@outlook.com",
      "StudentIdNumber": "wtf/2025/1002",
      "Country": "ethiopia",
      "team": {
        "Teamid": "6",
        "Teamname": "pixelgang",
        "Introspeech": "\"sharp pixels, sharper minds 🎯 — pixelgang is in the building!\""
      }
    }
  ],
  [
    {
      "FirstName": "josephine",
      "LastName": "ohwifo",
      "WtEmailAddress": "ohwifijosephine2991@outlook.com",
      "StudentIdNumber": "wtf/2025/8269",
      "Country": "nigeria",
      "team": {
        "Teamid": "5",
        "Teamname": "stackchic",
        "Introspeech": "\"chic minds, stacked skills 🖤 — the stackchic run this stack!\""
      }
    },
    {
      "FirstName": "nnenna",
      "LastName": "ogbonnaya",
      "WtEmailAddress": "nnennaogbonnaya01@outlook.com",
      "StudentIdNumber": "wtf/2025/5623",
      "Country": "nigeria",
      "team": {
        "Teamid": "10",
        "Teamname": "scriptsistas",
        "Introspeech": "\"scripting dreams together 💌 — the scriptsistas never code alone!\""
      }
    }
  ],
  [
    {
      "FirstName": "mercy",
      "LastName": "oyekale",
      "WtEmailAddress": "hoyekemisola1@outlook.com",
      "StudentIdNumber": "wtf/2025/4737",
      "Country": "nigeria",
      "team": {
        "Teamid": "13",
        "Teamname": "loopladies",
        "Introspeech": "\"infinite brains, infinite beauty ♾️ — the loopladies never stop!\""
      }
    },
    {
      "FirstName": "chidimma",
      "LastName": "jonnwakalo",
      "WtEmailAddress": "cynkaar@outlook.com",
      "StudentIdNumber": "wtf/2025/8849",
      "Country": "nigeria",
      "team": {
        "Teamid": "4",
        "Teamname": "slaybits",
        "Introspeech": "\"we slay bugs and serve looks 🔥 — welcome to slaybits!\""
      }
    }
  ],
  [
    {
      "FirstName": "fatma",
      "LastName": "suleiman",
      "WtEmailAddress": "fsuleiman254@outlook.com",
      "StudentIdNumber": "wtf/2025/4962",
      "Country": "kenya",
      "team": {
        "Teamid": "12",
        "Teamname": "consolequeens",
        "Introspeech": "\"queens of the terminal throne 👑 — consolequeens command the code!\""
      }
    },
    {
      "FirstName": "odette",
      "LastName": "animbom",
      "WtEmailAddress": "animbomodette@outlook.com",
      "StudentIdNumber": "wtf/2025/8658",
      "Country": "cameroon",
      "team": {
        "Teamid": "1",
        "Teamname": "bytequeens",
        "Introspeech": "\"we are the bytequeens 👑 — ruling every repo with elegance and power!\""
      }
    }
  ],
  [
    {
      "FirstName": "clara",
      "LastName": "awudey",
      "WtEmailAddress": "a.claraelikem@outlook.com",
      "StudentIdNumber": "wtf/2025/5277",
      "Country": "ghana",
      "team": {
        "Teamid": "8",
        "Teamname": "debugdolls",
        "Introspeech": "\"cute outside, deadly inside 💣 — debugdolls make errors disappear!\""
      }
    },
    {
      "FirstName": "noluthando",
      "LastName": "molui",
      "WtEmailAddress": "noluthandomolui@outlook.com",
      "StudentIdNumber": "wtf/2025/3464",
      "Country": "south africa",
      "team": {
        "Teamid": "9",
        "Teamname": "hackhunnies",
        "Introspeech": "\"honey-sweet, hacker-sharp 🍯 — hackhunnies own the hive!\""
      }
    }
  ],
  [
    {
      "FirstName": "Olubunmi",
      "LastName": "Olubunmi",
      "WtEmailAddress": "loiszy5@outlook.com",
      "StudentIdNumber": "wtf/2025/7574",
      "Country": "botswana",
      "team": {
        "Teamid": "2",
        "Teamname": "syntaxsquad",
        "Introspeech": "\"syntax flawless, style unmatched 💻 — we are the syntaxsquad!\""
      }
    },
    {
      "FirstName": "yetunde",
      "LastName": "abdulkareem",
      "WtEmailAddress": "abdulkareemsiddiqat@outlook.com",
      "StudentIdNumber": "wtf/2025/2653",
      "Country": "nigeria",
      "team": {
        "Teamid": "11",
        "Teamname": "bitrebels",
        "Introspeech": "\"one commit at a time 🚀 — bitrebels break rules to build futures!\""
      }
    }
  ],
  [
    {
      "FirstName": "amos",
      "LastName": "gloria",
      "WtEmailAddress": "amoskesegloria@outlook.com",
      "StudentIdNumber": "wtf/2025/2854",
      "Country": "nigeria",
      "team": {
        "Teamid": "7",
        "Teamname": "errorbabes",
        "Introspeech": "\"turning bugs into brag rights 🐞 — errorbabes turn problems into power!\""
      }
    },
    {
      "FirstName": "blessing",
      "LastName": "oladipupo",
      "WtEmailAddress": "oblessingola@outlook.com",
      "StudentIdNumber": "wtf/2025/3681",
      "Country": "nigeria",
      "team": {
        "Teamid": "3",
        "Teamname": "codedivas",
        "Introspeech": "\"drama-free, bug-free 💅 — the codedivas always deliver perfection!\""
      }
    }
  ],
  [
    {
      "FirstName": "bethelhem",
      "LastName": "melese",
      "WtEmailAddress": "bethelhemjankebed@outlook.com",
      "StudentIdNumber": "wtf/2025/5523",
      "Country": "ethiopia",
      "team": {
        "Teamid": "6",
        "Teamname": "pixelgang",
        "Introspeech": "\"sharp pixels, sharper minds 🎯 — pixelgang is in the building!\""
      }
    },
    {
      "FirstName": "blessing",
      "LastName": "omachi",
      "WtEmailAddress": "blessingijeomaomachi1@outlook.com",
      "StudentIdNumber": "wtf/2025/7833",
      "Country": "nigeria",
      "team": {
        "Teamid": "5",
        "Teamname": "stackchic",
        "Introspeech": "\"chic minds, stacked skills 🖤 — the stackchic run this stack!\""
      }
    }
  ],
  [
    {
      "FirstName": "timilehin",
      "LastName": "olajolo",
      "WtEmailAddress": "timilehinolajolo@outlook.com",
      "StudentIdNumber": "wtf/2025/7680",
      "Country": "nigeria",
      "team": {
        "Teamid": "10",
        "Teamname": "scriptsistas",
        "Introspeech": "\"scripting dreams together 💌 — the scriptsistas never code alone!\""
      }
    },
    {
      "FirstName": "hauwa",
      "LastName": "idris",
      "WtEmailAddress": "hauwaabubakar1531@outlook.com",
      "StudentIdNumber": "wtf/2025/7911",
      "Country": "nigeria",
      "team": {
        "Teamid": "13",
        "Teamname": "loopladies",
        "Introspeech": "\"infinite brains, infinite beauty ♾️ — the loopladies never stop!\""
      }
    }
  ],
  [
    {
      "FirstName": "nokuthula",
      "LastName": "mtshali",
      "WtEmailAddress": "nokuthulamtshali19@outlook.com",
      "StudentIdNumber": "wtf/2025/7934",
      "Country": "south africa",
      "team": {
        "Teamid": "4",
        "Teamname": "slaybits",
        "Introspeech": "\"we slay bugs and serve looks 🔥 — welcome to slaybits!\""
      }
    },
    {
      "FirstName": "nyipoji",
      "LastName": "jibarang",
      "WtEmailAddress": "nyipojibarang@outlook.com",
      "StudentIdNumber": "wtf/2025/718",
      "Country": "nigeria",
      "team": {
        "Teamid": "12",
        "Teamname": "consolequeens",
        "Introspeech": "\"queens of the terminal throne 👑 — consolequeens command the code!\""
      }
    }
  ],
  [
    {
      "FirstName": "mercy",
      "LastName": "obobo",
      "WtEmailAddress": "mercyobobo@outlook.com",
      "StudentIdNumber": "wtf/2025/9545",
      "Country": "nigeria",
      "team": {
        "Teamid": "1",
        "Teamname": "bytequeens",
        "Introspeech": "\"we are the bytequeens 👑 — ruling every repo with elegance and power!\""
      }
    },
    {
      "FirstName": "nafisat",
      "LastName": "babamusa",
      "WtEmailAddress": "nafisatbabamusa@outlook.com",
      "StudentIdNumber": "wtf/2025/7683",
      "Country": "nigeria",
      "team": {
        "Teamid": "8",
        "Teamname": "debugdolls",
        "Introspeech": "\"cute outside, deadly inside 💣 — debugdolls make errors disappear!\""
      }
    }
  ],
  [
    {
      "FirstName": "jennifer",
      "LastName": "amanze",
      "WtEmailAddress": "jenniferamanze@outlook.com",
      "StudentIdNumber": "wtf/2025/1922",
      "Country": "nigeria",
      "team": {
        "Teamid": "9",
        "Teamname": "hackhunnies",
        "Introspeech": "\"honey-sweet, hacker-sharp 🍯 — hackhunnies own the hive!\""
      }
    },
    {
      "FirstName": "ekene",
      "LastName": "okpala",
      "WtEmailAddress": "miraclekenzie13@outlook.com",
      "StudentIdNumber": "wtf/2025/1889",
      "Country": "nigeria",
      "team": {
        "Teamid": "2",
        "Teamname": "syntaxsquad",
        "Introspeech": "\"syntax flawless, style unmatched 💻 — we are the syntaxsquad!\""
      }
    }
  ],
  [
    {
      "FirstName": "blessing",
      "LastName": "eguagie",
      "WtEmailAddress": "eguagieblessing@outlook.com",
      "StudentIdNumber": "wtf/2025/6684",
      "Country": "nigeria",
      "team": {
        "Teamid": "11",
        "Teamname": "bitrebels",
        "Introspeech": "\"one commit at a time 🚀 — bitrebels break rules to build futures!\""
      }
    },
    {
      "FirstName": "mariam",
      "LastName": "mussa",
      "WtEmailAddress": "mariamkilangi@outlook.com",
      "StudentIdNumber": "wtf/2025/9115",
      "Country": "tanzania",
      "team": {
        "Teamid": "7",
        "Teamname": "errorbabes",
        "Introspeech": "\"turning bugs into brag rights 🐞 — errorbabes turn problems into power!\""
      }
    }
  ],
  [
    {
      "FirstName": "ramota",
      "LastName": "lawal",
      "WtEmailAddress": "rahmotallah_ike@outlook.com",
      "StudentIdNumber": "wtf/2025/8244",
      "Country": "nigeria",
      "team": {
        "Teamid": "3",
        "Teamname": "codedivas",
        "Introspeech": "\"drama-free, bug-free 💅 — the codedivas always deliver perfection!\""
      }
    },
    {
      "FirstName": "gbenuade",
      "LastName": "momoh",
      "WtEmailAddress": "starrmomo@outlook.com",
      "StudentIdNumber": "wtf/2025/4304",
      "Country": "nigeria",
      "team": {
        "Teamid": "6",
        "Teamname": "pixelgang",
        "Introspeech": "\"sharp pixels, sharper minds 🎯 — pixelgang is in the building!\""
      }
    }
  ],
  [
    {
      "FirstName": "mariam",
      "LastName": "refaei",
      "WtEmailAddress": "mariam.alaa0210@outlook.com",
      "StudentIdNumber": "wtf/2025/9422",
      "Country": "egypt",
      "team": {
        "Teamid": "5",
        "Teamname": "stackchic",
        "Introspeech": "\"chic minds, stacked skills 🖤 — the stackchic run this stack!\""
      }
    },
    {
      "FirstName": "christiana",
      "LastName": "akogwu",
      "WtEmailAddress": "tianaahakogwu@outlook.com",
      "StudentIdNumber": "wtf/2025/7117",
      "Country": "nigeria",
      "team": {
        "Teamid": "10",
        "Teamname": "scriptsistas",
        "Introspeech": "\"scripting dreams together 💌 — the scriptsistas never code alone!\""
      }
    },
    {
      "FirstName": "Olubunmi",
      "LastName": "Elegbeleye",
      "WtEmailAddress": "loiszy5@outlook.com",
      "StudentIdNumber": "wtf/2025/7574",
      "Country": "nigeria",
      "team": { 
        "Teamid": "8",
    "Teamname": "debugdolls",
    "Introspeech": "\"cute outside, deadly inside 💣 — debugdolls make errors disappear!\""
      }
    },
    {
      "FirstName": "Rahmota",
      "LastName": "Lawal",
      "WtEmailAddress": "rahmotallah_ike@outlook.com",
      "StudentIdNumber": "wtf/2025/8244",
      "Country": "nigeria",
      "team": {
        "Teamid": "3",
        "Teamname": "codedivas",
        "Introspeech": "\"drama-free, bug-free 💅 — the codedivas always deliver perfection!\""
      }
    },
  ]
]
