<template>
  <v-container class="propo" grid-list-xs >
    <v-row>
      <v-col imgalign="center">
        <h1 class="h"><v-icon color="indigo lighten-3" class="mr-2"></v-icon>Nos Activités</h1>
        <v-divider></v-divider>

        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :width="800" :height="520">
        <slide :index="0">
          <figure>
          <img  class="imgg" src="../assets/ESD pictures_page-0001.jpg">
          <div class="text-block">
            <p>Nous proposons une démarche globale de gestion de l’évènement allant de la création de charte graphique jusqu’au Reporting Post-Event, passant par les différents aménagements.</p>
          </div>
          </figure>
        </slide>
        <slide :index="1">
          <img src="../assets/ESD pictures_page-0002.jpg">
          <div class="text-block">
            <p>Nous proposons une nouvelle démarche d’aménagement de stands sur la base de matières nobles a forte capacité de personnalisation.</p>
          </div>
        </slide>
        <slide :index="2">
          <img src="../assets/ESD pictures_page-0003.jpg">
          <div class="text-block">
            <p>Entre Hardware et Software..., entre machines et applications..., nous vous donnons accès à un ensemble de solutions capable de moderniser votre communication.</p>
          </div>
        </slide>
        <slide :index="3">
          <img src="../assets/ESD pictures_page-0004.jpg">
          <div class="text-block">
            <p>Les tests à chaud ou à froid n’ont jamais été aussi ludiques et faciles à réaliser ; Quizzbox est la solution de boitiers de vote interactifs qui vous facilite ce processus.</p>
          </div>
        </slide>
      </carousel-3d>
      </v-col>
    </v-row>
    <v-row >
      <div class="container">
        
      <center>
      <h1 class="h"><v-icon color="indigo lighten-3" class="mr-2"></v-icon>Notre Team</h1>
        <v-divider></v-divider>
        </center>
    <section id="team" class="team">

      <div class="container" >
        <div class="row gy-4">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="member-img">
                <img src="../assets/Sadki2.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Abderrahim Sadki</h4>
                <span>DIRECTEUR GÉNÉRAL</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="member-img">
                <img src="khalil.jfif" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Khalil Sibari</h4>
                <span>DIRECTEUR DES OPÉRATIONS</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="member-img">
                <img src="../assets/0.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Salma Raki</h4>
                <span>ADMINSTRATION ET FINANCE</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/ismail.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Ismail Assahla</h4>
                <span>3D/RESPONSABLE TECHNIQUE</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/sara.jpeg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sara Kenas</h4>
                <span>PUBLIC RELATIONS</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/sarahan.jpeg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sara ElHankori</h4>
                <span>2D GRAPHIC DESIGNER</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/chouaib.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Chouaib Badra</h4>
                <span>3D / VIDEOGRAPH</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/saad.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Saad Aboubzou</h4>
                <span>DÉVELOPPEUR WEB</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/user.webp" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Adil Berkia</h4>
                <span>AGENT SUPPORT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
      </div>
    </v-row>
    <v-row class="mt-5">
    </v-row>
    </v-container>
</template>
<script>



export default {
  
    components:{

    },
    

}
</script>
<style >
.text-block {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}v

.imgg{
  margin-top: -13px;
}
.propo{
    text-align: center;
}
/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team {
  background: #fff;
  padding: 80px ;
}

.team .member {
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  width: 200px;
}

.team .member .member-img {
  position: relative;
  overflow: hidden;
}

.team .member .member-img:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
/*  background: url(../assets/team-shape.svg) no-repeat center bottom;*/
  background-size: contain;
  z-index: 1;
}

.team .member .social {
  position: absolute;
  right: -100%;
  top: 30px;
  opacity: 0;
  border-radius: 4px;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
}

.team .member .social a {
  transition: color 0.3s;
  color: rgba(1, 41, 112, 0.5);
  margin: 15px 12px;
  display: block;
  line-height: 0;
  text-align: center;
}

.team .member .social a:hover {
  color: rgba(1, 41, 112, 0.8);
}

.team .member .social i {
  font-size: 18px;
}

.team .member .member-info {
  padding: 10px 15px 20px 15px;
}

.team .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #012970;
}

.team .member .member-info span {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #aaaaaa;
}

.team .member .member-info p {
  font-style: italic;
  font-size: 14px;
  padding-top: 15px;
  line-height: 26px;
  color: #5e5e5e;
}

.team .member:hover {
  transform: scale(1.08);
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}

.team .member:hover .social {
  right: 8px;
  opacity: 1;
}

@media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
    .textPropo{
        font-size: 4vw;
    }
}

/* Landscape phones and down */
@media (max-width: 480px) {
 
 /* #navbarSupportedContent{
    background-color:black
  }*/

}
</style>