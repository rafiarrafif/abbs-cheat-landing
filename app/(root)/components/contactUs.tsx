"use client";

import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";
import { SolarPhoneBold } from "../icons/contact";

const contactUs = () => {
  return (
    <Card className="w-full rounded">
      <CardHeader className="w-full flex justify-center mb-0 mt-2">
        <div>
          <h1 className="text-neutral-950 text-lg font-medium text-center ">
            Tertarik? Dapatkan Sekarang!
          </h1>
          <p className="text-neutral-700 text-center -mt-1 text-sm">
            Kode autentikasi dalam genggamanmu, hubungi sekarang!
          </p>
        </div>
      </CardHeader>
      <CardBody className="flex justify-center -mt-1 mb-2">
        <div className="flex justify-center">
          <Button
            color="success"
            className="w-fit"
            endContent={<SolarPhoneBold className="focus:outline-none" />}
            onPress={() => window.open("https://wa.me/6282136684701", "_blank")}
          >
            Hubungi Kami
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default contactUs;
