package lex.canalCodeWitharjun.server.mapper;

import lex.canalCodeWitharjun.server.dto.UserDTO;
import lex.canalCodeWitharjun.server.model.User;

public class UserMapper {

    public static UserDTO mapToUserDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getNome(),
                user.getApelido(),
                user.getAnoNascimento(),
                user.getEmail()
        );
    }

    public static User mapToUser(UserDTO userDTO) {
        return new User(
                userDTO.id(),
                userDTO.nome(),
                userDTO.apelido(),
                userDTO.anoNascimento(),
                userDTO.email()
        );
    }
}

