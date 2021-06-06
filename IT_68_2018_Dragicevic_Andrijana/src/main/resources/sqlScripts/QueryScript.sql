--svi studenti cije ime pocinje na slovo M

select * from student
where ime like 'M%';

-- svi studenti prve grupe

select * from student
where grupa = 1;

-- sve projekte kojima opis pocinje sa 'Razvoj'

select * from projekat
where opis like 'Razvoj%';


-- broj projekata
select count(oznaka)
from projekat

--ispisati sve studente sa nazivima njihovih projekata

select s.*, p.naziv
from student s, projekat p
where s.projekat = p.id

--za sve studente ispisati oznaku grupe u kojoj se nalaze

select s.ime, s.prezime, g.oznaka
from student s, grupa g
where s.projekat = g.id

--sve projekte koje rade studenti smera inzenjerstvo informacionih sistema

select sm.naziv, p.*
from student s, grupa g, smer sm, projekat p
where s.projekat = p.id 
	and s.grupa = g.id 
	and g.smer = sm.id
	and sm.naziv like 'Inzenjerstvo informacionih sistema';

select * from student

select * from projekat

select * from smer

select * from grupa