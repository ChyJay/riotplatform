import style from './Section.module.css'
const Section = () => {
    return(
        <section>
            <h1 className={style.part}>Demonstrating the value of Bitcoin</h1>
            <p className={style.text}>Bitcoin creates new value opportunities through the convergence of money and energy,<br></br>
                 radically transforming energy grids and driving new power generation capacity.</p>
              
        </section>
    )
}

export default Section