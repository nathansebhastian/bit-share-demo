import React from "react";
import { Card } from "./card";

import { Button } from "@nsebhastian/bit-share-demo.ui.button";

export const BasicCard = () => {
  return (
    <Card>
      <p>hello from Card</p>
    </Card>
  );
};

export const SecondaryCard = () => {
  return (
    <Card variant="secondary">
      <p>hello from Secondary Card</p>
    </Card>
  );
};

export const CardWithButton = () => {
  return (
    <Card>
      <p>hello from Card</p>
      <Button>Click me</Button>
    </Card>
  );
}