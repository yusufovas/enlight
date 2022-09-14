create or replace procedure new_course (title varchar, price int) 
language plpgsql
as $$

begin 
    insert into courses(title, price) values (title, price);
end; $$;

create or replace procedure update_course(c_title varchar, c_price int, c_id int) 
language plpgsql

as $$
begin 
    update courses set title = c_title, price = c_price where id = c_id;

end;
$$;

create or replace procedure delete_course (c_id int) 
language plpgsql
as $$

begin
    delete from courses where id = c_id;

end;
$$;