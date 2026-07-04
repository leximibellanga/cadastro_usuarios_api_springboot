package lex.canalCodeWitharjun.server.service;

import lex.canalCodeWitharjun.server.exception.UserNotFoundException;
import lex.canalCodeWitharjun.server.model.User;
import lex.canalCodeWitharjun.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User create(User user) {
        return userRepository.save(user);
    }

    public List<User> readAll() {
        return userRepository.findAll();
    }

    public User readOne(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public User update(Long id, User u) {
        return userRepository.findById(id)
                .map(user ->{
                    user.setNome(u.getNome());
                    user.setApelido(u.getApelido());
                    user.setEmail(u.getEmail());
                    user.setAnoNascimento(u.getAnoNascimento());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
