import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .titleProducts {
    background: rgb(55, 136, 95);
    width: 100vw;
    color: white;
    height: 27.5vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    font-size: 1.36rem;
    align-items: center;
    justify-content: center;

    svg {
      fill: white;
      stroke: unset;
    }
  }

  .productsContainer {
    width: 100vw;
    height: fit-content;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .product {
      margin: 20px;
      width: 97.5vw;
      height: fit-content;
      display: grid;
      overflow: hidden;

      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);

      .productInfos {
        grid-column: 2 / 4;
        grid-row: 2 / 4;
        padding: 20px;
        font-size: 1.24rem;
        overflow: hidden;

        b {
          color: #54B948;
          font-size: 1.84rem;
          transition: 0.5s ease;
          &:hover {
            text-shadow: 0 0 15px rgb(0, 0, 0, 0.3);
          }
        }

        ul {
          li {
            display: flex;
            align-items: center;
            transition: 0.5s ease;
            cursor: default;

            svg {
              stroke: transparent;
              fill: rgb(55, 136, 95);
            }

            &:hover {
              text-shadow: 0 0 15px rgb(55, 136, 95);
            }
          }
        }
      }

      .productImage {
        display: flex;
        max-width: 500px;
        object-fit: cover;
        overflow: visible;

        grid-column: 1 / 1;
        grid-row: 1 / 4;

        img {
          margin: 50px;
          height: 61vh;
          border-radius: 12.5%;
          object-fit: contain;
          box-shadow: 0 0 25px -5px rgb(0, 0, 0, 0.35);
        }
      }

      .images {
        display: flex;
        align-items: center;
        grid-column: 2 / 4;
        grid-row: 1 / 1;

        button {
          margin: 15px;
          border: 0;
          height: 88px;
          width: 88px;
          background: none;
          cursor: pointer;
          border-radius: 20px;
          overflow: hidden;
          outline: none;

          opacity: 0.6;
          transition: 150ms ease;
          box-shadow: 0 0 15px 1px rgb(55, 136, 95, 0.25);
          
          img {
            width: 100%;
            height: 88px;
            object-fit: cover;
            border-radius: 25%;
          }
        }
        }

      .active {
        opacity: 1 !important;
      }
    }
  }
`;
