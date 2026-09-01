package lex.canalCodeWitharjun.server.controller;

import lex.canalCodeWitharjun.server.dto.UserDTO;
import lex.canalCodeWitharjun.server.mapper.UserMapper;
import lex.canalCodeWitharjun.server.model.User;
import lex.canalCodeWitharjun.server.repository.UserRepository;
import lex.canalCodeWitharjun.server.service.UsersService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users")
@AllArgsConstructor
public class UsersController {
    private UsersService usersService;

    // Aula de Repository =======================
    private UserRepository userRepository;


    @GetMapping("/buscar")
    public ResponseEntity<List<UserDTO>> buscarUserPorNome(@RequestParam String nome) {
        List<User> users = userRepository.findByNomeContainingIgnoreCase(nome);

        List<UserDTO> usersDTO = users.stream()
                .map(UserMapper::mapToUserDTO)
                .toList();

        return ResponseEntity.ok(usersDTO);
    }
    // ============================================
    

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
        UserDTO userResponseSaved = usersService.create(userDTO);
        return ResponseEntity.status(201).body(userResponseSaved);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> readAllUsers() {
        List<UserDTO> usersDTO = usersService.readAll();
        return ResponseEntity.ok(usersDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> readOneUser(@PathVariable Long id) {
        UserDTO userDTO = usersService.readOneById(id);
        return ResponseEntity.ok(userDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        UserDTO userDTOUpdated = usersService.update(id, userDTO);
        return ResponseEntity.ok(userDTOUpdated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        usersService.delete(id);
        return ResponseEntity.ok("User deletado com sucesso!");
    }

}
