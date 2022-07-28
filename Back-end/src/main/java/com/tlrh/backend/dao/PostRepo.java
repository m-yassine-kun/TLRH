package com.tlrh.backend.dao;

import com.tlrh.backend.entities.Post;
import com.tlrh.backend.entities.Salaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepo extends JpaRepository<Post, Long> {
    List<Post> findAllByCollaborateur_Id(Long id);

}
