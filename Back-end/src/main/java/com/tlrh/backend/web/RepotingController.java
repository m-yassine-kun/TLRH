package com.tlrh.backend.web;

import com.tlrh.backend.entities.*;
import com.tlrh.backend.service.ReportingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/rapports")
public class RepotingController {
    @Autowired
    ReportingService reportingService;

    @GetMapping("/salaire/{id}")
    public List<Salaire> getSalaires(@PathVariable(value="id")Long id) {
        return reportingService.getSalaires(id);
    }

    @GetMapping("/postApp/{id}")
    public List<PosteAPP> getPostAPPs(@PathVariable(value="id")Long id) {
        return reportingService.getPostAPPs(id);
    }

    @GetMapping("/poste/{id}")
    public List<Post> getPosts(@PathVariable(value="id")Long id) {
        return reportingService.getPosts(id);
    }


    @GetMapping("/competence/{id}")
    public List<Competence> getCompetences(@PathVariable(value="id")Long id) {
        return reportingService.getComptences(id);
    }
    @GetMapping("/competences")
    public List<Competence> getCompetences() {
        return reportingService.getComptences();
    }
    @GetMapping("/diplomes")
    public List<Diplome> getDiplomes() {
        return reportingService.getDiplomes();
    }

    @GetMapping("/sexe")
    public Map<Character,Integer> getSexe() {
        return reportingService.getSexe();
    }




}
