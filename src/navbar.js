import React from 'react';
import {Link} from "react-router-dom";
const Navbar = () =>{
    
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li')
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
            navLinks.forEach((link,index)=>{
                if(link.style.animation){
                    link.style.animation = '';
                }
                else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
                }
             });
             burger.classList.toggle('toggle')
        });
    }
    const renderList = ()=>{
        
          return [
            <ul className="nav-links">
                <li><Link className="active" to='/'><p>Home</p></Link></li>
                <li><Link className="active" to='/Biodegradable_Products'><p>Products</p></Link></li>
                <li><Link className="active" to='/educate'><p>Menustrual Education</p></Link></li>
                {/*<li><Link className="active" to='/join-our-community'><p>Community</p></Link></li>*/}
                <li><Link className="active" to='/earnandbuy'><p>Why Natural Fibre</p></Link></li>
                <li><Link className="active" to='/'><p>About Us</p></Link></li>
                <li><Link className="active" to='/inspire'><p>Wonder Woman</p></Link></li>
                <li><Link className="active" to='/'><p>Hey, Sameera!</p></Link></li>
           </ul>
          ]
       
      }
 
 

    return(
        <div>
            <div className="navbar-fixed">
            <nav>
               
                {renderList()}
                <div className="burger" onClick={()=>navSlide()} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar;