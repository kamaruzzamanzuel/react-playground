import { Button } from "@mui/material";
import DetailItem from "../shared/detail-text-field/DetailsTextField";
import "./ClaimDetails.scss";
import { useState } from "react";
import FooterData from "../shared/detail-text-field/DetailsFooterData";

const ClaimDetails = () => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const darkTheme = `${!isDark ? "claim-details-light" : "claim-details-dark"} claim-details `
  return (
    <div className="claim-details-main">
      <div className="claim-details-buttons">
        {isDark ? <button onClick={() => setIsDark(false)}>Light</button> :
          <button onClick={() => setIsDark(true)}>Dark</button>}
      </div>
      <div className={darkTheme}>
        <div className="details-header">
          <h5 className="text-start">Claim - AA - 123</h5>

          <Button>X</Button>
        </div>

        <div className="details-fields row">
          <div className="col-xl-6">
            <DetailItem
              label="Participant "
              value="participant "
            />
            <DetailItem
              label="Claim no"
              value="544"
            />
            <DetailItem
              label="Plan"
              value="9352151 15/10/2023 - 10/11/2023 "
            />
            <DetailItem
              label="Interpreter Required "
              value="abcd"
            />
            <DetailItem
              label="Language Spoken"
              value="spanish"
            />
            <DetailItem
              label="percentage"
              value={58}
              renderType="percentage"
            />
            <DetailItem
              label="Currency type"
              value={9965}
              renderType="money"
            />
            <DetailItem
              label="boolean type"
              value="true"
              renderType="boolean"
            />
            <DetailItem
              label="Link component"
            >
              <a href="http://google.com">google</a>
            </DetailItem>
          </div>
          <div className="col-xl-6">
            <DetailItem
              label="percentage"
              value={58}
              renderType="percentage"
            />
            <DetailItem
              label="Currency type"
              value={58987}
              renderType="money"
            />
            <DetailItem
              label="boolean type"
              value="true"
              renderType="boolean"
            />
            <DetailItem
              label="Link component"
            >
              <a href="http://google.com">google</a>
            </DetailItem>
            <DetailItem
              label="Value missing"
            />
          </div>
        </div>
        <div className={`${isDark ? "line-dark" : "line-light"} details-horizontal-line`}></div>
        <div className="details-footer">
          <div className={`${isDark ? "notification-dark":"" } notification-footer-data`}>
            Discripancy will be handled automatically
          </div>
          <div className="amount-footer-data">
            <FooterData
              label="Pay Amount"
              value={58987}
              renderType="money"
              isDark={isDark}
            />
            <FooterData
              label="Invoice Amount"
              value={15000}
              renderType="money"
              isDark={isDark}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ClaimDetails;