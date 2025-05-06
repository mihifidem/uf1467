use gestion_biblioteca;

describe empleados;

alter table empleados add COLUMN direccion varchar(50);
alter table empleados add COLUMN cp varchar(5);
alter table empleados add COLUMN poblacion varchar(50);
alter table empleados add COLUMN provincia varchar(50);
alter table empleados add COLUMN telefono varchar(15);
alter table empleados add COLUMN iban varchar(24);
alter table empleados add COLUMN genero varchar(10);
alter table empleados add COLUMN estado_civil BOOL;
alter table empleados MODIFY column estado_civil varchar(10);
alter table empleados add COLUMN hijos INT;
alter table empleados add COLUMN f_nacimiento date;
alter table empleados add COLUMN createdAt TIMESTAMP;
alter table empleados add COLUMN modifiedAt DATE;

select * from empleados;