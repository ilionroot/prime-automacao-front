import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

import image11 from '../../assets/images/products/1/colibri_pdv.webp';
import image12 from '../../assets/images/products/1/1.webp';
import image13 from '../../assets/images/products/1/2.webp';
import image14 from '../../assets/images/products/1/3.webp';
import image15 from '../../assets/images/products/1/4.webp';
import image16 from '../../assets/images/products/1/5.webp';

import image21 from '../../assets/images/products/2/colibri_mobile.webp';
import image22 from '../../assets/images/products/2/1.webp';
import image23 from '../../assets/images/products/2/2.webp';

import image31 from '../../assets/images/products/3/colibri_office.webp';
import image32 from '../../assets/images/products/3/1.webp';
import image33 from '../../assets/images/products/3/2.webp';
import image34 from '../../assets/images/products/3/3.webp';

import image41 from '../../assets/images/products/4/colibri_cloud.webp';
import image42 from '../../assets/images/products/4/1.webp';
import image43 from '../../assets/images/products/4/2.webp';
import image44 from '../../assets/images/products/4/3.webp';
import image45 from '../../assets/images/products/4/4.webp';
import image46 from '../../assets/images/products/4/5.webp';

const images = [
  [image11, image12, image13, image14, image15, image16],
  [image21, image22, image23],
  [image31, image32, image33, image34],
  [image41, image42, image43, image44, image45, image46],
];

