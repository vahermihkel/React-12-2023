package ee.mihkel.contact.repository;

import ee.mihkel.contact.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    // andmebaasiga suhtleja --> teeb valmis automaatselt kõik funktsioonid mida saan kasutada
    // .save() <-- lisamiseks
    // .findAll() <-- kõigi võtmiseks
    // .deleteById() <-- kustutamiseks
}
