package com.tlrh.backend.web;

import com.tlrh.backend.dto.CollabDTO;
import com.tlrh.backend.dto.Status;
import com.tlrh.backend.dto.StatusDTO;
import com.tlrh.backend.entities.Collaborateur;
import com.tlrh.backend.service.CollaborateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/collabs")
//@CrossOrigin
public class CollaborateurController {

    private final CollaborateurService collaborateursService;

    @GetMapping("/")
    public String welcome(){
        return "Bonjour !";
    }

    @Autowired
    public CollaborateurController(CollaborateurService collaborateursService) {
        this.collaborateursService = collaborateursService;
    }

    @GetMapping("/getCollabs")
    public List<Collaborateur> getCollabs (){
        return collaborateursService.getCollabs();
    }

    @PostMapping("/saveCollab")
    public String saveCollab (@RequestBody CollabDTO collabDTO){
        System.out.println(collabDTO);
        collaborateursService.saveCollab(collabDTO);
        return new StatusDTO(Status.Saved).getStatus();
    }

}