import "../App.css"

export default function Button({isActive, onClicked, children }) {
    return (
        <div>
            <button className={isActive ? 'button active' : 'button'} onClick={onClicked}>{children}</button>
        </div>
    );
}