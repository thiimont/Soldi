package br.edu.fatecpg.soldi.repository;

import br.edu.fatecpg.soldi.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByUuidExterno(UUID uuidExterno);

    Optional<UserDetails> findUsuarioByEmail(String username);

    boolean existsByUuidExterno(UUID uuidExterno);
}
