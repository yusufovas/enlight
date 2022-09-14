const model = require("../queires/task");

module.exports = {
  get: async (req, res, next) => {
    try {
      const { group_id } = req.cookies;

      const tasks = await model.all_tasks(group_id);

      res.render('tasks.ejs', { tasks })
    } catch (error) {
      next(error);
    }
  },
  get_for_student: async (req, res, next) => {
  try {
    const { group_id } = req.cookies

    const tasks = await model.all_tasks(group_id)
    
    res.json(tasks)
  } catch (error) {
    next(error)
  }
  },
  post: async (req, res, next) => {
    try {
      const { task_title, group_id } = req.body
      await model.add_task(task_title, group_id)

      res.redirect('/group-students')
    } catch (error) {
      next(error)
    }
  },
  delete: async (req, res, next ) => {
    try {
      const { task } = req.body

      await model.deleteTask(task)

      res.redirect('/tasks')
    } catch (error) {
      next(error)
    }
  },
  edit: async (req, res, next) => {
    try {
      const { task_title, task_id } = req.body

      const oldTask = await model.get_single(task_id)

      await model.update_task(
        task_title ? task_title : oldTask.task_title,
        oldTask.group_id,
        task_id
      )

      res.redirect('/tasks')
    } catch (error) {
      next(error)
    }
  }
};
