import { formatCurrency } from "./DetailsTextField";
import "./DetailsFooterData.scss"

type footerDataProps = {
  label?: string | JSX.Element;
  value?: any;
  renderType?: "MONEY";
  isDark?: boolean;
};
const FooterData = (
  {
    label,
    value,
    renderType,
    isDark
  }: footerDataProps) => {
  let content = null;

  const TotalLabel = () => <>{label}</>;

  if (!renderType) {
    content = ((value ?? "") !== "") ? value : "...";
  } else {
    switch (renderType) {
      case "MONEY":
        content = ((value ?? "") !== "") ? formatCurrency(parseFloat(value.toString())) : "...";
        break;

      default:
        content = (value ?? "") ?? "...";
        break;
    }
  }
  return (
    <div className="footer-data">
      <div className={`${!isDark?"data-label-light":""}`}><TotalLabel /></div>

      <div className="data-value">
        {
          value !== undefined &&
          <>
            {content}
          </>
        }
      </div>


    </div>
  );
};

export default FooterData;