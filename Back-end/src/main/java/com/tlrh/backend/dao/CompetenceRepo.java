package com.tlrh.backend.dao;

import com.tlrh.backend.entities.Competence;
import com.tlrh.backend.entities.Diplome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompetenceRepo extends JpaRepository<Competence, Long> {
    List<Competence> findAllByCollaborateur_Id(Long id);
}
