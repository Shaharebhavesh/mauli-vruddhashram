package com.mauli.mauli_vruddhashram.controller;

//import com.mauli.mauli_vruddhashram.model.Contact;
//import com.mauli.mauli_vruddhashram.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@Controller
public class PageController {

    @GetMapping("/home")
    public String home() {
        return "index";
    }

//    @PostMapping("/contact")
//    @ResponseBody
//    public String contact(Contact contact) {
//        // Save to DB here
//        return "success";
//    }
}