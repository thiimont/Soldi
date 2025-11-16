package br.edu.fatecpg.soldi.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "transacoes")
public class Transacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private UUID uuid_externo = UUID.randomUUID();

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private BigDecimal valor;

    @Column
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    // Adicionei os seguintes campos abaixo pois preciso desses dados para
    // retornar no grafico :D

    @Column
    private String categoria; // Ex: "Alimentação", "Transporte", etc.

    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime data_transacao;
}
