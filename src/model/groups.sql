create or replace procedure new_group(course_id int, group_title varchar, teacher_id int) 
language plpgsql
as $$
begin
    insert into groups(course_id, group_title, teacher_id) values (course_id, group_title, teacher_id);

end; $$;


create or replace procedure delete_group (id int) 
language plpgsql
as $$
begin  
    delete from groups where group_id = id;

end; $$;