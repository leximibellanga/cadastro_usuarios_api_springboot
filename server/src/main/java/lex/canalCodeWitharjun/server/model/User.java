package lex.canalCodeWitharjun.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", length = 50)
    private String nome;

    @Column(name = "apelido", length = 50)
    private String apelido;

    @Column(name = "ano_nascimento")
    private int anoNascimento;

    @Column(name = "email", length = 100, unique = true)
    private String email;
}

