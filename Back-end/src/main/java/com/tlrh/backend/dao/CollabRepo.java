package com.tlrh.backend.dao;

import com.tlrh.backend.entities.Collaborateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollabRepo extends JpaRepository<Collaborateur, Long> {
    List<Collaborateur> getAllBySexeIs(char c);

}
