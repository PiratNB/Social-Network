import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from "../../redux/users-reduser";
import * as Axios from "axios";
import Users from "./users";
import Loader from "../common/loader/loader";

class UsersСontainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
            this.props.toggleIsFetching(false);   
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsersCount(Response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(Response.data.items);
        });
    }

    render() {
        return <>
        { this.props.isFetching ? <Loader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNamber) => {
            dispatch(setCurrentPageAC(pageNamber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (IsFatching) => {
            dispatch(toggleIsFetchingAC (IsFatching));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersСontainer);
export default UsersContainer;