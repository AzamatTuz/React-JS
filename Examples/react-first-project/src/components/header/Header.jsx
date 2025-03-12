import Authorization from "./Authorization";
import HeaderButtons from "./HeaderButtons";
import "../../header-style.css"

export default function Header() {
    return (
        <header>
            
            <img src="https://images-platform.99static.com//G_EoV7sLu5ijOcIAV69N7HfiDAs=/217x224:1790x1797/fit-in/500x500/99designs-contests-attachments/134/134641/attachment_134641168" alt="" className="logo" />

            <HeaderButtons />

            <Authorization />
        </header>
    );
}