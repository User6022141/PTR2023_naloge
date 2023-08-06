// Vemo, da je 10000 deljivo s 5, vendar na z 9, torej mora biti za kakršno koli število x (5y + 9x = 10000) deljivo s 5, saj mora veljat 5a + 5b = 5c, pri čemer
// je 5a = 5y, 5b = 9x in 5c = 10000 = 5 * 2000, iz česar sledi, da je x deljivo s 5, kar tudi pomeni, da je 9x večkratnik števila 45. Ker pa je zdaj enačba taka 
// 5y + 45z = 10000, lahko pokrajšamo 5 in dobimo: y + 9x = 2000. Zdaj vemo, da je število rešitev enako celemu delu, brez ostanka pri deljenju števila 2000 z 9 
// (2000 / 9 = 222, ost. 2) + 1, saj ne smemo pozabiti na rezultat, ko je z = 0 in je y = 2000, kar pa ni vključeno v naš celi del pri deljenju 2000 z 9.
// To je rešitev. 2000 / 9 = 222, ost. 2, 222 + 1 = 223.

// Lahko še omenimo, da ta rešitev velja za vsa števila na desni strani enačbe (v našem primeru 10000), ki so deljiva s 5