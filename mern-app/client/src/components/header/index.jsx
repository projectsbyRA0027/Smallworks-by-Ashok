import {Link} from "react-router-dom";
import "./styles.module.css";

export default function Header(){
    return(
        <div className="{classes.header}">
            <h3>Mern Stack Blog Application</h3>
            <ul>
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <Link to={"/add-blog"}>
                  <li>Add Blog</li>
                </Link>
            </ul>
        </div>
    );
}