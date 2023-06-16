import { Outlet } from "react-router-dom";

const Content = () => {
    return (
        <>
            <h3>Content</h3>
            <Outlet />
        </>
    )
}

export default Content;