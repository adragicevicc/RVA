package rva.ctrls;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Grupa;
import rva.repository.GrupaRepository;
import rva.repository.SmerRepository;

@CrossOrigin
@RestController
@Api(tags = {"Grupa CRUD operacije"})

public class GrupaRestController {
	
	@Autowired //injektovanje novog bean-a u neki property - injektovanje zavisnosti
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private GrupaRepository grupaRepository; //ovde su injektovane zavisnosti
	
	@GetMapping("grupa")
	@ApiOperation(value = "Vraca kolekciju svih grupa iz baze podataka")
	public Collection<Grupa> getGrupe() {
		return grupaRepository.findAll();
	}
	
	@GetMapping("grupa/{id}")
	@ApiOperation(value = "Vraca grupu iz baze podataka cija je id vrednost prosledjena kao path varijabla")
	public Grupa getGrupa(@PathVariable("id") Integer id) {
		return grupaRepository.getOne(id);
	}
	
	@GetMapping("grupaOznaka/{oznaka}")
	@ApiOperation(value = "Vraca kolekciju svih grupa iz baze podataka koje u oznaci sadrze string koji je prosledjen kao path varijabla")
	public Collection<Grupa> getGrupaByOznaka(@PathVariable("oznaka") String oznaka){
		return grupaRepository.findByOznakaContainingIgnoreCase(oznaka);
	}
	
	@PostMapping("grupa")
	@ApiOperation(value = "Upisuje grupu u bazu podataka")
	public ResponseEntity<Grupa> insertGrupa(@RequestBody Grupa grupa) {
		if(!grupaRepository.existsById(grupa.getId())) {
			grupaRepository.save(grupa);
			return new ResponseEntity<Grupa>(HttpStatus.OK);
		}
		return new ResponseEntity<Grupa>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("grupa")
	@ApiOperation(value = "Modifikuje postojecu grupu u bazi podataka")
	public ResponseEntity<Grupa> updateGrupa(@RequestBody Grupa grupa) {
		if(!grupaRepository.existsById(grupa.getId())) {
			return new ResponseEntity<Grupa>(HttpStatus.NO_CONTENT);
		}
		grupaRepository.save(grupa);
		return new ResponseEntity<Grupa>(HttpStatus.OK);
	}
	
	@Transactional
	@DeleteMapping("grupa/{id}")
	@ApiOperation(value = "Brise grupu iz baze podataka cija je id vrednost prosledjena kao path varijabla")
	public ResponseEntity<Grupa> deleteGrupa(@PathVariable("id") Integer id) {
		if(!grupaRepository.existsById(id)) {
			return new ResponseEntity<Grupa>(HttpStatus.NO_CONTENT);
		}
		jdbcTemplate.execute("delete from student where grupa = " + id); //zbog stranog kljuca
		grupaRepository.deleteById(id);
		if(id == -100) {
			jdbcTemplate.execute(
					"INSERT INTO \"grupa\"(\"id\",\"oznaka\", \"smer\")" + "VALUES (-100, 'TestOz', 1)"
			);
		}
		return new ResponseEntity<Grupa>(HttpStatus.OK);
	}
}
