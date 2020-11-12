import React, { useEffect, useRef } from "react";
import Helmet from "react-helmet";
import $ from "jquery";

import containerBackground from "../../assets/images/firstContainerBackground.jpg";
import logoWithOutText from "../../assets/images/logo-without-text.png";
import colibriPointOfSale from "../../assets/images/colibri-point-of-sale.jpg";
import colibriPedMobile from "../../assets/images/colibriPedMobile.jpg";
import colibriBackOffice from "../../assets/images/colibriBackOffice.png";
import colibriCloud from "../../assets/images/colibriCloud.png";
import thirdContainerBackgroundImage from '../../assets/images/image1.webp';
import menu1 from "../../assets/images/menu1.png";
import menu2 from "../../assets/images/menu2.png";
import menu3 from "../../assets/images/menu3.png";
import menu4 from "../../assets/images/menu4.png";
import menu5 from "../../assets/images/menu5.png";
import menu6 from "../../assets/images/menu6.png";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Spacer from '../../components/Spacer';

import "./index.css";

const Home = () => {
  let secondContainer = useRef();
  let thirdContainer = useRef();
  let isHide = useRef(true);
  let isHide1 = useRef(true);
  let noLag = useRef(1);

  function scrollAnimation() {
    switch (noLag.current) {
      case 0:
        if (
          Math.round(
            $("#second-container").offset().top - window.innerHeight * 0.35
          ) >
            Math.round(secondContainer.current * 0.059083048224831) - 20 &&
          Math.round(
            $("#second-container").offset().top - window.innerHeight * 0.35
          ) <
            Math.round(secondContainer.current * 0.059083048224831) + 20
        ) {
          isHide.current = !isHide.current;
        }

        if (
          Math.round(
            $("#third-container").offset().top - window.innerHeight * 0.2
          ) >
            Math.round(thirdContainer.current * 0.059083048224831) - 20 &&
          Math.round(
            $("#third-container").offset().top - window.innerHeight * 0.2
          ) <
            Math.round(thirdContainer.current * 0.059083048224831) + 20
        ) {
          isHide1.current = !isHide1.current;
        }

        if (!isHide.current) {
          $("#logoIconGrid").css("opacity", 1);
          $("#logoIconGrid").css("transform", "translateY(0)");

          $("#t1").css("opacity", 1);
          $("#t1").css("transform", "scale(1)");
          $("#t2").css("opacity", 1);
          $("#t2").css("transform", "scale(1)");
          $("#continue").css("opacity", 1);
          $("#continue").css("transform", "scale(1)");
          $("#t3").css("opacity", 1);
          $("#t3").css("transform", "scale(1)");
          $("#t4").css("opacity", 1);
          $("#t4").css("transform", "scale(1)");
        }

        if (!isHide1.current) {
          $("#spec1").css("transform", "scale(1)");
          $("#spec1").css("opacity", 1);
          $("#spec2").css("transform", "scale(1)");
          $("#spec2").css("opacity", 1);
          $("#spec3").css("transform", "scale(1)");
          $("#spec3").css("opacity", 1);
          $("#spec4").css("transform", "scale(1)");
          $("#spec4").css("opacity", 1);
          setTimeout(() => {
            $(".specs").css("transition", "0.2s");
          }, 1500);
        }

        noLag.current = 1;
        break;

      case 1:
        noLag.current = 2;
        break;

      case 2:
        noLag.current = 0;
        break;

      default:
        alert("Pare de mexer!");
        break;
    }
  }

  const handleGoAheadClick = () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#second-container").offset().top - window.innerHeight * 0.15,
      },
      1000
    );

    scrollAnimation();
  };

  const handleContinueClick = () => {
    $("html, body").animate(
      {
        scrollTop:
          $("#third-container").offset().top * 1.6925 +
          $("#second-container").offset().top * 1.6925,
      },
      1000
    );

    scrollAnimation();
  };

  useEffect(() => {
    secondContainer.current =
      $("#second-container").offset().top - window.innerHeight * 0.35;
    thirdContainer.current =
      $("#third-container").offset().top - window.innerHeight * 0.2;
      
    (async () => {
      const initialImages = () => {
        $("#menu1").css("transform", "scale(1)");
        $("#menu1").css("opacity", 1);

        $("#menu2").css("transform", "scale(1)");
        $("#menu2").css("opacity", 1);

        $("#menu3").css("transform", "scale(1)");
        $("#menu3").css("opacity", 1);

        $("#menu4").css("transform", "scale(1)");
        $("#menu4").css("opacity", 1);

        $("#menu5").css("transform", "scale(1)");
        $("#menu5").css("opacity", 1);

        $("#menu6").css("transform", "scale(1)");
        $("#menu6").css("opacity", 1);
      };

      const titleAnimation = () => {
        $('.title').css('opacity', 1);
        $('.title').css('transform', 'translateX(0)');
      };

      const transitionProps = () => {
        $("#menu1").css("transition", ".2s ease");
        $("#menu2").css("transition", ".2s ease");
        $("#menu3").css("transition", ".2s ease");
        $("#menu4").css("transition", ".2s ease");
        $("#menu5").css("transition", ".2s ease");
        $("#menu6").css("transition", ".2s ease");
      };

      setTimeout(() => {
        initialImages();
        titleAnimation();
      }, 500);
      setTimeout(transitionProps, 1750);

      const images = [...document.querySelectorAll(".menuImage")];
      images.forEach((e) => {
        e.addEventListener("mouseenter", () => {
          $(e).css("transform", "scale(1.075)");
        });
        e.addEventListener("mouseleave", () => {
          $(e).css("transform", "scale(1)");
        });
      });

      $("body, html").on("scroll", scrollAnimation);

      const products = [...document.querySelectorAll(".specs")];
      products.forEach((e, i) => {
        e.addEventListener("mouseenter", () => {
          $(e).css("transform", "scale(1.05)");
          $(document.querySelectorAll(".specsImage")[i]).css(
            "transform",
            "scale(1.1)"
          );
        });
        e.addEventListener("mouseleave", () => {
          $(e).css("transform", "scale(1)");
          $(document.querySelectorAll(".specsImage")[i]).css(
            "transform",
            "scale(1)"
          );
        });
      });
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Prime Automação</title>
      </Helmet>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
        }}
        id="first-container"
      >
        <div id="background" style={{
          backgroundImage: "url(" + containerBackground + ")",
        }}/>
        <div className="imageGrid">
          <div className="title">
            <h1>Bem-vindo a Prime Automação</h1>
          </div>
          <img
            id="menu1"
            className="menuImage"
            src={menu1}
            alt="Imagem menu 1"
          />
          <img
            id="menu2"
            className="menuImage"
            src={menu2}
            alt="Imagem menu 2"
          />
          <img
            id="menu3"
            className="menuImage"
            src={menu3}
            alt="Imagem menu 3"
          />
          <img
            id="menu4"
            className="menuImage"
            src={menu4}
            alt="Imagem menu 4"
          />
          <img
            id="menu5"
            className="menuImage"
            src={menu5}
            alt="Imagem menu 5"
          />
          <img
            id="menu6"
            className="menuImage"
            src={menu6}
            alt="Imagem menu 6"
          />
        </div>
        <div className="goAhead" onClick={handleGoAheadClick}>
          <p>Veja mais...</p>
        </div>
      </Container>
      <Spacer style={{
          margin: '10vh auto 0 auto',
        }}/>
      <Container
        id="second-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="grid">
          <img id="logoIconGrid" src={logoWithOutText} alt="Ícone do logo" />
          <p id="t1">
            A Prime Automação é uma revendedora NCR certificada para implantação
            dos pacotes de soluções Colibri!
          </p>
          <p id="t2">
            Realizamos consultoria para implantação das ferramentas.
          </p>
          <p id="t3">
            Conduzimos o treinamento, realizamos a instalação no local e suporte
            técnico remoto...
          </p>
          <p id="t4">
            Vamos trabalhar juntos para mudar a experiência de seus clientes.
            Estamos prontos para ajudar.
          </p>
          <span id="continue" onClick={handleContinueClick}>
            <h2>Continue</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ isolation: "isolate" }}
              viewBox="0 0 512 512"
              width="512pt"
              height="512pt"
            >
              <g clipPath="url(#_clipPath_mX0Utk43mMxSqwTrNDKZr7W5Wax902Zh)">
                <path
                  d=" M 55.5 83.5 L 257.5 192.5 L 456.5 83.5 L 456.5 322.5 L 260.5 428.5 L 55.5 322.5 L 55.5 83.5 Z "
                  vectorEffect="non-scaling-stroke"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                />
              </g>
            </svg>
          </span>
        </div>
        <div id="latImg"></div>
      </Container>
      <Spacer style={{
          top: '5vh',
          margin: '10vh auto 0 auto',
          zIndex: 2,
        }}/>
      <Container
        id="third-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={thirdContainerBackgroundImage} alt="background"/>
        <span id="spec1" className="specs">
          <div
            className="specsImage"
            style={{
              backgroundImage: "url(" + colibriPointOfSale + ")",
            }}
          />
          <article className="specsFooter">
            <p>
              Atendimento mesa, comanda individual, fast food, delivery, casa
              noturna…
            </p>
          </article>
        </span>
        <span id="spec2" className="specs">
          <div
            className="specsImage"
            style={{
              backgroundImage: "url(" + colibriPedMobile + ")",
            }}
          />
          <article className="specsFooter">
            <p>Solução mobile: Pedido e Pagamento</p>
          </article>
        </span>
        <span id="spec3" className="specs">
          <div
            className="specsImage"
            style={{
              backgroundImage: "url(" + colibriBackOffice + ")",
            }}
          />
          <article className="specsFooter">
            <p>Retaguarda: Controle de estoque e financeiro</p>
          </article>
        </span>
        <span id="spec4" className="specs">
          <div
            className="specsImage"
            style={{
              backgroundImage: "url(" + colibriCloud + ")",
            }}
          />
          <article className="specsFooter">
            <p>Informações na nuvem em tempo real</p>
          </article>
        </span>
      </Container>
      <Container style={{ height: "65vh" }}>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
