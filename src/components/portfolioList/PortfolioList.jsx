import "./portfolioList.scss";

export default function PortfolioList({title, id, setSelected, active}) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      id="portfolioList"
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
