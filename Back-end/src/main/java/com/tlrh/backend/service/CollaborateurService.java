package com.tlrh.backend.service;

import com.tlrh.backend.dao.*;
import com.tlrh.backend.dto.CollabDTO;
import com.tlrh.backend.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public Collaborateur getCollabById(Long id) {
        return collaborateursRepository.findById(id).get();
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
        Collaborateur collaborateur = collabDTO.getCollab();
        collaborateur.addSalaires(collabDTO.getSalaires());
        collaborateur.addPosts(collabDTO.getPostes());
        collaborateur.addCompetences(collabDTO.getCompetences());
        collaborateur.addDiplomes(collabDTO.getDiplomes());
        //collaborateur.addPostAPPs(collabDTO.getPosteAPPs());



        collaborateursRepository.save(collaborateur);
        System.out.println("Saved :) ");
    }

}
