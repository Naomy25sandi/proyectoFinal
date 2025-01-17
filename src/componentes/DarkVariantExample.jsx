import Carousel from 'react-bootstrap/Carousel';
// creacion de mi componente Navbar
function DarkVariantExample() {
    return (
        <div className='container'>
        <Carousel >
            <Carousel.Item  >
                <img 
                  
                    width={"400px"}
                    src="src\assets\bouquet.jpeg"
                    alt="Bouquet"
                />
                <Carousel.Caption>
                    <h5>Bouquet</h5>
                    <p>Hermoso Bouquet Vintage palo de rosa</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    width={"400px"}
                    src="src\assets\centrodemesa.jpeg"
                    alt="Centro de  mesa principal"
                />
                <Carousel.Caption>
                    <h5>Centro de mesa principal</h5>
                    <p>Tonalidades pasteles </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    width={"400px"}
                    src="src\assets\centrodemesa2.jpeg"
                    alt="Centro de mesa"
                />
                <Carousel.Caption>
                    <h5>Centro de mesa alto</h5>
                    <p>
                       Tonalidades pasteles
                    </p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default DarkVariantExample;