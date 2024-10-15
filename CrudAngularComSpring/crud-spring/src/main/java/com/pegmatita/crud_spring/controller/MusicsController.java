package com.pegmatita.crud_spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pegmatita.crud_spring.model.Music;
import com.pegmatita.crud_spring.repository.MusicRepository;
import com.pegmatita.crud_spring.service.MusicService;





@RestController
@RequestMapping("/api/musics")
public class MusicsController {

    @Autowired
    private MusicService musicService;

    @Autowired
    private MusicRepository musicRepository;

    @GetMapping()
    public List<Music> listarMusicas() {
        return musicService.listarMusicas();
    }

    @PostMapping()
    public ResponseEntity<Music> postMusic(@RequestBody Music music) {
        return ResponseEntity.status(HttpStatus.CREATED).body(musicService.save(music));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Music> buscarId(@PathVariable Long id) {
        Optional<Music> music = musicRepository.findById(id);

        if(music.isPresent()){
            return ResponseEntity.ok(music.get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<Music> atualizarMusica(@PathVariable Long id, @RequestBody Music musicaAtualizada) {

        Optional<Music> musicaExistente = musicRepository.findById(id);

        if (musicaExistente.isPresent()) {
            Music musica = musicaExistente.get();
            musica.setNome(musicaAtualizada.getNome());
            musica.setAutor(musicaAtualizada.getAutor());
            musica.setLink(musicaAtualizada.getLink());

            Music musicaSalva = musicRepository.save(musica);
            return ResponseEntity.ok(musicaSalva);

        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarMusica(@PathVariable Long id){
        if (musicRepository.existsById(id)) {
            musicRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    
    
}
