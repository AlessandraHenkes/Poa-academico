/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.engenharia.PoaAcademico.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import static java.lang.Long.parseLong;
import java.util.Date;
import java.util.Optional;
import static java.util.Optional.empty;
import static java.util.Optional.ofNullable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

/**
 *
 * @author Bruno
 */
@Component
public class JwtTokenProvider {

    @Value("${security.jwt.secret}")
    private String jwtSecret;

    @Value("${security.jwt.expiration}")
    private int jwtExpiration;

    // cria token a partir de um usuário autenticado
    public String generateToken(Authentication authentication) {

        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(new Date().getTime() + jwtExpiration);

        return Jwts.builder()
            .setSubject(Long.toString(userPrincipal.getId()))
            .setIssuedAt(now)
            .setExpiration(expiryDate)
            .signWith(io.jsonwebtoken.SignatureAlgorithm.HS512, jwtSecret)

                .claim("id", userPrincipal.getId())
                .claim("login", userPrincipal.getLogin())
            // .claim(key, value)

            .compact();
    }

    // obtém id do usuário a partir de um token
    public Optional<Long> getUserId(String jwt) {
        try {
            Claims claims = parse(jwt).getBody();

            // claims.get(key, class)

            return ofNullable(parseLong(claims.getSubject()));
        } catch (Exception ex) {
            return empty();
        }
    }

    private Jws<Claims> parse(String jwt) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(jwt);
    }
}