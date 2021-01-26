# projekt-zaliczeniowy-bk-jk
projekt-zaliczeniowy-bk-jk created by GitHub Classroom

Projekt autorstwa Jakuba Kopcia && Bartosza Kozłowskiego<br/><br/>

Celem projektu jest stworzenie komunikacji między klientem a serwerem dla gry przeglądarkowej Wisielec w oparciu o architektekture REST.<br/><br/>

Wykorzystane technologie to język Node.js ,baza danych w MySQL (zaimplementowana w aplikacji XAMPP), knex (do tworzenia zapytań w SQL), express (do uruchomienia serwera),objection.js (ORM dla Node.js).<br/><br/>

W projekcie zrealizowane zostały cztery podstawowe żądania protokołu HTTP:<br/>
1.GET- zrealizowano został w trzech wariantach:<br/>
  a) przyjmujący sufiks all (http//adresBD/api/words/all) w adresie http i zwracający wszystkie rekordy z tabeli word w formacie JSON,<br/>
  b) przyjmujący JSON'a zawierającego słowo i szukający go w bazie,<br/>
  c) przyjmujący sufiks random (http//adresBD/api/words/random) w adresie http i zwracający losowy rekord z tabeli word (również w formacie JSON).<br/>
2.POST- służący do dodawania nowych słów do bazy danych, w JSON'ie przyjmujący następujące parametry: słowo,ilość wystąpień,ile razy zostało odgadnięte,ile razy wystąpiło w rozgrywkach, maksymalną ilość błędnie podanych przez klienta liter.<br/>
3.PUT- przyjmujący sufiks słowo (np. http//adresBD/api/words/koń) w adresie http , a w przesyłanym JSON'ie nową wersje żądanego słowa. Jego działanie jest dynamiczne- jedynie pola przesłane w JSON'owym body zostaną zaktualizowane w odpowiednim rekordzie z bazy.<br/>
4.DELETE- służący do usuwania słów z bazy. Aby usunąć słowo korzystając z id należy przesłać je jako sufiks adresu http (np. http//adresBD/api/words/12), natomiast do usunięcia słowa korzystając z jego treści wykorzystywane jest body JSON'a.<br/><br/>

Dodatkowo w każdym z rządań została uwzględniona obsługa błędów takich jak treść wyjątków rzucanych przez bazę danych (z wykorzystaniem biblioteki objection).<br/>
Ponadto zależnie od wyniku operacji serwer zwraca odpowiednie kody błędów/sukcesów tzn. <br/>
1. 404 w przypadku braku poszukiwanego rekordu,<br/>
2. 201 w przypadku poprawengo dodania rekordu do bazy,<br/>
3. 200 w przypadku poprawnego działania niezmieniającego zawartości bazy,<br/>
4. 204 po udanym usunięciu rekordu.<br/>

Zgodnie z wymaganiami aplikacja nie posiada graficznego interfejsu. Do przetestowania poprawności działania żądań oraz zwracanych kodów wykorzystany został program Postman.<br/> Ze względu na używanie systemu Windows oraz Linux podczas tworzenia aplikacji, została ona również sprawdzona pod kątem działania na obu tych systemach operacyjnych (innymi słowy: jest cross-platformowa).<br/> Testy aplikacji objęły również obługę błędów związanych z wprowadzeniem niepoprawnych danych przez klienta. <br/>Docelowo klient mógłby mieć możliwość grania w Wisielca, dodawania nowych słów oraz zgłaszania nieodpowienich treści administracji.<br/> Administracja natomiast miałaby możliwość edycji istniejących słów oraz usuwania słów nieodpowiednich.<br/>Stworzony kod mógłby zostać rozbudowany o graficzny interfejs co umożliwiłoby stworzenie pełnoprawnej internetowej gry powszechnie zwanej Wisielcem.<br/>

