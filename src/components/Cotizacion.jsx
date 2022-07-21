import React from "react";
import styled from "@emotion/styled";

const Cotizar = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;

const Cotizacion = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <Cotizar>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen crypto"
      />

      <div>
        <Precio>
          The Price is: <span>{PRICE}</span>
        </Precio>
        <Texto>
          The Highday price of day is: <span>{HIGHDAY}</span>{" "}
        </Texto>
        <Texto>
          The Lowday price of dayis: <span>{LOWDAY}</span>{" "}
        </Texto>
        <Texto>
          The variation of the last 24 hours is: <span>{CHANGEPCT24HOUR}</span>{" "}
        </Texto>
        <Texto>
          The Lastupdate is: <span>{LASTUPDATE}</span>{" "}
        </Texto>
      </div>
    </Cotizar>
  );
};

export default Cotizacion;
