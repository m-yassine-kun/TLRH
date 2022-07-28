package com.tlrh.backend.dto;

import com.tlrh.backend.entities.*;
import lombok.Data;

import java.util.List;

@Data
public class CollabDTO {
    private Collaborateur collab;
    private List<Salaire> salaires;
   private List<Post> postes;
   private List<PosteAPP> posteAPPs;
    private List<Competence> competences;
    private List<Diplome> diplomes;

}