import { motion } from "framer-motion";
//thx cnrad
export const GitHubButton = () => {
    return (
        <motion.a
            href="https://github.com/SamomenX"
            target="_blank"
            className="px-6 py-2 bg-indigo-600 hover:bg-gray-800 text-white text-lg font-normal flex items-center justify-center rounded-md mt-7"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
        >
            GitHub
        </motion.a>
    );
};

export const TwitterButton = () => {
    return (
        <motion.a
            href="https://twitter.com/samomenx"
            target="_blank"
            className="px-6 py-2 bg-indigo-600 hover:bg-sky-700 text-white text-lg font-normal flex items-center justify-center rounded-md mt-7"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
        >
            Twitter
        </motion.a>
    );
};

export const MailButton = () => {
    return (
        <motion.a
            href="mailto:uwu@red-panda.ninja"
            target="_blank"
            className="px-6 py-2 bg-indigo-600 hover:bg-purple-400 text-white text-lg font-normal flex items-center justify-center rounded-md mt-7"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
        >
            Mail
        </motion.a>
    );
};


export const PrivacyGuideX = () => {
    return (
        <motion.a
            href="https://privacy.red-panda.ninja/docs/intro"
            target="_blank"
            className="px-6 py-2 bg-indigo-600 hover:bg-blue-800 text-white text-lg font-normal flex items-center justify-center rounded-md mt-7"
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.9 }}
        >
            PGX
        </motion.a>
    );
};