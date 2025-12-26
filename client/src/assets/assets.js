import auth1 from '../assets/auth1_image.jpg'
import auth2 from '../assets/auth2_image.jpg'
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import mainbg from '../assets/main_bg.jpg';
import section_1 from '../assets/section_1.jpg';
import section_2 from '../assets/section_2.jpg';
import section_3 from '../assets/section_3.jpg';
import section_4 from '../assets/section_4.jpg';
import Glorious_1 from '../assets/arrivals/Glorious Eyewear_1.jpg'
import Glorious_2 from '../assets/arrivals/Glorious Eyewear_2.jpg'
import National_1 from '../assets/arrivals/National Geographic Tee_1.jpg'
import National_2 from '../assets/arrivals/National Geographic Tee_2.jpg'
import Quilted_1 from '../assets/arrivals/Quilted Crossbody Bag_1.jpg'
import Quilted_2 from '../assets/arrivals/Quilted Crossbody Bag_2.jpg'
import Retro_1 from '../assets/arrivals/Retro Liner Socks_1.jpg'
import Retro_2 from '../assets/arrivals/Retro Liner Socks_2.jpg'




export const newArrival = [
       {
          name : "Glorious Eyewear",
          price : [{price : 37.00}],
          images : [
            {normal_img  : Glorious_1 },
            {hover_img : Glorious_2}
          ],
          start : 0
       },
       {
          name : "National Geographic Tee",
          price : [{price : 24.00}],
          images : [
            {normal_img  : National_1 },
            {hover_img : National_2}
          ],
          start : 0
       },
       {
          name : "Quilted Crossbody Bag",
          price : [{price : 21.00},{discount : 25.00}],
          images : [
            {normal_img  : Quilted_1 },
            {hover_img : Quilted_2}
          ],
          start : 4
       },
       {
          name : "Retro Liner Socks",
          price : [{price : 70.00}],
          images : [
            {normal_img  : Retro_1 },
            {hover_img : Retro_2}
          ],
          start : 0
       },
]

export const authImage = {
  auth1,
  auth2
};

export const LoginIcon = {
  googleIcon,
  facebookIcon
}

export const mainImages = {
  mainbg,
  section_1,
  section_2,
  section_3,
  section_4
}

