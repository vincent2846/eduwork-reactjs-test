import React from "react";
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';


export default  class Porto extends React.Component{


    render (){
        return(
            <div>
                
                <section id="mainsection">
                    <nav>
                        <a href="#" class="logo">Vincent Novianto</a>
                    </nav>


                    <div class="text-container">
                        <p>Helloo</p>
                        <p>I'm Vincent Novianto</p>
                        <p>Computer Science</p>

                    </div>

                </section>


                <div class="about-container">
    
                    {/* <image src="./assets/Foto profil.jfif" alt=""> */}
                    <img src="assets/Foto profil.jfif" />
                    <div class="about-text-container">
                        <p>About Me</p>
                        <p>Computer Science</p>
                        <p>Hello, my name is Vincent Novianto. I am currently studying at Bina Nusantara University.</p>
                        <p>I would like to learn something new to improve my skills and knowledge, especially at coding. I'm not really good at communication and I'm still learning about it. I can easily understand something new and I am a fast learner.</p>
                    


            
                    </div>
                </div>



                <main id="main">

                    
                    <section id="skills" class="skills section-bg">
                        <div class="container">
                
                        <div class="section-title">
                            <h2>Skills</h2>

                        </div>
                
                        <div class="row skills-content">
                
                            <div class="col-lg-6" data-aos="fade-up">
                
                            <div class="progress">
                                <span class="skill">HTML <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                
                            <div class="progress">
                                <span class="skill">CSS <i class="val">80%</i></span>
                                <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                
                            <div class="progress">
                                <span class="skill">Java <i class="val">75%</i></span>
                                <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">SQL <i class="val">80%</i></span>
                                <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                
                            </div>
                
                            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                
                            <div class="progress">
                                <span class="skill">C Language <i class="val">77%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                
                            <div class="progress">
                                <span class="skill">Figma<i class="val">85%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                
                            <div class="progress">
                                <span class="skill">Photoshop <i class="val">65%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div class="progress">
                                <span class="skill">Android Studio <i class="val">65%</i></span>
                                <div class="progress-bar-wrap">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                
                            </div>
                
                        </div>
                
                        </div>
                    </section>
                        
                   
                    <div class="porto-title">
                        <h2>Portofolio</h2>
                    </div>

                    <div class="porto">
                        
                        
                        <a href="https://vincentnovianto.github.io/YBIKEProject/">
                            <div class="card">
                                <div class="card-image" id="cardimg1"></div>
                                <div class="card-text">
                                <h2>YBike Project</h2>
                                <p>YBike is motorcycle shop that sold popular brand motorcycle.</p>
                                </div>
                
                                <div class="style">
                                    <button class="box-1">HTML</button>
                                    <button class="box-2">CSS</button>
                                </div>
                                
                
                            </div>
                        </a>
                     
                        <a href="https://www.figma.com/proto/ivoMAI9TBt59sjomwCwL5G/prototyping-HCI?page-id=0%3A1&node-id=2%3A850&viewport=241%2C48%2C0.26&scaling=min-zoom&starting-point-node-id=2%3A850" >
                            <div class="card">
                                <div class="card-image" id="cardimg2"></div>
                                <div class="card-text">
                                <h2>PWNI</h2>
                                <p>PWNI was application that can send data into company server and only can be used by company member</p>
                                </div>
                
                                <div class="style">
                                    <button class="box-1">Figma</button>
                                </div>
                                
                
                            </div>
                        </a>


                        <a href="https://www.figma.com/proto/nTPdc1WZTf8Ma1G4UFFwLk/Warga-Negara-Indonesia?page-id=0%3A1&node-id=36%3A340&viewport=241%2C48%2C0.21&scaling=min-zoom&starting-point-node-id=36%3A340">
                            <div class="card">
                                <div class="card-image" id="cardimg3"></div>
                                <div class="card-text">
                                    <h2>WNI Helper</h2>
                                    <p>WNI Helper was website that used to help Indonesia people from other country to help in teaching subjects that students do not understand</p>
                                </div>
                
                                <div class="style">
                                    <button class="box-1">Figma</button>
                                </div>
                                
                
                            </div>
                        </a> 
                            

                        

                    </div> 

                </main>



                <script src="./js/script"></script>

            </div>

            
        )
    }
}

