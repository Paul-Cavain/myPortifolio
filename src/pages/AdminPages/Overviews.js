import Header from "../../components/Admin/Header";

const Overviews = ({ collapsed }) => {
    return(
        <main>
            <nav>
                <Header collapsed={collapsed} />
            </nav>
        </main>
    )
}
export default Overviews;