package lex.canalCodeWitharjun.server.controller;

import lex.canalCodeWitharjun.server.model.User;
import lex.canalCodeWitharjun.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    // create user
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.status(201).body(userService.create(user));
    }

    // all users
    @GetMapping
    public List<User> readAllUsers() {
        return userService.readAll();
    }

    // one user
    @GetMapping("/{id}")
    public ResponseEntity<User> readOneUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.readOne(id));
    }

    // edit user
    @PutMapping("/{id}")
    public ResponseEntity<String> updateUserById(@PathVariable Long id, @RequestBody User userUpdate) {
        userService.update(id, userUpdate);
        return ResponseEntity.ok("\"" + userUpdate.getNome() + "\" Editado com sucesso");
    }

    // delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.ok("Deletado com sucesso");
    }
}
