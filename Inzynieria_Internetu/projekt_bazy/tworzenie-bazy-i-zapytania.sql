CREATE DATABASE [IF NOT EXISTS] Wisielec
CREATE TABLE Slowa (Slowo VARCHAR(30), ID INT(100) PRIMARY KEY,ilosc_wystapien INT(100), Ile_razy_odgadniete INT(100))
INSERT INTO `Slowa`(`Slowo`, `ID`, `ilosc_wystapien`, `Ile_razy_odgadniete`) VALUES ("poczatek",1,0,0);
INSERT INTO `Slowa`(`Slowo`, `ID`, `ilosc_wystapien`, `Ile_razy_odgadniete`) VALUES ("koniec",2,0,0);
Alter table Slowa modify ID INT(1) AUTO_INCREMENT UNIQUE
Alter table Slowa modify Slowo VARCHAR(30)  UNIQUE
INSERT INTO `Slowa`(`Slowo`,`ilosc_wystapien`, `Ile_razy_odgadniete`) VALUES ("rzeczpospolita",0,0);
INSERT INTO `Slowa`(`Slowo`,`ilosc_wystapien`, `Ile_razy_odgadniete`) VALUES ("kontusz",0,0);
INSERT INTO `Slowa`(`Slowo`, `ID`, `ilosc_wystapien`, `Ile_razy_odgadniete`) VALUES ("cyberpunk",4,0,0)
INSERT INTO `Slowa`(`Slowo`,`ilosc_wystapien`, `Ile_razy_odgadniete`) VALUES ("koziol",0,0);
#18.I.2020 15:06 Ostatnia aktualizacja pliku
