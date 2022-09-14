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