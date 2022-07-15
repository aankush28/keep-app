const express = require('express')
const {registerUser, authUsers,updateUserProfile} = require('../controller/userController')
const { protect } = require('../middleware/authmiddlewere')
const router = express.Router()
router.route('/').post(registerUser)
router.route('/login').post(authUsers)
router.route('/profile').post(protect,updateUserProfile) 

module.exports = router