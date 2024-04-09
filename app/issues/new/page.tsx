"use client";

import React from "react";
import { Flex, Text, Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <Flex align="center">
        <TextField.Root placeholder="Title" />
      </Flex>
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
