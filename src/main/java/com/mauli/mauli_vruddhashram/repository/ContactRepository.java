package com.mauli.mauli_vruddhashram.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mauli.mauli_vruddhashram.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}