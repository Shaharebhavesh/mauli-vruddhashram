package com.mauli.mauli_vruddhashram.service;


import com.mauli.mauli_vruddhashram.model.Contact;
import com.mauli.mauli_vruddhashram.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository repo;

    public void save(Contact contact) {
        repo.save(contact);
    }
}