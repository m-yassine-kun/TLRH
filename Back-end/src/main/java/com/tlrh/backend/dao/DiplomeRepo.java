package com.tlrh.backend.dao;

import com.tlrh.backend.entities.Diplome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiplomeRepo extends JpaRepository<Diplome, Long> {
    List<Diplome> findAllByCollaborateur_Id(Long id);
}
