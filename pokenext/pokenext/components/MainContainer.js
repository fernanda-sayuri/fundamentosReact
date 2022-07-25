import Navbar from "../components/Navbar";

export default function MainContainer({children}) {
    return (
        <div>
            <Navbar />
            <div>
                 {children}
            </div>
        </div>
    )
}