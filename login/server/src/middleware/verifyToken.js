const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req?.headers?.authentication
    // console.log(token)

    if (!token) {
        return res.status(200).json({
            err: 1,
            msg: 'Chua dang nhap '
        })
    }
    jwt.verify(token, 'xVanAn', (err, decode) => {
        if (err) {
            return res.status(200).json({
                err: 2,
                msg: 'Token khong hop le '
            })
        }
        req.currentUser = decode
        next()
    })
}
module.exports = verifyToken