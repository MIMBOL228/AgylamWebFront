import logoImg from "../assets/logo.svg";
import { IUser } from "../Interfaces/IUser";

interface INavbarParams {
    userInfo: IUser | null;
}

export function NavbarComponent({ userInfo }: INavbarParams) {
    return (
        <div className="nav_wrapper">
            <div className="left_nav">
                <img
                    src={logoImg}
                    alt=""
                    id="nav_logo"
                />
                <nav>
                    <ul>
                        <li className="nav_item active">Расписание</li>
                        <li className="nav_item">Объявления</li>
                        <li className="nav_item">Пользователи</li>
                        <li className="nav_item">Файл</li>
                    </ul>
                </nav>
            </div>
            <div className="right_nav">
                <p className="name">{userInfo?.fio}</p>
                <button id="exit">Выйти</button>
            </div>
        </div>
    );
}
