import { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <footer class="bg-light text-center fixed-bottom">
        <div class="container pt-4">
          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div class="col-md-5 col-12">
                  <div class="form-outline mb-4">
                    <input type="email" class="form-control" placeholder={this.props.placeholder} />
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div class="text-center p-3">
          © 2023 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
