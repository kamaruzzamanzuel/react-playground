import "./DetailsTextField.scss"

export type DetailFieldProps = {
  label?: string | JSX.Element;
  value?: any;
  renderType?: "DATE" | "DATE_TIME" | "MONEY" | "BOOLEAN" | "PERCENTAGE" | "DAY" | "ITEMS" | "CHIP_ITEMS";
  className?: string;
  children?: React.ReactNode;
};

export const formatCurrency = (value?: number, IsWrapNegativeWithBracket = true) => {
  if (value == null)
    return "";

  const nf = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  let formattedValue = nf.format(value);

  if (value < 0 && IsWrapNegativeWithBracket) {
    formattedValue = `(${nf.format(Math.abs(value))})`;
  }

  return formattedValue;
}

const DetailItem = ({
  label,
  value = "--",
  renderType,
  className = "col-md-6 col-xl-4",
  children
}: DetailFieldProps) => {
  let content = null;

  const ItemLabel = () => <>{label}</>;

  if (!renderType) {
    content = ((value ?? "") !== "") ? value : "...";
  } else {
    switch (renderType) {
      case "MONEY":
        content = ((value ?? "") !== "") ? formatCurrency(parseFloat(value.toString())) : "...";
        break;
      case "BOOLEAN":
        content = (value ?? false) ? "Yes" : "No";
        // content = value == null ? "..." : (value === true) ? "Yes" : "No";
        break;
      case "PERCENTAGE":
        content = ((value ?? "") !== "") ? `${value}%` : "...";
        break;
      case "DAY":
        content = ((value ?? "") !== "") ? `${value} ${parseInt(value.toString()) > 1 ? "Days" : "Day"}` : "...";
        break;
      case "ITEMS":
        content =
          ((value as string[]).length > 0)
            ? (value as string[]).map((valueItem, index) => (
              <div key={index}>
                {valueItem.length ? value : "..."}
              </div>
            ))
            : "...";

        break;
      case "CHIP_ITEMS":
        content = ((value as string[]).length > 0)
          ? (value as string[]).map((valueItem, index) => {
            if (valueItem.length > 0) {
              return (
                <div
                  key={index}
                  className="mgr-sm t-mb-1 mt-1 float-left"
                >
                  {/* <Chip className='fs-14 default-font-family' size='small' label={valueItem} style={{ marginBottom: '0px' }} /> */}
                </div>
              );
            } else {
              return "...";
            }
          })
          : "...";

        break;
      default:
        content = (value ?? "") ?? "...";
        break;
    }
  }

  return (
    <div className={` detail-item  ${className}`}>
      <div className="detail-item-label"><ItemLabel /></div>

      <div className="detail-item-value">
        {
          (value !== undefined && !children) &&
          <>
            {content}
          </>
        }
        {
          children &&
          <>
            {children}
          </>
        }
      </div>


    </div>
  );
};

const DetailItemSingleCol = (props: DetailFieldProps) => {

  return <DetailItem
    {
    ...{ ...props, className: props.className ?? "col-12" }
     }
  />

}
export { DetailItem, DetailItemSingleCol };
