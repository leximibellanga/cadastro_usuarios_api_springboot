package lex.canalCodeWitharjun.server.dto;

import lex.canalCodeWitharjun.server.model.User;

public record UserDTO(Long id, String nome, String apelido, int anoNascimento, String email) {
    public UserDTO(User user) {
        this(
            user.getId(),
            user.getNome(),
            user.getApelido(),
            user.getAnoNascimento(),
            user.getEmail()
        );
    }
}
