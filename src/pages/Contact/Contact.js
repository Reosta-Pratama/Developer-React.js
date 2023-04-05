import React from 'react'
import '../../components/Banner/BannerMap.css'
import ContactComponent from '../../components/Contact/Contact'

const Contact = () => {
    return (
        <div className='main-container'>
            <section className="banner-map">
                <div className="container">
                    <div className="map">
                        <iframe
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.90046813488834!2d106.76798992576181!3d-6.2098636348523275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f728614f4d1d%3A0xbbe1921db129ecb7!2sJl.%20Cemp.%20No.43%2C%20RT.5%2FRW.1%2C%20Klp.%20Dua%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011550!5e0!3m2!1sid!2sid!4v1665467882299!5m2!1sid!2sid"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>

            <ContactComponent></ContactComponent>
        </div>
    )
}

export default Contact