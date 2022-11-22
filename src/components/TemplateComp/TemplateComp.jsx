
import './style/index.css';

export const TemplateComp = (props) => {
    const {text}=props
    return (
        <p>{text||"DefaultText"}</p>
    );
};

