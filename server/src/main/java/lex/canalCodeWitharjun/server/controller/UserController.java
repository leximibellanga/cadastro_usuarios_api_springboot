package lex.canalCodeWitharjun.server.controller;

import lex.canalCodeWitharjun.server.exception.UserNotFoundException;
import lex.canalCodeWitharjun.server.model.User;
import lex.canalCodeWitharjun.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public User createUser(@RequestBody User user) {
        User newUser = userRepository.save(user);
        return newUser;
    }

    @GetMapping
    public List<User> readAllUsers() {
        List<User> listUsers = userRepository.findAll();
        return listUsers;
    }

    @GetMapping("/{id}")
    public User readOneUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/{id}")
    public User updateUserById(@PathVariable Long id, @RequestBody User userUpdate) {
        return userRepository.findById(id)
                .map(user ->{
                        user.setNome(userUpdate.getNome());
                        user.setApelido(userUpdate.getApelido());
                        user.setEmail(userUpdate.getEmail());
                        user.setAnoNascimento(userUpdate.getAnoNascimento());
                        return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    public String deleteUserById(@PathVariable Long id) {
        if (!userRepository.existsById(id)) throw new UserNotFoundException(id);

        userRepository.deleteById(id);
        return "User com id: " + id + ", foi deletado com sucesso!";
    }
}
