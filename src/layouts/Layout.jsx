import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Content />
                <Footer />
            </main>
        </>
    )
}

export default Layout;