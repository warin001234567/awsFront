import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Navbar />
        <style jsx global>{`
            body {
                background-color: black;
            }
        `}</style>
    </div>
)

export default Layout