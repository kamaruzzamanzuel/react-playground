import { Button } from "@mui/material";
import DetailItem from "../shared/detail-text-field/DetailsTextField";
import "./ClaimDetails.scss";
import { useEffect, useState } from "react";
import FooterData from "../shared/detail-text-field/DetailsFooterData";
import lodashDebounce from 'lodash/debounce';
import PdfViewer from "../pdf-viewer/PdfViewer";

const ClaimDetails = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const darkTheme = `${!isDark ? "claim-details-light" : "claim-details-dark"} claim-details  side-item-container col-md-6 viewer-height`;

  return (
    <div className="claim-details-main">
      <div className="claim-details-buttons">
        {isDark ? <button onClick={() => setIsDark(false)}>Light</button> :
          <button onClick={() => setIsDark(true)}>Dark</button>}
      </div>
      <div className="row mt-2 details-and-pdf">
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
                label="boolean type"
                value="true"
                renderType="boolean"
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
            <div className={`${isDark ? "notification-dark" : ""} notification-footer-data`}>
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
        <div className="col-md-6 col-xs-12">
          <PdfViewer url="/sample.pdf" viewerHeightClass="viewer-height"/>
        </div>

      </div>
      <div className=" claim-items " >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta voluptates, hic vero natus reiciendis iusto, quidem minus distinctio, fuga quod deserunt veritatis atque excepturi sint numquam velit laudantium. Enim modi ullam qui. Voluptatum, unde consequuntur blanditiis fuga error pariatur! Vitae animi, assumenda magni non, dolores libero porro, ut expedita rem tempore iure vel! Expedita natus, modi mollitia id quam amet voluptate quas vero quaerat vitae atque at voluptatibus nesciunt recusandae iste nostrum tempora quae maxime assumenda corporis aliquam fuga nam. Tenetur, modi. Eius reiciendis expedita mollitia quis error dolorum odio consequatur sapiente harum numquam, magnam deleniti nobis nam rerum repellendus quisquam asperiores eveniet? Magni ab sequi, ad iusto enim, quidem odit nobis quos aspernatur sunt asperiores repellendus eveniet ducimus vero. Impedit alias natus cumque pariatur. Blanditiis at id ex ab rem rerum, odio aperiam libero provident expedita veniam eaque saepe repudiandae illo tempore magni animi placeat sint pariatur corporis fugit, accusantium, atque minus! Ad, quasi debitis commodi ut fugit similique ab. Dolorum, temporibus vitae maiores odit architecto alias vel laudantium delectus officia fugit unde necessitatibus saepe? Est inventore quis, illum, doloremque odio tenetur sunt voluptates iure obcaecati dolor dicta. Incidunt ipsum sunt eligendi odit fuga atque neque aliquam, impedit adipisci?
        </div>


    </div>
  );
};

export default ClaimDetails;