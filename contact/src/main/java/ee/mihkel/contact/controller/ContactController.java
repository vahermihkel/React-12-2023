package ee.mihkel.contact.controller;

import ee.mihkel.contact.dto.ContactDTO;
import ee.mihkel.contact.entity.Contact;
import ee.mihkel.contact.repository.ContactRepository;
import ee.mihkel.contact.service.ContactService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ContactController {
    // fail, kuhu teeb front-end päringuid
    // tuleb päring --> käivitatakse funktsioon

    @Autowired
    private ContactRepository contactRepository;
    // muutuja kaudu saan funktsioone teha

    @Autowired
    private ContactService contactService;

    // localhost:8080/contact
    @GetMapping("contact")
    public List<ContactDTO> getContacts() {
        return contactService.transformContactToContactDTO(contactRepository.findAll());
    }

    // localhost:8080/add-contact?name=Mihkel&codeName=Qwerty&phone=5512345
//    @GetMapping("add-contact")
//    public List<Contact> addContact(
//            @RequestParam String name,
//            @RequestParam String codeName,
//            @RequestParam String phone
//    ) {
//        Contact contact = new Contact();
//        contact.setName(name);
//        contact.setCodeName(codeName);
//        contact.setPhone(phone);
//        contactRepository.save(contact);
//        return contactRepository.findAll();
//    }

    @PostMapping("contact")
    public List<ContactDTO> addContact(@RequestBody Contact contact) {
        contactRepository.save(contact);
        return contactService.transformContactToContactDTO(contactRepository.findAll());
    }

    // localhost:8080/contact?id=2
    @DeleteMapping("contact")
    public List<ContactDTO> deleteContact(@RequestParam Long id) {
        contactRepository.deleteById(id);
        return contactService.transformContactToContactDTO(contactRepository.findAll());
    }
}
