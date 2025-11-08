import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Wide Primary Starling</title>
        <meta property="og:title" content="Wide Primary Starling" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section
        id="hero-section"
        role="region"
        aria-labelledby="hero-title"
        className="hero-section"
      >
        <div className="hero-panel">
          <div className="hero-content">
            <h1 id="hero-title" className="home-hero-title hero-title">
              <span>
                {' '}
                Transforme seu WhatsApp em
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span
                id="rotator"
                role="status"
                aria-live="polite"
                className="home-rotator-text"
              >
                {' '}
                uma Máquina de Vendas com IA
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              {' '}
              Atenda mais clientes, venda mais e reduza custos com agentes de IA
              que entendem texto, áudio e imagens. Plataforma profissional de
              multiatendimento com automação, relatórios e integrações.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-badges">
              <div className="badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
                <span>
                  {' '}
                  14 dias grátis
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <span>
                  {' '}
                  IA multimodal
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
                <span>
                  {' '}
                  Humanos + IA
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="badge">
                <svg
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
                <span>
                  {' '}
                  CRM integrado
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <button
              type="button"
              aria-label="Comece grátis agora no Atendro"
              className="hero-cta btn-lg btn btn-primary"
            >
              <span>
                {' '}
                Comece Grátis Agora
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
            </button>
            <small className="trust-note">
              {' '}
              Sem cartão de crédito • Cancele quando quiser
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </small>
          </div>
          <div className="hero-visual">
            <video
              src="https://videos.pexels.com/video-files/7101912/7101912-hd_1920_1080_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              aria-hidden="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-visual-overlay"></div>
            <div className="hero-visual-content">
              <img
                alt="Interface de IA Atendro mostrando conversas inteligentes"
                src="https://images.pexels.com/photos/30530414/pexels-photo-30530414.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="hero-dashboard"
              />
              <div className="floating-stat stat-1">
                <div className="stat-icon">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle r="10" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <div className="stat-text">
                  <strong>24/7</strong>
                  <span>Disponível</span>
                </div>
              </div>
              <div className="floating-stat stat-2">
                <div className="stat-icon">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 7h6v6"></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </g>
                  </svg>
                </div>
                <div className="stat-text">
                  <strong>95%</strong>
                  <span>Satisfação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="social-proof"
        role="region"
        aria-labelledby="social-proof-heading"
        className="social-proof-section"
      >
        <div className="social-proof-container">
          <div className="social-proof-header">
            <h2 id="social-proof-heading" className="section-title">
              {' '}
              Números que Falam por Si
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <div className="stat-chips">
              <div
                role="button"
                tabindex="0"
                aria-label="95% de satisfação"
                className="stat-chip"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <strong>95%</strong>
                <span>Satisfação</span>
              </div>
              <div
                role="button"
                tabindex="0"
                aria-label="10 mil empresas"
                className="stat-chip"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6-4v2m-3 8v9m6-9v9M5 16l4-2m6 0l4 2M9 18h6M10 8v.01M14 8v.01"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <strong>10K+</strong>
                <span>Empresas</span>
              </div>
              <div
                role="button"
                tabindex="0"
                aria-label="24/7 disponibilidade"
                className="stat-chip"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <strong>24/7</strong>
                <span>Disponível</span>
              </div>
              <div
                role="button"
                tabindex="0"
                aria-label="60% de economia"
                className="stat-chip"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                  </g>
                </svg>
                <strong>-60%</strong>
                <span>Custos</span>
              </div>
            </div>
          </div>
          <div className="testimonials-grid">
            <article
              tabindex="0"
              aria-label="Depoimento de cliente de e-commerce"
              className="testimonial-card"
            >
              <blockquote>
                <span>
                  {' '}
                  &quot;Revolucionou nosso atendimento: atendemos 3x mais com a
                  mesma equipe.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </blockquote>
              <footer>
                <strong>Cliente E-commerce</strong>
                <span>Varejo Digital</span>
              </footer>
            </article>
            <article
              tabindex="0"
              aria-label="Depoimento de cliente SaaS"
              className="testimonial-card"
            >
              <blockquote>
                <span>
                  {' '}
                  &quot;A IA resolve 80% das solicitações sozinha; nosso time
                  foca vendas complexas.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </blockquote>
              <footer>
                <strong>Cliente SaaS</strong>
                <span>Tecnologia</span>
              </footer>
            </article>
            <article
              tabindex="0"
              aria-label="Depoimento de cliente financeiro"
              className="testimonial-card"
            >
              <blockquote>
                <span>
                  &quot;ROI positivo no primeiro mês; economia real e
                  mensurável.&quot;
                </span>
              </blockquote>
              <footer>
                <strong>Cliente Financeiro</strong>
                <span>Serviços Financeiros</span>
              </footer>
            </article>
          </div>
        </div>
      </section>
      <section
        id="features"
        role="region"
        aria-labelledby="features-title"
        className="features-section"
      >
        <div className="features-container">
          <div className="features-grid">
            <div
              role="group"
              aria-labelledby="hero-feature-title"
              className="feature-hero"
            >
              <video
                src="https://videos.pexels.com/video-files/3141211/3141211-hd_1920_1080_25fps.mp4"
                loop="true"
                muted="true"
                autoPlay="true"
                aria-hidden="true"
                playsInline="true"
                className="feature-hero-video"
              ></video>
              <div className="feature-hero-overlay"></div>
              <div className="feature-hero-content">
                <h2 id="hero-feature-title" className="feature-hero-title">
                  <span>
                    {' '}
                    Atendimento com IA
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-highlight-text">Avançada</span>
                </h2>
                <p className="feature-hero-description">
                  {' '}
                  Conversas contextuais, respostas em linguagem natural e
                  entendimento de texto, áudio e imagens para resolver problemas
                  em segundos.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="feature-metrics">
                  <div className="metric-item">
                    <span className="metric-value">80%</span>
                    <span className="metric-label">Resolução automática</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-value">&lt;5s</span>
                    <span className="metric-label">Tempo de resposta</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-stats">
              <div className="stat-badge">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
                <div>
                  <strong className="stat-number">IA Contextual</strong>
                  <span>Entende intenções</span>
                </div>
              </div>
              <div className="stat-badge">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <div>
                  <strong className="stat-number">100% Seguro</strong>
                  <span>Dados criptografados</span>
                </div>
              </div>
            </div>
            <article
              role="group"
              aria-labelledby="feature-multi-title"
              className="feature-wide feature-card"
            >
              <div className="feature-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-multi-title" className="feature-title">
                  {' '}
                  Multi-atendimento Profissional
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Escale sem perder qualidade: equipe humana e agentes de IA
                  sincronizados em uma fila inteligente, priorização automática
                  e transferência fluida entre robô e humano.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="feature-crm-title"
              className="feature-card"
            >
              <div className="feature-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-crm-title" className="feature-title">
                  CRM Integrado
                </h3>
                <p className="feature-description">
                  {' '}
                  Histórico unificado de clientes, perfil enriquecido e
                  automações de follow-up. Todas as conversas, notas e
                  oportunidades em um painel central.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="feature-automation-title"
              className="feature-card"
            >
              <div className="feature-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
              <div className="feature-content">
                <h3 id="feature-automation-title" className="feature-title">
                  {' '}
                  Automação Inteligente
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Fluxos conversacionais configuráveis, gatilhos por eventos e
                  respostas condicionais que automatizam vendas, qualificação e
                  suporte.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="feature-analytics-title"
              className="feature-card"
            >
              <div className="feature-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-analytics-title" className="feature-title">
                  {' '}
                  Análises e Relatórios
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Dashboards em tempo real com métricas de SLA, NPS, funil de
                  conversão e eficiência de agentes. Insights acionáveis para
                  otimizar.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
            <article
              role="group"
              aria-labelledby="feature-integrations-title"
              className="feature-card"
            >
              <div className="feature-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="feature-content">
                <h3 id="feature-integrations-title" className="feature-title">
                  {' '}
                  Integrações Poderosas
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h3>
                <p className="feature-description">
                  {' '}
                  Conecte CRM, ERP, e-commerce e ferramentas internas via
                  integrações prontas ou API. Sincronização bidirecional sem
                  atrito.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="como-funciona"
        role="region"
        aria-labelledby="how-it-works-title"
        className="how-it-works-section"
      >
        <div className="how-it-works-container">
          <div role="list" className="steps-column">
            <div role="listitem" className="step-item">
              <div className="step-marker">
                <span className="step-number">01</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Conecte seu WhatsApp</h3>
                <p className="step-description">
                  {' '}
                  Plugue sua conta com segurança, sincronize contatos e
                  históricos sem complicação. Processo guiado em minutos.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="step-item">
              <div className="step-marker">
                <span className="step-number">02</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Modele seu Agente de IA</h3>
                <p className="step-description">
                  {' '}
                  Personalize tom, fluxos e respostas com marca, regras
                  comerciais e integrações CRM — tudo visual e sem código.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div role="listitem" className="step-item">
              <div className="step-marker">
                <span className="step-number">03</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">Atenda 24/7 e escale</h3>
                <p className="step-description">
                  {' '}
                  Robots e equipe trabalham juntos: roteamento inteligente,
                  fallback humano e automações que transformam conversas em
                  vendas.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Comece agora gratuitamente"
              className="btn-lg btn btn-primary"
            >
              <span>
                {' '}
                Comece Agora
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
            </button>
          </div>
          <div className="visuals-column">
            <div className="visual-card card-1">
              <img
                alt="Conectando WhatsApp ao Atendro"
                src="https://images.pexels.com/photos/30530407/pexels-photo-30530407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="card-overlay">
                <span className="card-label">Conexão WhatsApp</span>
              </div>
            </div>
            <div className="visual-card card-2">
              <img
                alt="Configurando agente de IA"
                src="https://images.pexels.com/photos/30530404/pexels-photo-30530404.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="card-overlay">
                <span className="card-label">Personalização IA</span>
              </div>
            </div>
            <div className="visual-card card-3">
              <img
                alt="Dashboard de atendimento 24/7"
                src="https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="card-overlay">
                <span className="card-label">Atendimento Ativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="planos"
        role="region"
        aria-labelledby="pricing-title"
        className="pricing-section"
      >
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 id="pricing-title" className="section-title">
              {' '}
              Planos pensados para escalar
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="section-subtitle">
              {' '}
              Escolha a potência certa para sua operação de atendimento com IA
              24/7
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="pricing-grid">
            <article
              role="region"
              tabindex="0"
              aria-label="Plano Starter"
              className="pricing-card"
            >
              <div className="pricing-header-card">
                <h3 className="tier-name">Starter</h3>
                <div className="tier-price">
                  <span className="currency">R$</span>
                  <span className="amount">97</span>
                  <span className="period">/mês</span>
                </div>
                <p className="tier-tagline">Ideal para começar</p>
              </div>
              <ul role="list" className="feature-list">
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Agente de IA básico multimodal
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    1 número + até 2 operadores
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    CRM leve com histórico
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Automação de fluxos essenciais
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Relatórios resumidos
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <button
                type="button"
                aria-label="Começar com plano Starter"
                className="btn-outline btn-lg btn"
              >
                {' '}
                Começar Grátis
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <small className="legal-text">14 dias grátis • Sem cartão</small>
            </article>
            <article
              role="region"
              tabindex="0"
              aria-label="Plano Professional mais popular"
              className="pricing-featured pricing-card"
            >
              <div className="popular-badge">
                <span>Mais Popular</span>
              </div>
              <div className="pricing-header-card">
                <h3 className="tier-name">Professional</h3>
                <div className="tier-price">
                  <span className="currency">R$</span>
                  <span className="amount">297</span>
                  <span className="period">/mês</span>
                </div>
                <p className="tier-tagline">Crescimento acelerado</p>
              </div>
              <ul role="list" className="feature-list">
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Agente de IA avançado personalizado
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Até 5 operadores simultâneos
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    CRM completo com automações
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Fluxos automáticos ilimitados
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Dashboard estratégico
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Integrações-chave
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Suporte prioritário
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <button
                type="button"
                aria-label="Começar com plano Professional"
                className="btn-lg btn btn-primary"
              >
                {' '}
                Começar Grátis
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <small className="legal-text">14 dias grátis • Sem cartão</small>
            </article>
            <article
              role="region"
              tabindex="0"
              aria-label="Plano Enterprise"
              className="pricing-card"
            >
              <div className="pricing-header-card">
                <h3 className="tier-name">Enterprise</h3>
                <div className="tier-price">
                  <span className="amount-custom">Personalizado</span>
                </div>
                <p className="tier-tagline">Solução completa</p>
              </div>
              <ul role="list" className="feature-list">
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    IA corporativa com SLA dedicado
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Multiatendimento escalável
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    CRM customizado + SSO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    APIs e integrações sob medida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Suporte 24/7 dedicado
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                  <span>
                    {' '}
                    Consultoria estratégica
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <button
                type="button"
                aria-label="Falar com vendas sobre Enterprise"
                className="btn-outline btn-lg btn"
              >
                {' '}
                Falar com Vendas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
              <small className="legal-text">
                14 dias grátis • Contrato flexível
              </small>
            </article>
          </div>
          <div className="pricing-footer">
            <p className="guarantee-text">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
              <span>
                {' '}
                Teste sem riscos • Cancele quando quiser • Sem taxas ocultas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
        </div>
      </section>
      <section
        id="cta-final"
        role="region"
        aria-labelledby="cta-final-title"
        className="cta-final-section"
      >
        <div className="cta-container">
          <div className="cta-content">
            <h2 id="cta-final-title" className="cta-title">
              {' '}
              Pronto para transformar seu atendimento com IA 24/7?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <p className="cta-subtitle">
              {' '}
              Junte-se a 10.000+ empresas que já reduzem custos em até 60% e
              atendem clientes em segundos com uma plataforma profissional e
              escalável.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <ul role="list" className="cta-benefits">
              <li>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <span>
                  {' '}
                  Responda instantaneamente
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                  </g>
                </svg>
                <span>
                  {' '}
                  Venda mais
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
              <li>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
                <span>
                  {' '}
                  Economize tempo e dinheiro
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </li>
            </ul>
            <div className="cta-actions">
              <button
                type="button"
                aria-label="Começar grátis agora no Atendro"
                className="btn-xl btn btn-primary"
              >
                <span>
                  {' '}
                  Começar Grátis Agora
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
              </button>
            </div>
            <small className="cta-trust">
              {' '}
              14 dias grátis • Sem cartão • Cancele quando quiser
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </small>
          </div>
          <div className="cta-visual">
            <div className="trust-card floating-card">
              <div className="trust-badge">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <div>
                  <strong>Dados Seguros</strong>
                  <span>Criptografia ponta a ponta</span>
                </div>
              </div>
            </div>
            <div className="metric-card floating-card">
              <img
                alt="Métricas de atendimento em tempo real"
                src="https://images.pexels.com/photos/30547577/pexels-photo-30547577.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="metric-overlay">
                <div className="metric-stat">
                  <span className="metric-number">10K+</span>
                  <span className="metric-label">Empresas Ativas</span>
                </div>
              </div>
            </div>
            <div className="rating-card floating-card">
              <div className="rating-stars">
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div>
                <strong>95% Satisfação</strong>
                <span>Clientes adoram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        role="region"
        aria-labelledby="faq-title"
        className="faq-section"
      >
        <div className="faq-container">
          <div className="faq-header">
            <h2 id="faq-title" className="section-title">
              Perguntas Frequentes
            </h2>
            <p className="section-subtitle">
              {' '}
              Tudo o que você precisa saber sobre o Atendro
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="faq-content">
            <div className="faq-list">
              <div className="faq-item">
                <button
                  id="faq-q-1"
                  aria-controls="faq-answer-1"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>Como funciona a IA?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-1"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-1"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Nossa IA mistura modelos avançados de linguagem com regras
                    de negócio: interpreta texto, áudio e imagens, consulta seu
                    CRM e executa fluxos automatizados. Ela aprende com
                    conversas reais para melhorar respostas e escalona para
                    humanos quando necessário.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-2"
                  aria-controls="faq-answer-2"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>Preciso de conhecimento técnico?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-2"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-2"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Não. A configuração é guiada e intuitiva: conecte seu
                    WhatsApp, personalize o agente com sua linguagem e crie
                    fluxos com assistentes visuais. Para necessidades complexas,
                    oferecemos suporte técnico e consultoria dedicada.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-3"
                  aria-controls="faq-answer-3"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>Quanto tempo leva para configurar?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-3"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-3"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Conexão e configuração básica em minutos. Treinamento e
                    ajustes para alto desempenho costumam levar de 3 a 14 dias,
                    dependendo do volume e da personalização desejada.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-4"
                  aria-controls="faq-answer-4"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>A IA vai substituir minha equipe?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-4"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-4"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Não. Atendro potencializa sua equipe: resolve tarefas
                    repetitivas 24/7 e permite que humanos foquem em casos
                    complexos e vendas estratégicas. Modelo híbrido: IA +
                    humanos trabalhando juntos.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-5"
                  aria-controls="faq-answer-5"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>É seguro?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-5"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-5"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Sim. Dados são criptografados em trânsito e em repouso,
                    seguimos boas práticas de segurança e conformidade. Logs e
                    permissões granulares garantem controle total sobre acessos
                    e histórico.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-6"
                  aria-controls="faq-answer-6"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>Posso cancelar?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-6"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-6"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Sim. Plano sem fidelidade: cancele quando quiser. Oferecemos
                    14 dias grátis sem cartão para testar a plataforma antes de
                    assinar.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-7"
                  aria-controls="faq-answer-7"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>Quais integrações estão disponíveis?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-7"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-7"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Integramos com CRMs, plataformas de e‑commerce, ERPs,
                    gateways de pagamento e ferramentas de analytics. Conexões
                    prontas via API e Zapier, além de integrações customizáveis.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  id="faq-q-8"
                  aria-controls="faq-answer-8"
                  aria-expanded="false"
                  className="faq-question"
                >
                  <span>Como funciona o suporte?</span>
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="m18 15l-6-6l-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id="faq-answer-8"
                  role="region"
                  aria-hidden="true"
                  aria-labelledby="faq-q-8"
                  className="faq-answer"
                >
                  <p>
                    {' '}
                    Suporte 24/7 para incidentes críticos e atendimento
                    comercial via chat. Planos Professional e Enterprise incluem
                    onboarding dedicado, SLA prioritário e consultoria de
                    otimização.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-support-card">
              <h3>Ainda tem dúvidas?</h3>
              <p>
                {' '}
                Nossa equipe está pronta para ajudar você a transformar seu
                atendimento.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                type="button"
                aria-label="Falar com especialista"
                className="btn btn-primary"
              >
                {' '}
                Falar com Especialista
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container20">
        <div className="home-container21">
          <Script
            html={`<style>
        @keyframes typing {0%,100% {opacity: 1;}
50% {opacity: 0.7;}}@keyframes pulse {0%,100% {box-shadow: --shadow-level-3;}
50% {box-shadow: 0 0 20px
        color-mix(in srgb, var(--color-accent) 40%, transparent);}}@keyframes glow {from {box-shadow: --shadow-level-1;}
to {box-shadow: 0 0 24px
        color-mix(in srgb, var(--color-primary) 50%, transparent);}}@keyframes halo {0%,100% {box-shadow: --elevated-surface-glow;}
50% {box-shadow: 0 0 32px
        color-mix(in srgb, var(--color-primary) 60%, transparent);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container22">
        <div className="home-container23">
          <Script
            html={`<script defer data-name="atendro-homepage">
(function(){
  // Hero rotator
  const rotatorElement = document.getElementById("rotator")
  if (rotatorElement) {
    const phrases = [
      "uma Máquina de Vendas com IA",
      "uma Central de Atendimento 24/7",
      "um Assistente Inteligente",
      "sua Equipe de IA",
    ]
    let currentIndex = 0

    setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length
      rotatorElement.textContent = phrases[currentIndex]
    }, 4000)
  }

  // FAQ accordion
  const faqQuestions = document.querySelectorAll(".faq-question")
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const expanded = question.getAttribute("aria-expanded") === "true"
      const answerId = question.getAttribute("aria-controls")
      const answer = document.getElementById(answerId)

      question.setAttribute("aria-expanded", !expanded)
      answer.setAttribute("aria-hidden", expanded)
    })
  })

  // Parallax effect on visual cards
  const visualCards = document.querySelectorAll(".visual-card, .floating-card")
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset

    visualCards.forEach((card, index) => {
      const speed = 0.5 + index * 0.1
      const yPos = -((scrolled * speed) / 100)
      card.style.transform = \`translateY(\${yPos}px)\`
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
