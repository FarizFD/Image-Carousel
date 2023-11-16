import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

const ImageCarousel = () => {

    const imageUrls = [

        'https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg',
        'https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg',
        'https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg',
        'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg',
        'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg',
        'https://farm2.staticflickr.com/1090/4595137268_0e3f2b9aa7_z_d.jpg',
        'https://farm4.staticflickr.com/3224/3081748027_0ee3d59fea_z_d.jpg',
        'https://farm8.staticflickr.com/7377/9359257263_81b080a039_z_d.jpg',
        'https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg',
        'https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg',
        'https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg',
        'https://farm6.staticflickr.com/5590/14821526429_5c6ea60405_z_d.jpg',
        ' https://farm3.staticflickr.com/2378/2178054924_423324aac8.jpg',
        'https://farm4.staticflickr.com/3075/3168662394_7d7103de7d_z_d.jpg',
        'https://farm1.staticflickr.com/49/157534104_95ca4e0ae6.jpg ',
        'https://farm4.staticflickr.com/3319/3211138044_9232086442.jpg',
        'https://farm4.staticflickr.com/3049/2327691528_f060ee2d1f.jpg',
        'https://farm3.staticflickr.com/2042/2203964933_f1b80a18ba.jpg'
    ]



    const [imageCount, setImageCount] = useState(0)

    const handleLeft = () => {

        setImageCount((index) => (index === 0 ? imageUrls.length - 1 : index - 1))
    };

    const handleRight = () => {
        setImageCount((index) => (index === imageUrls.length - 1 ? 0 : index + 1))
    }
    return (
        <>
            <Container >
                <div className='display-4 fst-italic' style={{ marginLeft: '35%' }}>ImageCarousel</div>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <i className="bi bi-caret-left-fill bi-xl" style={{ fontSize: '3rem' }} onClick={() => handleLeft()}></i>
                    <img className='w-80 h-50' src={imageUrls[imageCount]} alt={` ${imageCount + 1}`} />
                    <i className="bi bi-caret-right-fill bi-xl" style={{ fontSize: '3rem' }} onClick={() => handleRight()}></i>
                </div>
            </Container>
        </>
    )
}

export default ImageCarousel


