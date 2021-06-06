--PROJEKTI
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Parking servis', 'PS', 'Projektovanje baze podataka za parking sluzbu');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Turisticka agencija', 'TA', 'Razvoj WPF aplikacije');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Teretana', 'TE', 'Razvoj WPF aplikacije');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'eOrder', 'EO', 'Razvoj android aplikacije za narucivanje hrane');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Konferencija', 'KF', 'Organizovanje konferencije');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Advokatska kancelarija', 'AK', 'Razvoj sistema za pracenje predmeta advokatske kancelarije');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Poliklinika', 'PK', 'Razvoj informacionog sistema za polikliniku');
INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (NEXTVAL('projekat_seq'), 'Lanac prodavnica', 'LP', 'Razvoj informacionog sistema za lanac prodavnica');

INSERT INTO "projekat"("id", "naziv", "oznaka", "opis")
VALUES (-100, 'TestNaz', 'TestOzn', 'TestOps');

INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES (NEXTVAL('smer_seq'), 'Inzenjerstvo informacionih sistema', 'IT');
INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES (NEXTVAL('smer_seq'), 'Softversko inzenjerstvo i informacione tehnologije', 'SW');
INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES (NEXTVAL('smer_seq'), 'Primenjeno softversko inzenjerstvo', 'PR');
INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES (NEXTVAL('smer_seq'), 'Inzenjerski menadzment', 'IM');

INSERT INTO "smer"("id", "naziv", "oznaka")
VALUES (-100, 'TestNaz', 'TestOzn');

INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'I', '1' );
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'II', '2');
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'III', '3');
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'IV', '4');
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'V', '1');
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'VI', '2' );
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'VII', '3');
INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (NEXTVAL('grupa_seq'), 'VIII', '4');

INSERT INTO "grupa"("id", "oznaka", "smer")
VALUES (-100, 'TestOzn', 1 );



 
 --STUDENTI
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Marko', 'Markovic', 'IT12/2018', 1, 1);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Maja', 'Markovic', 'IT50/2018', 1, 1);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Nikola', 'Nikolic', 'IT43/2018', 1, 1);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Tamara', 'Tomic', 'IT62/2018', 1, 1);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Danilo', 'Ilic', 'SW12/2019', 2, 2);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Jovan', 'Tomic', 'SW21/2019', 2, 2);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Marko', 'Micic', 'SW61/2019', 2, 2);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Kristina', 'Nikolic', 'SW30/2019', 2, 2);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Teodora', 'Jovanovic', 'PR42/2018', 3, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Nikola', 'Jovanovic', 'PR70/2018', 3, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Dusan', 'Petrovic', 'PR36/2018', 3, 3);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Marina', 'Ivanovic', 'PR74/2018', 3, 3);
 
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Katarina', 'Radanovic', 'IM52/2018', 4, 5);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Nikolina', 'Pavlovic', 'IM41/2018', 4, 5);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Kristina', 'Radovanovic', 'IM98/2018', 4, 5);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Neda', 'Pavlovic', 'IM95/2018', 4, 5);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Marija', 'Rakic', 'IT41/2018', 5, 7);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Ivana', 'Milutinovic', 'IT57/2018', 5, 7);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Dejan', 'Nikolic', 'IT10/2018', 5, 7);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Uros', 'Pavlovic', 'IT3/2018', 5, 7);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Milos', 'Tomic', 'SW57/2018', 6, 4);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Tijana', 'Markovic', 'SW47/2018', 6, 4);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Ivan', 'Nikolic', 'SW40/2018', 6, 4);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Dragan', 'Ivanovic', 'SW60/2018', 6, 4);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Milos', 'Sretenovic', 'PR5/2018', 7, 8);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Igor', 'Petkovic', 'PR9/2018', 7, 8);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Strahinja', 'Mitrovic', 'PR20/2018', 7, 8);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Irina', 'Mikovic', 'PR87/2018', 7, 8);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Katarina', 'Rogojevic', 'IM50/2018', 8, 6);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Marija', 'Lukic', 'IM39/2018', 8, 6);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Kristina', 'Kuzmanovic', 'IM99/2018', 8, 6);
INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (NEXTVAL('student_seq'), 'Jovana', 'Nikolic', 'IM92/2018', 8, 6);

INSERT INTO "student"("id", "ime", "prezime", "broj_indeksa", "grupa", "projekat")
VALUES (-100, 'TestIme', 'TestPrz', 'TestInd', -100, -100);
