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

Statyczna strona — czysty HTML + CSS + JavaScript, bez zależności i procesu budowania.

- `index.html` — strona główna
- `uslugi/*.html` — 7 podstron usług (opis, cennik, sposób wyceny, galeria)
- `assets/styles.css` — wspólny arkusz stylów (motyw granatowy)
- `assets/main.js` — wspólny skrypt (menu, animacje, obsługa formularza)
- `assets/` — zdjęcia i logo

Fonty ładowane z Google Fonts: *Fraunces*, *Inter Tight*, *JetBrains Mono*.

## Formularz kontaktowy (automatyczna wysyłka e-mail)

Formularz wysyła zapytania automatycznie przez **[Formsubmit.co](https://formsubmit.co)**
na adres `krzysiekikonrad@gmail.com` (konfiguracja w `assets/main.js`).

**Jednorazowa aktywacja:** przy pierwszym wysłaniu formularza Formsubmit wyśle na skrzynkę
e-mail z linkiem aktywacyjnym — trzeba w niego kliknąć raz, aby kolejne zgłoszenia
docierały automatycznie. Usługa jest darmowa i nie wymaga konta.

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

## Cennik

Sekcja „Cennik" (`#cennik`) zawiera widełki cenowe dla poszczególnych usług. Ceny mają
charakter orientacyjny — do edycji bezpośrednio w `index.html`.
