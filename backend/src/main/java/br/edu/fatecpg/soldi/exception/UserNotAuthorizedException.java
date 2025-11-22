package br.edu.fatecpg.soldi.exception;

public class UserNotAuthorizedException extends RuntimeException {
    public UserNotAuthorizedException(){ super("Você não tem permissão para acessar este recurso."); }

    public UserNotAuthorizedException(String message) {
        super(message);
    }
}
