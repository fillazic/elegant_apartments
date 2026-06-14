import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stanovi from './NamesteniStanovi';
import izgradnja from './Stanovi';
import './Apartmani.css';

function Apartmani () {

const [povrsina, setPovrsina] = useState(null);

const images= ["images2/apartman2.jpg", "images/stan9.jpg", "images/stan10.jpg","images/stan11.jpg", "images/bazen.jpg"];
const [detalj, setDetalj] = useState(null);
const [activeSlide, setActiveSlide] = useState(0);

 const filteredIzgradnja = izgradnja.filter(stan => {
        if (povrsina === 30) {
            return stan.povrsina <= 30;
        } else if (povrsina === 40) {
            return stan.povrsina >= 20 && stan.povrsina <= 40;
        } else if (povrsina === 60) {
            return stan.povrsina >= 40 && stan.povrsina <= 60;
        } else {
            return true; // Show all items if no filter is selected
        }
    });

const handleSlideChange = (next) => {
        setActiveSlide(next); 
    };


useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

return (
    <div className='elegant-apartmani'>
         <div className='apartmani-vrnjacka-banja'>
                        <img
                            src="images2/apartman2.jpg"
                            alt={'draskovic'}
                            className="image-slider-apartmani"
                        />
            </div>
            <div className='prodaja-apartmana'>
            <p>
                Namešteni stanovi
                <br/>
                Stanovi u izgradnji
            </p>         
        </div>
         <h3 className='vrnjacka-banja-apartmani'>Namešteni apartmani</h3>

        <div className='apart'>
         {stanovi.map((stan, index) => (
            <div className='namesteni-apartmani'>
                <div className='kraljevski-apartman'>
                    <div>
                        <img src={stan.slike[0]}/>
                    </div>
                </div>
                <div className='opis'>
                        <h3>{stan.naslov}</h3>
                        <p>Kvadratura: {stan.povrsina}m2</p>
                        <p>Sprat: {stan.sprat}</p>
                        <Link to={`/${index}`} className='link' ><p className='pregled'>Detaljnije</p></Link>
                </div>
            </div>
         ))}
         </div>
         <div className="line-container">E</div>
        <h3 className='elegant-apartmani-u-izgradnji'>Stanovi u izgradnji</h3>
        <div>
                <div className='selected-container'>                    
                        <select name="type" type='text' id="selected-items"  >
                                <option value="" >Svi spratovi</option>
                                <option value="4">četvrti sprat</option>
                                <option value="5">peti sprat</option>
                                <option value="6">šesti sprat</option>                             
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
                    <div className='selected-container'>                    
                        <select name="type" type='text' id="selected-items" value={povrsina} onChange={(e) => setPovrsina(parseInt(e.target.value))} >
                                <option value="" >Sve kvadrature</option>
                                <option value="30">do 30m2</option>
                                <option value="40">20 - 40m2</option>
                                <option value="60">40 - 60m2</option>                         
                        </select>
                        <div className='icon'>
                            <i className='fa fa-caret-down' ></i>
                        </div>
                    </div>
        </div>
            <div className='apart2'>
            {filteredIzgradnja.map((stan, index) => (
                <div className='apartmani-u-izgradnji'>
                    <div className='sema'>                  
                        <div>
                            <img src={stan.slike} />
                        </div>
                    </div>
                        <div>
                            <p>Kvadratura: {stan.povrsina}m2</p>
                            <p>Sprat: {stan.sprat}</p>
                        </div>
                        <p className='pregled-izgradnje' onClick={() => setDetalj(stan.slike)}>Detaljnije</p>
                </div>
                ))}
            </div>

            <div className={ detalj !== null ? 'full-img' : 'non-full'}  onClick={() => setDetalj(null)} >
                <div className='detaljnije' onClick={(e) => e.stopPropagation()}>
                    <div className='detalj-pozadina'>
                        <span className="close-button-stan"  onClick={() => setDetalj(null)} >&times;</span>
                        <img src={detalj} className="full-image-stan" alt='stanovi-vrnjacka-banja'/>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Apartmani;