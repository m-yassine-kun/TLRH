package com.tlrh.backend.dao;

import com.tlrh.backend.entities.PosteAPP;
import com.tlrh.backend.entities.Salaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostAppRepo extends JpaRepository<PosteAPP, Long> {
    List<PosteAPP> findAllByCollaborateur_Id(Long id);

}
