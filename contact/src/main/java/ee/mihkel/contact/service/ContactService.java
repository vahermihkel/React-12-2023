package ee.mihkel.contact.service;

import ee.mihkel.contact.dto.ContactDTO;
import ee.mihkel.contact.entity.Contact;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    public List<ContactDTO> transformContactToContactDTO(List<Contact> contacts) {
        ModelMapper modelMapper = new ModelMapper();
        return contacts.stream().map(e -> modelMapper.map(e, ContactDTO.class)).toList();
    }
}
