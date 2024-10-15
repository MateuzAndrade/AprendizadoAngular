package com.pegmatita.crud_spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pegmatita.crud_spring.model.Music;
import com.pegmatita.crud_spring.repository.MusicRepository;

@Service
public class MusicService {

    @Autowired
    private MusicRepository musicRepository;

    public List<Music> listarMusicas(){
        return  musicRepository.findAll();
    }

    public Music save(Music music){
       return musicRepository.save(music);
    }


}
