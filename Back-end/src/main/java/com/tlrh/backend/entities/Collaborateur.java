package com.tlrh.backend.entities;

import lombok.*;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
public class Collaborateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String DateEmbauche;
    @Column
    private char sexe;

    @Column
    @OneToMany(mappedBy = "collaborateur")
    private List<Salaire> salaires;

    @OneToMany(mappedBy = "collaborateur")
    private List<Post> postes=new ArrayList<>();

    @OneToMany(mappedBy = "collaborateur")
    private  List<PosteAPP>  posteAPPs=new ArrayList<>();

    @OneToMany(mappedBy = "collaborateur",cascade = CascadeType.ALL)
    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    private List<Competence> competences = new ArrayList<>();

    @OneToMany(mappedBy = "collaborateur",cascade = CascadeType.ALL)
    @Getter(value = AccessLevel.NONE)
    @Setter(value = AccessLevel.NONE)
    private List<Diplome> diplomes = new ArrayList<>();
    //  private Date embauche & idCollab



    public void updateSalaire(Salaire newSalaire){
        newSalaire.setCollaborateur(this);
        this.salaires.add(0,newSalaire);
    }
    public void updatePost(Post newPost){
        newPost.setCollaborateur(this);
        this.postes.add(0,newPost);
    }
    public void updatePostAPP(PosteAPP newPostAPP){
        newPostAPP.setCollaborateur(this);
        this.posteAPPs.add(0,newPostAPP);
    }

    public void addSalaires(List<Salaire> salaire1) {
        for(Salaire sal : salaire1){
            sal.setCollaborateur(this);
            //updateSalaire(sal);
            this.salaires.add(sal);
        }
    }
    public void addPosts(List<Post> poste1){

        for(Post p : poste1){
            p.setCollaborateur(this);
            updatePost(p);
        }
    }
    public void addPostAPPs(List<PosteAPP> posteAPP1){

        for(PosteAPP pAPP : posteAPP1){
            pAPP.setCollaborateur(this);
            updatePostAPP(pAPP);
        }
    }

    public void addCompetences(List<Competence> competences1){
        for(Competence com : competences1) {
            com.setCollaborateur(this);
            competences.add(com);
        }
    }
    public void removeCompetence(List<Competence> competences1){
        for(Competence com : competences1) {
            com.setCollaborateur(null);
            competences.remove(com);
        }
    }
    public void addDiplomes(List<Diplome> diplomes1){
        //System.out.println(diplomes1.size());
        for(Diplome dip : diplomes1){
            dip.setCollaborateur(this);
            diplomes.add(dip);
        }
    }

    public void removeDiplome(List<Diplome> diplomes1){
        for(Diplome dip : diplomes1) {
            dip.setCollaborateur(null);
            diplomes.remove(dip);
        }
    }



}
