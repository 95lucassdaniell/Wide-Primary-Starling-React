import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-wrapper, .navigation-logo, .navigation-toggle, .navigation-link, .navigation-menu {
  animation: none;
  transition: none;
}
.navigation-logo-glow, .navigation-logo-pulse, .navigation-cta-glow {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav id="mainNavigation" className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="Atendro Homepage" className="navigation-logo">
              <div className="navigation-logo-glow"></div>
              <span className="navigation-logo-text">Atendro</span>
              <div className="navigation-logo-pulse"></div>
            </div>
          </a>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-controls="navMenu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <span id="menuIcon" className="navigation-navigation-toggle-icon1">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span id="closeIcon" className="navigation-navigation-toggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <div id="navMenu" className="navigation-menu">
            <div className="navigation-menu-overlay"></div>
            <ul className="navigation-list">
              <li className="navigation-item">
                <a href="#recursos">
                  <div className="navigation-link">
                    <span className="navigation-link-text">Recursos</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#como-funciona">
                  <div className="navigation-link">
                    <span className="navigation-link-text">Como Funciona</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#precos">
                  <div className="navigation-link">
                    <span className="navigation-link-text">Preços</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#faq">
                  <div className="navigation-link">
                    <span className="navigation-link-text">FAQ</span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
              <li className="navigation-item">
                <a href="#ajuda">
                  <div className="navigation-link">
                    <span className="navigation-link-text">
                      Central de Ajuda
                    </span>
                    <span className="navigation-link-glow"></span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-actions">
              <a href="#login">
                <div className="navigation-action-link">
                  <span>Entrar</span>
                </div>
              </a>
              <button className="navigation-cta btn btn-primary">
                <span className="navigation-navigation-cta-text">
                  Começar Grátis
                </span>
                <span className="navigation-navigation-cta-glow"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigation-slide-down {from {transform: translateY(-100%);
opacity: 0;}
to {transform: translateY(0);
opacity: 1;}}@keyframes navigation-pulse {0%,100% {transform: scale(1);
opacity: 0.3;}
50% {transform: scale(1.2);
opacity: 0.6;}}@keyframes navigation-dot-pulse {0%,100% {opacity: 1;
transform: translateY(-50%) scale(1);}
50% {opacity: 0.5;
transform: translateY(-50%) scale(0.8);}}@keyframes navigation-cta-pulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")
  const navLinks = document.querySelectorAll(".navigation-link")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true"
      navToggle.setAttribute("aria-expanded", !isExpanded)
      navMenu.classList.toggle("navigation-active")
      document.body.style.overflow = isExpanded ? "" : "hidden"
    })

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("navigation-active")
        navToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      })
    })

    navMenu.addEventListener("click", function (e) {
      if (e.target === navMenu) {
        navMenu.classList.remove("navigation-active")
        navToggle.setAttribute("aria-expanded", "false")
        document.body.style.overflow = ""
      }
    })
  }

  let lastScrollY = window.scrollY
  const nav = document.getElementById("mainNavigation")

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      nav.style.transform = "translateY(-100%)"
    } else {
      nav.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
