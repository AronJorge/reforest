
-- -----------------------------------------------------
-- Schema reforest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `reforest` DEFAULT CHARACTER SET utf8 ;
USE `reforest` ;

-- -----------------------------------------------------
-- Table `reforest`.`departamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`departamento` (
  `id_departamento` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id_departamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`municipio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`municipio` (
  `id_municipio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `departamento_id` INT NOT NULL,
  PRIMARY KEY (`id_municipio`),
    CONSTRAINT 
    FOREIGN KEY (`departamento_id`)
    REFERENCES `reforest`.`departamento` (`id_departamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`lote`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`lote` (
  `id_lote` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `fecha` DATETIME NULL,
  `area` float(10,0) NULL,
  `municipio_id` INT NOT NULL,
  PRIMARY KEY (`id_lote`),
    CONSTRAINT 
    FOREIGN KEY (`municipio_id`)
    REFERENCES `reforest`.`municipio` (`id_municipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`fecha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`fecha` (
  `id_fecha` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  PRIMARY KEY (`id_fecha`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`altura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`altura` (
  `id_altura` INT NOT NULL AUTO_INCREMENT,
  `medidas` float(10,0) NULL,
  PRIMARY KEY (`id_altura`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`arbol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`arbol` (
  `id_arbol` INT NOT NULL AUTO_INCREMENT,
  `lote_id` INT NOT NULL,
  `coordenadas` VARCHAR(25) NULL,
  `fecha_id` INT NOT NULL,
  `altura_id` INT NOT NULL,
  PRIMARY KEY (`id_arbol`),
        CONSTRAINT 
    FOREIGN KEY (`lote_id`)
    REFERENCES `reforest`.`lote` (`id_lote`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`fecha_id`)
    REFERENCES `reforest`.`fecha` (`id_fecha`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`altura_id`)
    REFERENCES `reforest`.`altura` (`id_altura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`estado` (
  `id_estado` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`id_estado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`especie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`especie` (
  `id_especie` INT NOT NULL AUTO_INCREMENT,
  `especie` VARCHAR(45) NULL,
  PRIMARY KEY (`id_especie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`actividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`actividades` (
  `id_actividades` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id_actividades`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`personas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`personas` (
  `id_personas` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(45) NULL,
  `apellidos` VARCHAR(45) NULL,
  `fecha_nacimiento` VARCHAR(45) NULL,
  `genero` VARCHAR(45) NULL,
  `direccion` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `municipio_id` INT NOT NULL,
  PRIMARY KEY (`id_personas`),
    CONSTRAINT 
    FOREIGN KEY (`municipio_id`)
    REFERENCES `reforest`.`municipio` (`id_municipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`desarrollo_actividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`desarrollo_actividades` (
  `id_desarrollo_actividades` INT NOT NULL AUTO_INCREMENT,
  `actividades_id` INT NOT NULL,
  `arbol_id` INT NOT NULL,
  `personas_id` INT NOT NULL,
  `fecha` DATETIME NULL,
  `comentario` VARCHAR(100) NULL,
  `foto` VARCHAR(45) NULL,
  PRIMARY KEY (`id_desarrollo_actividades`),
        CONSTRAINT 
    FOREIGN KEY (`actividades_id`)
    REFERENCES `reforest`.`actividades` (`id_actividades`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`arbol_id`)
    REFERENCES `reforest`.`arbol` (`id_arbol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`personas_id`)
    REFERENCES `reforest`.`personas` (`id_personas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`roles` (
  `id_roles` INT NOT NULL AUTO_INCREMENT,
  `roles` VARCHAR(45) NULL,
  PRIMARY KEY (`id_roles`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `roles_id` INT NOT NULL,
  `personas_id` INT NOT NULL,
  `usuario` VARCHAR(45) NULL,
  `clave` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`),
      CONSTRAINT 
    FOREIGN KEY (`roles_id`)
    REFERENCES `reforest`.`roles` (`id_roles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`personas_id`)
    REFERENCES `reforest`.`personas` (`id_personas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`arbol_estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`arbol_estado` (
  `id_arbol_estado` INT NOT NULL AUTO_INCREMENT,
  `arbol_id` INT NOT NULL,
  `estado_id` INT NOT NULL,
  `cambio_estado_fecha` DATETIME NOT NULL,
      PRIMARY KEY (`id_arbol_estado`),
  CONSTRAINT 
    FOREIGN KEY (`arbol_id`)
    REFERENCES `reforest`.`arbol` (`id_arbol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`estado_id`)
    REFERENCES `reforest`.`estado` (`id_estado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `reforest`.`especie_arbol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reforest`.`especie_arbol` (
  `id_especie_arbol` INT NOT NULL AUTO_INCREMENT,
  `especie_id` INT NOT NULL,
  `arbol_id` INT NOT NULL,
  `cambio_especie_fecha` DATETIME NOT NULL,
      PRIMARY KEY (`id_especie_arbol`),
  CONSTRAINT 
    FOREIGN KEY (`especie_id`)
    REFERENCES `reforest`.`especie` (`id_especie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT 
    FOREIGN KEY (`arbol_id`)
    REFERENCES `reforest`.`arbol` (`id_arbol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
