package com.pegmatita.crud_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pegmatita.crud_spring.model.Music;

public interface MusicRepository extends JpaRepository<Music, Long>{

}
