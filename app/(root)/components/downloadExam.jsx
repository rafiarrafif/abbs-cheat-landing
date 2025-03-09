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

const downloadExam = () => {
  return (
    <Card className="max-w-[320px] rounded">
      <CardHeader>
        <h1 className="text-neutral-950">Browser Ujian ABBS V1.0.0</h1>
      </CardHeader>
      <Divider />
      <CardBody className="py-0 pt-3">
        <div>
          <Button
            color="success"
            className="w-fit"
            endContent={<SolarDownloadBold className="focus:outline-none" />}
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

export default downloadExam;
