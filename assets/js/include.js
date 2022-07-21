class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        
        <header class="shadow bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://shobjigram.com/">
                    <img src="assets/img/shobjigram.png" alt="" width="80" height="80">
                </a>
    
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 telegraph_rg fw-bold" >
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="https://shobjigram.com/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://shobjigram.com/about_us.html">About Us</a>
                  </li>
                  
                </ul> 
    
                  <a class="btn btn-outline-success" href="https://shobjigram.com/partner_with_us.html">
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
            <h4 class="telegraph_rg">Company Contact Information</h4>
              <div class="mt-4 telegraph_ul">
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
          <div class="col-lg-4  mt-lg-0 mt-md-0 mt-sm-3 mt-3">
          <h4 class="text-center telegraph_rg">Quick Links</h4>
              <div class="mt-4">
                <ul class="telegraph_ul">
                  <li class="list-group-item footer-quick-links">
                    <a href="https://shobjigram.com/" class="link-dark text-decoration-none">Home</a>
                  </li>
                  <li class="list-group-item footer-quick-links">
                    <a href="https://shobjigram.com/about_us.html" class="link-dark text-decoration-none">About Us</a>
                  </li>
                  <li class="list-group-item footer-quick-links">
                    <a href="https://shobjigram.com/partner_with_us.html" class="link-dark text-decoration-none">Partner With Us</a>
                  </li>
                  
                </ul>
              </div>
          </div>
          <div class="col-lg-4">
              <h4 class="text-center telegraph_rg">Social Links</h4>
              <div class="mt-4 d-flex justify-content-around">
                <a href="https://www.facebook.com/shobjigram/" class=" text-decoration-none link-light">
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
              <a href="https://www.youtube.com/channel/UCW75s_FxA6MnTy43YEQH_eQ" class="text-decoration-none link-light">
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