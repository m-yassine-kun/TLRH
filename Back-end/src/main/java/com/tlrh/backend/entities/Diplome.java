package com.tlrh.backend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Diplome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String typeDiplome; //étatique, privé
    @Column
    private String typeEcole; //( nationale, internationale)
    @Column
    private int promotion;
    @Column
    private String ecole;
    @Column
    private String niveau; //Bac+5
    @ManyToOne
    @JsonProperty(access= JsonProperty.Access.WRITE_ONLY)
    private Collaborateur collaborateur;
}
