import './Photography.css'
import gallery1 from "./images/gallery-1/image (1).jpg"
import gallery2 from "./images/gallery-2/image (10).jpg"
import gallery3 from "./images/gallery-3/image (11).jpg"
import gallery4 from "./images/gallery-4/image (8).jpg"



const Photography = ({onPopupOpen}) => {

    function handleOpenGallery(galleryName) {
        onPopupOpen(galleryName)
      }

    return ( <>
    <div className='Photography'>
        <div className='content'>
            <h1>Photography</h1>
            <p>One of the thing that I am the most greatful for is having the opportunity to
                travel for work. Here are my latest photos taken in some of the biggest cities in the world.</p>
            
            <div className='gallery'>
                <div className='gallery-entry'>
                    <img src={gallery1} alt=''/>
                    <div className='gallery-overlay'></div>
                    <h2 className="gallery-name">Gallery1</h2>
                    <button onClick={() => handleOpenGallery('gallery-1')}></button>
                </div>

                <div className='gallery-entry'>
                    <img src={gallery2} alt=''/>
                    <div className='gallery-overlay'></div>
                    <h2 className="gallery-name">Gallery2</h2>
                    <button onClick={() => handleOpenGallery('gallery-2')}></button>
                </div>

                <div className='gallery-entry'>
                    <img src={gallery3} alt=''/>
                    <div className='gallery-overlay'></div>
                    <h2 className="gallery-name">Barcelona</h2>
                    <button onClick={() => handleOpenGallery('gallery-3')}></button>
                </div>

                <div className='gallery-entry'>
                    <img src={gallery4} alt=''/>
                    <div className='gallery-overlay'></div>
                    <h2 className='gallery-name'>Gallery4</h2>
                    <button onClick={() => handleOpenGallery('gallery-4')}></button>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Photography;
