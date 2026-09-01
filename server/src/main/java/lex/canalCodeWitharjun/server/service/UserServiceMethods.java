package lex.canalCodeWitharjun.server.service;

import lex.canalCodeWitharjun.server.dto.UserDTO;

import java.util.List;

public interface UserServiceMethods {

    // ====== methods =======
    // create
    public UserDTO create(UserDTO userDTO);

    // read all
    public List<UserDTO> readAll();

    // read one
    public UserDTO readOneById(Long id);

    // update
    public UserDTO update(Long id, UserDTO userDTO);

    // delete
    public void delete(Long id);

}
