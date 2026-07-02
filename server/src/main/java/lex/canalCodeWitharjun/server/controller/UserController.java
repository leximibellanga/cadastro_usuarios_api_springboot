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

//    Cadastrar User
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

//    Listar Todos Users
    @GetMapping
    public List<User> readAllUsers() {
        return userRepository.findAll();
    }

//    Listar um User pelo ID
    @GetMapping("/{id}")
    public User readOneUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

//    Editar dados de um User pelo ID
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

//    Deletar User pelo ID
    @DeleteMapping("/{id}")
    public String deleteUserById(@PathVariable Long id) {
        if (!userRepository.existsById(id)) throw new UserNotFoundException(id);

        userRepository.deleteById(id);
        return "User com id: " + id + ", foi deletado com sucesso!";
    }

}
