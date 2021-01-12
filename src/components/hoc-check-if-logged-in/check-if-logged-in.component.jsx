import React,{useEffect} from 'react';
import {useDispatch,connect} from 'react-redux';
import {loadAlreadyLoggedinUserStartAsync} from '../../redux/user/user.actions'; 

const CheckIfLoggedIn = (Props) => {
    //console.log(WrappedComponent);
    const dispatch = useDispatch()
    // return class extends React.Component {
    //     constructor(props)
    //     {
    //         super(props);
    //     }
    //     componentDidMount()
    //     {
    //         //loadAlreadyLoggedinUserStartAsync;
    //     }

    //     render(){
    //         return(
    //            <div>

    //            </div>
    //         )
    //     }
    // }
    return (
        <Props />
    )
}

const mapDispatchToProps = dispatch => ({
    checkoggedIn : () => dispatch(loadAlreadyLoggedinUserStartAsync())
})

export default CheckIfLoggedIn;