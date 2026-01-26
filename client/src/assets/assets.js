import auth1 from '../assets/auth1_image.jpg'
import auth2 from '../assets/auth2_image.jpg'
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';
import mainbg from '../assets/main_bg.jpg';
import section_1 from '../assets/section_1.jpg';
import section_2 from '../assets/section_2.jpg';
import section_3 from '../assets/section_3.jpg';
import section_4 from '../assets/section_4.jpg';
import Glorious_1 from '../assets/arrivals/Glorious Eyewear_1.jpg';
import Glorious_2 from '../assets/arrivals/Glorious Eyewear_2.jpg';
import National_1 from '../assets/arrivals/National Geographic Tee_1.jpg';
import National_2 from '../assets/arrivals/National Geographic Tee_2.jpg';
import Quilted_1 from '../assets/arrivals/Quilted Crossbody Bag_1.jpg';
import Quilted_3 from '../assets/arrivals/Quilted Crossbody Bag_3.jpg';
import Quilted_2 from '../assets/arrivals/Quilted Crossbody Bag_2.jpg';
import Retro_1 from '../assets/arrivals/Retro Liner Socks_1.jpg';
import Retro_2 from '../assets/arrivals/Retro Liner Socks_2.jpg';
import homeBanner  from '../assets/homebanner.jpg';
import Embroidered_1 from '../assets/FeaturedItems/Embroidered Haring Cap 1.jpg';
import Embroidered_2 from '../assets/FeaturedItems/Embroidered Haring Cap 2.jpg';
import Trainers_1 from '../assets/FeaturedItems/Trainers Multicolored Pieces 1.jpg';
import Trainers_2 from '../assets/FeaturedItems/Trainers Multicolored Pieces 2.jpg';
import collection_1 from '../assets/collection-1.jpg';
import collection_2 from '../assets/collection-2.jpg';
import collection_3 from '../assets/collection-3.jpg';
// import Safecheckout from '../assets/Safecheckout.png';
import iconImage from '../assets/Mikasa_Ackerman.jpg';

export const futueItem = [
        {
          id : 1,
          name : "Embroidered Haring Cap",
          price : [{price : 12.00}],
          images : [
            {normal_img  : Embroidered_1 },
            {hover_img : Embroidered_2}
          ],
          stock : 2
       },
       {
          id : 3,
          name : "Trainers Multicolored Pieces ",
          price : [{price : 146.00}],
          images : [
            {normal_img  : Trainers_1 },
            {hover_img : Trainers_2}
          ],
          stock : 0
       },
       {
          id : 4,
          name : "Quilted Crossbody Bag",
          price : [{price : 21.00},{discount : 25.00}],
          images : [
            {normal_img  : Quilted_1 },
            {hover_img : Quilted_2},
            {full_img : Quilted_3}
          ],
          simple_des : "Qui, explicabo eius nisi fugit repudiandae, quos voluptates, beatae ullam consectetur ducimus itaque! Tempore provident eligendi sed ipsum ea. Reiciendis nulla neque sapiente, totam veritatis non? Odio, quaerat.",
          product_review : [
            {
              image : iconImage,
              starts : 4,
              name : 'woostify',
              date : 'Januart 6, 2020',
              message : 'Awesome! manoj kumat i once start learning coding but that not a going good then he start daling but then she getting marrige by some one else then they ata some good food '
            },
            {
              image : iconImage,
              starts : 4,
              name : 'woostify',
              date : 'Januart 6, 2020',
              message : 'Awesome! manoj kumat i once start learning coding but that not a going good then he start daling but then she getting marrige by some one else then they ata some good food '
            }
          ],
          full_des : "Eum culpa assumenda eligendi fugit laborum vitae odit deleniti illo quasi voluptates, ipsa, placeat, quaerat, omnis nisi. Repellendus reprehenderit temporibus optio, unde enim vel dignissimos! Deleniti sed perferendis quod ratione incidunt, quam illo et, nulla delectus. Qui, explicabo eius nisi fugit repudiandae, quos voluptates, beatae ullam consectetur ducimus itaque! Tempore provident eligendi sed ipsum ea. Reiciendis nulla neque sapiente, totam veritatis non? Odio, quaerat.",
          colors : ["red","blue"],
          Categories : ["Bags","Sales","Sportswear","Women"],
          Tags : ["Fashion","Summer"],
          review : 1,
          star : 4,
          stock : 0
       },
       {
          id : 5,
          name : "Glorious Eyewear",
          price : [{price : 37.00}],
          images : [
            {normal_img  : Glorious_1 },
            {hover_img : Glorious_2}
          ],
          stock : 0
       },
]




export const newArrival = [
       {
          id : 5,
          name : "Glorious Eyewear",
          price : [{price : 37.00}],
          images : [
            {normal_img  : Glorious_1 },
            {hover_img : Glorious_2}
          ],
          stock : 0
       },
       {
          id : 6,
          name : "National Geographic Tee",
          price : [{price : 24.00}],
          images : [
            {normal_img  : National_1 },
            {hover_img : National_2}
          ],
          stock : 23
       },
       {
          id : 7,
          name : "Quilted Crossbody Bag",
          price : [{price : 21.00},{discount : 25.00}],
          images : [
            {normal_img  : Quilted_1 },
            {hover_img : Quilted_2}
          ],
          star : 4,
          stock : 0
          
       },
       {
          id : 8,
          name : "Retro Liner Socks",
          price : [{price : 70.00}],
          images : [
            {normal_img  : Retro_1 },
            {hover_img : Retro_2}
          ],
          star : 5,
          stock : 23
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
  section_4,
  homeBanner,
  collection_1,
  collection_2,
  collection_3
}

// export const detailImage = {
//   Safecheckout
// }

