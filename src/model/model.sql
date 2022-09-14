drop table if exists users;

create table users(
    user_id serial not null primary key,
    user_name varchar(64) not null,
    user_password varchar(32) not null,
    user_status int not null default 3
);

drop table if exists courses;

create table courses(
    id serial not null primary key,
    title varchar(64) not null,
    price int not null
);

drop table if exists groups;

create table groups(
    group_id serial not null primary key,
    course_id int not null references courses(id) on delete cascade,
    group_title varchar(32) not null,
    teacher_id int not null references users(user_id) on delete cascade
);

drop table if exists group_members;

create table group_members(
    table_id serial not null primary key,
    student_id int references users(user_id) on delete cascade,
    group_id int references groups(group_id) on delete cascade
);

drop table if exists tasks;

create table tasks(
    task_id serial not null primary key,
    task_title text not null,
    status boolean not null default false,
    group_id int references groups(group_id) on delete cascade
);


insert into courses (title, price) values ('English', 550000), ('Math', 500000), ('Italian', 340000), ('React', 600000);

insert into users (user_name, user_password, user_status) values ('Mike', 'admin', 1), ('Alice', 'teacher', 2), ('Eliza', 'teacher', 2), ('Alex', 'student', 3), ('Matteo', 'student', 3), ('Lex', 'student', 3), ('John', 'student', 3), ('Joe', 'student', 3), ('David', 'student', 3), ('Betty', 'student', 3)

insert into groups (course_id, group_title, teacher_id) values (1, 'N1 English', 2), (1, 'N2 English', 2), (2, 'N1 MATH', 3), (3, 'Italian N1', 3), (4, 'React Development', 3);

insert into group_members (student_id, group_id) values (3, 1), (5, 1), (4, 1), (7, 1), (9, 3), (10, 3), (6, 4), (3, 4), (5, 4), (7, 5), (9, 5), (10, 5)

insert into tasks(task_title, group_id) values ('n1 english task-1', 1), ('n1 english task-2', 1);