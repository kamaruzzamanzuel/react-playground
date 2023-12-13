import { ExpandMore } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary, Accordion as DefaultAccordion } from '@mui/material';
import React, { useState } from 'react';
import "./Acoordion.scss";

type TypeProps = {
  title: string | React.ReactNode;
  children?: string | React.ReactNode | React.ReactNode[];
  expandIcon?: React.ReactNode;
  iconClassName?: string;
  isExpandIconFloatLeft?: boolean;
  isExpanded?: boolean;
  disabled?: boolean;
  isDark?: boolean
};

const Accordion = ({
  title,
  expandIcon,
  children,
  iconClassName,
  isExpanded,
  isExpandIconFloatLeft = false,
  disabled,
  isDark
}: TypeProps) => {

  const [isOpen, setIsOpen] = useState(isExpanded);

  return (
    <DefaultAccordion
      className={` custom-accordion ${isDark ? "accordion-common-dark" : "accordion-common-light"} `}
      disabled={disabled}
      expanded={isOpen}
    >
      <AccordionSummary
        // className="npd nmgt nmgb justify-content-start d-inline-flex"
        className={`accordion-title ${isExpandIconFloatLeft ? "justify-content-start d-inline-flex" : ""}`}
        expandIcon={expandIcon ?? <ExpandMore className={iconClassName ?? ""} />}
        onClick={() => setIsOpen(!isOpen)}

      >
        {title}
      </AccordionSummary>
      <AccordionDetails
      >
        {children}
      </AccordionDetails>
    </DefaultAccordion>
  );
};

export default Accordion;