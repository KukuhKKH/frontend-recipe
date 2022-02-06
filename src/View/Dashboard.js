import React from 'react';

export default function Dashboard() {
    return <div className="page-content-wrapper">
                {/* Welcome Toast */}
                <div className="toast toast-autohide custom-toast-1 toast-success home-page-toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay={7000} data-bs-autohide="true">
                    <div className="toast-body">
                    <svg className="bi bi-bookmark-check text-white" width={30} height={30} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                        <path fillRule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                    <div className="toast-text ms-3 me-2">
                        <p className="mb-1 text-white">Welcome to Recipe App!</p><small className="d-block">Click the "Add to Home Screen" button &amp; enjoy it like an app.</small>
                    </div>
                    </div>
                    <button className="btn btn-close btn-close-white position-absolute p-1" type="button" data-bs-dismiss="toast" aria-label="Close" />
                </div>
                {/* Tiny Slider One Wrapper */}
                <div className="tiny-slider-one-wrapper">
                    <div className="tiny-slider-one">
                    {/* Single Hero Slide */}
                    <div>
                        <div className="single-hero-slide bg-overlay" style={{backgroundImage: 'url("/template/img/bg-img/31.jpg")'}}>
                        <div className="h-100 d-flex align-items-center text-center">
                            <div className="container">
                            <h3 className="text-white mb-1">Build with Bootstrap 5</h3>
                            <p className="text-white mb-4">Build fast, responsive sites with Bootstrap.</p><a className="btn btn-creative btn-warning" href="#">Buy Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Single Hero Slide */}
                    <div>
                        <div className="single-hero-slide bg-overlay" style={{backgroundImage: 'url("/template/img/bg-img/33.jpg")'}}>
                        <div className="h-100 d-flex align-items-center text-center">
                            <div className="container">
                            <h3 className="text-white mb-1">Vanilla JavaScript</h3>
                            <p className="text-white mb-4">The whole code is written with vanilla JS.</p><a className="btn btn-creative btn-warning" href="#">Buy Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Single Hero Slide */}
                    <div> 
                        <div className="single-hero-slide bg-overlay" style={{backgroundImage: 'url("/template/img/bg-img/32.jpg")'}}>
                        <div className="h-100 d-flex align-items-center text-center">
                            <div className="container">
                            <h3 className="text-white mb-1">PWA Ready</h3>
                            <p className="text-white mb-4">Click the "Add to Home Screen" button &amp; <br /> enjoy it like an app.</p><a className="btn btn-creative btn-warning" href="#">Buy Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Single Hero Slide */}
                    <div> 
                        <div className="single-hero-slide bg-overlay" style={{backgroundImage: 'url("/template/img/bg-img/33.jpg")'}}>
                        <div className="h-100 d-flex align-items-center text-center">
                            <div className="container">
                            <h3 className="text-white mb-1">Lots of Elements &amp; Pages</h3>
                            <p className="text-white mb-4">Create your website in days, not months.</p><a className="btn btn-creative btn-warning" href="#">Buy Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Single Hero Slide */}
                    <div>
                        <div className="single-hero-slide bg-overlay" style={{backgroundImage: 'url("/template/img/bg-img/1.jpg")'}}>
                        <div className="h-100 d-flex align-items-center text-center">
                            <div className="container">
                            <h3 className="text-white mb-1">Dark &amp; RTL Ready</h3>
                            <p className="text-white mb-4">You can use the Dark or <br /> RTL mode of your choice.</p><a className="btn btn-creative btn-warning" href="#">Buy Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="pt-3" />
                <div className="container direction-rtl">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="row g-3">
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/pwa.png" alt="" /></div>
                            <p className="mb-0">PWA Ready</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/bootstrap.png" alt="" /></div>
                            <p className="mb-0">Bootstrap 5</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/js.png" alt="" /></div>
                            <p className="mb-0">Vanilla JS</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card card-bg-img bg-img bg-overlay mb-3" style={{backgroundImage: 'url("/template/img/bg-img/3.jpg")'}}>
                    <div className="card-body direction-rtl p-5">
                        <h2 className="text-white">Reusable elements</h2>
                        <p className="mb-4 text-white">More than 220+ reusable modern design elements. Just copy the code and paste it on your desired page.</p><a className="btn btn-warning" href="elements.html">All elements</a>
                    </div>
                    </div>
                </div>
                <div className="container direction-rtl">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="row g-3">
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/sass.png" alt="" /></div>
                            <p className="mb-0">SCSS</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/pug.png" alt="" /></div>
                            <p className="mb-0">PUG</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/npm.png" alt="" /></div>
                            <p className="mb-0">NPM</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card bg-primary mb-3 bg-img" style={{backgroundImage: 'url("/template/img/core-img/1.png")'}}>
                    <div className="card-body direction-rtl p-5">
                        <h2 className="text-white">Ready pages</h2>
                        <p className="mb-4 text-white">Already designed more than 100+ pages for your needs. Such as - Authentication, Chats, eCommerce, Blog &amp; Miscellaneous pages.</p><a className="btn btn-warning" href="pages.html">All pages</a>
                    </div>
                    </div>
                </div>
                <div className="container direction-rtl">
                    <div className="card mb-3">
                    <div className="card-body">
                        <div className="row g-3">
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><img src="/template/img/demo-img/gulp.png" alt="" /></div>
                            <p className="mb-0">Gulp 4</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><i className="bi bi-moon text-dark" /></div>
                            <p className="mb-0">Dark Mode</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><i className="bi bi-box-arrow-left text-info" /></div>
                            <p className="mb-0">RTL Ready</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card mb-3">
                    <div className="card-body">
                        <h3>Customer Review</h3>
                        <div className="testimonial-slide-three-wrapper">
                        <div className="testimonial-slide3 testimonial-style3">
                            {/* Single Testimonial Slide */}
                            <div className="single-testimonial-slide">
                            <div className="text-content"><span className="d-inline-block badge bg-warning mb-2"><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill" /></span>
                                <h6 className="mb-2">The code looks clean, and the designs are excellent. I recommend.</h6><span className="d-block">Mrrickez, Themeforest</span>
                            </div>
                            </div>
                            {/* Single Testimonial Slide */}
                            <div className="single-testimonial-slide">
                            <div className="text-content"><span className="d-inline-block badge bg-warning mb-2"><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill" /></span>
                                <h6 className="mb-2">All complete, <br /> great craft.</h6><span className="d-block">Mazatlumm, Themeforest</span>
                            </div>
                            </div>
                            {/* Single Testimonial Slide */}
                            <div className="single-testimonial-slide">
                            <div className="text-content"><span className="d-inline-block badge bg-warning mb-2"><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill" /></span>
                                <h6 className="mb-2">Awesome template! <br /> Excellent support!</h6><span className="d-block">Vguntars, Themeforest</span>
                            </div>
                            </div>
                            {/* Single Testimonial Slide */}
                            <div className="single-testimonial-slide">
                            <div className="text-content"><span className="d-inline-block badge bg-warning mb-2"><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill me-1" /><i className="bi bi-star-fill" /></span>
                                <h6 className="mb-2">Nice modern design, <br /> I love the product.</h6><span className="d-block">electroMEZ, Themeforest</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container direction-rtl">
                    <div className="card">
                    <div className="card-body">
                        <div className="row g-3">
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray"><i className="bi bi-star text-warning" /></div>
                            <p className="mb-0">Best Rated</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray">
                                <svg className="bi bi-award text-success" xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                </svg>
                            </div>
                            <p className="mb-0">Elegant</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="feature-card mx-auto text-center">
                            <div className="card mx-auto bg-gray">
                                <svg className="bi bi-lightning-charge text-primary" xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                                </svg>
                            </div>
                            <p className="mb-0">Trendsetter</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="pb-3" />
                </div>
;
}
