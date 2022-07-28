package com.tlrh.backend.dao;

import com.tlrh.backend.entities.Competence;
import com.tlrh.backend.entities.Salaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalaireRepo extends JpaRepository<Salaire, Long> {
    List<Salaire> findAllByCollaborateur_Id(Long id);
}
