import React from "react";
import { Link } from "react-router-dom";

const LinksList = ({ links }) => {
  if (!links.length) {
    return <h2>Сслок пока нету</h2>;
  }
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Ориганальная</th>
          <th>Сокращенная</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {links.map((item, index) => {
          return (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>
                <Link to={`/detail/${item._id}`}>Перейти</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LinksList;
