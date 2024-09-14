import Navbar from "./Navbar";

function WithNavbar({ component: Component }) {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <Component />
            </div>
        </div>
    );
}

export default WithNavbar;