import { ReactNode, ComponentProps, HTMLAttributeAnchorTarget } from 'react';
import { Button, ButtonOwnProps, ButtonProps, ButtonTypeMap, ExtendButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
// import defaultCss from "./RouterButton.scss";
import "./RouterButton.scss";
import classnames from "classnames";
import clsx from "clsx";

type TypeProps = {
  children: ReactNode;
  className?: string;
  to?: string;
  target?: HTMLAttributeAnchorTarget;
} & Omit<ButtonProps, "children" | "to" | "href" | "target" | "className">;

const RouterButton = ({
  children,
  to,
  target = "_self",
  className,
  ...rest
}: TypeProps) => {
  // console.log({ aaa, bbb });

  const defaultButtonProps: ButtonOwnProps = {
    variant: "contained",
  };

  const additionButtonProps = {
    ...defaultButtonProps,
    // className: classnames(defaultCss.buttonRoot, className, "aa", "aa")
    className: clsx("button-root", className)
  }

  if (to != null) {
    if (target === "_self") {
      return <LinkTagButton
        to={to}
        {...additionButtonProps}
        {...rest as ExtendButtonBase<ButtonTypeMap<{}, typeof Link>>}
      >
        {children}
      </LinkTagButton>;
    } else {
      return <ATagButton
        to={to}
        target={target}
        {...additionButtonProps}
        {...rest as ExtendButtonBase<ButtonTypeMap<{}, "a">>}
      >
        {children}
      </ATagButton>;
    }
  } else {
    return <Button
      {...additionButtonProps}
      {...rest}
    >
      {children}
    </Button>;

  }
};

type TypeLinkTagButtonProps = {
  children: ReactNode;
  to: string;
  state?: Record<string, any>;
} & Omit<ExtendButtonBase<ButtonTypeMap<{}, typeof Link>>, "children" | "component" | "to" | "href" | "target" | "state">;

const LinkTagButton = ({
  children,
  to,
  state,
  ...rest
}: TypeLinkTagButtonProps) => {
  return <Button
    component={Link}
    to={to}
    state={state}
    {...rest}
  >
    {children}
  </Button>
};

type TypeATagButtonProps = {
  children: ReactNode;
  to: string;
  target: HTMLAttributeAnchorTarget;
} & Omit<ComponentProps<ExtendButtonBase<ButtonTypeMap<{}, "a">>>, "children" | "component" | "href" | "target">;

const ATagButton = ({
  children,
  to,
  target,
  ...rest
}: TypeATagButtonProps) => {
  return <Button
    href={to}
    target={target}
    {...rest}
  >
    {children}
  </Button>
};

export default RouterButton