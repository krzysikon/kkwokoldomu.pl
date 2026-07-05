# K&K Wokół Domu

Strona internetowa firmy **K&K Wokół Domu** — kompleksowa obsługa terenów zewnętrznych wokół domów, ogrodów i firm.

Domena docelowa: **kkwokoldomu.pl**

## Usługi

- Mycie i czyszczenie elewacji
- Prace ogrodowe
- Zakładanie rabat i aranżacje ogrodowe
- Tarasy i prace wokół domu
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

## Do uzupełnienia przed publikacją

- Prawdziwy numer telefonu (obecnie placeholder `+48 000 000 000`)
- Docelowy adres e-mail (obecnie `kontakt@kkwokoldomu.pl`)
- Formularz kontaktowy działa przez `mailto:` — opcjonalnie podłączyć backend / usługę formularzy
