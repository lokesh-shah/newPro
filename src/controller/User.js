import { User } from "../model/index.js";

export const getUser = async (req, res) => {
    try {
        const getUserData = await User.find();
        return res.status(200).json(getUserData);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const addUserData = async (req, res) => {
    try {
        const { name, email, password, contact } = req.body;

        if (!name || !email || !password || !contact) {
            return res.status(422).json({ error: 'Please fill all mandatory fields....!' })
        }

        try {

            const emailExist = await User.findOne({ email: email });
            if (emailExist) {
                return res.status(422).send({ message: 'Email Alreday Exist' })
            }
            const user = new User({ name, email, password, contact });
            const userRegister = await user.save();
            if (userRegister) {
                return res.status(201).json({ message: 'User Register Successfully...!' });
            }

        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log('error', error)
    }
}