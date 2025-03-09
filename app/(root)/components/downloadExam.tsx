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
    <Card className="w-[300px] max-sm:w-full rounded">
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
            onPress={() => {
              const baseUrl = window.location.origin;
              window.open(
                `${baseUrl}/Browser%20Ujian%20Setup%201.0.0%20%28Windows%29.exe`,
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

export default downloadExam;
