// Jorrel Tigbayan
// 101329925
import './Name.css';

function Name(props) {
    return (
        <>
            <p className="Name">{props.firstName} {props.lastName}</p>
        </>
    )
}

export default Name