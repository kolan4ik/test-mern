import React from "react";

const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Ссылка</h2>
      <p>
        Ваша ссылка:
        <a href={link.to} target="_blank" rel="noopener noreferrer ">
          {link.to}
        </a>
      </p>
      <p>
        Откуда:
        <a href={link.from} target="_blank" rel="noopener noreferrer ">
          {link.from}
        </a>
      </p>
      <p>
        Клики:
        <b>{link.clicks}</b>
      </p>
      <p>
        Дата создания: <b>{new Date(link.date).toLocaleDateString()}</b>
      </p>
    </>
  );
};

export default LinkCard;
