INSERT INTO `reforest`.`altura` (`medidas`) VALUES ('3.89'),('1.91'),('2.16'),('4');

insert into actividades (nombre) values ('sembrar'),('abonar'),('riego');

insert into departamento (nombre) values('cesar'),('guajira');
insert into municipio ( nombre, departamento_id) values ('valledupar',1),('Majayura',1),('Riocha',1);

insert into lote (nombre, fecha, area, municipio_id) values('Emdupar','2017-01-12 00:00:00',12,1),
('paraiso','2017-02-12 13:33:41',22,2),
('cañaveral','2017-02-12 13:33:41',22,1);

insert into estado (estado) values
('resiembra'),
('muerta'),
('enferma'),
('buena');

insert into especie (especie) values
('Mora'),
('guayaba'),
('Guanabana');

insert into fecha (fecha) values ('2017-03-06 19:55:44');


insert into roles (roles) values('admin'),('operador'),('visitante'),('master');

insert into personas (nombres, apellidos, fecha_nacimiento, genero, direccion, telefono, municipio_id) values
('jorge','correa','2017-03-06 20:38:25','masculino','por ay cerca','3007337766',1),
('francisca','peralta','2017-03-06 20:38:25','femenina','mas aya','3126754532',1);

insert into usuario (roles_id, personas_id, usuario, clave) values
(1	,1,	'user','1234');

insert into arbol (lote_id, coordenadas, fecha_id, altura_id) values(1,'9293476,-3213467',1,1),(1,'9283646,-2736468',1,1),(2,'9293476,-3213467',1,3);

insert into arbol_estado (arbol_id,estado_id,cambio_estado_fecha) values
(1,1,'2017-03-06 20:38:25'),
(2,2,'2017-03-06 20:38:25');


insert into desarrollo_actividades (actividades_id, arbol_id, personas_id, fecha, foto) values
(2,1,1,'2017-03-10 22:10:52','no hay'),
(1,1,2,'2017-03-11 03:10:52','colmonia'),
(3,2,1,'2017-02-08 13:22:18','url');

insert into especie_arbol (especie_id,arbol_id,cambio_especie_fecha) values
(2,2,'2017-03-06 20:38:25'),
(2,1,'2017-04-07 08:02:22'),
(1,3,'2017-02-04 10:18:52'),
(2,1,'2017-03-06 20:38:25'),
(2,2,'2017-02-03 10:22:31');






