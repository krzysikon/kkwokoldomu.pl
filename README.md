# K&K Wokół Domu

Strona internetowa firmy **K&K Wokół Domu** — kompleksowa obsługa terenów zewnętrznych wokół domów, ogrodów i firm.

Domena docelowa: **kkwokoldomu.pl**

## Usługi

- Mycie i czyszczenie elewacji
- Prace ogrodowe
- Zakładanie rabat i aranżacje ogrodowe
- Wywóz i utylizacja odpadów
- Sprzątanie parkingów i terenów firmowych
- Mycie kostki brukowej i podjazdów
- Kompleksowe porządki wokół posesji

## Technologia

Statyczna strona jednoplikowa — czysty HTML + CSS + JavaScript, bez zależności i procesu budowania.

- `index.html` — cała strona (style i skrypty osadzone w pliku)
- `assets/` — zdjęcia i logo

Fonty ładowane z Google Fonts: *Fraunces*, *Inter Tight*, *JetBrains Mono*.

## Podgląd lokalny

Dowolny statyczny serwer, np.:

```bash
python -m http.server 5173
```

Następnie otwórz `http://localhost:5173`.

## Kontakt

- Telefon: **+48 532 574 313**
- E-mail: **krzysiekikonrad@gmail.com**
- Obszar działania: **powiat grodziski i okolice**

Formularz kontaktowy działa przez `mailto:` — opcjonalnie można podłączyć backend / usługę formularzy.

## Cennik — do uzupełnienia

Sekcja „Cennik" (`#cennik`) zawiera placeholdery **`000–000 zł`**. Zamień je na rzeczywiste
widełki cenowe (szukaj komentarza `<!-- CENNIK: ... -->` w `index.html`).
