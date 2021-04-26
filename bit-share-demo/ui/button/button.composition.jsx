import React from "react";
import { Button } from "./button";

// sets the Component preview in gallery view
export const BasicButton = () => {
  return <Button>click me</Button>;
};

export const SecondaryButton = () => {
  return <Button variant="secondary">click me</Button>;
};

export const DisabledButton = () => {
  return <Button disabled={true}>click me</Button>;
};