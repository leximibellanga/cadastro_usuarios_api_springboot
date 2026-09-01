package lex.canalCodeWitharjun.server.service;

import lex.canalCodeWitharjun.server.dto.UserDTO;
import lex.canalCodeWitharjun.server.exception.UserNotFoundException;
import lex.canalCodeWitharjun.server.mapper.UserMapper;
import lex.canalCodeWitharjun.server.model.User;
import lex.canalCodeWitharjun.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsersService implements UserServiceMethods {
    // Autowired para injectar o repository
    @Autowired
    private UserRepository userRepository;


    // Criar novo usuario
    @Override
    public UserDTO create(UserDTO userDTO) {
        // converter o userDTO para userEntity
        User user = UserMapper.mapToUser(userDTO);
        // salvar o userEntity na BD
        User userSaved = userRepository.save(user);
        // converter o user salvo na BD para userDTO e retornar o userDTO
        return UserMapper.mapToUserDTO(userSaved);
    }


    // Listar todos usuarios
    @Override
    public List<UserDTO> readAll() {
        // pegar todos os dados da BD colar na lista de UsersEntity
        List<User> users = userRepository.findAll();
        // converter a lista de usersEntiry para lista de usersDTO
        return users.stream()
            .map(UserMapper::mapToUserDTO)
            .collect(Collectors.toList());
    }


    // Listar um usuario pelo ID
    @Override
    public UserDTO readOneById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("O usuario com o ID: " + id + " nao existe!"));
        return UserMapper.mapToUserDTO(user);
    }


    // Editar dados de um usuario pelo ID
    @Override
    public UserDTO update(Long id, UserDTO userDTO) {
        // Mesma logica usada quando listamos um user pelo ID
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("O usuario com o ID: " + id + " nao existe!"));
        // Atribuir os dados novos que vem do body na variavel: userDTO, para o user
        user.setNome(userDTO.nome());
        user.setApelido(userDTO.apelido());
        user.setAnoNascimento(userDTO.anoNascimento());
        user.setEmail(userDTO.email());
        // Salvar o user na BD com os novos dados
        User userUpdated = userRepository.save(user);
        // Converter o userEntity para userDTO e retornar ele
        return UserMapper.mapToUserDTO(userUpdated);
    }

    // Deletar um usuario pelo ID
    @Override
    public void delete(Long id) {
        // Mesma logica usada quando listamos um user pelo ID
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("O usuario com o ID: " + id + " nao existe!"));
        // Remover o user da BD
        userRepository.deleteById(user.getId());
    }
}
