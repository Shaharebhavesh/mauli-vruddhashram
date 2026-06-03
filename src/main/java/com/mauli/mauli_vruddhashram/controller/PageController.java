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


    @GetMapping("/about")
    public String aboutPage() {
        return "about";
    }

    @GetMapping("/service")
    public String servicePage() {
        return "service";
    }

    @GetMapping("/contact")
    public String contactPage() {
        return "contact";
    }

    @GetMapping("/gallery")
    public String galleryPage() {
        return "gallery";
    }

    @GetMapping("/donate")
    public String donatePage() {

        return "donate";
    }

    @GetMapping("/success")
    public String successPage(){

        return "success";
    }

//    @PostMapping("/contact")
//    @ResponseBody
//    public String contact(Contact contact) {
//        // Save to DB here
//        return "success";
//    }
}