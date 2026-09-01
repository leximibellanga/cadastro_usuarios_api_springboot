package lex.canalCodeWitharjun.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class Exceptions extends ResponseEntityExceptionHandler {

    // Not found
    @ExceptionHandler(UserNotFoundException.class)
    private ResponseEntity<ExceptionMessage> notFound(UserNotFoundException e) {
        ExceptionMessage exceptionMessage = new ExceptionMessage(HttpStatus.NOT_FOUND, "Usuario nao encontrado!!!");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionMessage);
    }

}
