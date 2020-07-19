import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
         [
            {
                id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp--3Vi2GrynzFGgTKgFPQ5V-qKDDcaPMJTg&usqp=CAU',
                followed: true, fullName: 'Alexey', status: 'hello world', location: { city: 'Irkutsk', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp--3Vi2GrynzFGgTKgFPQ5V-qKDDcaPMJTg&usqp=CAU',
                followed: true, fullName: 'Ivan', status: 'hello world', location: { city: 'Irkutsk', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSp--3Vi2GrynzFGgTKgFPQ5V-qKDDcaPMJTg&usqp=CAU',
                followed: false, fullName: 'Dmitriy', status: 'hello world', location: { city: 'Moskow', country: 'Russia' }
            }
          ]
        )
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Удалить</button> : <button onClick={() => { props.follow(u.id) }}>Добавить</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>

}

export default Users;