package ee.mihkel.contact.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter // getName()
@Setter // setCodeName("UUS_VÄÄRTUS");
@Entity // hibernate
//@Table(name = "contact")
public class Contact {
    // andmebaasimudel
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // int --> kuni 2.1miljardit   Long kuni 900 000 miljardit
    private String name;
    private String codeName;
    private String phone;

    @ManyToOne // User on Postgres sees reserveeritud
    private SysUser userWhoAdded; // Talle ka Repository, Talle ka Entity, Controller
}
