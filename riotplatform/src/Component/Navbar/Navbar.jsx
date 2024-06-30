import style from './Navbar.module.css'
const Navbar = () => {
    return<>
    <ul className={style.bot}>
        <li>About
            <ul>
                <li className={style.shift}>Management Team</li>
            </ul>
        </li>
        <li>Bitcoin Mining</li>
        <li>ESS Metron</li>
        <li>Investor Relations
            <ul className={style.move}>
                <li>Overview</li>
                <li>News & Events</li>
                <li>Presentations</li>
                <li>Analyst Coverage</li>
                <li>Company Info</li>
                <li>Financial Info</li>
                <li>Stock Data</li>
                <li>All SEC Filings</li>
                <li>Governance</li>
            </ul>
        </li>
        <li>Careers
            <ul className={style.mat}>
                <li>Riot Rookie</li>
            </ul>
        </li>
        <li>Contact Us</li>
    </ul>
    </>
}
export default Navbar