package br.edu.fatecpg.soldi.exception;

import java.time.LocalDateTime;

public record PermissionErrorMessage(LocalDateTime timestamp, int status, String error) { }
