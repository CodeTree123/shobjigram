class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        
        <header class="shadow bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/img/shobjigram.png" alt="" width="80" height="80">
                </a>
    
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about_us.html">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li> 
                </ul> 
    
                  <a class="btn btn-outline-success" href="partner_with_us.html">
                    Partner With Us
                 </a>
    
              </div>
            </div>
          </nav>
    </header>`
    }
}

customElements.define('my-header',MyHeader)

// Footer Element
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer class="   py-5 px-5">
        <div class="row ">
          <div class="col-lg-4">
            <h4>Company Contact Information</h4>
              <div class="mt-4">
                <p class="m-0">
                  <span class="fw-bold">ShobjiGram</span> 
                   is a concern of Eureka Group
                </p> 
                <p class="m-1 d-flex">
                  <i class="fa-solid fa-address-card pe-3"></i>
                  <span>
                  17/1 Bir Uttam Ziaur Rahman Rd, Dhaka 1215 
                  </span>
                </p>
                <p class="m-1">
                  <i class="fa-solid fa-phone pe-3"></i>
                  +88 01744811223
                </p>
                <p class="m-1">
                  <i class="fa-solid fa-link pe-3"></i>
                  www.shobjigram.com
                </p>
                <p class="m-1">
                  <i class="fa-solid fa-envelope pe-3"></i>
                  gramshobji@gmail.com
                </p> 
              </div>
          </div>
          <div class="col-lg-4">
              <h4>Quick Links</h4>
              <div class="mt-4">
                <ul>
                  <li class="list-group-item footer-quick-links">
                    <a href="index.html" class="link-dark text-decoration-none">Home</a>
                  </li>
                  <li class="list-group-item footer-quick-links">
                    <a href="about_us.html" class="link-dark text-decoration-none">About Us</a>
                  </li>
                  <li class="list-group-item footer-quick-links">
                    <a href="partner_with_us.html" class="link-dark text-decoration-none">Partner With Us</a>
                  </li>
                  
                </ul>
              </div>
          </div>
          <div class="col-lg-4">
              <h4>Quick Links</h4>
              <div class="mt-4 d-flex justify-content-around">
                <a href="www.facebook.com" class=" text-decoration-none link-light">
                 <div class="social-border rounded p-2">
                    <i class="fa-brands fa-facebook-f fa-xl"></i>
                 </div>
                </a>
                <a href="www.twitter.com" class="text-decoration-none link-light">
                 <div class="social-border rounded p-2">
                  <i class="fa-brands fa-twitter  fa-xl"></i>
                </div>
              </a>
              <a href="www.instagram.com" class="text-decoration-none link-light">
                 <div class="social-border rounded p-2">
                  <i class="fa-brands fa-instagram  fa-xl"></i>
                </div>
              </a>
              <a href="www.youtube.com" class="text-decoration-none link-light">
                 <div class="social-border rounded p-2">
                  <i class="fa-brands fa-youtube  fa-xl"></i>
                </div>
              </a>
              </div>
          </div>
        
        </div>
      
      </footer>
      `
    }
}

customElements.define('my-footer',MyFooter)