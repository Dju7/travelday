import { NextResponse } from "next/server";

const countries = [

         {
            "name": "mexique",
            "capital": "mexico",
            "langue": "espagnol",
            "superficie":"1,973 million km²",
            "population":" 126,7 millions",
            "incontournables": "Oaxaca, Teotihuacan, chichen itza, Tulum, lagune de Bacalar, cenotes...",
            "activités": "farniente, exploration jungle et desert, plongée et snorkeling, visites archéologiques et bien d'autres",
            "urlImage": "https://www.tracedirecte.com/media/images/le-desert-de-sonora.width-800.jpg",
            "latlng": "23.624812500000004, -102.57867049999999",
            "monnaie": [
                {
                "code": "MXN",
                "change": "1 euro = 18.22MXN"
                }

            ]
        },
         {
            "name": "Tunisie",
            "capital": "Tunis",
            "langue": "Arabe tunisien",
            "superficie":"163 610 km²",
            "population":" 12,26 millions",
            "incontournables": "Sidi Bou Said, Carthage, Cap bon, Tabarka, Sousse, le desert du sud, Djerba la douce, Sousse",
            "activités": "plages, expérience dans le desert, visites archéologiques, gastronomie, cultures...",
            "urlImage": "https://www.afdb.org/sites/default/files/styles/1700x900/public/tunisie.jpg",
            "latlng" : "33.892166, 9.561555499999997",
            "monnaie": [
                {
                "code": "DTN",
                "change": "1 euro = 33.12DTN"
                }
            ]
        },
        {
            "name": "Thailande",
            "capital": "Bangkok",
            "langue": "thaï",
            "superficie":"513 120 km²",
            "population":" 71,6 millions",
            "incontournables": "Bangkok, Phuket, Chiang Mai, îles Surin, Khao sok, Koh Lanta...",
            "activités": "plages, jungle, fiesta...",
            "urlImage": "https://images.ctfassets.net/rc3dlxapnu6k/a03pY22sRRY2hgOu3PAiM/3db06fe18ed0874375429e517289e80f/Thailand_Maya_Bay_Strand_Ko_Phi_Phi_Leh_Island.jpg?",
            "latlng": "13.7563, 100.5018", 
            "monnaie": [
              {
                "code": "THB",
                "change": "1 euro = 36.95 THB"
              }
            ]
          }
    
]



export async function GET(req:Request, res:Response) {
    const url = req.url
    const hostHeader = req.headers.get("host")
    const { searchParams } = new URL(url, `http://${hostHeader}`);
    const country = searchParams.get("country");
    if (country) {
        const countryName = country.toLowerCase();
        const foundCountry = countries.find(c => c.name.toLowerCase() === countryName);
        if (foundCountry) {
             return NextResponse.json(foundCountry, {status: 200});
        } else {
            return NextResponse.json({ error: `Le pays '${country}' n'a pas été trouvé.` }, {status: 404});
        }
    } else {
        return NextResponse.json({ error: "Paramètre 'country' manquant dans la requête." }, {status: 400});
    }
}