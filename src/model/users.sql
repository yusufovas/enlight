create or replace procedure new_user (user_name varchar, user_password varchar, user_status int default 3)
language plpgsql
as $$
begin

    insert into users (user_name, user_password, user_status) values(user_name, user_password, user_status);

end; $$;


create or replace procedure delete_user(id int) 
language plpgsql
as $$
begin 
    delete from users where user_id = id;

end; $$;