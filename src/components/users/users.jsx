import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/img/img.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    
    return <div>
        <div className={styles.point}>
            {pages.map(p => {
                return <span onClick={(evt) => { props.onPageChanged(p); }} className={props.currentPage === p ? styles.selectedPage : ""}> {p} </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img alt="Avatar" src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
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