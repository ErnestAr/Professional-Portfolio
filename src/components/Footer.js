
import React from 'react'



export default function Footer(props)  {
    return (
        <>
            <section className="contact" id="contact">
                <h2 className="ct-ttl">Contact</h2>
                <div className="ct-cont">
                    <div className="info-list">
                        <div className="sc-link">
                            <h3 className="hv-link nm"><a href="https://github.com/ErnestAr">GitHub</a></h3>
                        </div>
                        <div className="sc-link">
                            <h3 className="hv-link nm"><a href="https://www.linkedin.com/in/ernest-arutiunian-ab5b991a4/">LinkedIn</a></h3>
                        </div>
                        <div className="sc-link">
                            <h3 className="hv-link nm"><a href="">(416)-990-4203</a></h3>
                        </div>
                        <div className="sc-link">
                            <h3 className="hv-link eml"><a href="mailto:arutiunian.ernest@gmail.com">arutiunian.ernest@gmail.com</a></h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
