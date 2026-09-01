package lex.canalCodeWitharjun.server.repository;

import lex.canalCodeWitharjun.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

     List<User> findByNomeContainingIgnoreCase(String nome);

}
