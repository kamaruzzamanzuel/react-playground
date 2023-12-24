import { useState } from "react";
import {
  Button,
  Typography
} from "@mui/material";
import {
  DetailItem,
  DetailItemSingleCol
} from "../shared/detail-text-field/DetailsTextField";
import "./ClaimDetails.scss";
import FooterData from "../shared/detail-text-field/DetailsFooterData";
import PdfViewer from "../pdf-viewer/PdfViewer";
import Accordion from "../shared/accordion/Accordion";
import InfoIcon from '@mui/icons-material/Info';
import TabContext from "../shared/tab-contex/TabContext";
import ImageViewer from "../shared/image-viewer/ImageViewer";
import FileViewer from "../shared/file-viewer/FileViewer";


const ClaimDetails = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const darkTheme = `${!isDark ? "claim-details-light" : "claim-details-dark"} claim-details col-6`;
  const allValues = [
    { label: "PDF Viewer", value: "pdf", content: <FileViewer url="/sample.pdf" viewerHeightClass="claim-details" /> },
    {
      label: "Tab-1", value: "tab-1",
      content:<FileViewer url="/image.png" viewerHeightClass="claim-details"/>
    },
    {
      label: "Tab-2", value: "tab-2",
      content: <div className="dummy-component">
        <h3>Next Tab 2</h3>
      </div>
    }
  ]

  return (
    <div className="claim-details-main">
      <div className="d-flex claim-details-buttons ">
        {isDark ? <button onClick={() => setIsDark(false)}>Light</button> :
          <button onClick={() => setIsDark(true)}>Dark</button>}
      </div>
      <div className="mt-2 details-and-pdf row">
        <div className={darkTheme}>
          <div className="details-header">
            <h5 className="text-start">Claim - AA - 123</h5>

            <Button>X</Button>
          </div>

          <div className="details-fields row">
            <div className="col-6">
              <div className="row">
                <DetailItemSingleCol
                  label="Participant"
                  value="participant"
                />
                <DetailItemSingleCol
                  label="Claim no"
                  value="544"
                />
                <DetailItemSingleCol
                  label="Plan"
                  value="9352151 15/10/2023 - 10/11/2023 "
                />
                <DetailItemSingleCol
                  label="Interpreter Required"
                  value="abcd"
                />
                <DetailItemSingleCol
                  label="Language Spoken"
                  value="spanish"
                />
                <DetailItemSingleCol
                  label="percentage"
                  value={58}
                  renderType="PERCENTAGE"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <DetailItemSingleCol
                  label="percentage"
                  value={58}
                  renderType="PERCENTAGE"
                />
                <DetailItemSingleCol
                  label="Currency type"
                  value={58987}
                  renderType="MONEY"
                />
                <DetailItemSingleCol
                  label="boolean type"
                  value="true"
                  renderType="BOOLEAN"
                />
                <DetailItemSingleCol
                  label="Link component"
                >
                  <a href="http://google.com">google</a>
                </DetailItemSingleCol>
                <DetailItemSingleCol
                  label="Value missing"
                />
              </div>
            </div>

          </div>
          <div className={`${isDark ? "line-dark" : "line-light"} details-horizontal-line`}></div>
          <div className="details-footer">
            <div className={`${isDark ? "notification-dark" : ""} notification-footer-data`}>
              <InfoIcon className="infoIcon" />

              Discripancy will be handled automatically
            </div>
            <div className="amount-footer-data">
              <FooterData
                label="Pay Amount"
                value={58987}
                renderType="MONEY"
                isDark={isDark}
              />
              <FooterData
                label="Invoice Amount"
                value={15000}
                renderType="MONEY"
                isDark={isDark}
              />
            </div>
          </div>
        </div>
        <div className=" col-6">
          <TabContext allValues={allValues} />
        </div>
      </div>
      <div className=" row mt-3 acoordions-main-div " >
        <div className="col-12">
          <Accordion title="Personal Information" isDark={isDark} >
            <Typography>
              <div className="row accordion-details-div">
                <DetailItem
                  label="First name"
                  value="Zuel"
                />
                <DetailItem
                  label="Preferred name"
                  value="Zuel"
                />
                <DetailItem
                  label="Primary disability"
                  value="cerebral Palsy "
                />
                <DetailItem
                  label="Country birth"
                  value="France"
                />
                <DetailItem
                  label="Interpreter type"
                  value="Oral"
                />
                <DetailItem
                  label="Middle name"
                  value="Kamaruzzaman"
                />
                <DetailItem
                  label="Gender"
                  value="Male"
                />
                <DetailItem
                  label="ATSI"
                  value="No "
                />
                <DetailItem
                  label="Language spoken"
                  value="French"
                />
                <DetailItem
                  label="Last name"
                  value="SMK "
                />
                <DetailItem
                  label="Pronoun choice"
                  value="His"
                />
                <DetailItem
                  label="CALD*"
                  value={true}
                  renderType="BOOLEAN"
                />
                <DetailItem
                  label="Interpreter requited"
                  value={true}
                  renderType="BOOLEAN"
                />
                <DetailItem
                  label="Payment"
                  value="Successful"
                />
              </div>
            </Typography>
          </Accordion>
          <Accordion title="Contact Details" isDark={isDark}>
            <Typography>
              <div className="row accordion-details-div">

                <DetailItem
                  label="Address"
                  value="48 Hewlrtt Circuit"
                />
                <DetailItem
                  label="State"
                  value="NSW"
                />
                <DetailItem
                  label="SJburb"
                  value="Balmain"
                />
                <DetailItem
                  label="Postcode"
                  value="2615"
                />
                <DetailItem
                  label="Phone"
                  value="02 9999 999"
                />
                <DetailItem
                  label="Mobile No"
                  value="0434987654"
                />
                <DetailItem
                  label="Email"
                  value="zuel@gmail.com"
                />

                <DetailItem
                  label="Preferred communicat"
                  value="Phone"
                />


              </div>
            </Typography>
          </Accordion>
          <Accordion title="Account Information" isDark={isDark}>
            <Typography>
              <div className="row accordion-details-div">

                <DetailItem
                  label="Account name"
                  value="Kamaruzaman Zuel"
                />

                <DetailItem
                  label="Account No"
                  value="435122254"
                />

                <DetailItem
                  label="GSB"
                  value="312-458"
                />

              </div>

            </Typography>
          </Accordion>
          <Accordion title="Settings" isDark={isDark}>
            <Typography>
              <div className="row accordion-details-div">

                <DetailItem
                  label="Email Notification"
                  value={false}
                  renderType="BOOLEAN"
                />

                <DetailItem
                  label="Claim Approvar"
                  value={true}
                  renderType="BOOLEAN"
                />

                <DetailItem
                  label="Receive Plan Report"
                  value={false}
                  renderType="BOOLEAN"
                />
                <DetailItem
                  label="Auto monthly invoice"
                  value={true}
                  renderType="BOOLEAN"
                />
                <DetailItem
                  label="Claim require approval"
                  value={true}
                  renderType="BOOLEAN"
                />
                <DetailItem
                  label="User Name"
                  value="user453"
                />

              </div>

            </Typography>
          </Accordion>
        </div>
      </div>

    </div>
  );
};

export default ClaimDetails;