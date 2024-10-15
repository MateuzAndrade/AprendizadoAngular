package com.pegmatita.crud_spring.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.pegmatita.crud_spring.model.Music;
import com.pegmatita.crud_spring.repository.MusicRepository;

@Configuration
public class DatabaseLoader {

    @Bean
    CommandLineRunner initDatabase(MusicRepository repository) {
        return args -> {
            repository.save(new Music(null, "Song 1", "Author 1", "https://example.com/song1"));
            repository.save(new Music(null, "Song 2", "Author 2", "https://example.com/song2"));
            repository.save(new Music(null, "Song 3", "Author 3", "https://example.com/song3"));
        };
    }
}