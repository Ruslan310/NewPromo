import React, {useEffect, useState} from 'react';
import MainMenu from "./component/MainMenu";
import Title from "./component/Title";
import Loader from "./component/loader";

const App = () => {
    const [isAuth, setAuth] = useState(false)
    const authCheck = async () => {
        let userToken = localStorage.getItem('currentUserToken');
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken,
            }
        }

        if (userToken) {
            let result = await fetch(`${process.env.REACT_APP_USER_API}/checkRight/${process.env.REACT_APP_ID}`, options)
                .then( res => {
                    if (res.status !== 200) return false
                    return res.json()
                } )
            if (!result) {
                localStorage.clear()
                window.location.href = process.env.REACT_APP_AUTH
                return null
            }
            setAuth(true)
        } else {
            localStorage.clear()
            window.location.href = process.env.REACT_APP_AUTH
        }
    }
    useEffect(() => {
        authCheck()
            .then(null)
    }, [])// eslint-disable-line

    if (isAuth) {
        return (
            <div>
                <Title />
                <MainMenu/>
            </div>
        );
    } else {
        return (
            <div>
                <Loader />
            </div>
        )
    }
};

export default App;
