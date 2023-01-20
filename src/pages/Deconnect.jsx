const Deconnect = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
};
export default Deconnect;