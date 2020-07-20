import React from "react";
import styles from './users.module.css'
import * as Axios from "axios";
import userPhoto from '../../assets/img/img.jpg'
let Users = (props) => {

    if (props.users.length === 0) {

        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            props.setUsers(Response.data.items);
        });

    };

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={ u.photos.small != null ? u.photos.small: userPhoto} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Удалить</button> : <button onClick={() => { props.follow(u.id) }}>Добавить</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>

}

export default Users;