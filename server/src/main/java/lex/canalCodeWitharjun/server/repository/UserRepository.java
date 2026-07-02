package lex.canalCodeWitharjun.server.repository;

import lex.canalCodeWitharjun.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
