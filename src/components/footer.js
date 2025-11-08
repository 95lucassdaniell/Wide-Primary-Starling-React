import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
a.footer-contact-value:hover {
  color: var(--color-accent);
}
@media (prefers-reduced-motion: reduce) {
.footer-grid-bg, .footer-scanlines, .footer-logo-glow, .footer-particle, .footer-cta::before, .footer-content::after {
  animation: none;
}
.footer-badge:hover, .footer-contact-card:hover, .footer-social-link:hover, .footer-link:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-atendro" className="footer-main">
        <div aria-hidden="true" className="footer-grid-bg"></div>
        <div aria-hidden="true" className="footer-scanlines"></div>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo-wrapper">
                <div aria-hidden="true" className="footer-logo-glow"></div>
                <h2 className="footer-logo">Atendro</h2>
              </div>
              <p className="footer-tagline">
                {' '}
                Transforme seu WhatsApp em uma Máquina de Vendas com IA
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-badges">
                <div className="footer-badge">
                  <div className="footer-badge-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>100% Seguro</span>
                </div>
                <div className="footer-badge">
                  <div className="footer-badge-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>95% Satisfação</span>
                </div>
                <div className="footer-badge">
                  <div className="footer-badge-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>Atendimento 24/7</span>
                </div>
              </div>
            </div>
            <div className="footer-nav-group">
              <div className="footer-column">
                <h3 className="footer-column-title">Produto</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#recursos">
                      <div className="footer-link">
                        <span>Recursos</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#como-funciona">
                      <div className="footer-link">
                        <span>Como Funciona</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#precos">
                      <div className="footer-link">
                        <span>Preços</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#integracoes">
                      <div className="footer-link">
                        <span>Integrações</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#api">
                      <div className="footer-link">
                        <span>API</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#atualizacoes">
                      <div className="footer-link">
                        <span>Atualizações</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Empresa</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#sobre">
                      <div className="footer-link">
                        <span>Sobre Nós</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#blog">
                      <div className="footer-link">
                        <span>Blog</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#carreiras">
                      <div className="footer-link">
                        <span>Carreiras</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#imprensa">
                      <div className="footer-link">
                        <span>Imprensa</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#parceiros">
                      <div className="footer-link">
                        <span>Parceiros</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#cases">
                      <div className="footer-link">
                        <span>Cases de Sucesso</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Suporte</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#central-ajuda">
                      <div className="footer-link">
                        <span>Central de Ajuda</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#documentacao">
                      <div className="footer-link">
                        <span>Documentação</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#faq">
                      <div className="footer-link">
                        <span>FAQ</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#status">
                      <div className="footer-link">
                        <span>Status do Sistema</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#contato">
                      <div className="footer-link">
                        <span>Contato</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#comunidade">
                      <div className="footer-link">
                        <span>Comunidade</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-column-title">Legal</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#privacidade">
                      <div className="footer-link">
                        <span>Privacidade</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#termos">
                      <div className="footer-link">
                        <span>Termos de Uso</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#lgpd">
                      <div className="footer-link">
                        <span>LGPD</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#cookies">
                      <div className="footer-link">
                        <span>Política de Cookies</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#seguranca">
                      <div className="footer-link">
                        <span>Segurança</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#compliance">
                      <div className="footer-link">
                        <span>Compliance</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-contact-section">
            <div className="footer-contact-grid">
              <div className="footer-contact-card">
                <div className="footer-contact-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:contato@atendro.com?subject=">
                    <div className="footer-contact-value">
                      <span>
                        {' '}
                        contato@atendro.com
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-contact-card">
                <div className="footer-contact-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">Telefone</span>
                  <a href="tel:+5511999999999">
                    <div className="footer-contact-value">
                      <span>
                        {' '}
                        +55 (11) 99999-9999
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-contact-card">
                <div className="footer-contact-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                    </g>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">WhatsApp</span>
                  <a href="https://wa.me/5511999999999">
                    <div className="footer-contact-value">
                      <span>
                        {' '}
                        +55 (11) 99999-9999
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-contact-card">
                <div className="footer-contact-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="footer-contact-info">
                  <span className="footer-contact-label">Endereço</span>
                  <span className="footer-contact-value">
                    São Paulo, SP - Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-cta">
            <div className="footer-cta-content">
              <h3 className="footer-cta-title">
                Comece sua Transformação Digital Hoje
              </h3>
              <p className="footer-cta-text">
                {' '}
                14 dias grátis • Sem cartão de crédito • Cancele quando quiser
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <button className="footer-cta-button btn-lg btn btn-primary">
              {' '}
              Começar Grátis Agora
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                {' '}
                © 2025 Atendro. Todos os direitos reservados.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="footer-social">
                <a href="#">
                  <div aria-label="WhatsApp" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="footer-meta">
                <span className="footer-meta-item">Feito com IA no Brasil</span>
                <span aria-hidden="true" className="footer-meta-separator">
                  •
                </span>
                <span className="footer-meta-item">LGPD Compliant</span>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="footer-particles">
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
          <div className="footer-particle"></div>
        </div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-grid-pulse {0%,100% {opacity: 0.15;}
50% {opacity: 0.25;}}@keyframes footer-scanline-move {0% {transform: translateY(0);}
100% {transform: translateY(4px);}}@keyframes footer-border-glow {0%,100% {opacity: 0.6;}
50% {opacity: 1;}}@keyframes footer-logo-pulse {0%,100% {opacity: 0.4;
transform: translate(-50%, -50%) scale(1);}
50% {opacity: 0.7;
transform: translate(-50%, -50%) scale(1.1);}}@keyframes footer-cta-shine {0% {left: -100%;}
50%,100% {left: 200%;}}@keyframes footer-particle-float {0% {transform: translate(0, 0) scale(1);
opacity: 0;}
10% {opacity: 0.8;}
90% {opacity: 0.8;}
100% {transform: translate(50px, -100vh) scale(0);
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer-atendro">
(function(){
  // Enhanced hover effects for contact cards
  const contactCards = document.querySelectorAll(".footer-contact-card")

  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.setProperty("--hover-intensity", "1")
    })

    card.addEventListener("mouseleave", function () {
      this.style.setProperty("--hover-intensity", "0")
    })
  })

  // Glowing effect on CTA button
  const ctaButton = document.querySelector(".footer-cta-button")

  if (ctaButton) {
    setInterval(() => {
      ctaButton.style.animation = "none"
      setTimeout(() => {
        ctaButton.style.animation = ""
      }, 10)
    }, 5000)
  }

  // Add glow pulse to badges on scroll into view
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  }

  const badges = document.querySelectorAll(".footer-badge")
  const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation =
            "footer-badge-appear 0.5s ease-out forwards"
        }, index * 100)
        badgeObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  badges.forEach((badge) => {
    badge.style.opacity = "0"
    badge.style.transform = "translateY(20px)"
    badgeObserver.observe(badge)
  })

  // Add keyframe for badge appearance
  const style = document.createElement("style")
  style.textContent = \`
  @keyframes footer-badge-appear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
\`
  document.head.appendChild(style)

  // Parallax effect for particles on scroll
  let lastScrollY = window.scrollY

  window.addEventListener(
    "scroll",
    () => {
      const footer = document.getElementById("footer-atendro")
      if (!footer) return

      const rect = footer.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight && rect.bottom > 0

      if (isInView) {
        const scrollDelta = window.scrollY - lastScrollY
        const particles = document.querySelectorAll(".footer-particle")

        particles.forEach((particle, index) => {
          const speed = 0.5 + index * 0.1
          const currentTransform = particle.style.transform || "translateY(0)"
          const currentY = parseFloat(
            currentTransform.match(/translateY\(([-\d.]+)px\)/) || [0, 0]
          )[1]
          const newY = currentY - scrollDelta * speed
          particle.style.transform = \`translateY(\${newY}px)\`
        })
      }

      lastScrollY = window.scrollY
    },
    { passive: true }
  )
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
