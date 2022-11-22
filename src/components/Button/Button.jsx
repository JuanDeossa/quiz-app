
import { useNavigate } from 'react-router-dom';
import './style/index.css';

export const Button = (props) => {
    const navigate=useNavigate()
    const {text,route}=props
    const handleRoute=(hash)=>navigate(hash)
    return (
        <button onClick={()=>handleRoute(route)}>{text||"DefaultText"}</button>
    );
};