const Products = () => {
  const [activeImage1, setActiveImage1] = useState(0);
  const [activeImage2, setActiveImage2] = useState(0);
  const [activeImage3, setActiveImage3] = useState(0);
  const [activeImage4, setActiveImage4] = useState(0);
  // const [activeImage5, setActiveImage5] = useState(0);

  useEffect(() => {
  }, []);

  function setIndex(pos, index) {
    switch (pos) {
      case 0:
        return setActiveImage1(index);
      case 1:
        return setActiveImage2(index);
      case 2:
        return setActiveImage3(index);
      case 3:
        return setActiveImage4(index);
      // case 4:
      //   return setActiveImage5(index);
      default:
        return setActiveImage1(index);
    }
  }

  return (
    <>
      <Helmet>
        <title>Produtos | Prime Automação</title>
      </Helmet>
      <Container>
        <div className="titleProducts">
          <FiArrowDown />
          <h1>Produtos</h1>
        </div>
        <div className="productsContainer">
          <div className="product">
            <div className="productImage">
              <img src={images[0][activeImage1]} alt={images[0][activeImage1]} />
            </div>
            <div className="images">
                {images[0].map((image, index) => {
                  return (
                    <button
                      key={image}
                      type="button"
                      className={activeImage1 === index ? 'active' : ''}
                      onClick={() => {
                        setIndex(0, index);
                      }}
                    >
                      <img src={image} alt={activeImage1} />
                    </button>
                  );
                })}
              </div>
            <div className="productInfos">
              <b>COLIBRI PDV</b><br /><br />
              <p>
                O Colibri é a solução que vai facilitar o dia a dia do seu restaurante.
                Aumente o giro das mesas, forneça um atendimento mais rápido, lance pedidos na própria mesa,
                melhore o controle operacional e fidelize seu cliente.
                Com o Colibri você controla todas as operações de vendas do seu restaurante.
              </p><br />
              <ul>
                <li>
                  <FiArrowRight />
                  Consumo das mesas
                </li>
                <li>
                  <FiArrowRight />
                  Operação de delivery (tele entrega)
                </li>
                <li>
                  <FiArrowRight />
                  Cartões de consumação (fichas)
                </li>
                <li>
                  <FiArrowRight />
                  Operação de balcão (fast food)
                </li>
              </ul>
            </div>
          </div>
          <div className="product">
            <div className="productImage">
              <img src={images[1][activeImage2]} alt={images[1][activeImage2]} />
            </div>
            <div className="images">
                {images[1].map((image, index) => {
                  return (
                    <button
                      key={image}
                      type="button"
                      className={activeImage2 === index ? 'active' : ''}
                      onClick={() => {
                        setIndex(1, index);
                      }}
                    >
                      <img src={image} alt={activeImage2} />
                    </button>
                  );
                })}
              </div>
            <div className="productInfos">
              <b>COLIBRI MOBILE</b><br /><br />
              <p>
                O Colibri foi o primeiro software de restaurante a oferecer comanda
                eletrônica no Brasil e agora estamos revolucionando o mercado mais uma
                vez. Com o Colibri Ped+ além de lançar pedidos remotamente, você fecha
                a conta, apresenta a conferência ao cliente e recebe o pagamento via
                cartão, direto na mesa em uma única operação.
              </p><br />
              <ul>
                <li>
                  <FiArrowRight />
                  Os garçons passam a dar muito mais atenção aos clientes
                </li>
                <li>
                  <FiArrowRight />
                  Elimina a barreira entre o garçom e o seu cliente
                </li>
                <li>
                  <FiArrowRight />
                  Pedidos muito mais rápido e personalizado
                </li>
                <li>
                  <FiArrowRight />
                  Melhora a qualidade do atendimento
                </li>
                <li>
                  <FiArrowRight />
                  Elimina erros nos pedidos
                </li>
              </ul>
            </div>
          </div>
          <div className="product">
            <div className="productImage">
              <img src={images[2][activeImage3]} alt={images[2][activeImage3]} />
            </div>
            <div className="images">
                {images[2].map((image, index) => {
                  return (
                    <button
                      key={image}
                      type="button"
                      className={activeImage3 === index ? 'active' : ''}
                      onClick={() => {
                        setIndex(2, index);
                      }}
                    >
                      <img src={image} alt={activeImage3} />
                    </button>
                  );
                })}
              </div>
            <div className="productInfos">
              <b>COLIBRI BACK OFFICE</b><br /><br />
              <p>
                No complexo ambiente econômico brasileiro, você só terá sucesso se tiver
                absoluto controle de todas as operações do seu restaurante. A NCR oferece
                a tecnologia para que você trabalhe de forma eficiente, controle seus
                custos e atraia cada vez mais clientes. Impulsionando suas vendas e
                aumentando seus lucros!
              </p><br />
              <ul>
                <li>
                  <FiArrowRight />
                  Mapeamento automático de materiais
                </li>
                <li>
                  <FiArrowRight />
                  Lançamento de NF
                </li>
                <li>
                  <FiArrowRight />
                  Importação de DANFE diretamente do site da SEFAZ
                </li>
                <li>
                  <FiArrowRight />
                  Validador de arquivo XML
                </li>
                <li>
                  <FiArrowRight />
                  Manutenção de despesas e contas a pagar
                </li>
                <li>
                  <FiArrowRight />
                  Consulta de itens, materiais e fornecedores
                </li>
                <li>
                  <FiArrowRight />
                  Relatórios financeiros personalizados
                </li>
              </ul>
            </div>
          </div>
          <div className="product">
            <div className="productImage">
              <img src={images[3][activeImage4]} alt={images[3][activeImage4]} />
            </div>
            <div className="images">
                {images[3].map((image, index) => {
                  return (
                    <button
                      key={image}
                      type="button"
                      className={activeImage4 === index ? 'active' : ''}
                      onClick={() => {
                        setIndex(3, index);
                      }}
                    >
                      <img src={image} alt={activeImage4} />
                    </button>
                  );
                })}
              </div>
            <div className="productInfos">
              <b>COLIBRI CLOUD</b><br /><br />
              <p>
                O Colibri Cloud é o sistema de relatórios analíticos e indicadores
                via web, totalmente integrado ao Colibri PDV ou ao seu ERP, que fornece
                informações precisas e em tempo real para a tomada de decisões. 
              </p><br />
              <ul>
                <li>
                  <FiArrowRight />
                  Relatórios analíticos
                </li>
                <li>
                  <FiArrowRight />
                  Indicadores via WEB
                </li>
                <li>
                  <FiArrowRight />
                  Totalmente integrado ao Colibri PDV
                </li>
                <li>
                  <FiArrowRight />
                  Fornece informações precisas e em tempo real
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Products;