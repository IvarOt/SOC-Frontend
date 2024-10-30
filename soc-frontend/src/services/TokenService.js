

const getLocalAccesToken = () => {
    const token = localStorage.getItem("site");
    if (token) {
        return token;
    }
}

const UpdateLocalAccesToken = (token) => {
    if (token) {
        localStorage.setItem("site", token);
    }
}

export { getLocalAccesToken, UpdateLocalAccesToken };