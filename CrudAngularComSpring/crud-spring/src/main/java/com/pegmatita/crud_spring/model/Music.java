package com.pegmatita.crud_spring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name= "musics")
@NoArgsConstructor // Gera o construtor sem argumentos
@AllArgsConstructor // Gera o construtor com todos os campos
public class Music {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(name= "nome", nullable = false, length= 200)
    private String nome;

    @Column(name = "autor", nullable = false, length= 200)
    private String autor;

    @Column(name = "link", nullable = false, length = 250)
    private String link;
    
}
