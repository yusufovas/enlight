-- insert to tasks procedure
create or replace procedure add_task(task_title text, group_id int, status boolean default false) 
language plpgsql 
as $$ 
begin

    insert into tasks (task_title, group_id, status ) values (task_title, group_id, status);

end; $$;

-- update task procedure
create or replace procedure update_task(title text, t_status boolean, g_id int, id int) 
language plpgsql 
as $$ 
begin

    update tasks set task_title = title, status = t_status, group_id = g_id where task_id = id;

end; $$;

-- delete task procedure
create or replace procedure delete_task(id int) 
language plpgsql 
as $$ 
begin

    delete from tasks where task_id = id;

end; $$;