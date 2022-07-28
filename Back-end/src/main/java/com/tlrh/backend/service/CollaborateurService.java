package com.tlrh.backend.service;

import com.tlrh.backend.dao.*;
import com.tlrh.backend.dto.CollabDTO;
import com.tlrh.backend.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CollaborateurService {
    private final CollabRepo collaborateursRepository;
    private final DiplomeRepo diplomeRepository;
    private final CompetenceRepo competenceRepository;
    private final SalaireRepo salaireRepository;
    private final PostAppRepo postAppRepository;
    private final PostRepo postRepository;

    @Autowired
    public CollaborateurService(CollabRepo collaborateursRepository, DiplomeRepo diplomeRepository, CompetenceRepo competenceRepository
            ,SalaireRepo salaireRepository,PostAppRepo postAppRepository,PostRepo postRepository) {
        this.collaborateursRepository = collaborateursRepository;
        this.diplomeRepository = diplomeRepository;
        this.competenceRepository = competenceRepository;
        this.salaireRepository = salaireRepository;
        this.postAppRepository = postAppRepository;
        this.postRepository = postRepository;
    }

    public List<Collaborateur> getCollabs() {
        return collaborateursRepository.findAll();
    }
    public List<Salaire> getSalaires(Long id) {
        return salaireRepository.findAllByCollaborateur_Id(id);
    }
    public List<Post> getPosts(Long id) {
        return postRepository.findAllByCollaborateur_Id(id);
    }
    public List<PosteAPP> getPostAPPs(Long id) {
        return postAppRepository.findAllByCollaborateur_Id(id);
    }

    public List<Diplome> getDiplomes(Long id) {
        return diplomeRepository.findAllByCollaborateur_Id(id);
    }

    public List<Competence> getComptences(Long id) {
        return competenceRepository.findAllByCollaborateur_Id(id);
    }


    public void saveCollab(CollabDTO collabDTO){
        Collaborateur collab = collabDTO.getCollab();
        //collab.setSalaires(collabDTO.getSalaires());
        collab.addSalaires(collabDTO.getSalaires());
        collab.addPosts(collabDTO.getPostes());
        collab.addCompetences(collabDTO.getCompetences());
        collab.addDiplomes(collabDTO.getDiplomes());


        /*for(Salaire sal : collab.getSalaires()){
            sal.setCollaborateur(collab);
            salaireRepository.save(sal);
        }*/

        collaborateursRepository.save(collab);

        System.out.println("Saved :) ");
    }

}
