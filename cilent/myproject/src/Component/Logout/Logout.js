import {React,useEffect} from 'react';
import {useHistory} from 'react-router';
import { NavLink } from 'react-router-dom';

const Logout1 = () => {
    const history = useHistory();
    const logout = async () => {
        try {
            const res = await fetch('/logout',{
                method : 'GET',
                headers : {
                    Accept : "application/json",
                    "Content-Type"  : "application/json",
                },
                credentials : "include"
            });

            if(res.status === 401 || !res){
                window.alert('Please logout later');
            }
            else{
                history.push('/About');
                window.alert('User has been Logout');
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        logout();
    },[]);
  return (
    <div></div>
  )
}

export default Logout1;