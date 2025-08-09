import { useState, useRef } from "react"
import { FaArrowLeft } from "react-icons/fa";
import User from "../../assets/logo/user.svg";
import { LuLockKeyhole } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
export const ModalEdit = ({ onClose , onSave }) => {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    const getCurrentUser = users.length ? users[users.length - 1] : {};
    const [photo, setPhoto] = useState(getCurrentUser?.photo || User);
    console.log(photo)
    const fileInputRef = useRef(null)
    const [newName, setNewName] = useState(getCurrentUser.Username || "")
    const [newEmail, setNewEmail] = useState(getCurrentUser.email || "")
    const [newPassword, setNewPassword] = useState(getCurrentUser.password || "")

    const handleButtonClick = () => {
        fileInputRef.current.click()
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Data = reader.result;
                setPhoto(base64Data);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleModalClose = () => {
        onClose()
    }
    const handleName = (e) => {
        setNewName(e.target.value)
    }
    const handleEmail = (e) => {
        setNewEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setNewPassword(e.target.value)
    }
    const handleSave = () => {
        const objNewInfo = {
            Username: newName,
            email: newEmail,
            password: newPassword,
            photo: photo
        }
        localStorage.setItem("currentUser", JSON.stringify(objNewInfo))
        let users = JSON.parse(localStorage.getItem("Users")) || [];
        if (users.length) {
            users[users.length - 1] = objNewInfo;
            localStorage.setItem("Users", JSON.stringify(users));
        }
        onClose()
        onSave()
    }
    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={handleModalClose} style={{ background: "none", border: "none" }}>
                    <FaArrowLeft className="arrow" />
                </button>
                <form className="form-modal-edit">
                    <button type="button" onClick={handleButtonClick} className="avatar">
                        <img
                            src={photo}
                            alt="user-icon"
                        />
                    </button>
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                    <label >
                        <span className="label-text">
                            Username <FaUser />
                        </span>
                        <input type="text" placeholder="Username" value={newName} onChange={handleName} className="inputEditForm" />
                    </label>
                    <label>
                        <span className="label-text">
                            Email <FaEnvelope />
                        </span>
                        <input type="email" placeholder="Email" value={newEmail} onChange={handleEmail} className="inputEditForm" />
                    </label>
                    <label>
                        <span className="label-text">
                            Password
                            <LuLockKeyhole />
                        </span>
                        <input type="password" placeholder="Password" value={newPassword} onChange={handlePassword} className="inputEditForm" />
                    </label>
                    <button type="button" onClick={handleSave} className="buttonSave">Save</button>
                </form>
            </div>
        </div>
    )
}