import { NavLink } from "react-router-dom";

const Header = () => {

    const items = [
        { path: '/', title: 'Home' },
        { path: '/about-me', title: 'About Me' },
        { path: '/contact-me', title: 'Contact Me' },
    ];

    return (
        <>
            <h3>Header</h3>
            <div className="d-flex gap-3">
                {
                    items.map((item, i) => (
                        <NavLink key={i} to={item.path}>{item.title}</NavLink>
                    ))
                }
            </div>
        </>
    )
}

export default Header;