CREATE DATABASE IF NOT EXISTS eunwoodev DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE eunwoodev;

CREATE TABLE IF NOT EXISTS user(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(128) UNIQUE,
    password VARCHAR(255),
    username VARCHAR(32),
    nickname VARCHAR(32) NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    flags TINYINT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS session (
    refresh_token CHAR(64) UNIQUE,
    user INT UNSIGNED,
    device_identifier CHAR(64),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS email_verify (
    user INT UNSIGNED NOT NULL,
    token CHAR(36),
    FOREIGN KEY (user) REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS email_rate_limit (
    type VARCHAR(32) NOT NULL,  -- "global_email", "register", "password_reset", ...
    identifier CHAR(64) NOT NULL,  -- SHA256 encrypted user identifier (can be ip, email, etc.)
    count INT UNSIGNED NOT NULL DEFAULT 0,
    start_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_rate_limit_key (type, identifier)
);

CREATE TABLE IF NOT EXISTS intro_link (
    name VARCHAR(32) UNIQUE,
    type VARCHAR(32),
    url VARCHAR(128),
    external BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS career (
    idx TINYINT UNSIGNED,
    name VARCHAR(32),
    role VARCHAR(32),
    start_date DATE,
    end_date DATE NULL DEFAULT NULL,
    icon VARCHAR(32),
    iconFromImg BOOLEAN DEFAULT FALSE,
    icon_size TINYINT UNSIGNED DEFAULT 0
);
