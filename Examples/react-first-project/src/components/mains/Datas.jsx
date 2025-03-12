
import  {skills}  from "../../data"

export default function Datas() {

    const skillsDisplay = skills.map((skill) => 
        <article className="skillCards" key={skill.id}>
                <img src={skill.image} alt="null" />
                <h1>{skill.title}</h1>
                <p>{skill.description}</p>
                <button className="readeMore">Read More</button>
        </article>
    )

    return (
        <section className="dataSection">
            {skillsDisplay}
        </section>
    )
}