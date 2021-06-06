package rva.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rva.jpa.Grupa;
import rva.jpa.Smer;
import rva.jpa.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	Collection<Student> findByGrupa(Grupa g);
	Collection<Student> findByBrojIndeksaContainingIgnoreCase(String broj_indeksa);
}
