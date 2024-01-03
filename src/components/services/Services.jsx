import "./services.css";
import { BiCheck } from "react-icons/bi";
import DropCat from "./DropCat";
import { useContext } from "react";
import { ServicesContext } from "../../helper/Context";

const Services = () => {
  const { categoriesUse } = useContext(ServicesContext);

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      {/*Place the menu on top of the services container*/}
      <div className="wrapper_drop_service_container">
        <DropCat />
        <div className="container services__container">
          {categoriesUse.map((e, index) => (
            <article className="service" key={index}>
              <div className="service__head">
                <h3>{e}</h3>
              </div>

              <ul className="service__list">
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>{`${e} description one or anything`}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>{`${e} description two or anything`}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>{`${e} description three or anything`}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>{`${e} description four or anything`}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>{`${e} description five or anything`}</p>
                </li>
                <li>
                  <BiCheck className="service__list-icon" />
                  <p>{`${e} description six or anything`}</p>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
      {/*Place the menu on top of the services container*/}
    </section>
  );
};

export default Services;
