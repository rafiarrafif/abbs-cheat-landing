"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react";
import React from "react";
import { SolarDownloadBold } from "../icons/download";

const downloadCheat = () => {
  return (
    <Card className="w-[300px] max-sm:w-full rounded">
      <CardHeader>
        <h1 className="text-neutral-950">Cheat Pro V1.33.0</h1>
      </CardHeader>
      <Divider />
      <CardBody className="py-0 pt-3">
        <div>
          <Button
            color="success"
            className="w-fit"
            endContent={<SolarDownloadBold className="focus:outline-none" />}
            onPress={() => {
              const baseUrl = window.location.origin;
              window.open(
                `${baseUrl}/Al-Abidin_Cheat_Pro_V1.33.0.exe`,
                "_blank"
              );
            }}
          >
            Download
          </Button>
        </div>
      </CardBody>
      <CardFooter>
        <span className="text-sm text-neutral-700 italic">
          Untuk sistem operasi Windows 10/11
        </span>
      </CardFooter>
    </Card>
  );
};

export default downloadCheat;
