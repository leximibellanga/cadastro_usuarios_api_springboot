package lex.canalCodeWitharjun.server.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("O user com id: " + id + ", nao foi encontrado na base de dados.");
    }
}
