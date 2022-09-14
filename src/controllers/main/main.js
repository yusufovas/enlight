const model = require('../queires/main')


module.exports = {
    get: async (_, res, next) => {
        try {
            const all = await model.get_all()

            res.render('index.ejs', { all })
        } catch (error) {
            next(error)
        }
    }
}